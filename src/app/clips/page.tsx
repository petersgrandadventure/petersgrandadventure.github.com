"use client";

import { motion } from "framer-motion";
import RotoscopeCard from "@/components/RotoscopeCard";
import { Video, MapPin, Calendar, Play, ExternalLink } from "lucide-react";

const clips = [
  {
    id: 1,
    title: "Sunrise Over the Mountains",
    location: "Colorado Rockies",
    date: "2024",
    description: "Witnessing the first light paint the peaks in gold and pink.",
    type: "video",
    thumbnail: "🏔️",
  },
  {
    id: 2,
    title: "Street Markets of Bangkok",
    location: "Thailand",
    date: "2023",
    description: "The vibrant chaos and incredible flavors of Thai street food.",
    type: "video",
    thumbnail: "🏮",
  },
  {
    id: 3,
    title: "Northern Lights Dance",
    location: "Iceland",
    date: "2023",
    description: "Nature's most spectacular light show in the Arctic sky.",
    type: "video",
    thumbnail: "🌌",
  },
  {
    id: 4,
    title: "Desert Stargazing",
    location: "Joshua Tree",
    date: "2024",
    description: "Millions of stars visible in the pristine desert darkness.",
    type: "photo",
    thumbnail: "🌵",
  },
  {
    id: 5,
    title: "Ocean Meditation",
    location: "Big Sur, California",
    date: "2024",
    description: "Finding peace in the rhythm of the Pacific waves.",
    type: "video",
    thumbnail: "🌊",
  },
  {
    id: 6,
    title: "Ancient Temple Exploration",
    location: "Angkor Wat, Cambodia",
    date: "2023",
    description: "Walking through centuries of history and spiritual wonder.",
    type: "photo",
    thumbnail: "🛕",
  },
];

export default function ClipsPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Video className="h-10 w-10 text-[var(--accent-warm)]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold dream-text bg-gradient-to-r from-[var(--accent-warm)] to-[var(--accent-pink)] bg-clip-text text-transparent">
            Clips & Travels
          </h1>
          <p className="text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto">
            Moments captured from adventures around the world. Each clip is a window into a story waiting to be told.
          </p>
        </motion.div>

        {/* Featured Clip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <RotoscopeCard className="overflow-hidden">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 aspect-video bg-gradient-to-br from-[var(--accent-warm)]/20 to-[var(--accent-cool)]/20 rounded-xl flex items-center justify-center text-8xl">
                🎬
              </div>
              <div className="flex-1 space-y-4 py-4">
                <span className="text-sm font-medium text-[var(--accent-warm)] uppercase tracking-wider">
                  Featured Adventure
                </span>
                <h2 className="text-2xl font-bold">The Journey Begins</h2>
                <p className="text-[var(--foreground)]/70 leading-relaxed">
                  A compilation of the most magical moments from the past year of adventures. 
                  From mountain peaks to ocean depths, this is what it means to live fully.
                </p>
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-warm)] text-[var(--background)] font-semibold interactive-element">
                  <Play className="h-5 w-5" />
                  Watch Now
                </button>
              </div>
            </div>
          </RotoscopeCard>
        </motion.div>

        {/* Clips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clips.map((clip, index) => (
            <RotoscopeCard key={clip.id} delay={index * 0.1} className="group cursor-pointer">
              <div className="space-y-4">
                <div className="aspect-video bg-gradient-to-br from-[var(--accent-warm)]/10 to-[var(--accent-cool)]/10 rounded-xl flex items-center justify-center text-6xl relative overflow-hidden">
                  {clip.thumbnail}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold group-hover:text-[var(--accent-warm)] transition-colors">
                    {clip.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-[var(--foreground)]/60">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {clip.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {clip.date}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--foreground)]/70">
                    {clip.description}
                  </p>
                </div>
              </div>
            </RotoscopeCard>
          ))}
        </div>

        {/* Embed Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <RotoscopeCard className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-[var(--accent-cool)]">
              More Adventures
            </h2>
            <p className="text-[var(--foreground)]/70">
              Follow along on social media for daily updates and behind-the-scenes moments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-500/20 text-red-400 font-medium interactive-element"
              >
                <ExternalLink className="h-4 w-4" />
                YouTube
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pink-500/20 text-pink-400 font-medium interactive-element"
              >
                <ExternalLink className="h-4 w-4" />
                Instagram
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-cool)]/20 text-[var(--accent-cool)] font-medium interactive-element"
              >
                <ExternalLink className="h-4 w-4" />
                TikTok
              </a>
            </div>
          </RotoscopeCard>
        </motion.div>
      </div>
    </div>
  );
}
