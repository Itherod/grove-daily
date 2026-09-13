#!/usr/bin/env python3
"""Render the next card in the Grove posting queue.

Reads queue.json, skips anything already in posted.json, renders the next one
as a 1080x1350 PNG, and records it. When the queue is empty it exits quietly
with status 0 and writes no manifest, so the workflow simply stops posting.

Usage:
  python3 generate_cards.py                  # next card in the queue
  python3 generate_cards.py --peek 10        # show what's coming, render nothing
  python3 generate_cards.py --date 2026-09-20
"""
import argparse, json, os, sys
from datetime import datetime
from zoneinfo import ZoneInfo
from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "out")
TZ = "America/Los_Angeles"


def load(path, default):
    p = os.path.join(HERE, path)
    return json.load(open(p, encoding="utf-8")) if os.path.exists(p) else default


def deck_position(deck_name, entry_name):
    """Index of an entry inside its deck, for the renderer's idx parameter."""
    import subprocess
    out = subprocess.run(
        ["node", "-e",
         'const s=require("fs").readFileSync("data.js","utf8");'
         'const m=new Function(s+"; return {rune:RUNES,deity:DEITIES,plant:PLANTS};")();'
         f'console.log(m["{deck_name}"].findIndex(x=>x.name==={json.dumps(entry_name)}));'],
        capture_output=True, text=True, cwd=HERE)
    return int(out.stdout.strip())


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--date", help="YYYY-MM-DD, defaults to today")
    ap.add_argument("--peek", type=int, metavar="N", help="list the next N cards, render nothing")
    args = ap.parse_args()

    queue = load("queue.json", [])
    posted = load("posted.json", {})
    shown = set(posted.get("rune", []) + posted.get("deity", []) + posted.get("plant", []))
    remaining = [q for q in queue if q["name"] not in shown]

    if args.peek:
        print(f"{len(remaining)} cards remaining")
        for q in remaining[:args.peek]:
            print(f"  {q['deck']:>5}  {q['name']}")
        return 0

    if not remaining:
        print("Queue empty. Every card has been shown. Nothing to post.")
        manifest_path = os.path.join(OUT, "manifest.json")
        if os.path.exists(manifest_path):
            os.remove(manifest_path)
        return 0

    card = remaining[0]
    deck, name = card["deck"], card["name"]
    idx = deck_position(deck, name)
    if idx < 0:
        raise SystemExit(f"'{name}' is not in the {deck} deck. Rebuild the queue.")

    iso = args.date or datetime.now(ZoneInfo(TZ)).date().isoformat()
    os.makedirs(OUT, exist_ok=True)
    template = "file://" + os.path.join(HERE, "card_single.html")

    with sync_playwright() as p:
        browser = p.chromium.launch()
        ctx = browser.new_context(viewport={"width": 540, "height": 675},
                                  device_scale_factor=2, timezone_id=TZ)
        page = ctx.new_page()
        page.goto(f"{template}?mode={deck}&date={iso}&idx={idx}")
        page.wait_for_timeout(300)
        page.screenshot(path=os.path.join(OUT, f"{iso}_{deck}.png"))
        rendered = json.loads(page.title())["name"]
        browser.close()

    if rendered != name:
        raise SystemExit(f"Rendered '{rendered}' but queue asked for '{name}'. Stopping.")

    posted.setdefault(deck, []).append(name)
    json.dump(posted, open(os.path.join(HERE, "posted.json"), "w"),
              indent=1, ensure_ascii=False)
    json.dump({iso: {deck: name}}, open(os.path.join(OUT, "manifest.json"), "w"),
              indent=2, ensure_ascii=False)

    print(f"{iso}  {deck}  {name}   ({len(remaining)-1} cards left in queue)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
