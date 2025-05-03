// src/components/Hero.jsx
import React from "react";
import heroImage from "../assets/heroImage.png";

export default function Hero() {
  return (
    <section className="bg-background py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        {/* Text Block */}
        <div className="flex-1 animate-slide-in-left">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Your School Day,
            <br />
            Simplified.
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            ClassCountdown helps students and teachers stay on time, manage
            complex schedules, and breathe easier — one minute at a time.
          </p>
          <button
            className="mt-8 inline-block px-6 py-3 text-white bg-primary rounded-xl shadow-soft text-lg font-medium opacity-80 cursor-not-allowed"
            disabled
          >
            ✨ Coming to App Stores Soon
          </button>
        </div>

        {/* Image Block */}
        <div className="flex-1 animate-slide-in-right">
          <img
            src={heroImage}
            alt="ClassCountdown app in light and dark mode"
            className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
