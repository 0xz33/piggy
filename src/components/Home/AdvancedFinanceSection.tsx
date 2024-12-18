import Image from "next/image";

export default function AdvancedFinanceSection() {
  return (
    <section className="relative py-32 bg-white text-black">
      <div className="container mx-auto px-4 flex flex-col items-center">
        this section is for
        <div className="mt-8 text-center">
          <div className="w-full max-w-[500px] mb-8">
            <Image
              src="/icons/PiggyLogoPink.svg"
              alt="Piggy Token"
              width={500}
              height={185}
              priority
              className="w-full h-auto"
            />
          </div>
          <p className="text-deeppink text-[clamp(1.5rem,3vw,2rem)] font-[900] italic">
            PROFESSIONALS
          </p>
          <p className="text-deeppink text-[clamp(1.5rem,3vw,2rem)] font-[900] italic">
            ONLY
          </p>
        </div>

        <h2 className="text-[clamp(3rem,5vw,5rem)] font-[900] italic text-center leading-none my-20 font-bdex">
          ADVANCED <br />ONCHAIN<br />FINANCE
        </h2>

        <div className="flex flex-col gap-8 w-full max-w-2xl">
          <button className="w-full border-2 border-black px-8 py-6 text-[clamp(1.5rem,3vw,2rem)] font-[900] italic text-center hover:bg-black hover:text-white transition-all">
            PROVIDE ETH/PIGGY LIQUIDITY
          </button>

          <button className="w-full border-2 border-black px-8 py-6 text-[clamp(1.5rem,3vw,2rem)] font-[900] italic text-center hover:bg-black hover:text-white transition-all">
            GO TO THE SLOP BUCKET
          </button>
        </div>


      </div>
    </section>
  )
} 