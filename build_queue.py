#!/usr/bin/env python3
"""Build the Grove posting queue: every card that has not yet been shown, in
order, one per day, until the queue is empty. No repeats, ever.

Re-run this any time you add new material (new herbs, tree entries, a new
deck) and it will append only the unshown ones to the end of the queue.
"""
import json, os, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))

# Held back from the public feed. Meta's restricted goods policy covers
# cannabis and tobacco; delete a line here to let one through.
EXCLUDE = {"Cannabis", "Tobacco (Aztec Type)"}

# One deity card every Nth slot, so they spread across the plant run
DEITY_EVERY = 5


def load_decks():
    out = subprocess.run(
        ["node", "-e",
         'const s=require("fs").readFileSync("data.js","utf8");'
         'const m=new Function(s+"; return {D:DEITIES.map(x=>x.name),P:PLANTS.map(x=>x.name)};")();'
         'console.log(JSON.stringify(m));'],
        capture_output=True, text=True, cwd=HERE)
    return json.loads(out.stdout)


def main():
    decks = load_decks()
    posted_path = os.path.join(HERE, "posted.json")
    posted = json.load(open(posted_path)) if os.path.exists(posted_path) else {}
    shown = set(posted.get("rune", []) + posted.get("deity", []) + posted.get("plant", []))

    plants = [p for p in decks["P"] if p not in shown and p not in EXCLUDE]
    deities = [d for d in decks["D"] if d not in shown and d not in EXCLUDE]

    queue, di = [], 0
    for i, p in enumerate(plants):
        if i and i % DEITY_EVERY == 0 and di < len(deities):
            queue.append({"deck": "deity", "name": deities[di]}); di += 1
        queue.append({"deck": "plant", "name": p})
    for d in deities[di:]:
        queue.append({"deck": "deity", "name": d})

    json.dump(queue, open(os.path.join(HERE, "queue.json"), "w"),
              indent=1, ensure_ascii=False)

    print(f"already shown : {len(shown)} cards")
    print(f"queue built   : {len(queue)} cards, about {len(queue)//7} weeks at one a day")
    print(f"  plants  : {sum(1 for q in queue if q['deck']=='plant')}")
    print(f"  deities : {sum(1 for q in queue if q['deck']=='deity')}")
    if EXCLUDE:
        print(f"  held back: {', '.join(sorted(EXCLUDE))}")
    print("\nfirst ten:")
    for q in queue[:10]:
        print(f"  {q['deck']:>5}  {q['name']}")


if __name__ == "__main__":
    sys.exit(main())
