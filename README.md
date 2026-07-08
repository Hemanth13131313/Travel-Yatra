# Travel Yatra 🌍✈️

Welcome to **Travel Yatra**, a modern, cinematic, and immersive travel platform designed to help users discover extraordinary destinations, curate bespoke expeditions, and read captivating traveler stories.

![Travel Yatra Hero](https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80)

## 📖 Overview
Travel Yatra is an end-to-end web application that provides users with a seamless UI/UX to explore global destinations. It categorizes travel by mood (Mountains, Beaches, Nature, Culture, Adventure), features curated expeditions, and includes a built-in AI guide interface ("Terra Guide") to help users plan their bespoke journeys.

## ✨ Features
* **Cinematic Landing Page:** A visually stunning homepage featuring dynamic scroll reveals, high-resolution imagery, and smooth animations.
* **Dynamic Routing:** Beautifully crafted dynamic pages for Destinations (`/explore/[slug]`), Expeditions (`/expeditions/[slug]`), and Traveler Stories (`/stories/[slug]`).
* **Explore By Mood:** Filter your travel cravings based on how you feel.
* **Modern UI Elements:** Glassmorphism, tailored color palettes, subtle micro-animations, and custom fonts.
* **Contact & Inquiry:** A fully styled contact page to connect with exploration specialists.

## 🛠️ Tech Stack
* **Frontend:** [Next.js 16 (App Router)](https://nextjs.org/)
* **Language:** TypeScript
* **Styling:** Vanilla CSS (CSS Modules for scoped styles)
* **Animations:** Custom CSS animations and Scroll Reveal utility

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hemanth13131313/Travel-Yatra.git
   cd Travel-Yatra
   ```

2. **Navigate to the frontend**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open the App**
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure
```text
Travel-Yatra/
├── frontend/
│   ├── public/              # Static assets (images, icons)
│   ├── src/
│   │   ├── app/             # Next.js App Router pages (explore, expeditions, stories, contact)
│   │   ├── components/      # Reusable React components (Navbar, Footer, ScrollReveal)
│   │   ├── data/            # Static data structures (siteData.ts)
│   │   └── globals.css      # Global design tokens and root styles
│   ├── next.config.ts       # Next.js configuration
│   └── package.json         # Frontend dependencies
└── backend/                 # Backend APIs and controllers
```

## 🎨 Design System
The UI utilizes a curated color palette emphasizing natural and earthly tones:
- **Primary:** Forest Green (`#1E3A2F`)
- **Accent:** Terracotta (`#C5A059`)
- **Background:** Soft Sand (`#F4F1EA`)
- **Surface:** Warm White (`#FAFAFA`)
- **Typography:** `Inter` and `Outfit` via Google Fonts.

---
*Built for the modern explorer.* 
