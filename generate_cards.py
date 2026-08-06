#!/usr/bin/env python3
"""Render the Grove Hearth daily rune and deity cards as social-ready PNGs.

Usage:
  python3 generate_cards.py                     # today's two cards (Pacific time)
  python3 generate_cards.py --date 2026-08-10   # a specific day
  python3 generate_cards.py --month 2026-09     # every day of a month (batch)

Output: out/YYYY-MM-DD_rune.png and out/YYYY-MM-DD_deity.png at 1080x1350.
The draw uses the exact same date-seed math as the site embed, evaluated in
America/Los_Angeles so posts always match what Grove members see.
"""
import argparse, calendar, json, os, sys
from datetime import date, datetime
from zoneinfo import ZoneInfo
from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "out")
TZ = "America/Los_Angeles"


def dates_for(args):
    if args.month:
        y, m = map(int, args.month.split("-"))
        return [date(y, m, d) for d in range(1, calendar.monthrange(y, m)[1] + 1)]
    if args.date:
        return [date.fromisoformat(args.date)]
    return [datetime.now(ZoneInfo(TZ)).date()]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--date", help="YYYY-MM-DD")
    ap.add_argument("--month", help="YYYY-MM (renders every day)")
    args = ap.parse_args()

    days = dates_for(args)
    os.makedirs(OUT, exist_ok=True)
    template = "file://" + os.path.join(HERE, "card_single.html")
    manifest = {}

    with sync_playwright() as p:
        browser = p.chromium.launch()
        ctx = browser.new_context(
            viewport={"width": 540, "height": 675},
            device_scale_factor=2,
            timezone_id=TZ,
        )
        page = ctx.new_page()
        for d in days:
            iso = d.isoformat()
            entry = {}
            for mode in ("rune", "deity"):
                page.goto(f"{template}?mode={mode}&date={iso}")
                page.wait_for_timeout(250)
                path = os.path.join(OUT, f"{iso}_{mode}.png")
                page.screenshot(path=path)
                info = json.loads(page.title())
                entry[mode] = info["name"]
                print(f"{iso} {mode:>5}: {info['name']:<10} scale={info['scale']:.2f} card={info['w']}x{info['h']}")
            manifest[iso] = entry
        browser.close()

    with open(os.path.join(OUT, "manifest.json"), "w") as f:
        json.dump(manifest, f, indent=2)
    print(f"\n{len(days)*2} cards written to {OUT}/")


if __name__ == "__main__":
    sys.exit(main())
