# Premii & Her Idiot — Infinite Love Story 💖

A single‑page, animated love website celebrating a long‑distance story. It features a magical background, floating hearts, an ever‑growing love counter, delightful message generator, and a password‑protected entry page.

## 🌟 Features

- Elegant gradient background with twinkling and shooting stars
- Floating hearts and cute click‑sparkle particles
- Love Journey Counter: months, days, hours, minutes, seconds since your start date
- Three message generators: for Premii, from the “idiot”, and from the AI assistant
- Playful card hover animations and glowing titles
- Password‑protected entry page with:
  - Hint text (our start of love)
  - Show/Hide password eye button
  - Beautiful custom popup on wrong password
- Mobile‑friendly responsive layout

## 📁 Project Structure

- `index.html` — Password gate page
- `3months.html` — Main love story page

## ▶️ How to Run Locally

1. Open `index.html` directly in a modern browser (Chrome, Edge, Firefox, etc.).
   - Or use VS Code + Live Server extension to serve the folder.
2. Enter the password to continue to `3months.html`.

> Note: Client‑side password gates are for fun/novelty only—they don’t provide real security. See “Security note” below.

## ⚙️ Customization

### Password and hint

- File: `index.html`
- Function: `checkPassword()`
- Default password: `17-06-2025`
- To change:
  - Update the string in `if (input === '17-06-2025')`.
  - Update the hint text near the bottom of the form.

### Start date for the counter

- File: `3months.html`
- Function: `updateLoveCounter()`
- Default start date: `2025-06-17T00:00:00`
- To change: replace the `startDate` value with your date/time in ISO format.

### Nicknames and messages

- File: `3months.html`
- Arrays: `nicknames`, `premiiMessages`, `idiotMessages`, `aiMessages`
- Add, remove, or edit items as you like.

### Custom cursor (optional tweak)

- Both pages use an inline SVG cursor with a heart emoji.
- If you notice offset or compatibility issues, switch to a percent‑encoded SVG and add hotspot coordinates, for example:

```css
cursor: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Ctext y='18' font-size='18'%3E%F0%9F%92%96%3C/text%3E%3C/svg%3E")
    8 8, auto;
```

### Visual style

- The design uses Poppins, Dancing Script, Great Vibes fonts from Google Fonts.
- Colors and gradients can be edited directly in the `<style>` blocks of each HTML.

## 🚀 Deployment Tips

- You can host these two files on any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.).
- Remove any CDN or host‑injected scripts (like Cloudflare challenge snippets) from source if you plan to run locally—those only work on their hosted domains.

## 🔐 Security note

The password gate is implemented entirely on the client (JavaScript). Anyone could view the source and find the password. For real protection, use server‑side authentication or host‑provided password protection.

## 🧪 Quick sanity checks

## 📜 License

This project is private and proprietary. All rights reserved.

License summary:

- Personal, non-transferable, non-commercial private use only
- No redistribution, publication, or public hosting
- No modification or derivative works
- See `LICENSE` for full terms
  This project is licensed under the MIT License. See `LICENSE` for details.
