// src/App.jsx
import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import EmailSignup from "./components/EmailSignup";
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      <Hero />
      <Features />
      <EmailSignup />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
