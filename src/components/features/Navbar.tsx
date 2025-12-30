"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);

    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;

      const sections = ["Hero", "About", "Services", "Projects"];
      const targetIndex = sections.indexOf(id);

      if (targetIndex === -1) {
        const rect = el.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        window.scrollTo({
          top: scrollTop + rect.top,
          behavior: "smooth",
        });
        return;
      }

      // Hitung total scroll dengan viewport height untuk sticky sections
      let totalScroll = 0;

      for (let i = 0; i < targetIndex; i++) {
        // Setiap section sticky mengambil 1 viewport height
        totalScroll += window.innerHeight;
      }

      window.scrollTo({
        top: totalScroll,
        behavior: "smooth",
      });
    }, 300);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#fafafa]" : "bg-[#fafafa]"
        }`}
      >
        <nav className="container mx-auto lg:px-12 xl:px-20 py-4 md:py-5 flex justify-between items-center">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-[#131313] to-[#FFFFFF] bg-clip-text text-transparent"
            >
              NFLDFAA.
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            {menuOpen ? (
              <svg
                width="81"
                height="20"
                viewBox="0 0 81 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.416016"
                  y="16.6328"
                  width="80"
                  height="3"
                  transform="rotate(-12 0.416016 16.6328)"
                  fill="#131313"
                />
                <rect
                  x="0.623047"
                  y="0.132812"
                  width="80"
                  height="3"
                  transform="rotate(12 0.623047 0.132812)"
                  fill="#131313"
                />
              </svg>
            ) : (
              <svg
                width="80"
                height="12"
                viewBox="0 0 80 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="80" height="3" fill="#131313" />
                <rect y="9" width="80" height="3" fill="#131313" />
              </svg>
            )}
          </button>
        </nav>
      </header>

      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-[#fafafa] z-40 transition-transform duration-700 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full px-15 gap-11 h-full flex flex-col items-center justify-center space-y-8">
          <a
            href="#About"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("About");
            }}
            className="w-full text-7xl flex text-[#131313] items-center justify-between font-semibold hover:opacity-70 transition-opacity"
          >
            About
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.5625 14.9727L45.0232 14.9727L45.0232 36.4333"
                stroke="#A5A5A5"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.9746 45.0273L44.7261 15.2758"
                stroke="#A5A5A5"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#Services"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("Services");
            }}
            className="w-full text-7xl flex text-[#131313] items-center justify-between font-semibold hover:opacity-70 transition-opacity"
          >
            Services
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.5625 14.9727L45.0232 14.9727L45.0232 36.4333"
                stroke="#A5A5A5"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.9746 45.0273L44.7261 15.2758"
                stroke="#A5A5A5"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#Projects"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("Projects");
            }}
            className="w-full text-7xl text-[#131313] flex items-center justify-between font-semibold hover:opacity-70 transition-opacity"
          >
            Portofolio
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.5625 14.9727L45.0232 14.9727L45.0232 36.4333"
                stroke="#A5A5A5"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.9746 45.0273L44.7261 15.2758"
                stroke="#A5A5A5"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#Contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("Contact");
            }}
            className="w-full text-7xl flex text-[#131313] items-center justify-between font-semibold hover:opacity-70 transition-opacity"
          >
            Contact
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.5625 14.9727L45.0232 14.9727L45.0232 36.4333"
                stroke="#A5A5A5"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.9746 45.0273L44.7261 15.2758"
                stroke="#A5A5A5"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
