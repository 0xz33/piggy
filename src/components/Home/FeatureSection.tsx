export default function FeatureSection() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {["Build Onchain Wealth", "Build Community", "Grow Community", "Be Your Own Bank"].map((text) => (
            <button
              key={text}
              className="w-full border-2 border-white px-8 py-4 text-2xl font-[900] italic hover:bg-white hover:text-[#FF1493] transition-all"
            >
              {text}
            </button>
          ))}
          <button className="w-full bg-black text-white px-8 py-4 text-2xl font-[900] italic">
            PIGGY!
          </button>
        </div>
      </div>
    </section>
  )
} 