"use client";

import { motion } from "framer-motion";
import RotoscopeCard from "@/components/RotoscopeCard";
import { Lightbulb, Tag, Clock, ChevronRight, Bookmark, Share2 } from "lucide-react";

const categories = [
  { name: "Travel", color: "var(--accent-warm)", count: 12 },
  { name: "Tech", color: "var(--accent-cool)", count: 8 },
  { name: "Life Hacks", color: "var(--accent-green)", count: 15 },
  { name: "Mindfulness", color: "var(--accent-pink)", count: 6 },
  { name: "Creativity", color: "var(--accent-purple)", count: 9 },
];

const tips = [
  {
    id: 1,
    title: "The One-Bag Travel Philosophy",
    category: "Travel",
    readTime: "5 min",
    excerpt: "How I learned to travel the world with just a single backpack, and why it changed everything about how I experience new places.",
    featured: true,
  },
  {
    id: 2,
    title: "Morning Routine for Maximum Creativity",
    category: "Life Hacks",
    readTime: "4 min",
    excerpt: "The simple morning practices that transformed my productivity and creative output.",
  },
  {
    id: 3,
    title: "Building a Portable Tech Setup",
    category: "Tech",
    readTime: "7 min",
    excerpt: "My complete guide to working remotely from anywhere with a minimal but powerful tech kit.",
  },
  {
    id: 4,
    title: "Finding Flow State While Traveling",
    category: "Mindfulness",
    readTime: "6 min",
    excerpt: "Techniques for staying focused and present even when your environment is constantly changing.",
  },
  {
    id: 5,
    title: "Budget Travel Without Sacrificing Experience",
    category: "Travel",
    readTime: "8 min",
    excerpt: "Smart strategies for stretching your travel budget while still having incredible adventures.",
  },
  {
    id: 6,
    title: "Capturing Stories, Not Just Photos",
    category: "Creativity",
    readTime: "5 min",
    excerpt: "How to document your travels in ways that truly capture the essence of your experiences.",
  },
];

export default function TipsPage() {
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
            <Lightbulb className="h-10 w-10 text-[var(--accent-cool)]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold dream-text bg-gradient-to-r from-[var(--accent-cool)] to-[var(--accent-green)] bg-clip-text text-transparent">
            Tips & Tricks
          </h1>
          <p className="text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto">
            Wisdom gathered from the road. Practical insights to help you on your own adventure.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full border interactive-element"
              style={{ borderColor: `${category.color}40`, color: category.color }}
            >
              <Tag className="h-4 w-4" />
              {category.name}
              <span className="text-xs opacity-60">({category.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Tip */}
        {tips.filter(t => t.featured).map((tip) => (
          <motion.div
            key={tip.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <RotoscopeCard className="overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 aspect-video md:aspect-auto bg-gradient-to-br from-[var(--accent-cool)]/20 to-[var(--accent-green)]/20 rounded-xl flex items-center justify-center">
                  <Lightbulb className="h-24 w-24 text-[var(--accent-cool)]/50" />
                </div>
                <div className="flex-1 space-y-4 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-[var(--accent-warm)]/20 text-[var(--accent-warm)]">
                      Featured
                    </span>
                    <span className="text-sm text-[var(--foreground)]/60 flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {tip.readTime} read
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold">{tip.title}</h2>
                  <p className="text-[var(--foreground)]/70 leading-relaxed">
                    {tip.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-cool)] text-[var(--background)] font-semibold interactive-element">
                      Read More
                      <ChevronRight className="h-5 w-5" />
                    </button>
                    <button className="p-3 rounded-full bg-[var(--foreground)]/10 interactive-element">
                      <Bookmark className="h-5 w-5" />
                    </button>
                    <button className="p-3 rounded-full bg-[var(--foreground)]/10 interactive-element">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </RotoscopeCard>
          </motion.div>
        ))}

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.filter(t => !t.featured).map((tip, index) => (
            <RotoscopeCard key={tip.id} delay={index * 0.1} className="group cursor-pointer">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span 
                    className="text-sm font-medium px-3 py-1 rounded-full"
                    style={{ 
                      backgroundColor: `${categories.find(c => c.name === tip.category)?.color}20`,
                      color: categories.find(c => c.name === tip.category)?.color 
                    }}
                  >
                    {tip.category}
                  </span>
                  <span className="text-sm text-[var(--foreground)]/60 flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {tip.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold group-hover:text-[var(--accent-cool)] transition-colors">
                  {tip.title}
                </h3>
                <p className="text-sm text-[var(--foreground)]/70 line-clamp-3">
                  {tip.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-[var(--accent-cool)]">
                  Read more <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </RotoscopeCard>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <RotoscopeCard className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-[var(--accent-warm)]">
              Get Weekly Tips
            </h2>
            <p className="text-[var(--foreground)]/70 max-w-md mx-auto">
              Subscribe to receive the latest tips, tricks, and adventure insights directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-full bg-[var(--foreground)]/10 border border-[var(--foreground)]/20 focus:border-[var(--accent-warm)] focus:outline-none transition-colors"
              />
              <button className="px-6 py-3 rounded-full bg-[var(--accent-warm)] text-[var(--background)] font-semibold interactive-element">
                Subscribe
              </button>
            </div>
          </RotoscopeCard>
        </motion.div>
      </div>
    </div>
  );
}
