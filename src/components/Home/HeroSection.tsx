import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col bg-white max-h-screen">
      {/* Background Text Pattern - Static */}
      <div className="absolute inset-0 w-full overflow-hidden select-none pointer-events-none">
        <div className="whitespace-nowrap text-white/30 font-[900] italic text-[clamp(2rem,4vw,2.5rem)] leading-[50px] -z-2">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap">
              {Array.from({ length: 8 }).map((_, j) => (
                <span key={j} className="inline-block mx-2 text-deeppink/50">PIGGY IS FOR THE PEOPLE</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 flex-1 flex flex-col items-center justify-between">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center z-10">
          {/* Piggy Logo */}
          <div className="w-full max-w-[500px]">
            <Image
              src="/icons/PiggyLogoPink.svg"
              alt="Piggy Token"
              width={500}
              height={185}
              priority
              className="w-full h-80"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row">
            <a
              href="https://app.uniswap.org/explore/tokens/base/0xe3cf8dbcbdc9b220ddead0bd6342e245daff934d"
              className="bg-black text-deeppink pt-8 pb-6 py-3 rounded-full min-w-[240px] font-[900] italic text-3xl hover:bg-lime hover:text-black transition-all"
            >
              Buy $PIGGY
            </a>
          </div>
        </div>

        {/* Powered by Superform */}
        <div className="max-w-xs mx-auto mt-4 text-center border-4 border-black z-10 absolute left-1/2 -translate-x-1/2">
          <p className="bg-black text-white text-xl font-[500] italic px-2 py-1">
            POWERED BY
          </p>
          <div className="bg-white p-4">
            <Image
              src="/superformLogo.svg"
              alt="Base"
              width={200}
              height={40}
              className="w-auto h-8 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 