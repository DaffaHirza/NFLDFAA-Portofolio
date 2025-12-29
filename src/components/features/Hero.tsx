"use client";

export default function Hero() {
  return (
    <section
      id="Hero"
      className="h-screen flex items-start justify-center px-3 relative overflow-hidden bg-[#fafafa] sticky top-0 z-10"
    >
      <div className="relative w-full h-full max-h-9/10 rounded-[32px] overflow-hidden">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            src="/assets/video/background.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-black/88"></div>
        </div>

        <div className="relative z-10 h-full flex items-center px-12 xl:px-16">
          <div className="w-full py-12 flex flex-col justify-between">
            <div>
              <p className="text-3xl font-normal leading-none tracking-tighter text-white py-5">
                👋 Hi there, I&apos;m
              </p>
              <h1 className="text-[8.5vw] xl:text-[140px] font-bold leading-[0.85] tracking-wide bg-gradient-to-r from-[#131313] from-[#FFFFFF] text-transparent bg-clip-text mb-8">
                NFLDFAA.
              </h1>
            </div>
            <div className="flex items-center justify-between absolute bottom-12 left-12 right-12 xl:left-16 xl:right-16">
              <div>
                <p className="text-xl text-[#A5A5A5] max-w-xl">
                  No gueswork. No overused formulas. Just well-crafted
                </p>
                <p className="text-xl text-[#A5A5A5] max-w-xl">
                  strategies and reliable to help you build,advance, and thrive
                </p>
              </div>
              <p className="text-[#A5A5A5]">® 2025 NFLDFAA PORTOFOLIO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
