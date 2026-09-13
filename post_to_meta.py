#!/usr/bin/env python3
"""Post today's scheduled Grove card to the Facebook page and Instagram feed.

Reads out/manifest.json for whichever deck came up today (rune, deity or plant)
and posts that one card. Captions are per deck.

Environment variables (GitHub Actions secrets):
  META_ACCESS_TOKEN, FB_PAGE_ID, IG_USER_ID, IMAGE_BASE_URL
"""
import json, os, sys, time, urllib.parse, urllib.request
from datetime import datetime
from zoneinfo import ZoneInfo

GRAPH = "https://graph.facebook.com/v21.0"
TZ = ZoneInfo("America/Los_Angeles")
HERE = os.path.dirname(os.path.abspath(__file__))

CAPTIONS = {
    "rune": ("Rune of the Day · {name}\n\n"
             "Drawn at the Grove Hearth. The full turning of the Elder Futhark "
             "lives at theblackthorngrove.life\n\n"
             "#TheBlackthornGrove #ElderFuthark #RuneOfTheDay"),
    "deity": ("Deity of the Day · {name}\n\n"
              "Drawn at the Grove Hearth. Honor the old ones; walk your own road. "
              "theblackthorngrove.life\n\n"
              "#TheBlackthornGrove #NorseMythology #CelticMythology #DeityOfTheDay"),
    "plant": ("Plant of the Day · {name}\n\n"
              "From the Blackthorn Apothecary. Know the plant before you ask it "
              "for anything. theblackthorngrove.life\n\n"
              "#TheBlackthornGrove #Herbalism #PlantAllies #GreenWitch"),
}


def api(path, params, method="POST"):
    params = {**params, "access_token": os.environ["META_ACCESS_TOKEN"]}
    data = urllib.parse.urlencode(params).encode()
    url = f"{GRAPH}/{path}"
    if method == "GET":
        req = urllib.request.Request(url + "?" + data.decode(), method="GET")
    else:
        req = urllib.request.Request(url, data=data, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            return json.loads(r.read())
    except urllib.error.HTTPError as e:
        raise SystemExit(f"Graph API error on {path}: {e.read().decode()}")


def wait_for_url(url, tries=10, delay=15):
    """Raw GitHub URLs can lag a few seconds after push; poll until live."""
    for _ in range(tries):
        try:
            req = urllib.request.Request(url, method="HEAD")
            with urllib.request.urlopen(req, timeout=30) as r:
                if r.status == 200:
                    return
        except Exception:
            pass
        time.sleep(delay)
    raise SystemExit(f"Image never became reachable: {url}")


def post_facebook(image_url, caption):
    r = api(f"{os.environ['FB_PAGE_ID']}/photos", {"url": image_url, "caption": caption})
    print("FB post id:", r.get("post_id") or r.get("id"))


def post_instagram(image_url, caption):
    ig = os.environ["IG_USER_ID"]
    c = api(f"{ig}/media", {"image_url": image_url, "caption": caption})
    creation_id = c["id"]
    for _ in range(12):
        s = api(f"{creation_id}", {"fields": "status_code"}, method="GET")
        if s.get("status_code") == "FINISHED":
            break
        if s.get("status_code") == "ERROR":
            raise SystemExit(f"IG container failed: {s}")
        time.sleep(10)
    r = api(f"{ig}/media_publish", {"creation_id": creation_id})
    print("IG media id:", r.get("id"))


def main():
    today = datetime.now(TZ).date().isoformat()
    manifest_path = os.path.join(HERE, "out", "manifest.json")
    if not os.path.exists(manifest_path):
        print("No manifest. Queue is empty, nothing to post.")
        return 0
    manifest = json.load(open(manifest_path))
    todays = manifest.get(today)
    if not todays:
        print(f"No card generated for {today}, nothing to post.")
        return 0
    base = os.environ["IMAGE_BASE_URL"].rstrip("/")

    for deck, name in todays.items():
        url = f"{base}/{today}_{deck}.png"
        caption = CAPTIONS[deck].format(name=name)
        wait_for_url(url)
        post_facebook(url, caption)
        post_instagram(url, caption)
        print(f"{deck} card posted: {name}")


if __name__ == "__main__":
    sys.exit(main())
