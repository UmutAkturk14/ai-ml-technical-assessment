import React, { useState } from "react";
import OpenAI from "openai";
import "./AIChatButton.css";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const AIChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSend = async () => {
    if (!query.trim()) return;
    setIsLoading(true);
    setError("");
    setResponse("");

    try {
      const prompt = `
        You are an AI shopping assistant.
        You are given a user input like: "${query}"
        Reply with a friendly recommendation of 1 or more products from this product list (assume they exist):

        ${JSON.parse(localStorage.getItem("products"))}

        Make your response short (3–4 lines max). Use a casual and friendly tone.`;

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      });

      const content = completion.choices[0].message.content;
      setResponse(content);
    } catch (err) {
      console.error("OpenAI error:", err);
      setError("Something went wrong or you're rate-limited.");
    } finally {
      setIsLoading(false);
      setQuery("");
    }
  };

  return (
    <>
      {/* Floating AI Chat Button (bottom-right) */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="ai-chat-button"
        role="button"
        aria-label="Chat with AI Assistant"
      >
        💬
      </div>

      {/* Chat Bubble */}
      {isOpen && (
        <div className="ai-chat-bubble">
          <div className="ai-chat-header">AI Shopping Assistant</div>

          <div className="ai-chat-content">
            {response && <div className="ai-chat-response">{response}</div>}
            {error && <div className="ai-chat-error">{error}</div>}
          </div>

          {/* Input Area */}
          <div className="ai-chat-input-area">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about clothing..."
              className="ai-chat-input"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="ai-chat-send-button"
            >
              {isLoading ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatButton;
