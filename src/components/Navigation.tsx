"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  Video, 
  Lightbulb, 
  FolderKanban, 
  Heart, 
  Gamepad2, 
  Menu, 
  X,
  Sparkles
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/clips", label: "Clips & Travels", icon: Video },
  { href: "/tips", label: "Tips & Tricks", icon: Lightbulb },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/support", label: "Support", icon: Heart },
  { href: "/games", label: "Games", icon: Gamepad2 },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 nav-float">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="h-8 w-8 text-[var(--accent-warm)]" />
              </motion.div>
              <span className="text-xl font-bold dream-text bg-gradient-to-r from-[var(--accent-warm)] via-[var(--accent-pink)] to-[var(--accent-cool)] bg-clip-text text-transparent">
                Peter&apos;s Grand Adventure
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 rounded-full hover:bg-[var(--accent-warm)]/10 transition-colors group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <item.icon className="h-4 w-4 text-[var(--accent-cool)] group-hover:text-[var(--accent-warm)] transition-colors" />
                    <span className="text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--accent-warm)] transition-colors">
                      {item.label}
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full interactive-element"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-[var(--accent-warm)]" />
              ) : (
                <Menu className="h-6 w-6 text-[var(--accent-warm)]" />
              )}
            </button>
          </div>
        </div>

        {/* Gradient line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-warm)] to-transparent opacity-50" />
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div 
              className="absolute inset-0 bg-[var(--background)] opacity-95"
              onClick={() => setIsOpen(false)}
            />
            <motion.div className="relative pt-24 px-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 p-4 rounded-2xl rotoscope-card bg-[var(--background)]"
                  >
                    <item.icon className="h-6 w-6 text-[var(--accent-warm)]" />
                    <span className="text-lg font-medium">{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
