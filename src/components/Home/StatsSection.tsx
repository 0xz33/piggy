import React from 'react'

export default function StatsSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-[900] italic mb-4">
          CURRENT PRICE
        </h2>
        <p className="text-6xl md:text-9xl font-[900] italic mb-8 tracking-wider">
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
      </div>
    </section>
  )
} 