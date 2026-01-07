"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RotoscopeCard from "@/components/RotoscopeCard";
import { Gamepad2, Shuffle, MessageCircle, Sparkles, Dice6, Heart, RefreshCw } from "lucide-react";

const connectionQuestions = [
  "What's a dream you've never told anyone about?",
  "If you could relive one day of your life, which would it be?",
  "What's the most beautiful thing you've ever seen?",
  "Who has had the biggest impact on who you are today?",
  "What does 'home' mean to you?",
  "What's something you believe that most people don't?",
  "If you could master any skill instantly, what would it be?",
  "What's a small thing that brings you unexpected joy?",
  "What would you do if you knew you couldn't fail?",
  "What's the best advice you've ever received?",
  "What are you most grateful for right now?",
  "What's a fear you've overcome?",
  "Describe your perfect day from start to finish.",
  "What's something you wish more people understood about you?",
  "If you could have dinner with anyone, living or dead, who would it be?",
];

const adventurePrompts = [
  "Take a photo of something beautiful you've never noticed before",
  "Write a haiku about your current surroundings",
  "Do something kind for a stranger today",
  "Call someone you haven't talked to in a while",
  "Try a food you've never had before",
  "Watch the sunset and describe it in three words",
  "Leave a positive note for someone to find",
  "Learn one phrase in a new language",
  "Take a different route than usual",
  "Start a conversation with someone new",
];

const games = [
  {
    id: "connection-cards",
    title: "Connection Cards",
    description: "Draw a card to spark meaningful conversations with friends, family, or even strangers.",
    icon: MessageCircle,
    color: "var(--accent-pink)",
  },
  {
    id: "adventure-dice",
    title: "Adventure Dice",
    description: "Roll the dice for a random micro-adventure to add some spontaneity to your day.",
    icon: Dice6,
    color: "var(--accent-warm)",
  },
  {
    id: "gratitude-generator",
    title: "Gratitude Generator",
    description: "A simple practice to cultivate appreciation for the little things in life.",
    icon: Heart,
    color: "var(--accent-green)",
  },
];

