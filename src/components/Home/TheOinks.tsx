export default function FeatureSection() {
  const features = [
    "Have Some Fun",
    "Grow The Community",
    "Be Your Own Bank",
  ]

  return (
    <section className="relative py-40 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-[clamp(6rem,8vw,8rem)] font-[900] italic mb-8 text-black text-center">THE 3 OINKS</h2>
        <div className="flex flex-col gap-8 max-w-3xl mx-auto justify-center">
          {features.map((text) => (
            <div
              key={text}
              className="bg-deeppink px-8 py-6 text-white text-[clamp(2rem,4vw,2.5rem)] font-[900] italic text-center hover:bg-lime hover:text-deeppink transition-all"
            >
              {text}
            </div>
          ))}
          <img src="/icons/PiggyLogoPink.svg" alt="Piggy" className="w-72 h-72 mx-auto" />
        </div>
      </div>
    </section>
  )
} 