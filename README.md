# BK Digital Day booth

Tablet prototype for the Bank of Kigali Digital Day booth: a carousel of services on the home screen, and guided tours of the BK app inside a phone.

- `index.html` is the whole prototype in one file, which works offline too. Vercel serves this file.
- `source/` holds the editable source. Edit `source/src.html`, then from inside `source/` run `python3 build.py` (needs Pillow) to rebuild `index.html`.

Every push to `main` deploys to the same Vercel link.
