"use client";

import { motion } from "framer-motion";
import { Heart, Github, Twitter, Mail, Sparkles, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-[var(--accent-warm)]/20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[var(--accent-warm)]" />
              <span className="font-bold text-lg">Peter&apos;s Grand Adventure</span>
            </div>
            <p className="text-sm text-[var(--foreground)]/70 leading-relaxed">
              Bringing Love, Connection, and Storytelling to the world through the magical application of technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-[var(--accent-cool)]">Explore</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link href="/clips" className="hover:text-[var(--accent-warm)] transition-colors">Clips & Travels</Link>
              <Link href="/tips" className="hover:text-[var(--accent-warm)] transition-colors">Tips & Tricks</Link>
              <Link href="/projects" className="hover:text-[var(--accent-warm)] transition-colors">Projects</Link>
              <Link href="/support" className="hover:text-[var(--accent-warm)] transition-colors">Support</Link>
              <Link href="/games" className="hover:text-[var(--accent-warm)] transition-colors">Games</Link>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-bold text-[var(--accent-pink)]">Connect</h3>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/petersgrandadventure"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-2 rounded-full bg-[var(--accent-warm)]/10 hover:bg-[var(--accent-warm)]/20 transition-colors"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com/PeterANewell"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="p-2 rounded-full bg-[var(--accent-cool)]/10 hover:bg-[var(--accent-cool)]/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/peters-grand-adventure"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="p-2 rounded-full bg-[var(--accent-purple)]/10 hover:bg-[var(--accent-purple)]/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="mailto:petersgrandadventure@gmail.com"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-2 rounded-full bg-[var(--accent-pink)]/10 hover:bg-[var(--accent-pink)]/20 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--accent-warm)]/10 text-center">
          <motion.p 
            className="text-sm text-[var(--foreground)]/50 flex items-center justify-center gap-2"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Made with <Heart className="h-4 w-4 text-[var(--accent-pink)] fill-current" /> by Peter Newell
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
