'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function CountdownSection() {
  const [daysLeft, setDaysLeft] = useState(6)

  useEffect(() => {
    const targetDate = new Date('2024-12-25T00:00:00Z')
    const updateDays = () => {
      const now = new Date()
      const diff = targetDate.getTime() - now.getTime()
      const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)))
      setDaysLeft(days)
    }

    updateDays()
    const interval = setInterval(updateDays, 1000 * 60 * 60) // Update every hour
    return () => clearInterval(interval)
  }, [])

  const lightBulbs = "🔥".repeat(30)
  const flames = "🔥".repeat(30)

  return (
    <>
      <section className="relative pt-20 text-white text-center bg-red">
        <div className="container mx-auto px-4 flex flex-col items-center gap-4">
          <div className="bg-white text-deeppink px-8 py-2 font-[900] text-3xl">
            IMPORTANT!
          </div>

          <div className="text-2xl my-4">
            {lightBulbs}
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-[clamp(4rem,10vw,8rem)] font-[900] leading-none">
              {daysLeft} days left
            </h2>
            <p className="text-[clamp(2rem,4vw,3rem)] font-[500]">
              until
            </p>
            <p className="text-[clamp(2.5rem,5vw,4rem)] font-[900]">
              THE CHRISTMAS ROAST
            </p>
          </div>

          <div className="text-2xl my-4">
            {flames}
          </div>

          <div className="max-w-3xl text-center">
            <p className="text-[clamp(1.5rem,3vw,2rem)] font-[500] mb-2">
              ALL
            </p>
            <p className="text-[clamp(2rem,4vw,3rem)] font-[900] mb-2">
              UNCLAIMED PIGGY(~10%)
            </p>
            <p className="text-[clamp(1.5rem,3vw,2rem)] font-[500] mb-4">
              WILL BE
            </p>
          </div>

          <div className="relative w-full h-40 overflow-hidden">
            <div className="absolute inset-0 whitespace-nowrap text-[clamp(4rem,8vw,8rem)] font-[900] flex">
              <div className="animate-marquee flex-shrink-0 flex">
                <div className="text-stroke-2 flex-shrink-0 ">
                  ROASTED ROASTED ROASTED ROASTED ROASTED&nbsp;
                </div>
                <div className="text-stroke-2 flex-shrink-0 ">
                  ROASTED ROASTED ROASTED ROASTED ROASTED&nbsp;
                </div>
              </div>
              <div className="animate-marquee flex-shrink-0 flex" aria-hidden="true">
                <div className="text-stroke-2 flex-shrink-0 ">
                  ROASTED ROASTED ROASTED ROASTED ROASTED&nbsp;
                </div>
                <div className="text-stroke-2 flex-shrink-0">
                  ROASTED ROASTED ROASTED ROASTED ROASTED&nbsp;
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-12 mt-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="text-[clamp(6rem,16vw,16rem)] leading-[1]">&amp;THEN</span>
            ))}
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center text-center bg-red h-auto py-32 px-2">
        <p className="text-[clamp(5rem,16vw,16rem)] font-[900] leading-[0.8]">
          A
        </p>
        <p className="text-[clamp(5rem,16vw,16rem)] font-[900] leading-[0.8]">
          NEW
        </p>
        <p className="text-[clamp(5rem,16vw,16rem)] font-[900] leading-[0.8]">
          ERA
        </p>
        <p className="text-[clamp(8rem,20vw,20rem)] font-[900] leading-[1.0]">
          BEGINS
        </p>
        <div className="w-full max-w-xs mx-auto">
          Sponsored by
          <Image
            src="/icons/animalFarmLogo.svg"
            alt="Base"
            width={200}
            height={40}
            className="w-auto h-8 mx-auto"
          />
        </div>
      </div>
    </>
  )
} 
