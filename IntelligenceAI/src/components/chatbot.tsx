import React, { useState } from "react";
import { X, MessageCircle } from "lucide-react";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.answer || "No response", sender: "bot" }]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [...prev, { text: "Something went wrong!", sender: "bot" }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
      {isOpen ? (
        <div className="w-80 bg-gray-900 text-white rounded-lg shadow-lg p-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-lg font-semibold">Chatbot</h2>
            <X className="cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>
          <div className="h-60 overflow-y-auto p-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 my-1 rounded ${msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-700"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex mt-2">
            <input
              type="text"
              className="flex-1 p-2 text-black rounded-l"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
            />
            <button className="bg-blue-500 text-white px-4 rounded-r" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      ) : (
        <button className="bg-blue-500 p-3 rounded-full shadow-lg text-white" onClick={() => setIsOpen(true)}>
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
