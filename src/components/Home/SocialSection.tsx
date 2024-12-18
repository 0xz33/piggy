import Image from 'next/image'

const SOCIAL_LINKS = [
  { href: "https://x.com/based_piggy", icon: "/icons/logo-01.png", alt: "X" },
  { href: "https://t.me/piggyisforthepeople", icon: "/icons/logo-02.png", alt: "Telegram" },
  { href: "https://dexscreener.com/base/0xf16eaf2801d9ded435b7fc5f0ec78048c4142c3e", icon: "/icons/logo-03.png", alt: "Dexscreener" },
  { href: "/onlypiggys", icon: "/icons/logo-04.png", alt: "OnlyPiggys" },
] as const;

const NERD_LINKS = [
  { href: "https://www.coingecko.com/en/coins/piggy-2", label: "COINGECKO" },
  { href: "https://app.uniswap.org/explore/tokens/base/0xe3cf8dbcbdc9b220ddead0bd6342e245daff934d", label: "UNISWAP" },
  { href: "https://dexscreener.com/base/0xf16eaf2801d9ded435b7fc5f0ec78048c4142c3e", label: "DEXSCREENER" },
  { href: "https://basescan.org/token/0xe3CF8dBcBDC9B220ddeaD0bD6342E245DAFF934d", label: "BASESCAN" },
  { href: "https://superform.xyz", label: "GO TO SUPERFORM" },
] as const;

export default function SocialSection() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-4xl font-[900] mb-8 text-black">ALL MY LINKS</h2>
        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-20">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.alt}
              href={link.href}
              className="border border-white p-4 hover:bg-black hover:text-[#FF1493] transition-colors"
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
        <h2 className="text-4xl font-[900] mb-8 text-black">ALL MY NERD LINKS</h2>
        <div className="flex flex-col gap-4 w-full max-w-md">
          {NERD_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="border border-white px-8 py-4 font-[500] text-xl hover:bg-white hover:text-[#FF1493] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

    </section>
  )
} 