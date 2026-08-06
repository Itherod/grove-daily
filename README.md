# Grove Daily Post

Auto-posts the Grove Hearth Rune of the Day and Deity of the Day cards to Facebook and Instagram every morning. The draw uses the exact same date seed and content as the Hearth embed on theblackthorngrove.life, so the posts always match what members see on the site.

Everything here is free: GitHub, GitHub Actions, and the Meta Graph API.

## What's in this folder

- `data.js` — the rune and deity arrays, lifted verbatim from the Hearth embed
- `embed_css.js` — the embed's styles, verbatim
- `card_single.html` — renders one card (rune or deity) sized for social
- `generate_cards.py` — screenshots the cards as 1080x1350 PNGs into `out/`
- `post_to_meta.py` — posts both cards to the FB page and IG feed
- `.github/workflows/daily-post.yml` — runs the whole thing daily at 8 AM Pacific
- `grove-hearth-daily.html` — the original embed, kept as the source of truth

## Part 1: GitHub setup (10 minutes)

1. Create a free account at github.com if you don't have one
2. Click the + in the top right, New repository. Name it `grove-daily`, set it to **Public** (Instagram needs public image URLs), and create it
3. Upload every file in this folder to the repo. On the repo page: Add file, Upload files, drag the whole folder contents in, Commit. Make sure the `.github/workflows/daily-post.yml` file keeps its folder path
4. Go to the repo's Settings, then Secrets and variables, then Actions. You'll add three secrets here after Part 2

## Part 2: Meta setup (30-45 minutes, one time)

Do this before adding the GitHub secrets. You need: your Blackthorn Grove Facebook page, and your Instagram switched to a Business or Creator account and linked to that page (Instagram app: Settings, Business tools, then link the page).

### Create the app

1. Go to developers.facebook.com, log in with your regular Facebook account
2. My Apps, Create App. Choose **Business** as the type. Name it anything, "Grove Daily" works
3. Once created, you're on the app dashboard

### Get the IDs

4. FB Page ID: on your Facebook page, About, Page transparency (or facebook.com/YOURPAGE/about), copy the numeric Page ID
5. IG User ID: easiest through the token tool in the next step

### Get a long-lived token

6. In the app dashboard, open **Graph API Explorer** (under Tools)
7. In the right panel: select your app, then under Permissions add: `pages_show_list`, `pages_read_engagement`, `pages_manage_posts`, `instagram_basic`, `instagram_content_publish`
8. Click Generate Access Token, log in, and grant access to your page and Instagram account
9. In the Explorer, run `GET me/accounts` — copy your page's `id` (that's FB_PAGE_ID) and its `access_token` (that's a page token)
10. Run `GET {PAGE_ID}?fields=instagram_business_account` — the id returned is IG_USER_ID
11. The token from step 9 expires. To make it long-lived: open Tools, Access Token Debugger, paste the token, click "Extend Access Token". A page token extended this way generally does not expire. Verify in the debugger: Expires should say Never. If it shows a date, use the extended token anyway and set a reminder to refresh it before then, or set up a System User token in Meta Business Suite (Business settings, Users, System users) for a permanent one

### Add the secrets to GitHub

12. In the repo: Settings, Secrets and variables, Actions, New repository secret. Add three:
    - `META_ACCESS_TOKEN` — the long-lived page token
    - `FB_PAGE_ID` — the page's numeric id
    - `IG_USER_ID` — the Instagram account's numeric id

## Part 3: Test it

1. In the repo, open the **Actions** tab, click "Grove daily post", then "Run workflow"
2. Watch the run. Green check means both cards generated and posted. Check your FB page and IG feed
3. If it fails on the posting step, the log prints the exact Graph API error, bring it back to Claude and we'll sort it

After a successful test, you're done. It posts every morning at 8 AM Pacific on its own.

## Changing things

- **Post time:** edit the cron line in `.github/workflows/daily-post.yml`. It's in UTC: `0 15` is 8 AM PDT, `0 16` is 8 AM PST
- **Captions:** edit the `captions` block in `post_to_meta.py`
- **Content:** when the Hearth embed changes (Celtic deities module, for example), replace `grove-hearth-daily.html` here and re-extract, or just hand both files to Claude
- **Batch mode still works:** `python3 generate_cards.py --month 2026-09` renders a whole month of cards locally if you ever want them for anything else

## If posts stop

Nine times out of ten it's the token. Open Actions, look at the failed run, and if the error mentions the access token, generate a fresh one (Part 2, steps 6-11) and update the `META_ACCESS_TOKEN` secret. Nothing else needs touching.
