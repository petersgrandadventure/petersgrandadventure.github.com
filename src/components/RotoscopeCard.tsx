"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RotoscopeCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
}

export default function RotoscopeCard({ children, className, delay = 0, onClick }: RotoscopeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      onClick={onClick}
      className={cn(
        "rotoscope-card rounded-2xl bg-[var(--background)] p-6",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
