// src/components/SolutionSlide.js

"use client"; // This is crucial! It tells Next.js to run this component in the browser.

import { useState, useEffect } from "react";

// The simulated conversation flow
const conversation = [
  {
    sender: "bot",
    text: "Welcome to Bursary Buddy! Sawubona! Ready to find your future?",
  },
  { sender: "user", text: "Yes" },
  { sender: "bot", text: "Great! First, what is your full name?" },
  { sender: "user", text: "Themba Khumalo" },
  {
    sender: "bot",
    text: "Awesome, Themba. In which province are you completing Matric?",
  },
];

export default function SolutionSlide() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // This effect runs once when the component is first displayed
    setMessages([]); // Clear messages on re-render
    const interval = setInterval(() => {
      setMessages((prevMessages) => {
        // If all messages are already shown, stop the interval
        if (prevMessages.length >= conversation.length) {
          clearInterval(interval);
          return prevMessages;
        }
        // Add the next message from the conversation to our state
        return [...prevMessages, conversation[prevMessages.length]];
      });
    }, 1800); // Add a new message every 1.8 seconds

    // Cleanup function to clear the interval when the component is removed
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex h-screen items-center justify-center bg-gray-100 p-4">
      {/* Phone Mockup */}
      <div className="w-full max-w-sm rounded-[40px] border-[12px] border-black bg-white shadow-2xl">
        <div className="h-[700px] overflow-hidden rounded-[28px]">
          {/* Chat Header */}
          <div className="bg-emerald-600 p-4 text-white">
            <h3 className="text-lg font-semibold">Bursary Buddy</h3>
          </div>

          {/* Chat Messages */}
          <div className="flex h-full flex-col space-y-3 bg-gray-200 p-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-lg px-4 py-2 text-black ${
                    msg.sender === "user" ? "bg-lime-200" : "bg-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

