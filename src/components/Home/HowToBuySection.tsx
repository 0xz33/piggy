'use client'

import Image from 'next/image'

export default function HowToBuySection() {
  return (
    <section className="bg-deeppink py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-white font-[900] text-6xl text-center mb-16">
          HOW TO BUY $PIGGY<br />ON BASE
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Step One */}
          <div className="flex flex-col items-center">
            <h3 className="text-white text-4xl font-bold mb-8">STEP ONE (1)</h3>
            <a
              href="https://jumper.exchange/?fromChain=1&fromToken=0x0000000000000000000000000000000000000000&toChain=8453&toToken=0x0000000000000000000000000000000000000000"
              className="block w-full hover:scale-[1.02] transition-transform"
            >
              <div className="bg-white p-8 w-full aspect-video flex flex-col items-center justify-center">
                <div className="relative mb-4">
                  <Image
                    src="/icons/ethToken.png"
                    alt="BASE Token"
                    width={80}
                    height={80}
                  />
                  <Image
                    src="/icons/baseToken.png"
                    alt="Base Logo"
                    width={30}
                    height={30}
                    className="absolute -bottom-2 right-[0]"
                  />
                </div>
                <span className="text-deeppink font-bold text-2xl underline">GET BASE ETH</span>
              </div>
            </a>
          </div>

          {/* Step Two */}
          <div className="flex flex-col items-center">
            <h3 className="text-white text-4xl font-bold mb-8">STEP TWO (2)</h3>
            <a
              href="https://app.uniswap.org/explore/tokens/base/0xe3cf8dbcbdc9b220ddead0bd6342e245daff934d"
              className="block w-full hover:scale-[1.02] transition-transform"
            >
              <div className="bg-white p-8 w-full aspect-video flex flex-col items-center justify-center">
                <div className="relative mb-4">
                  <Image
                    src="/icons/piggyToken.png"
                    alt="PIGGY Token"
                    width={80}
                    height={80}
                  />
                  <Image
                    src="/icons/baseToken.png"
                    alt="Base Logo"
                    width={30}
                    height={30}
                    className="absolute -bottom-2 right-[0]"
                  />
                </div>
                <span className="text-deeppink font-bold text-2xl underline">BUY PIGGY</span>
              </div>
            </a>
          </div>
        </div>

        {/* Powered By Base */}
        <div className="max-w-xs mx-auto text-center border-8 border-black mt-16">
          <p className="bg-black text-white text-2xl font-[500] px-4 py-2">
            POWERED BY
          </p>
          <div className="bg-white p-8">
            <Image
              src="/icons/baseLogo.svg"
              alt="Base"
              width={200}
              height={40}
              className="w-auto h-12 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 