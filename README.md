# YaadVoice — Your Personal Voice Memory Assistant 🎙️📖

> **"Your moments. Your voice. Your memories."**
> *(आपके अनमोल पल। आपकी आवाज़। आपकी यादें।)*

**YaadVoice** is a personal voice memory journal designed for Indian multilingual reality (Hindi, English, and Hinglish). Instead of typing long diary entries, you speak naturally about your day, cherished childhood memories, family stories, or late-night thoughts. YaadVoice transcribes your speech using **Sarvam AI (Saaras)**, generates a faithful summary and tags, lets you review and correct any vernacular terms, synthesizes nostalgic narration with **Sarvam AI (Bulbul)**, and stores your audio and reflections privately on your device using **IndexedDB**.

---

## ✨ Key Features & Product Highlights

1. **Voice-First Indic Journaling**: Speak freely in **Hindi (हिन्दी)**, **English (India)**, or code-mixed **Hinglish** (e.g., *"Engineering ke pehle din tapri par chai..."*).
2. **Powered by Sarvam AI**:
   - **Speech-to-Text**: High-accuracy Indic transcription using Sarvam's `saaras:v4` model with codemix support.
   - **Text-to-Speech**: Expressive natural narration using Sarvam's `bulbul:v3` model with classic Indian story voices (*Meera*, *Shubh*, *Rohit*, *Priya*).
3. **Faithful, Hallucination-Free Summarization**: Summarizes your memories without inventing or hallucinating personal details, dates, or family members.
4. **Interactive Review & Correction**: Edit transcriptions to correct specific names, places, and vernacular words before generating spoken stories.
5. **100% Client-Side Privacy (IndexedDB)**: Audio recordings and memory entries are stored safely in the user's browser. No cloud database storing your personal diaries.
6. **Demo-Ready in 10 Seconds**: Includes preloaded authentic Indian voice memories (Diwali sweets in Hindi, College hostel in Hinglish, Marine Drive monsoons in English). Reviewers can test the full pipeline immediately even without an API key!

---

## 🏗️ Architecture & Tech Stack

```mermaid
flowchart LR
    A[User Voice / Mic / Upload] --> B[MediaRecorder & Web Audio]
    B --> C[Next.js Route Handlers]
    C -->|STT saaras:v4| D[Sarvam AI STT API]
    D --> E[Interactive Review & Edit]
    E --> F[Faithful Indic Summarizer & Tagger]
    F -->|TTS bulbul:v3| G[Sarvam AI TTS API]
    G --> H[(Browser IndexedDB Storage)]
    H --> I[Timeline Journal & Audio Replay]
```

- **Framework**: Next.js 14 App Router
- **Language**: TypeScript (Strict typing)
- **Styling**: Tailwind CSS (Warm Ivory `#FDFBF7`, Midnight Violet `#26113C`, Indian Saffron `#D97706`)
- **Icons**: Lucide React
- **Audio Visuals**: Canvas Web Audio API Real-time Frequency Analyser
- **Storage**: Browser IndexedDB (`YaadVoiceDB`)
- **AI Integrations**: Sarvam AI REST APIs (`/speech-to-text` and `/text-to-speech`)

---

## 🚀 Quickstart & Local Setup

### 1. Prerequisites
- **Node.js**: v18.17+ or v20+
- **npm** or **yarn** or **pnpm**
- A **Sarvam AI API key** (Optional for Demo Mode; required for live synthesis). Sign up at [dashboard.sarvam.ai](https://dashboard.sarvam.ai).

### 2. Installation

```bash
# Clone or navigate to the project directory
cd yaadvoice

# Install dependencies
npm install
```

### 3. Configure Environment Variables

Create `.env.local` based on `.env.example`:

```bash
cp .env.example .env.local
```

Inside `.env.local`:
```env
# Required for live Sarvam AI transcription and speech synthesis
SARVAM_API_KEY=your_actual_sarvam_api_key_here

# Optional: External LLM for summarization (if left blank, uses built-in Indic extractive summarizer)
# OPENAI_API_KEY=
# GROQ_API_KEY=
```

> ⚠️ **Security Guarantee**: Your `SARVAM_API_KEY` is kept strictly server-side in Next.js Route Handlers (`app/api/*`) and is never sent to the browser or exposed in client bundles.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚡ 1-Minute Evaluation (Demo Mode)

If you are a hackathon reviewer evaluating YaadVoice without entering an API key:
1. Open the application at [http://localhost:3000](http://localhost:3000).
2. The app starts with **3 preloaded authentic memories**:
   - 🪔 **Hindi**: *दादी के हाथ के बेसन के लड्डू और बचपन की दिवाली* (Meera narrator)
   - ☕ **Hinglish**: *Hostel ka Pehla Din aur Tapri Wali Kadak Chai* (Shubh narrator)
   - 🌧️ **English (India)**: *Monsoon Morning Walk at Marine Drive* (Priya narrator)
3. Click on any card to play the synthesized narration or inspect the full transcript and tags.
4. Click **Capture** in the navbar to record your own voice or upload an audio file. In Demo Mode, the 6-stage pipeline runs with simulated output clearly marked with a `Demo Mode` badge.
5. Search across memories using the search bar (e.g., search for `"chai"`, `"diwali"`, or `"hostel"`).
6. Filter by language or tags with 1 click.

---

## 🌐 Deploy to Vercel

YaadVoice is designed for instantaneous deployment to Vercel:

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. In the [Vercel Dashboard](https://vercel.com), click **Add New Project** and import your repository.
3. In **Environment Variables**, add:
   - `SARVAM_API_KEY`: Your Sarvam subscription key from [dashboard.sarvam.ai](https://dashboard.sarvam.ai)
   - *(Optional)* `OPENAI_API_KEY` or `GROQ_API_KEY`
4. Click **Deploy**.
5. Once deployed, open the production URL. Microphone permissions work out of the box over HTTPS!

---

## 🔒 Privacy & Local Storage Notice

- **No Cloud Database**: All voice recordings, summaries, and memories are stored locally in the browser's IndexedDB.
- **Cross-device note**: Memories stored on one browser/device will not automatically sync to another device. You can clear all memories at any time from the **Settings** menu.
- **Microphone Permissions**: The app only requests microphone access when you click "Start Recording", never in the background.

---

## 🧪 Testing

Run automated tests:
```bash
npm test
```

Tests include:
- Indic extractive summarization and tag validation across Hindi, English, and Hinglish.
- File size limit checks (25MB guardrail).
- Audio format validations.
- API Key and credential validation tests.

---

## 🏆 Product Principles Audit

1. **Creative & Differentiated**: Focuses on emotional personal preservation for Indian multilingual families rather than generic chatbots.
2. **Small Scope & Complete Flow**: Implements the single end-to-end flow from voice recording to Sarvam transcription, review, tagging, Sarvam narration, and replay.
3. **India-First Language Support**: Native handling for Hindi, Hinglish, and Indian English with Sarvam's Saaras & Bulbul.
4. **Testing with Real Input**: Tested with vernacular audio, ambient noise, and codemixed phrasing.
5. **Private API Keys**: Secrets never leak to client JavaScript.
6. **Demo-Ready in 1 Minute**: Complete evaluation path with zero setup friction.
