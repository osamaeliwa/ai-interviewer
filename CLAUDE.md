# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the App

This is a static frontend app — no build step required. Open `index.html` directly in a browser, or serve it with any static file server:

```bash
npx serve .
# or
python -m http.server 8080
```

## Architecture

Single-page application with three screens managed entirely in vanilla JS/CSS/HTML — no frameworks or dependencies.

**Screen flow:** `intro` → `interview` → `results`  
Screen transitions are handled by `showScreen(name)` in `app.js`, which toggles the `.active` class.

**Interview loop:**  
`startInterview()` → `askNextQuestion(prompt)` → `callGemini(userMessage)` → renders question via `renderInput()` → user submits via `submitAnswer()` → loops until `isComplete: true` → `finishInterview()`

**Gemini integration (`callGemini`):**  
Maintains a running `state.conversationHistory` array passed to the Gemini API on every turn. The system prompt in `buildSystemPrompt()` controls interview language, question rules, and JSON output format. The API always returns structured JSON with fields: `question`, `inputType`, `options`, `isFollowUp`, `isComplete`, `questionNumber`.

**State object** (`state` in `app.js`) is the single source of truth:
- `questionIndex` / `followUpCount` — tracks position in interview
- `conversationHistory` — full Gemini message history
- `interviewData` — structured results: `[{ question, answer, followUps: [{question, answer}] }]`

**i18n:** All UI strings live in the `i18n` object (English + Arabic). Applied via `data-i18n` attributes and `applyTranslations()`. Arabic switches the document to `dir="rtl"` and uses Noto Sans Arabic font. The Gemini system prompt also switches language/dialect.

**Theming:** CSS custom properties under `:root` (light) and `[data-theme="dark"]`. Persisted to `localStorage`.

## External Dependencies

- **Gemini API** (`gemini-2.5-flash`) — hardcoded key in `app.js:118`. Used for dynamic question generation.
- **Google Apps Script** — `google-apps-script.js` is deployed separately as a Google Sheets web app. The URL is hardcoded in `app.js:123`. To redeploy: paste `google-apps-script.js` into Extensions > Apps Script in your Google Sheet, then deploy as a web app (Execute as: Me, Access: Anyone).
- **Google Fonts** — Inter (EN) + Noto Sans Arabic (AR), loaded via CDN in `index.html`.

## Input Types

`renderInput(inputType, options)` supports four modes dynamically injected into `#inputContainer`:
- `text` — textarea
- `yesno` — two buttons (translated Yes/No)
- `choice` — list of option buttons
- `scale` — 1–10 buttons
