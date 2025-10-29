// src/components/SolutionSlide.js

"use client"; // This is crucial! It tells Next.js to run this component in the browser.

import { useState, useEffect } from "react";

// The simulated conversation flow
const conversation = [
  {
    sender: "bot",
    text: "Welcome to FutureMe! Sawubona! Ready to find your future?", // Updated name
  },
  { sender: "user", text: "Yes" },
  { sender: "bot", text: "Great! First, what is your full name?" },
  { sender: "user", text: "Lerato Tabane" }, // Updated name
  {
    sender: "bot",
    text: "Awesome, Lerato. Let's first get to know you. What is the name of your school and in which grade are you?", // Updated question
  },
];

export default function SolutionSlide() {
  // Initialize state directly with an empty array
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // REMOVED: setMessages([]); - No need to set synchronously here

    // Set up the interval to add messages
    const interval = setInterval(() => {
      setMessages((prev) => {
        // Stop interval if all messages are shown
        if (prev.length >= conversation.length) {
          clearInterval(interval);
          return prev;
        }
        // Add the next message
        return [...prev, conversation[prev.length]];
      });
    }, 1800); // Add a new message every 1.8 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <section className="bg-gray-100 px-8 py-20 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2">
        {/* Sticky Phone Column */}
        <div className="md:sticky md:top-24 h-full">
          {/* Phone Mockup */}
          <div className="w-full max-w-sm mx-auto rounded-[40px] border-[12px] border-black bg-white shadow-2xl">
            <div className="h-[600px] overflow-hidden rounded-[28px]">
              {/* Chat Header */}
              <div className="bg-emerald-600 p-4 text-white">
                <h3 className="text-lg font-semibold">FutureMe</h3>{" "}
                {/* Updated name */}
              </div>
              {/* Chat Messages */}
              <div className="flex h-full flex-col space-y-3 bg-gray-200 p-4 overflow-y-auto">
                {" "}
                {/* Added overflow-y-auto */}
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[75%] rounded-lg px-4 py-2 text-black shadow-sm ${
                        // Added shadow-sm for depth
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
        </div>

        {/* Scrolling Text Column */}
        <div className="flex flex-col gap-12 text-left">
          <h2 className="text-4xl font-bold text-gray-800 md:text-5xl">
            Our Solution: Meeting Students Where They Are
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-emerald-600">
                Inclusivity First
              </h3>
              <p className="mt-2 text-lg text-gray-600">
                By using WhatsApp, we make applications accessible to anyone
                with a basic smartphone, no matter their location or data plan.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-emerald-600">
                Simplicity by Design
              </h3>
              <p className="mt-2 text-lg text-gray-600">
                Complex web forms are replaced with a simple, guided chat
                conversation in the user&apos;s local language, dramatically
                increasing completion rates.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-emerald-600">
                Unlocking Potential
              </h3>
              <p className="mt-2 text-lg text-gray-600">
                Funders can now discover talent in underserved communities,
                fulfilling their transformation mandates and finding incredible
                students they would have otherwise missed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
