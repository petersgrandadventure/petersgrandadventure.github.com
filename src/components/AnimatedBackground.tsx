"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient - purple tinted */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0a14] via-[#1a1225] to-[#0f0a14]" />
      
      {/* Animated blobs - more purple focused */}
      <motion.div
        className="blob absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-lavender)]"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="blob absolute top-1/2 right-1/4 w-80 h-80 bg-[var(--accent-purple)]"
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="blob absolute bottom-1/4 left-1/3 w-72 h-72 bg-[var(--accent-aubergine)]"
        animate={{
          x: [0, 60, -80, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="blob absolute top-1/3 right-1/3 w-64 h-64 bg-[var(--accent-pink)]"
        animate={{
          x: [0, -40, 80, 0],
          y: [0, 60, -80, 0],
          scale: [1, 0.95, 1.15, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="blob absolute bottom-1/3 right-1/2 w-88 h-88 bg-[var(--accent-purple)]"
        animate={{
          x: [0, 70, -30, 0],
          y: [0, -40, 70, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Noise overlay for texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
