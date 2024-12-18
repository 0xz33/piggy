import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col">
      {/* Background Text Pattern - Static */}
      <div className="absolute inset-0 w-full overflow-hidden select-none pointer-events-none">
        <div className="whitespace-nowrap text-white/20 font-[900] italic text-[clamp(2rem,4vw,3rem)] leading-[50px]">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap">
              {Array.from({ length: 8 }).map((_, j) => (
                <span key={j} className="inline-block mx-2">PIGGY IS FOR THE PEOPLE</span>
              ))}
            </div>
          ))}
        </div>
      </div>

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
  )
} 