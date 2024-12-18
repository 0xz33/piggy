'use client'

import Image from "next/image";

export default function FooterSection() {
  const scrollToTop = () => {
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-[500px] mx-auto">
        <Image
          src="/PiggyLogoWhite.svg"
          alt="Piggy Token"
          width={500}
          height={185}
          priority
          className="w-full h-auto"
        />
      </div>
      <p className="text-5xl font-[500] mt-8">IS FOR THE PEOPLE</p>
      <button
        onClick={scrollToTop}
        className="mt-8 border-2 border-white px-8 py-3 font-[500] hover:bg-white hover:text-black transition-all"
        aria-label="Scroll to top of page"
      >
        GO TO TOP
      </button>
    </footer>
  )
} 