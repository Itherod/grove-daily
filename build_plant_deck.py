#!/usr/bin/env python3
"""Parse the Blackthorn Apothecary backup into a card-ready plant deck.

Reads the materia entries and splits each one-line description into the
fields the card needs. Prints anything it can't parse so nothing is invented.
"""
import json, re, sys

SRC = "/mnt/project/blackthorn-apothecary-backup__10_.json"

PLANETS = {"Sun", "Moon", "Mars", "Venus", "Mercury", "Jupiter", "Saturn",
           "Mars + Saturn", "Sun + Mars", "Venus + Moon", "Moon + Venus",
           "Mercury + Venus", "Jupiter + Sun", "Saturn + Mercury"}
ELEMENTS = ("Earth", "Air", "Fire", "Water", "Spirit")
RUNES = ("Fehu", "Uruz", "Thurisaz", "Ansuz", "Raidho", "Kenaz", "Gebo", "Wunjo",
         "Hagalaz", "Naudhiz", "Nauthiz", "Isa", "Jera", "Eihwaz", "Eiwaz",
         "Perthro", "Algiz", "Sowilo", "Tiwaz", "Berkano", "Ehwaz", "Mannaz",
         "Laguz", "Ingwaz", "Dagaz", "Othala")
SEASONS = ("Spring", "Summer", "Autumn", "Fall", "Winter", "season", "Season",
           "year-round", "Year-round", "All seasons")
MOON_WORDS = ("Moon", "Waxing", "Waning", "Gibbous", "Crescent", "Quarter",
              "New", "Full", "Dark")


def classify(tokens):
    """Sort the ' · ' separated tokens of a description line into fields."""
    out = {"folk": [], "element": "", "gender": "", "planet": "", "hz": "",
           "runes": "", "deities": "", "moon": "", "season": "", "uses": ""}
    # locate anchors
    idx_el = idx_gender = idx_hz = idx_runes = idx_moon = idx_season = None
    for i, t in enumerate(tokens):
        ts = t.strip()
        if idx_el is None and any(ts.startswith(e) or ts == e for e in ELEMENTS) \
           and all(w.strip() in ELEMENTS for w in ts.split("+")):
            idx_el = i
        elif ts in ("Masculine", "Feminine", "Masculine + Feminine", "Neutral"):
            idx_gender = i
        elif "Hz" in ts:
            idx_hz = i
        elif idx_runes is None and any(r in ts for r in RUNES):
            idx_runes = i
        elif (idx_hz is not None and i > idx_hz and idx_moon is None
              and any(w in ts for w in MOON_WORDS)
              and not any(s in ts for s in SEASONS)):
            idx_moon = i
        elif any(s in ts for s in SEASONS):
            if idx_season is None:
                idx_season = i

    if idx_el is not None:
        out["element"] = tokens[idx_el].strip()
        out["folk"] = [t.strip() for t in tokens[:idx_el]]
    if idx_gender is not None:
        out["gender"] = tokens[idx_gender].strip()
    if idx_hz is not None:
        out["hz"] = tokens[idx_hz].strip()
        out["planet"] = tokens[idx_hz - 1].strip() if idx_hz - 1 != idx_gender else ""
    if idx_runes is not None:
        out["runes"] = tokens[idx_runes].strip()
        # deities sit between runes and moon
        end = idx_moon if idx_moon else (idx_season if idx_season else len(tokens))
        deity_toks = [t.strip() for t in tokens[idx_runes + 1:end]]
        out["deities"] = " · ".join(deity_toks)
    if idx_moon is not None:
        out["moon"] = tokens[idx_moon].strip()
    if idx_season is not None:
        out["season"] = tokens[idx_season].strip()
    out["uses"] = tokens[-1].strip()
    return out


def split_sacred(sf):
    """Sacred function starts with a quoted line, then the descriptive body."""
    sf = (sf or "").strip()
    m = re.match(r'^[""\"](.+?)[""\"]\s*(.*)$', sf, re.S)
    if m:
        quote = m.group(1).strip()
        body = m.group(2).strip()
    else:
        quote, body = "", sf
    body = re.sub(r'\s*\n\s*', ' ', body).strip()
    return quote, body


def short_caution(text):
    """First sentence or two of the contraindication note, trimmed for a card."""
    t = re.sub(r'\s+', ' ', (text or "")).strip()
    if not t:
        return ""
    sentences = re.split(r'(?<=[.!])\s+', t)
    out = sentences[0]
    if len(out) < 70 and len(sentences) > 1:
        out += " " + sentences[1]
    return out.strip()


def main():
    data = json.load(open(SRC))
    items = data if isinstance(data, list) else list(data.values())[0]
    mats = [i for i in items if i.get("category") == "materia"]

    deck, problems = [], []
    for m in mats:
        name = m["name"].strip()
        tokens = [t for t in m.get("description", "").split("·")]
        f = classify(tokens)
        quote, body = split_sacred(m.get("sacredFunction"))
        if not body:
            ing = (m.get("ingredients") or [{}])[0]
            body = ing.get("energy", "")
        entry = {
            "name": name,
            "folk": " · ".join([x for x in f["folk"] if x]),
            "sub": " · ".join([x for x in (f["element"], f["gender"], f["planet"], f["hz"]) if x]),
            "quote": quote,
            "body": re.sub(r'\s+', ' ', body).strip(),
            "runes": f["runes"],
            "deities": f["deities"],
            "when": " · ".join([x for x in (f["moon"], f["season"]) if x]),
            "uses": f["uses"],
            "caution": short_caution(m.get("contraindications")),
        }
        missing = [k for k in ("folk", "sub", "quote", "body", "uses") if not entry[k]]
        if missing:
            problems.append((name, missing))
        deck.append(entry)

    deck.sort(key=lambda e: e["name"])
    with open("/home/claude/grove-daily/plant_deck.json", "w") as fh:
        json.dump(deck, fh, indent=1, ensure_ascii=False)

    print(f"parsed {len(deck)} plants")
    if problems:
        print("\nincomplete entries (field left blank, nothing invented):")
        for n, miss in problems:
            print(f"  {n}: missing {', '.join(miss)}")
    else:
        print("all entries parsed complete")


if __name__ == "__main__":
    sys.exit(main())
