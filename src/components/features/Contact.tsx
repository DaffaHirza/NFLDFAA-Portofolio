"use client";

import { useState, FormEvent } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const { getTranslateY } = useScrollAnimation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="Contact"
      className="min-h-screen bg-[#fafafa] flex items-start justify-center lg:px-3 relative overflow-hidden"
    >
      <div className="hidden lg:block relative w-full h-full py-3 ">
        <div className="relative h-full rounded-[32px] overflow-hidden">
          <div className="absolute inset-0">
            <video
              className="w-full h-full object-cover"
              src="/assets/video/background.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
            <div className="absolute inset-0 bg-black/88"></div>
          </div>

          <div className="grid grid-cols-2 relative z-10 h-screen px-12 xl:px-16 gap-15">
            <div className="col-span-1 h-screen py-15 flex flex-col justify-between items-start gap-4 text-white">
              <div>
                <p className="text-8xl font-bold leading-none tracking-normal pb-5">
                  Let&apos;s Talk
                </p>
                <p className="text-xl lg:text-xl px-2 flex-shrink-0">
                  Tell me aboout our project{" "}
                  <span className="text-[#A5A5A5]">
                    whether it&apos;s design, business development
                  </span>
                </p>
                <p className="text-xl lg:text-xl px-2 mb-6 flex-shrink-0 text-[#A5A5A5]">
                  or anything else in between you&apos;re working on.
                </p>
              </div>
              <div className="w-full h-px bg-white/30 rounded-full"></div>
              <div className="w-full flex justify-between">
                <div className="flex flex-col mt-6">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42.5 22.5C42.5 32.175 34.1 40 23.75 40L21.425 42.8L20.05 44.4501C18.875 45.8501 16.625 45.55 15.85 43.875L12.5 36.4999C7.95 33.2999 5 28.225 5 22.5C5 12.825 13.4 5 23.75 5C31.3 5 37.825 9.17502 40.75 15.175C41.875 17.4 42.5 19.875 42.5 22.5Z"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M55.0008 32.1507C55.0008 37.8757 52.0508 42.9508 47.5008 46.1508L44.1508 53.5257C43.3758 55.2007 41.1258 55.5258 39.9508 54.1008L36.2508 49.6507C30.2008 49.6507 24.8008 46.9758 21.4258 42.8008L23.7508 40.0008C34.1008 40.0008 42.5008 32.1758 42.5008 22.5008C42.5008 19.8758 41.8758 17.4008 40.7508 15.1758C48.9258 17.0508 55.0008 23.9507 55.0008 32.1507Z"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 22.5H30"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-3xl py-2 mt-2 font-medium">
                    Fast Response
                  </p>
                  <p className="text-[#A5A5A5]">
                    Quick and attentive communication to
                  </p>
                  <p className="text-[#A5A5A5]">
                    keep everything moving smoothly.
                  </p>
                </div>
                <div className="flex flex-col mt-6">
                  <div className="relative">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.7496 42.5H45.2246C49.9746 42.5 52.4746 40 52.4746 35.25V5H7.47461V35.25C7.49961 40 9.99962 42.5 14.7496 42.5Z"
                        stroke="white"
                        strokeWidth="4"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 5H55"
                        stroke="white"
                        strokeWidth="4"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 55L30 50V42.5"
                        stroke="white"
                        strokeWidth="4"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M40 55L30 50"
                        stroke="white"
                        strokeWidth="4"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.75 27.5L26.625 20.925C27.25 20.4 28.075 20.55 28.5 21.25L31.5 26.25C31.925 26.95 32.75 27.075 33.375 26.575L41.25 20"
                        stroke="white"
                        strokeWidth="4"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-3xl font-medium py-2 mt-2">
                      Structured Next Steps
                    </p>
                    <p className="text-[#A5A5A5]">
                      Simple and well-outlined actions that guide
                    </p>

                    <p className="text-[#A5A5A5]">
                      your progress with clarity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 h-screen py-15 flex justify-end">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-between h-full w-5/6 bg-[#fafafa] p-6 rounded-xl backdrop-blur-md"
              >
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#131313] from-0% to-[#FFFFFF] to-90% bg-[length:200%_100%] bg-clip-text text-transparent">
                  NFLDFAA.
                </h1>

                <p className="xl:text-5xl md:text-4xl text-[#131313] font-medium py-5">
                  Thinking About Starting A Project?
                </p>

                {submitStatus.type && (
                  <div
                    className={`p-3 rounded-lg mb-4 ${
                      submitStatus.type === "success"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg text-[#131313] font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-[#131313] placeholder-gray-400 focus:outline-none focus:border-gray-400"
                  />
                </div>
                <div className="py-4">
                  <label
                    htmlFor="email"
                    className="block text-lg text-[#131313] font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-[#131313] placeholder-gray-400 focus:outline-none focus:border-gray-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg text-[#131313] font-medium"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    placeholder="Your Message"
                    rows={1}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-[#131313] placeholder-gray-400 focus:outline-none focus:border-gray-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#131313] text-white font-semibold py-3 mt-7 rounded-full hover:bg-[#000000] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                <p className="text-sm text-gray-300 text-center mt-4">
                  By submitting, you acknowledge and accept my terms and privacy
                  policy, along with the way your data will be managed.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
