"use client";
import { useState } from "react";

export default function AnanseAI() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("career");

  const mentorshipCategories = {
    career: {
      title: "Career Guidance",
      icon: "💼",
      prompts: [
        "How can I navigate workplace dynamics as an African professional?",
        "What are the best strategies for career advancement in tech?",
        "How do I handle microaggressions in the workplace?"
      ]
    },
    culture: {
      title: "Cultural Wisdom",
      icon: "🌍",
      prompts: [
        "How can I maintain my cultural identity while succeeding in tech?",
        "What are some African business practices I should know?",
        "How do I build bridges between different cultural contexts?"
      ]
    },
    technical: {
      title: "Technical Skills",
      icon: "⚙️",
      prompts: [
        "What technical skills should I focus on for 2024?",
        "How do I balance learning new technologies with cultural responsibilities?",
        "What are the best resources for African tech professionals?"
      ]
    },
    network: {
      title: "Networking",
      icon: "🕸️",
      prompts: [
        "How do I build meaningful professional relationships?",
        "What networking strategies work best for diaspora professionals?",
        "How can I connect with other African tech professionals?"
      ]
    }
  };

  async function handleGenerate() {
    setLoading(true);
    setResponse("");
    try {
      const contextualPrompt = `As Ananse AI, a culturally-aware mentor for African tech professionals, provide guidance on: ${prompt}. Include cultural context, practical advice, and encouragement.`;
      
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: contextualPrompt }),
      });
      const data = await res.json();
      setResponse(data.text || "No response");
    } catch {
      setResponse("Error generating response.");
    }
    setLoading(false);
  }

  return (
    <main className="p-8 max-w-4xl mx-auto bg-gradient-to-br from-[#0D1117] to-[#161B22] rounded-xl shadow-lg mt-20 border border-[#FFD700]/20">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-extrabold text-[#FFD700] flex items-center gap-2">
          <span className="text-4xl">🕷️</span>
          <span>Ananse AI Mentor</span>
        </h1>
        <div className="text-sm px-3 py-1 bg-[#FFD700]/10 text-[#FFD700] rounded border border-[#FFD700]/30">
          Cultural Wisdom + Tech Guidance
        </div>
      </div>

      {/* Category Selection */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3 text-white">Choose Your Mentorship Focus:</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Object.entries(mentorshipCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`p-3 rounded-lg border transition-all ${
                selectedCategory === key
                  ? 'border-[#FFD700] bg-[#FFD700]/10 text-[#FFD700]'
                  : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-[#FFD700]/50'
              }`}
            >
              <div className="text-center">
                <div className="text-2xl mb-1">{category.icon}</div>
                <div className="text-sm font-medium">{category.title}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Prompts */}
      <div className="mb-6">
        <h3 className="text-md font-semibold mb-3 text-white">Quick Start Prompts:</h3>
        <div className="flex flex-wrap gap-2">
          {mentorshipCategories[selectedCategory as keyof typeof mentorshipCategories].prompts.map((promptText, index) => (
            <button
              key={index}
              onClick={() => setPrompt(promptText)}
              className="text-xs px-3 py-2 bg-gray-800/50 text-gray-300 rounded-full border border-gray-600 hover:border-[#FFD700]/50 hover:text-[#FFD700] transition-colors"
            >
              {promptText}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2 text-white">
          Share your question or challenge:
        </label>
        <textarea
          className="w-full p-4 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-[#FFD700] transition mb-2 resize-none bg-gray-800/50 text-white placeholder-gray-400"
          rows={4}
          placeholder="Ask Ananse AI about career challenges, cultural dynamics, technical skills, or professional growth..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <div className="flex justify-between items-center">
          <button
            onClick={handleGenerate}
            disabled={!prompt || loading}
            className={`px-6 py-3 rounded-lg font-bold transition flex items-center gap-2 ${
              loading
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black hover:from-[#FFA500] hover:to-[#FF8C00]"
            }`}
          >
            {loading ? (
              <>
                <span className="animate-spin">🕷️</span>
                Weaving wisdom...
              </>
            ) : (
              <>
                <span>🕷️</span>
                Seek Guidance
              </>
            )}
          </button>
          <div className="text-xs text-gray-400">
            Powered by cultural wisdom
          </div>
        </div>
      </div>

      {response && (
        <div className="mt-8 p-6 border-2 border-[#FFD700]/30 rounded-xl bg-gradient-to-br from-[#FFD700]/5 to-[#FFA500]/5 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🕷️</span>
            <strong className="text-[#FFD700] text-lg">Ananse&apos;s Wisdom:</strong>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-600/30">
            <p className="text-white whitespace-pre-line leading-relaxed">{response}</p>
          </div>
          <div className="mt-3 text-xs text-gray-400 italic">
            &quot;Like the spider&apos;s web, wisdom connects all things&quot; - African Proverb
          </div>
        </div>
      )}

      <div className="mt-10 text-sm text-gray-400 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span>🕷️</span>
          <span>Ready to weave your success story?</span>
        </div>
        <div className="text-xs text-gray-500">
          Ananse AI combines technical expertise with cultural wisdom to guide your journey
        </div>
      </div>
    </main>
  );
}
