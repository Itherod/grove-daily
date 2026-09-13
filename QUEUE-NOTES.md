# Grove daily post, queue edition

One card a day, in queue order, until every card has been shown. Then it stops.
No repeats.

## Files

- `queue.json` — the running order. Plain list, safe to hand-edit or reorder.
- `posted.json` — what has already gone out. Seeded with the 24 runes and 22
  Norse deities that posted between 7 Aug and 13 Sep 2026, so none repeat.
- `data.js` — all three decks: 24 runes, 32 deities (22 Norse + 10 Celtic),
  47 plants.
- `build_queue.py` — rebuild the queue after adding new material. Only unshown
  entries are added, and they go on the end.
- `build_plant_deck.py` — regenerates `plant_deck.json` from an apothecary
  export. Needs the export file; run it when the apothecary gains new herbs.

## Daily behaviour

1. `generate_cards.py` takes the first queue entry not in `posted.json`,
   renders it, records it.
2. Card and updated `posted.json` are committed.
3. `post_to_meta.py` posts that one card to the FB page and IG feed.
4. When nothing is left, both scripts exit quietly and the run goes green
   without posting.

## Checking what is coming

    python3 generate_cards.py --peek 20

## Adding new material later

Add the entries to `data.js`, then:

    python3 build_queue.py

Held back from the public feed by default: Cannabis, Tobacco (Aztec Type),
under Meta's restricted goods policy. Edit `EXCLUDE` in `build_queue.py` to
change that.
