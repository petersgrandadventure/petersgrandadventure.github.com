"use client";

import { motion } from "framer-motion";
import RotoscopeCard from "@/components/RotoscopeCard";
import { FolderKanban, Github, ExternalLink, Code, Sparkles, Zap } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Oculus Brain Hacks",
    description: "Exploring virtual reality technologies with brain hacks including Gabor Patches, Ganzfeld Effects, and Binaural Beats.",
    technologies: ["Oculus Rift", "THREE.js", "WebXR"],
    status: "Active",
    color: "var(--accent-purple)",
    icon: "🥽",
  },
  {
    id: 2,
    title: "Bright Neighbor",
    description: "Connecting various Sharing Economy sites for greater community collaboration and resource sharing.",
    technologies: ["HTML5", "jQuery", "KnockoutJS", "PhoneGap"],
    status: "Maintained",
    color: "var(--accent-green)",
    icon: "🏘️",
  },
  {
    id: 3,
    title: "Adventure Logger",
    description: "A personal lifelogging application for documenting travels, experiences, and memories with rich media support.",
    technologies: ["React", "Node.js", "MongoDB"],
    status: "In Development",
    color: "var(--accent-warm)",
    icon: "📔",
  },
  {
    id: 4,
    title: "Meditation Timer",
    description: "A minimalist meditation app with customizable sessions, ambient sounds, and progress tracking.",
    technologies: ["React Native", "Expo"],
    status: "Active",
    color: "var(--accent-cool)",
    icon: "🧘",
  },
  {
    id: 5,
    title: "Story Weaver",
    description: "An interactive storytelling platform that lets users create and share branching narrative experiences.",
    technologies: ["Next.js", "Prisma", "PostgreSQL"],
    status: "Concept",
    color: "var(--accent-pink)",
    icon: "📖",
  },
  {
    id: 6,
    title: "Connection Cards",
    description: "A deck of digital conversation starters designed to foster deeper connections between people.",
    technologies: ["Svelte", "Firebase"],
    status: "Active",
    color: "var(--accent-purple)",
    icon: "🃏",
  },
];

const statusColors: Record<string, string> = {
  "Active": "var(--accent-green)",
  "Maintained": "var(--accent-cool)",
  "In Development": "var(--accent-warm)",
  "Concept": "var(--accent-pink)",
};

export default function ProjectsPage() {
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
            <FolderKanban className="h-10 w-10 text-[var(--accent-green)]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold dream-text bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-cool)] bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto">
            Creative experiments and technological adventures. Building tools that bring more connection and joy to the world.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: "Active Projects", value: "4", icon: Zap },
            { label: "Technologies", value: "15+", icon: Code },
            { label: "Years Building", value: "20+", icon: Sparkles },
            { label: "Open Source", value: "Yes", icon: Github },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="text-center p-4 rounded-2xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10"
            >
              <stat.icon className="h-6 w-6 mx-auto mb-2 text-[var(--accent-green)]" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-[var(--foreground)]/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <RotoscopeCard key={project.id} delay={index * 0.1} className="group">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="text-4xl">{project.icon}</div>
                  <span 
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{ 
                      backgroundColor: `${statusColors[project.status]}20`,
                      color: statusColors[project.status]
                    }}
                  >
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold group-hover:text-[var(--accent-green)] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-[var(--foreground)]/70 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-[var(--foreground)]/10 text-[var(--foreground)]/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-3 pt-2">
                  <button className="flex items-center gap-2 text-sm font-medium text-[var(--accent-green)] interactive-element">
                    <Github className="h-4 w-4" />
                    View Code
                  </button>
                  <button className="flex items-center gap-2 text-sm font-medium text-[var(--accent-cool)] interactive-element">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </button>
                </div>
              </div>
            </RotoscopeCard>
          ))}
        </div>

        {/* Collaboration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <RotoscopeCard className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-[var(--accent-purple)]">
              Let&apos;s Build Together
            </h2>
            <p className="text-[var(--foreground)]/70 max-w-md mx-auto">
              Have an idea that could bring more love and connection to the world? I&apos;d love to hear about it.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/petersgrandadventure"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--foreground)]/10 font-medium interactive-element"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
              <a
                href="mailto:petersgrandadventure@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-purple)] text-[var(--background)] font-semibold interactive-element"
              >
                Get in Touch
              </a>
            </div>
          </RotoscopeCard>
        </motion.div>
      </div>
    </div>
  );
}
