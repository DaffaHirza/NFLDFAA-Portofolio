"use client";

import { useState, useEffect, useRef } from "react";
import Card from "@/components/ui/Card";

export default function About() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const hasAnimated = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);

  const animateCounter = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    target: number,
    duration: number
  ) => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCounter = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOutQuad = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOutQuad * target);

      setter(currentCount);

      if (now < endTime) {
        requestAnimationFrame(updateCounter);
      } else {
        setter(target);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            setTimeout(() => {
              animateCounter(setCount1, 20, 2000);
              animateCounter(setCount2, 40, 2000);
            }, 100);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px" }
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
      id="About"
      className="h-screen flex flex-col py-8 px-6 lg:px-12 xl:px-20 bg-[#fafafa] sticky top-0 z-20 overflow-y-auto"
    >
      <div className="container mx-auto flex flex-col gap-16 w-full">

        <div className="w-full flex items-start justify-between gap-10 flex-shrink-0">
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
              About Me
            </p>
          </div>
          <div className="flex flex-col mr-10">
            <p className="text-[#131313] text-2xl  xl:text-5xl font-medium leading-tight">
              How I Turn Ideas Into Measurable Outcomes
            </p>
            <p className="text-[#A5A5A5] text-2xl  xl:text-5xl leading-tight">
              Across Any Project Or Initiative
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-10 flex-1 pt-15">
          <div className="col-span-1">
            <Card
              imageSrc="/assets/img/star.svg"
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>

          <div className="col-span-2 flex flex-col ml-20 h-full">
            <div className="flex flex-col h-full">
              <p className="text-xl lg:text-2xl xl:text-3xl text-[#131313] font-medium px-2 mb-6 flex-shrink-0">
                See how I push ideas forward{" "}
                <span className="text-[#A5A5A5]">
                  combining strategy, precision, and innovation to create
                  meaningful outcomes.
                </span>
              </p>

              <div className="flex flex-col gap-4 flex-1">
                <div className="grid grid-cols-2 gap-6">
                  <div className="w-full bg-white rounded-3xl p-6 lg:p-8 flex flex-col justify-center  relative">
                    <div className="absolute top-4 lg:top-6 right-4 lg:right-6 flex gap-1">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-[#131313] rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-[#131313]">
                        {count1}
                        <span className="text-[#A5A5A5]">+</span>
                      </h3>
                    </div>
                  </div>

                  <div className="w-full bg-white rounded-3xl p-6 lg:p-8 flex flex-col justify-center  relative">
                    <div className="absolute top-4 lg:top-6 right-4 lg:right-6 flex gap-1">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-[#131313] rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-[#131313]">
                        {count2}
                        <span className="text-[#A5A5A5]">+</span>
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-2 gap-6">
                  <div className="w-full h-full gap-15 bg-white rounded-3xl p-6 lg:p-8 flex flex-col justify-between ">
                    <div className="mb-4 flex flex-col items-end text-right">
                      <p className="text-xl font-medium text-[#A5A5A5] mb-1">
                        License and Awards
                      </p>
                      <p className="text-xl font-semibold text-[#131313]">
                        Certification
                      </p>
                    </div>
                    <p className="text-sm pt-8 lg:text-base text-[#A5A5A5]">
                      IBM Coursera, BNSP Professional Certification, Telkom
                      Indonesia, etc.
                    </p>
                  </div>

                  <div className="w-full bg-white rounded-3xl p-6 lg:p-8 flex flex-col justify-between ">
                    <div className="mb-4 flex flex-col items-end text-right">
                      <p className="text-xl  text-[#A5A5A5] mb-1">Project</p>
                      <p className="text-xl  font-semibold text-[#131313]">
                        Completed
                      </p>
                    </div>
                    <p className="text-xs pt-8 lg:text-base text-[#A5A5A5]">
                      Permata Bank, Cyber University, Sentosa Foundation, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
