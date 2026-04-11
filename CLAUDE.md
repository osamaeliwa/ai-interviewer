# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the App

This is a static frontend app — no build step required. Open `index.html` directly in a browser, or serve it with any static file server:

```bash
npx serve .
# or
python -m http.server 8080
```

## File Structure

The project is a **single self-contained HTML file** (`index.html`) with all CSS inlined in a `<style>` tag and all JS inlined in a `<script>` tag. The only external resources are Google Fonts (CDN) and the separate `google-apps-script.js` (deployed independently to Google Apps Script).

- `index.html` — the entire frontend app (HTML + CSS + JS)
- `google-apps-script.js` — Google Sheets web app backend (deployed separately)

The old `styles.css` and `app.js` files are superseded by the inline versions in `index.html`.

## Architecture

Single-page application with three screens managed entirely in vanilla JS/CSS/HTML — no frameworks or dependencies.

**Screen flow:** `intro` → `interview` → `results`  
Screen transitions are handled by `showScreen(name)` in the inline script, which fades out the current screen and fades in the next (250ms fadeOut, 200ms delay before showing next screen).

**Interview loop:**  
`startInterview()` → `askNextQuestion(prompt)` → `callGemini(userMessage)` → renders question via `renderInput()` → user submits via `submitAnswer()` → loops until `isComplete: true` → `finishInterview()`

**Gemini integration (`callGemini`):**  
Maintains a running `state.conversationHistory` array passed to the Gemini API on every turn. The system prompt in `buildSystemPrompt()` controls interview language, question rules, and JSON output format. The API always returns structured JSON with fields: `question`, `inputType`, `options`, `isFollowUp`, `isComplete`, `questionNumber`.

**State object** (`state`) is the single source of truth:
- `questionIndex` / `followUpCount` — tracks position in interview
- `conversationHistory` — full Gemini message history
- `interviewData` — structured results: `[{ question, answer, followUps: [{question, answer}] }]`

**i18n:** All UI strings live in the `i18n` object (English + Arabic). Applied via `data-i18n` attributes and `applyTranslations()`. Arabic switches the document to `dir="rtl"` and uses Noto Sans Arabic font. The Gemini system prompt also switches language/dialect.

**Theming:** CSS custom properties under `:root` (light) and `[data-theme="dark"]`. Persisted to `localStorage`.

## Features

- **Interview History** — saved to `localStorage` key `ai-interview-history` (max 20 entries). Displayed on the intro screen as collapsible cards. Saved automatically when `finishInterview()` is called.
- **Download as Text** — results screen has a "Download as Text" button that exports a plain-text transcript alongside the existing "Export as JSON" button.
- **Skeleton loader** — the typing indicator uses an animated shimmer skeleton instead of bouncing dots.
- **Smooth screen transitions** — screens fade out before the next one fades in.

## External Dependencies

- **Gemini API** (`gemini-2.0-flash`) — hardcoded key in `index.html`. Used for dynamic question generation.
- **Google Apps Script** — `google-apps-script.js` is deployed separately as a Google Sheets web app. The URL is hardcoded in `index.html`. To redeploy: paste `google-apps-script.js` into Extensions > Apps Script in your Google Sheet, then deploy as a web app (Execute as: Me, Access: Anyone).
- **Google Fonts** — Inter (EN) + Noto Sans Arabic (AR), loaded via CDN in `index.html`.

## Input Types

`renderInput(inputType, options)` supports four modes dynamically injected into `#inputContainer`:
- `text` — textarea
- `yesno` — two buttons (translated Yes/No)
- `choice` — list of option buttons
- `scale` — 1–10 buttons

## localStorage Keys

- `ai-interview-theme` — `'light'` or `'dark'`
- `ai-interview-lang` — `'en'` or `'ar'`
- `ai-interview-history` — JSON array of up to 20 past interview entries
