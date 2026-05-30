# 🤖 Joke Teller

A fun web app where a robot tells you jokes out loud! Click the button, and a voice reads a randomly fetched joke straight to you.

![Joke Teller Preview](./robot.gif)

---

## 🚀 Live Demo

> Open `index.html` in your browser — no build step required.

---

## ✨ Features

- Fetches a random joke from **JokeAPI** (safe — NSFW, religious, political, racist, sexist, and explicit content are all filtered out)
- Converts the joke to speech using the **VoiceRSS Text-to-Speech API**
- Plays the audio directly in the browser
- Button is disabled while the joke is playing to prevent overlapping requests
- Responsive design — works on mobile and desktop

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure |
| CSS3 | Styling & layout |
| Vanilla JavaScript (ES6+) | Logic & API calls |
| [JokeAPI v2](https://v2.jokeapi.dev/) | Random joke source |
| [VoiceRSS](https://www.voicerss.org/) | Text-to-speech conversion |

---

## 📁 Project Structure

```
joke-teller/
├── index.html      # Main HTML page
├── style.css       # Styles and responsive layout
├── script.js       # Core logic — fetches jokes and triggers TTS
├── voice.js        # VoiceRSS JavaScript SDK
└── robot.gif       # Animated robot background
```

---

## ⚙️ Setup & Usage

### 1. Clone the repository

```bash
git clone https://github.com/rajromiopaul/joke-teller.git
cd joke-teller
```

### 2. Get a VoiceRSS API key

1. Go to [voicerss.org](https://www.voicerss.org/)
2. Click **Get API Key** in the left nav
3. Create a free account and activate it
4. Copy your API key

### 3. Add your API key

Open `script.js` and replace the key value in the `tellMe` function:

```js
function tellMe(joke) {
    VoiceRSS.speech({
        key: 'YOUR_API_KEY_HERE',  // <-- paste your key here
        src: joke,
        hl: 'en-us',
        ...
    });
}
```

### 4. Open in browser

```bash
open index.html
# or just double-click the file
```

---

## 🔌 APIs Used

### JokeAPI
- **Endpoint:** `https://v2.jokeapi.dev/joke/Any`
- Returns either a single-part joke (`joke`) or a two-part joke (`setup` + `delivery`)
- Blacklisted flags: `nsfw`, `religious`, `political`, `racist`, `sexist`, `explicit`

### VoiceRSS Text-to-Speech
- **Endpoint:** `https://api.voicerss.org/`
- Voice: `en-us`, format `44khz_16bit_stereo`, codec `mp3`
- Returns a base64-encoded audio string played via an `<audio>` element

---

## 📸 How It Works

1. User clicks **"Tell Me A Joke"**
2. `getJoke()` fetches a random joke from JokeAPI
3. The joke text is passed to `tellMe()`, which calls the VoiceRSS API
4. VoiceRSS returns an audio URL set on the `<audio>` element, which auto-plays
5. The button re-enables once playback ends

---

## 📝 License

This project is open source and available for personal and educational use.
