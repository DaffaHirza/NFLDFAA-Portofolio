"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface CardProps {
  imageSrc: string;
  title?: string;
  description?: string;
  className?: string;
}

export default function Card({
  imageSrc,
  title,
  description,
  className = "",
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative h-full rounded-3xl overflow-hidden bg-gray-100 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={imageSrc}
        alt={title || "Card image"}
        fill
        className={`object-cover transition-all duration-500 ${
          isHovered ? "grayscale blur-xs" : "grayscale scale-100"
        }`}
      />

      {/* Original overlay */}
      {(title || description) && (
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
          {title && (
            <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
          )}
          {description && (
            <p className="text-white/90 text-sm">{description}</p>
          )}
        </div>
      )}

      {/* Hover overlay */}
      <div
        className={`absolute inset-0 bg-black/50 flex flex-col justify-between p-8 rounded-3xl transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex-1 flex">
          <p className="text-white text-3xl md:text-3xl font-bold leading-tight">
            Ready To Dive Deeper Into The Details Of Your Project?
          </p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <Link
            href="#Contact"
            className="text-white text-lg font-semibold hover:opacity-80 transition"
          >
            Let&apos;s Talk
          </Link>
          <svg
            width="28"
            height="28"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M16.7969 12.7871L26.8119 12.7871L26.8119 22.8021"
              stroke="white"
              strokeWidth="1.75"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.7871 26.8105L26.6712 12.9265"
              stroke="white"
              strokeWidth="1.75"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
