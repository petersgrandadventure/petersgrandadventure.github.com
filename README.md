# Peter's Grand Adventure 🌟

> *Bringing Love, Connection, and Storytelling to the world through the magical application of technology.*

A lifelogging website featuring travel clips, tips & tricks, creative projects, interactive games, and community building — all wrapped in a dreamy, Waking Life-inspired rotoscoping aesthetic.

## ✨ Features

- **Clips & Travels** - Journey through adventures captured in moments of wonder
- **Tips & Tricks** - Wisdom gathered from the road, shared to light your path
- **Projects** - Creative experiments and technological adventures
- **Support** - Ways to join and support the adventure
- **Games & Fun** - Interactive experiences including Connection Cards, Adventure Dice, and Gratitude Generator

## 🎨 Design

The visual style is inspired by Richard Linklater's *Waking Life*, featuring:
- Animated, dreamy backgrounds with floating color blobs
- Rotoscoping-style card effects with wobbly, hand-drawn borders
- Smooth animations and transitions using Framer Motion
- A warm, ethereal color palette

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (static export)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# The static site will be in the 'out' directory
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## 📦 Deployment

This site is configured for static export and GitHub Pages deployment:

1. Push to the `main` branch
2. GitHub Actions will build and deploy automatically
3. Site will be available at `https://petersgrandadventure.github.io`

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home page
│   ├── clips/page.tsx    # Clips & Travels
│   ├── tips/page.tsx     # Tips & Tricks
│   ├── projects/page.tsx # Projects
│   ├── support/page.tsx  # Support
│   └── games/page.tsx    # Games & Fun
├── components/
│   ├── Navigation.tsx    # Main navigation
│   ├── Footer.tsx        # Site footer
│   ├── AnimatedBackground.tsx
│   └── RotoscopeCard.tsx # Reusable card component
└── lib/
    └── utils.ts          # Utility functions
```

## 📝 License

MIT License - Feel free to use this as inspiration for your own adventures!

---

Made with ❤️ by Peter Newell
