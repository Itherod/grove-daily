#!/usr/bin/env python3
"""Post today's rune and deity cards to the Facebook page and Instagram feed.

Required environment variables (set as GitHub Actions secrets):
  META_ACCESS_TOKEN   long-lived page/system-user token with pages_manage_posts,
                      pages_read_engagement, instagram_basic, instagram_content_publish
  FB_PAGE_ID          numeric id of The Blackthorn Grove Facebook page
  IG_USER_ID          numeric id of the linked Instagram business account
  IMAGE_BASE_URL      public base URL where out/ images are reachable, e.g.
                      https://raw.githubusercontent.com/USER/REPO/main/out

Instagram's API only accepts a public image URL, which is why the workflow
commits the PNGs to the repo first and points here at the raw URL.
"""
import json, os, sys, time, urllib.parse, urllib.request
from datetime import datetime
from zoneinfo import ZoneInfo

GRAPH = "https://graph.facebook.com/v21.0"
TZ = ZoneInfo("America/Los_Angeles")
HERE = os.path.dirname(os.path.abspath(__file__))


def api(path, params, method="POST"):
    params = {**params, "access_token": os.environ["META_ACCESS_TOKEN"]}
    data = urllib.parse.urlencode(params).encode()
    url = f"{GRAPH}/{path}"
    req = urllib.request.Request(url, data=data if method == "POST" else None,
                                 method=method)
    if method == "GET":
        req = urllib.request.Request(url + "?" + data.decode(), method="GET")
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            return json.loads(r.read())
    except urllib.error.HTTPError as e:
        body = e.read().decode()
        raise SystemExit(f"Graph API error on {path}: {body}")


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
    r = api(f"{os.environ['FB_PAGE_ID']}/photos",
            {"url": image_url, "caption": caption})
    print("FB post id:", r.get("post_id") or r.get("id"))


def post_instagram(image_url, caption):
    ig = os.environ["IG_USER_ID"]
    c = api(f"{ig}/media", {"image_url": image_url, "caption": caption})
    creation_id = c["id"]
    # Wait for the container to finish processing
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
    manifest = json.load(open(os.path.join(HERE, "out", "manifest.json")))
    names = manifest[today]
    base = os.environ["IMAGE_BASE_URL"].rstrip("/")

    captions = {
        "rune": (f"Rune of the Day · {names['rune']}\n\n"
                 "Drawn at the Grove Hearth. The full turning of the Elder Futhark "
                 "lives at theblackthorngrove.life\n\n"
                 "#TheBlackthornGrove #ElderFuthark #RuneOfTheDay"),
        "deity": (f"Deity of the Day · {names['deity']}\n\n"
                  "Drawn at the Grove Hearth. Honor the old ones; walk your own road. "
                  "theblackthorngrove.life\n\n"
                  "#TheBlackthornGrove #NorseMythology #DeityOfTheDay"),
    }

    for mode in ("rune", "deity"):
        url = f"{base}/{today}_{mode}.png"
        wait_for_url(url)
        post_facebook(url, captions[mode])
        post_instagram(url, captions[mode])
        print(f"{mode} card posted: {names[mode]}")


if __name__ == "__main__":
    sys.exit(main())
