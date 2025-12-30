"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { getTranslateY, getScale } = useScrollAnimation();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setTimeout(() => {
              setIsLoaded(true);
            }, 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="Projects"
      className="h-screen flex py-8 flex-col px-6  lg:px-12 xl:px-20 bg-[#fafafa] sticky top-0 z-40 overflow-y-auto"
    >
      <div className="container mx-auto flex flex-col gap-15 flex-1 ">
        <div className="w-full flex items-start justify-between gap-6 flex-shrink-0">
          <div className="flex items-center gap-3">
            <svg
              width="28"
              height="28"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9629 2.5C8.06289 2.5 2.46289 8.1 2.46289 15C2.46289 21.9 8.06289 27.5 14.9629 27.5C21.8629 27.5 27.4629 21.9 27.4629 15C27.4629 8.1 21.8754 2.5 14.9629 2.5ZM19.6504 15.4375L15.0004 20.725L14.4504 21.35C13.6879 22.2125 13.0629 21.9875 13.0629 20.825V15.875H10.9379C9.97539 15.875 9.71289 15.2875 10.3504 14.5625L15.0004 9.275L15.5504 8.65C16.3129 7.7875 16.9379 8.0125 16.9379 9.175V14.125H19.0629C20.0254 14.125 20.2879 14.7125 19.6504 15.4375Z"
                fill="#131313"
              />
            </svg>
            <p className="text-xl lg:text-2xl text-[#131313] font-bold">
              Here&apos;s What I Do Best
            </p>
          </div>
          <div className="flex flex-col mr-10">
            <p className="text-[#131313] text-7xl font-medium leading-tight">
              Portofolio Projects
            </p>
            <p className="text-[#A5A5A5] text-xl leading-tight">
              4 Years of Refined Experience
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 flex-1 auto-rows-max lg:auto-rows-fr">
          <div className="lg:col-span-5 lg:row-span-2 w-full max-w-xl bg-[#131313] rounded-[32px] shadow-2xl p-8 text-white flex flex-col justify-between relative overflow-visible group cursor-pointer">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-10 w-72 h-72 bg-white/30 rounded-full blur-3xl"></div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <Image
                src="/assets/img/MacBook-Air-M2.svg"
                alt="TernaQin dashboard"
                width={1000}
                height={750}
                className={`w-[90%] max-w-[760px] drop-shadow-2xl select-none -translate-y-4 translate-x-14 transition-all duration-1000 ease-out ${
                  isLoaded
                    ? "scale-100 opacity-100 translate-x-14"
                    : "scale-75 opacity-0 translate-x-32"
                }`}
                style={{
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
                priority
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-semibold mb-1">
                TernaQin Indonesia
              </h3>
              <p className="text-[#A5A5A5] text-base">Business Development</p>
            </div>

            <div className="relative z-20 flex flex-col gap-5 lg:gap-4 ">
              <h2 className="text-7xl font-bold">TernaQin</h2>
              <div className="relative z-10 mt-4 flex items-center justify-between text-sm">
                <span className="text-[#FFFFFF] text-base">Live Website</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9.42578 5.98828L18.0101 5.98828L18.0101 14.5726"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.99023 18.0117L17.8908 6.11111"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-full pointer-events-none">
              <Image
                src="/assets/img/Leaf.svg"
                alt="Pattern"
                width={160}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 flex flex-col gap-15">
              <div className="gap-6">
                <h3 className="text-4xl font-semibold mb-1 text-gray-900">
                  Berasku (Gemastik and Searca)
                </h3>
                <p className="text-[#A5A5A5] text-base mb-6">
                  UX Design and Research Grants
                </p>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg">
                    AI Analysis
                  </span>
                  <span className="px-3 py-1.5 bg-gray-200 text-gray-700 text-xs rounded-lg">
                    Real-Time Monitoring
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1.5 bg-gray-200 text-gray-700 text-xs rounded-lg">
                    QR Code Ecosystem
                  </span>
                  <span className="px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg">
                    IoT Integration
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-full lg:col-span-4 bg-white rounded-3xl p-6 gap-5">
            <div>
              <h3 className="text-4xl font-semibold text-gray-900">
                MediSynch
              </h3>
              <p className="text-[#A5A5A5] text-base mb-4">
                Gemastik Competition
              </p>
            </div>

            <div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-orange-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-[#A5A5A5] text-md mb-4">
                &quot;Thank you for your innovation in supporting the
                advancement of healthcare in Indonesia&quot;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  <Image
                    src="/assets/img/Frame.svg"
                    alt="Pattern"
                    width={160}
                    height={400}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <span className="text-gray-900 font-medium">Jessica Kim</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-gradient-to-br bg-white rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <h2 className="text-7xl font-bold text-gray-900 mb-3">
                20<span className="text-[#A5A5A5]">+</span>
              </h2>
              <p className="text-[#A5A5A5] text-base">Portfolio Projects</p>
            </div>

            <a
              href="https://www.linkedin.com/in/nfldfaa/"
              className="relative z-10 flex items-center justify-between text-sm text-gray-900 font-semibold hover:opacity-70 transition-all"
            >
              <span className="text-base">See More</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.42773 5.98828L18.012 5.98828L18.012 14.5726"
                  stroke="#131313"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.99219 18.0117L17.8928 6.11111"
                  stroke="#131313"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