export default function GamesPage() {
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
  const [currentPrompt, setCurrentPrompt] = useState<string | null>(null);
  const [gratitudeItems, setGratitudeItems] = useState<string[]>([]);
  const [gratitudeInput, setGratitudeInput] = useState("");
  const [isFlipping, setIsFlipping] = useState(false);

  const drawCard = () => {
    setIsFlipping(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * connectionQuestions.length);
      setCurrentQuestion(connectionQuestions[randomIndex]);
      setIsFlipping(false);
    }, 300);
  };

  const rollDice = () => {
    setIsFlipping(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * adventurePrompts.length);
      setCurrentPrompt(adventurePrompts[randomIndex]);
      setIsFlipping(false);
    }, 300);
  };

  const addGratitude = () => {
    if (gratitudeInput.trim()) {
      setGratitudeItems([...gratitudeItems, gratitudeInput.trim()]);
      setGratitudeInput("");
    }
  };

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
            <Gamepad2 className="h-10 w-10 text-[var(--accent-purple)]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold dream-text bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] bg-clip-text text-transparent">
            Games & Fun
          </h1>
          <p className="text-xl text-[var(--foreground)]/70 max-w-2xl mx-auto">
            Interactive experiences to spark connection, adventure, and joy. Play alone or with friends!
          </p>
        </motion.div>

        {/* Game Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <RotoscopeCard 
                className={`cursor-pointer transition-all ${activeGame === game.id ? 'ring-2' : ''}`}
                onClick={() => setActiveGame(activeGame === game.id ? null : game.id)}
              >
                <div className="space-y-4 text-center">
                  <div 
                    className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${game.color}20` }}
                  >
                    <game.icon className="h-8 w-8" style={{ color: game.color }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: game.color }}>
                    {game.title}
                  </h3>
                  <p className="text-sm text-[var(--foreground)]/70">
                    {game.description}
                  </p>
                  <button 
                    className="text-sm font-medium interactive-element"
                    style={{ color: game.color }}
                  >
                    {activeGame === game.id ? "Close" : "Play"} →
                  </button>
                </div>
              </RotoscopeCard>
            </motion.div>
          ))}
        </div>

        {/* Active Game Area */}
        <AnimatePresence mode="wait">
          {activeGame === "connection-cards" && (
            <motion.div
              key="connection-cards"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-12"
            >
              <RotoscopeCard className="text-center space-y-8">
                <h2 className="text-2xl font-bold text-[var(--accent-pink)]">
                  Connection Cards
                </h2>
                
                <motion.div
                  animate={isFlipping ? { rotateY: 180, scale: 0.9 } : { rotateY: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[200px] flex items-center justify-center"
                >
                  {currentQuestion ? (
                    <div className="max-w-md mx-auto p-8 rounded-2xl bg-gradient-to-br from-[var(--accent-pink)]/20 to-[var(--accent-purple)]/20 border border-[var(--accent-pink)]/30">
                      <p className="text-xl font-medium leading-relaxed">
                        &ldquo;{currentQuestion}&rdquo;
                      </p>
                    </div>
                  ) : (
                    <div className="text-[var(--foreground)]/50">
                      <MessageCircle className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p>Draw a card to begin</p>
                    </div>
                  )}
                </motion.div>
                
                <button
                  onClick={drawCard}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--accent-pink)] text-[var(--background)] font-semibold interactive-element"
                >
                  <Shuffle className="h-5 w-5" />
                  Draw Card
                </button>
              </RotoscopeCard>
            </motion.div>
          )}

          {activeGame === "adventure-dice" && (
            <motion.div
              key="adventure-dice"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-12"
            >
              <RotoscopeCard className="text-center space-y-8">
                <h2 className="text-2xl font-bold text-[var(--accent-warm)]">
                  Adventure Dice
                </h2>
                
                <motion.div
                  animate={isFlipping ? { rotate: 360, scale: 0.8 } : { rotate: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[200px] flex items-center justify-center"
                >
                  {currentPrompt ? (
                    <div className="max-w-md mx-auto p-8 rounded-2xl bg-gradient-to-br from-[var(--accent-warm)]/20 to-[var(--accent-green)]/20 border border-[var(--accent-warm)]/30">
                      <Sparkles className="h-8 w-8 mx-auto mb-4 text-[var(--accent-warm)]" />
                      <p className="text-xl font-medium leading-relaxed">
                        {currentPrompt}
                      </p>
                    </div>
                  ) : (
                    <div className="text-[var(--foreground)]/50">
                      <Dice6 className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p>Roll the dice for an adventure</p>
                    </div>
                  )}
                </motion.div>
                
                <button
                  onClick={rollDice}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--accent-warm)] text-[var(--background)] font-semibold interactive-element"
                >
                  <RefreshCw className="h-5 w-5" />
                  Roll Dice
                </button>
              </RotoscopeCard>
            </motion.div>
          )}

          {activeGame === "gratitude-generator" && (
            <motion.div
              key="gratitude-generator"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-12"
            >
              <RotoscopeCard className="space-y-8">
                <h2 className="text-2xl font-bold text-center text-[var(--accent-green)]">
                  Gratitude Generator
                </h2>
                
                <p className="text-center text-[var(--foreground)]/70">
                  What are you grateful for today? Add items to your gratitude list.
                </p>
                
                <div className="flex gap-3 max-w-md mx-auto">
                  <input
                    type="text"
                    value={gratitudeInput}
                    onChange={(e) => setGratitudeInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addGratitude()}
                    placeholder="I'm grateful for..."
                    className="flex-1 px-4 py-3 rounded-full bg-[var(--foreground)]/10 border border-[var(--foreground)]/20 focus:border-[var(--accent-green)] focus:outline-none transition-colors"
                  />
                  <button
                    onClick={addGratitude}
                    className="px-6 py-3 rounded-full bg-[var(--accent-green)] text-[var(--background)] font-semibold interactive-element"
                  >
                    Add
                  </button>
                </div>
                
                {gratitudeItems.length > 0 && (
                  <div className="space-y-3 max-w-md mx-auto">
                    {gratitudeItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/20"
                      >
                        <Heart className="h-5 w-5 text-[var(--accent-green)] fill-current flex-shrink-0" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </RotoscopeCard>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Embedded Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-center mb-8 dream-text">
            More Interactive Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RotoscopeCard>
              <div className="aspect-video bg-gradient-to-br from-[var(--accent-purple)]/20 to-[var(--accent-cool)]/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="h-12 w-12 mx-auto mb-4 text-[var(--accent-purple)]/50" />
                  <p className="text-[var(--foreground)]/50">Interactive Story Coming Soon</p>
                </div>
              </div>
              <h3 className="text-lg font-bold mt-4">Choose Your Adventure</h3>
              <p className="text-sm text-[var(--foreground)]/70">
                An interactive storytelling experience where your choices shape the narrative.
              </p>
            </RotoscopeCard>
            
            <RotoscopeCard>
              <div className="aspect-video bg-gradient-to-br from-[var(--accent-warm)]/20 to-[var(--accent-pink)]/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Gamepad2 className="h-12 w-12 mx-auto mb-4 text-[var(--accent-warm)]/50" />
                  <p className="text-[var(--foreground)]/50">Mini-Game Coming Soon</p>
                </div>
              </div>
              <h3 className="text-lg font-bold mt-4">Adventure Quest</h3>
              <p className="text-sm text-[var(--foreground)]/70">
                A simple browser game inspired by the adventures and places visited.
              </p>
            </RotoscopeCard>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
