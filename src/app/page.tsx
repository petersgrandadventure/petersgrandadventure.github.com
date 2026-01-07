"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import RotoscopeCard from "@/components/RotoscopeCard";
import { 
  Video, 
  Lightbulb, 
  FolderKanban, 
  Heart, 
  Gamepad2, 
  Sparkles,
  ArrowRight,
  Globe,
  Users,
  Zap
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Clips & Travels",
    description: "Journey through adventures captured in moments of wonder and discovery.",
    href: "/clips",
    color: "var(--accent-warm)",
  },
  {
    icon: Lightbulb,
    title: "Tips & Tricks",
    description: "Wisdom gathered from the road, shared to light your own path.",
    href: "/tips",
    color: "var(--accent-cool)",
  },
  {
    icon: FolderKanban,
    title: "Projects",
    description: "Creative experiments and technological adventures in the making.",
    href: "/projects",
    color: "var(--accent-green)",
  },
  {
    icon: Heart,
    title: "Support",
    description: "Join the adventure and help bring more magic to the world.",
    href: "/support",
    color: "var(--accent-pink)",
  },
  {
    icon: Gamepad2,
    title: "Games & Fun",
    description: "Interactive experiences and playful explorations await.",
    href: "/games",
    color: "var(--accent-purple)",
  },
];

const pillars = [
  { icon: Heart, label: "Love", color: "var(--accent-pink)" },
  { icon: Users, label: "Connection", color: "var(--accent-cool)" },
  { icon: Globe, label: "Storytelling", color: "var(--accent-warm)" },
  { icon: Zap, label: "Technology", color: "var(--accent-purple)" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Sparkles className="h-16 w-16 mx-auto text-[var(--accent-warm)] mb-6" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold dream-text"
          >
            <span className="bg-gradient-to-r from-[var(--accent-warm)] via-[var(--accent-pink)] to-[var(--accent-cool)] bg-clip-text text-transparent">
              Peter&apos;s Grand Adventure
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-[var(--foreground)]/80 max-w-3xl mx-auto leading-relaxed"
          >
            Bringing <span className="text-[var(--accent-pink)] font-semibold">Love</span>,{" "}
            <span className="text-[var(--accent-cool)] font-semibold">Connection</span>, and{" "}
            <span className="text-[var(--accent-warm)] font-semibold">Storytelling</span> to the world 
            through the magical application of technology.
          </motion.p>

          {/* Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 pt-8"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)]/50 backdrop-blur-sm border border-[var(--foreground)]/10"
                style={{ borderColor: `${pillar.color}40` }}
              >
                <pillar.icon className="h-4 w-4" style={{ color: pillar.color }} />
                <span className="text-sm font-medium">{pillar.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-8"
          >
            <Link
              href="/clips"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--accent-warm)] to-[var(--accent-pink)] text-[var(--background)] font-semibold text-lg interactive-element"
            >
              Begin the Journey
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-[var(--accent-warm)]/50 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[var(--accent-warm)]"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 dream-text"
          >
            Explore the Adventure
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link key={feature.href} href={feature.href}>
                <RotoscopeCard delay={index * 0.1} className="h-full hover:scale-[1.02] transition-transform">
                  <div className="space-y-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${feature.color}20` }}
                    >
                      <feature.icon className="h-6 w-6" style={{ color: feature.color }} />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: feature.color }}>
                      {feature.title}
                    </h3>
                    <p className="text-[var(--foreground)]/70 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium" style={{ color: feature.color }}>
                      Explore <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </RotoscopeCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <RotoscopeCard className="text-center space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[var(--accent-cool)] to-[var(--accent-green)] bg-clip-text text-transparent">
              About This Adventure
            </h2>
            <p className="text-lg text-[var(--foreground)]/80 leading-relaxed">
              I&apos;m Peter Newell — a technowizard, dad, mystic, and eternal explorer. 
              This space is my digital campfire where I share the stories, discoveries, 
              and magical moments from my journey through life. Whether it&apos;s a breathtaking 
              sunset from a distant land, a clever hack that made life easier, or a project 
              born from curiosity and code, you&apos;ll find it all here.
            </p>
            <p className="text-lg text-[var(--foreground)]/80 leading-relaxed">
              Join me as we explore what it means to live fully, connect deeply, 
              and tell stories that matter. The adventure is just beginning.
            </p>
          </RotoscopeCard>
        </div>
      </section>
    </div>
  );
}
