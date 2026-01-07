"use client";

import { motion } from "framer-motion";
import RotoscopeCard from "@/components/RotoscopeCard";
import { Heart, Coffee, Star, Users, Gift, MessageCircle, Sparkles } from "lucide-react";

const supportTiers = [
  {
    name: "Fellow Traveler",
    price: "$5",
    period: "/month",
    description: "Join the journey and help keep the adventure going.",
    features: [
      "Access to exclusive updates",
      "Behind-the-scenes content",
      "Community Discord access",
      "Monthly newsletter",
    ],
    color: "var(--accent-cool)",
    icon: Coffee,
    popular: false,
  },
  {
    name: "Adventure Companion",
    price: "$15",
    period: "/month",
    description: "Become a true companion on this grand adventure.",
    features: [
      "Everything in Fellow Traveler",
      "Early access to new content",
      "Exclusive Q&A sessions",
      "Vote on future adventures",
      "Name in credits",
    ],
    color: "var(--accent-warm)",
    icon: Star,
    popular: true,
  },
  {
    name: "Story Weaver",
    price: "$50",
    period: "/month",
    description: "Help shape the stories we tell together.",
    features: [
      "Everything in Adventure Companion",
      "Monthly video calls",
      "Personalized travel tips",
      "Co-create content",
      "Special recognition",
    ],
    color: "var(--accent-pink)",
    icon: Sparkles,
    popular: false,
  },
];

const otherWays = [
  {
    title: "Share the Adventure",
    description: "Tell your friends about Peter's Grand Adventure. Word of mouth is the most powerful way to grow our community.",
    icon: Users,
    action: "Share Now",
    color: "var(--accent-green)",
  },
  {
    title: "Send a Gift",
    description: "Surprise me with something from my adventure wishlist - gear, books, or experiences.",
    icon: Gift,
    action: "View Wishlist",
    color: "var(--accent-purple)",
  },
  {
    title: "Leave a Message",
    description: "Sometimes the best support is a kind word. Share your story or just say hello.",
    icon: MessageCircle,
    action: "Send Message",
    color: "var(--accent-cool)",
  },
];

export default function SupportPage() {
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
            <Heart className="h-10 w-10 text-[var(--accent-pink)]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold dream-text bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-warm)] bg-clip-text text-transparent">
            Support the Adventure
          </h1>
          <p className="text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto">
            Your support helps bring more love, connection, and storytelling to the world. Every contribution makes a difference.
          </p>
        </motion.div>

        {/* Support Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {supportTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <RotoscopeCard className={`h-full ${tier.popular ? 'ring-2 ring-[var(--accent-warm)]' : ''}`}>
                <div className="space-y-6">
                  {tier.popular && (
                    <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[var(--accent-warm)] text-[var(--background)]">
                      Most Popular
                    </span>
                  )}
                  
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${tier.color}20` }}
                    >
                      <tier.icon className="h-6 w-6" style={{ color: tier.color }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{tier.name}</h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold" style={{ color: tier.color }}>{tier.price}</span>
                        <span className="text-sm text-[var(--foreground)]/60">{tier.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-[var(--foreground)]/70">
                    {tier.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <div 
                          className="w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${tier.color}20` }}
                        >
                          <span style={{ color: tier.color }}>✓</span>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className="w-full py-3 rounded-full font-semibold interactive-element"
                    style={{ 
                      backgroundColor: tier.popular ? tier.color : 'transparent',
                      color: tier.popular ? 'var(--background)' : tier.color,
                      border: tier.popular ? 'none' : `2px solid ${tier.color}`,
                    }}
                  >
                    Join Now
                  </button>
                </div>
              </RotoscopeCard>
            </motion.div>
          ))}
        </div>

        {/* One-time Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <RotoscopeCard className="text-center space-y-6">
            <Coffee className="h-12 w-12 mx-auto text-[var(--accent-warm)]" />
            <h2 className="text-2xl font-bold">One-Time Support</h2>
            <p className="text-[var(--foreground)]/70 max-w-md mx-auto">
              Not ready for a subscription? You can still support the adventure with a one-time contribution.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["$5", "$10", "$25", "$50", "Custom"].map((amount) => (
                <button
                  key={amount}
                  className="px-6 py-3 rounded-full border-2 border-[var(--accent-warm)] text-[var(--accent-warm)] font-semibold interactive-element hover:bg-[var(--accent-warm)] hover:text-[var(--background)] transition-colors"
                >
                  {amount}
                </button>
              ))}
            </div>
          </RotoscopeCard>
        </motion.div>

        {/* Other Ways to Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-center mb-8 dream-text">
            Other Ways to Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherWays.map((way, index) => (
              <RotoscopeCard key={way.title} delay={index * 0.1} className="text-center">
                <div className="space-y-4">
                  <div 
                    className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${way.color}20` }}
                  >
                    <way.icon className="h-8 w-8" style={{ color: way.color }} />
                  </div>
                  <h3 className="text-lg font-bold">{way.title}</h3>
                  <p className="text-sm text-[var(--foreground)]/70">
                    {way.description}
                  </p>
                  <button 
                    className="text-sm font-medium interactive-element"
                    style={{ color: way.color }}
                  >
                    {way.action} →
                  </button>
                </div>
              </RotoscopeCard>
            ))}
          </div>
        </motion.div>

        {/* Thank You */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <RotoscopeCard>
            <div className="space-y-4">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="h-12 w-12 mx-auto text-[var(--accent-pink)] fill-current" />
              </motion.div>
              <h2 className="text-2xl font-bold">Thank You</h2>
              <p className="text-[var(--foreground)]/70 max-w-lg mx-auto">
                Whether you support financially, share with friends, or simply follow along, 
                you&apos;re part of this adventure. Together, we&apos;re bringing more love and 
                connection to the world.
              </p>
            </div>
          </RotoscopeCard>
        </motion.div>
      </div>
    </div>
  );
}
