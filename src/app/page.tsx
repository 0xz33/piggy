import Image from "next/image";

const SOCIAL_LINKS = [
  { href: "https://x.com/based_piggy", icon: "/icons/logo-01.png", alt: "X" },
  { href: "https://t.me/piggyisforthepeople", icon: "/icons/logo-02.png", alt: "Telegram" },
  { href: "https://dextools.io/app/en/base/pair-explorer/0x111111111117dc0aa78b770fa6a738034120c302", icon: "/icons/logo-03.png", alt: "Dextools" },
  { href: "https://basescan.org/token/0xe3CF8dBcBDC9B220ddeaD0bD6342E245DAFF934d", icon: "/icons/logo-04.png", alt: "BaseScan" },
] as const;

const NERD_LINKS = [
  { href: "https://www.coingecko.com/en/coins/piggy-2", label: "COINGECKO" },
  { href: "https://app.uniswap.org/explore/tokens/base/0xe3cf8dbcbdc9b220ddead0bd6342e245daff934d", label: "UNISWAP" },
  { href: "https://basescan.org/token/0xe3CF8dBcBDC9B220ddeaD0bD6342E245DAFF934d", label: "BASESCAN" },
  { href: "https://superform.xyz", label: "GO TO SUPERFORM" },
] as const;

export default function Home() {
  return (
    <div className="relative bg-[#FF1493] text-white overflow-hidden font-helvetica">
      {/* Background Text Pattern */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
        <div className="animate-slide whitespace-nowrap text-white/20 font-[900] italic text-[clamp(2rem,4vw,3rem)] leading-[50px]">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap">
              {Array.from({ length: 30 }).map((_, j) => (
                <span key={j} className="inline-block mx-2">PIGGY IS FOR THE PEOPLE</span>
              ))}
            </div>
          ))}
        </div>
        <div className="animate-slide-2 whitespace-nowrap text-white/20 font-[900] italic text-[clamp(2rem,4vw,3rem)] leading-[50px]">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap">
              {Array.from({ length: 30 }).map((_, j) => (
                <span key={j} className="inline-block mx-2">PIGGY IS FOR THE PEOPLE</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section - Full Height */}
      <section className="relative h-screen flex flex-col">
        <div className="container mx-auto px-4 flex-1 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Piggy Logo */}
            <div className="w-full max-w-[500px] mb-8">
              <Image
                src="/PiggyLogoWhite.svg"
                alt="Piggy Token"
                width={500}
                height={185}
                priority
                className="w-full h-auto"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="#"
                className="bg-white text-[#FF1493] px-8 py-3 rounded-full font-[900] italic text-lg hover:bg-opacity-90 transition-all"
              >
                Buy $PIGGY
              </a>
              <a
                href="#"
                className="border-2 border-white px-8 py-3 rounded-full font-[900] italic text-lg hover:bg-white hover:text-[#FF1493] transition-all"
              >
                Join Community
              </a>
            </div>
          </div>

          {/* Powered by Superform */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center px-2 flex flex-col items-center">
            <p className="text-2xl font-[500] italic bg-black px-4 py-2 w-full">
              POWERED BY
            </p>
            <div className="bg-white p-4 w-full flex items-center justify-center">
              <Image
                src="/SuperformLogo.svg"
                alt="Superform"
                width={200}
                height={40}
                className="w-auto h-8"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Scrollable */}
      <section className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-[900] italic mb-4">
            CURRENT PRICE
          </h2>
          <p className="text-6xl md:text-8xl font-[900] italic mb-8">
            $.00001234
          </p>

          {/* FDV */}
          <div className="mb-8">
            <p className="text-xl font-[500] italic mb-2">FDV</p>
            <p className="text-4xl md:text-5xl font-[900] italic">
              $2,222,222
            </p>
          </div>

          {/* Holders */}
          <div className="mb-12">
            <p className="text-xl font-[500] italic mb-2">HOLDERS</p>
            <p className="text-4xl md:text-5xl font-[900] italic">
              30,000
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 w-full max-w-md">
            <a
              href="#"
              className="bg-white text-[#FF1493] px-8 py-4 font-[900] italic text-2xl hover:bg-opacity-90 transition-all"
            >
              BUY $PIGGY
            </a>
            <a
              href="#"
              className="border-2 border-white px-8 py-4 font-[900] italic text-2xl hover:bg-white hover:text-[#FF1493] transition-all"
            >
              BUY GAS FOR BASE
            </a>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          {/* Social Icons */}
          <div className="flex justify-center gap-8 mb-20">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.alt}
                href={link.href}
                className="border border-white p-4 hover:bg-white hover:text-[#FF1493] transition-colors"
              >
                <Image
                  src={link.icon}
                  alt={link.alt}
                  width={48}
                  height={48}
                  className="w-12 h-12 transition-all group-hover:invert"
                />
              </a>
            ))}
          </div>

          {/* Nerd Links */}
          <h2 className="text-4xl font-[900] italic mb-8">NERD LINKS</h2>
          <div className="flex flex-col gap-4 w-full max-w-md">
            {NERD_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="border border-white px-8 py-4 font-[500] italic text-xl hover:bg-white hover:text-[#FF1493] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
