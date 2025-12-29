"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [displayText, setDisplayText] = useState("");
  const [isExiting, setIsExiting] = useState(false);
  const fullText = "NFLDFAA.";
  const typingSpeed = 200;

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 1000);
        }, 500);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [onComplete]);

  return (
    <section
      className={`fixed inset-0 z-50 h-screen flex items-center justify-center flex-col py-8 px-6 lg:px-12 xl:px-20 bg-[#fafafa] overflow-hidden transition-transform duration-1000 ease-in-out ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="relative z-10 bg-[#fafafa] h-full flex items-center px-12 xl:px-16">
        <div className="w-full py-12  flex flex-col justify-between">
          <h2 className="text-[10rem] pb-15 leading-none font-bold bg-[linear-gradient(to_right,#131313_0%,#131313_10%,#4d4d4d_30%,#9d9d9d_60%,#d6d6d6_85%,#8a8a8a_100%)] bg-clip-text text-transparent">
            {displayText}
            <span className="animate-pulse bg-[#131313]">|</span>
          </h2>
        </div>
      </div>

      {/* Fixed footer - tidak terkena efek translate */}
      <div className="fixed bottom-3 left-0 right-0 z-[60] flex items-center justify-center">
        <div className="flex flex-col items-center gap-1 text-sm text-[#505050]">
          <p className="">Created by:</p>
          <div className="rounded-full flex items-center justify-center text-white font-semibold text-sm gap-2">
            <Image
              src="/assets/img/foto.jpg"
              alt="Pattern"
              width={160}
              height={400}
              className="w-10 h-10 rounded-full object-cover -rotate-45"
            />
            <span className="text-[#131313] text-xl font-semibold">
              Daffa Naufal Athallah
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
