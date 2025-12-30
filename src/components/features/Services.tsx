"use client";

import Image from "next/image";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);
  const { getTranslateY, getScale } = useScrollAnimation();

  const services = [
    {
      number: "001.",
      title: "User Experience Design",
      description:
        "The process of designing products (digital or physical) to be easy and enjoyable to use by users, focusing on the overall user experience.",
      images: [
        "/assets/img/ux1.svg",
        "/assets/img/ux2.svg",
        "/assets/img/ux3.svg",
      ],
    },
    {
      number: "002.",
      title: "User Interface Design",
      description:
        "The process of designing a product's visual interface, such as layout, colors, typography, and interactive elements, to create an attractive and intuitive look.",
      images: [
        "/assets/img/ui1.svg",
        "/assets/img/ui2.svg",
        "/assets/img/ui3.svg",
      ],
    },
    {
      number: "003.",
      title: "User Interface Prototype",
      description:
        "The creation of an initial model or simulation of a user interface to test and validate the design prior to full development, enabling rapid iteration and usability testing.",
      images: [
        "/assets/img/uip1.svg",
        "/assets/img/uip2.svg",
        "/assets/img/uip3.svg",
      ],
    },
    {
      number: "004.",
      title: "Research and Development",
      description:
        "Systematic activities to discover new knowledge and apply that knowledge to create new products, processes, or services, or to improve existing ones.",
      images: [
        "/assets/img/rd1.svg",
        "/assets/img/rd2.svg",
        "/assets/img/rd3.svg",
      ],
    },
    {
      number: "005.",
      title: "Business Development",
      description:
        "Strategies and efforts to identify and develop new opportunities, build strategic partnerships, and enhance long-term business growth.",
      images: [
        "/assets/img/bd1.svg",
        "/assets/img/bd2.svg",
        "/assets/img/bd3.svg",
      ],
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="Services"
      className="h-screen bg-[#fafafa] flex items-start justify-center py-3 lg:px-3 relative overflow-y-auto sticky top-0 z-30"
    >
      <div className="hidden lg:block relative w-full">
        <div className="relative z-10 w-full min-h-[calc(100vh-1.5rem)] rounded-[32px] bg-[#131313]">
          <div className="w-full py-12 px-12 xl:px-16">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3 text-white">
                <div>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9629 2.5C8.06289 2.5 2.46289 8.1 2.46289 15C2.46289 21.9 8.06289 27.5 14.9629 27.5C21.8629 27.5 27.4629 21.9 27.4629 15C27.4629 8.1 21.8754 2.5 14.9629 2.5ZM19.6504 15.4375L15.0004 20.725L14.4504 21.35C13.6879 22.2125 13.0629 21.9875 13.0629 20.825V15.875H10.9379C9.97539 15.875 9.71289 15.2875 10.3504 14.5625L15.0004 9.275L15.5504 8.65C16.3129 7.7875 16.9379 8.0125 16.9379 9.175V14.125H19.0629C20.0254 14.125 20.2879 14.7125 19.6504 15.4375Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span className="text-2xl">My Areas of Expertise</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Services
              </h1>
              <button className="text-2xl text-white hover:opacity-70 transition-opacity">
                (5)
              </button>
            </div>

            <div className="space-y-4 text-white">
              {services.map((service, index) => (
                <div key={index} className="border-b border-gray-800">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full py-6 flex items-center justify-between text-left hover:opacity-70 transition-opacity"
                  >
                    <div className="flex items-start gap-8">
                      <span className="text-gray-500 text-sm mt-1">
                        {service.number}
                      </span>
                      <h3 className="text-xl md:text-2xl font-medium">
                        {service.title}
                      </h3>
                    </div>
                    <span className="text-3xl flex-shrink-0 ml-4">
                      {openIndex === index ? "×" : "+"}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pb-10 pl-16 pr-12 flex items-center justify-between gap-4">
                      <p className="text-xl text-[#A5A5A5] leading-relaxed flex-1 max-w-[60%]">
                        {service.description}
                      </p>

                      {service.images.length > 0 && (
                        <div
                          className="flex-shrink-0"
                          style={{
                            width: `${
                              120 + (service.images.length - 1) * 100
                            }px`,
                          }}
                        >
                          <div
                            className="relative"
                            style={{
                              height: "60px",
                              width: `${
                                60 + (service.images.length - 1) * 100
                              }px`,
                            }}
                          >
                            {service.images.map((img, idx) => (
                              <div
                                key={idx}
                                className="absolute bg-gray-800 rounded-lg overflow-hidden shadow-lg border-3 border-[#131313]"
                                style={{
                                  width: "120px",
                                  height: "80px",
                                  zIndex: idx + 1,
                                  left: `${idx * 100}px`,
                                  top: 0,
                                }}
                              >
                                <Image
                                  src={img}
                                  alt={`${service.title} ${idx + 1}`}
                                  width={120}
                                  height={120}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3">
              <button
                onClick={() => {
                  const contactSection = document.getElementById("Contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
