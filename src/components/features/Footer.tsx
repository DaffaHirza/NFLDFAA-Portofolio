"use client";

import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
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
  };

  return (
    <footer className="relative overflow-hidden bg-[#fafafa]">
      <div className="w-full px-6 my-6 lg:px-12 xl:px-20">
        <div className="flex flex-col lg:flex-row justify-between my-12 py-5 gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/6285117300763?text=${encodeURIComponent(
                  "Halo, Saya ingin mengajak Anda berkolaborasi dalam sebuah proyek. Mari kita bahas langkah selanjutnya!"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-gray-800 hover:text-black"
              >
                +(62) 85117300763
              </a>
            </div>
            <div className="flex items-center gap-2">
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
              <a
                href="mailto:daffanaufalathallah@gmail.com"
                className="text-2xl underline underline-offset-4 font-medium text-gray-800 hover:text-black"
              >
                daffanaufalathallah@gmail.com
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-20">
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-gray-600 tracking-widest">
                Section
              </h3>
              <nav className="flex flex-col gap-3">
                <a
                  href="#About"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("About");
                  }}
                  className="text-lg font-semibold text-gray-800 hover:text-black transition cursor-pointer"
                >
                  About Me
                </a>
                <a
                  href="#Services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("Services");
                  }}
                  className="text-lg font-semibold text-gray-800 hover:text-black transition cursor-pointer"
                >
                  My Services
                </a>
                <a
                  href="#Projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("Projects");
                  }}
                  className="text-lg font-semibold text-gray-800 hover:text-black transition cursor-pointer"
                >
                  Portfolio
                </a>
                <a
                  href="#Contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("Contact");
                  }}
                  className="text-lg font-semibold text-gray-800 hover:text-black transition cursor-pointer"
                >
                  Contact Us
                </a>
              </nav>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-gray-600 tracking-widest">
                Social
              </h3>
              <nav className="flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/nfldfaa_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-gray-800 hover:text-black transition flex items-center gap-4"
                >
                  <p>Instagram</p>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.7969 12.7871L26.8119 12.7871L26.8119 22.8021"
                      stroke="#A5A5A5"
                      strokeWidth="1.75"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.7871 26.8105L26.6712 12.9265"
                      stroke="#A5A5A5"
                      strokeWidth="1.75"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="https://dribbble.com/daffanaufal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-gray-800 hover:text-black transition flex items-center gap-7"
                >
                  Dribbble
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.7969 12.7871L26.8119 12.7871L26.8119 22.8021"
                      stroke="#A5A5A5"
                      strokeWidth="1.75"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.7871 26.8105L26.6712 12.9265"
                      stroke="#A5A5A5"
                      strokeWidth="1.75"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@nfldfaa01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-gray-800 hover:text-black transition flex items-center gap-7"
                >
                  YouTube
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.7969 12.7871L26.8119 12.7871L26.8119 22.8021"
                      stroke="#A5A5A5"
                      strokeWidth="1.75"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.7871 26.8105L26.6712 12.9265"
                      stroke="#A5A5A5"
                      strokeWidth="1.75"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/nfldfaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-gray-800 hover:text-black transition flex items-center gap-7"
                >
                  LinkedIn
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.7969 12.7871L26.8119 12.7871L26.8119 22.8021"
                      stroke="#A5A5A5"
                      strokeWidth="1.75"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.7871 26.8105L26.6712 12.9265"
                      stroke="#A5A5A5"
                      strokeWidth="1.75"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 mb-12 pb-5">
          <div className="col-2 flex flex-col items-start gap-2">
            <h2 className="text-[9rem] leading-none font-bold bg-[linear-gradient(to_right,#131313_0%,#131313_10%,#4d4d4d_30%,#9d9d9d_60%,#d6d6d6_85%,#8a8a8a_100%)] bg-clip-text text-transparent">
              NFLDFAA.
            </h2>
            <p className="text-2xl px-2 font-semibold text-[#131313] -mt-1">
              Portfolio
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#131313]">
        <div className="max-w-full mx-auto flex items-center justify-between px-10 lg:px-12 xl:px-20 py-4 gap-6">
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <p>Created by:</p>
            <div className="w-10 h-10rounded-full flex items-center justify-center text-white font-semibold text-sm">
              <Image
                src="/assets/img/foto.jpg"
                alt="Pattern"
                width={160}
                height={400}
                className="w-10 h-10 rounded-full object-cover -rotate-45"
              />
            </div>
            <span className="text-white font-semibold">
              Daffa Naufal Athallah
            </span>
          </div>
          <p className="text-gray-400 text-sm text-right uppercase">
            © {currentYear} NFLDFAA.PORTOFOLIO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
