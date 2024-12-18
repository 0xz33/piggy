import Image from 'next/image'

export default function HowToBuySection() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-[900] italic mb-12">HOW TO BUY $PIGGY ON BASE</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="flex flex-col items-center">
            <p className="text-xl font-[500] italic mb-4">STEP ONE</p>
            <Image
              src="/icons/metamask.svg"
              alt="Buy ETH"
              width={100}
              height={100}
              className="mb-4"
            />
            <p className="font-[500] italic">BUY ETH</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl font-[500] italic mb-4">STEP TWO</p>
            <Image
              src="/icons/base.svg"
              alt="Bridge to Base"
              width={100}
              height={100}
              className="mb-4"
            />
            <p className="font-[500] italic">BRIDGE TO BASE</p>
          </div>
        </div>
        <button className="bg-black text-white px-12 py-4 text-xl font-[900] italic">
          LAUNCH
        </button>
      </div>
    </section>
  )
} 