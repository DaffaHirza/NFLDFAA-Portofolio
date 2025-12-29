"use client";

import { useState } from "react";
import Navbar from "@/components/features/Navbar";
import About from "@/components/features/About";
import Services from "@/components/features/Services";
import Projects from "@/components/features/Projects";
import Contact from "@/components/features/Contact";
import Footer from "@/components/features/Footer";
import Hero from "@/components/features/Hero";
import SplashScreen from "@/components/ui/SplashScreen";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <main className="bg-white relative">
        <div
          className={`transition-opacity duration-500 ${
            showSplash ? "opacity-0 pointer-events-none" : "opacity-100"
          } fixed top-0 left-0 right-0 z-50`}
        >
          <Navbar />
        </div>
        <div className="pt-17">
          <Hero />
          <About />
          <Services />
          <Projects />
          <div className="sticky top-0 z-40">
            <Contact />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
