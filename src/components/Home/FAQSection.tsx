export default function FAQSection() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-[900] italic mb-12 text-center">FAQs</h2>
        <div className="flex flex-col gap-6 max-w-2xl mx-auto">
          <button className="w-full bg-white text-[#FF1493] px-8 py-4 text-xl font-[500] italic text-left">
            IS PIGGY AUDITED? YES!<br />
            A FIRST CLASS, FULL PROTOCOL AUDIT
          </button>
          <button className="w-full bg-white text-[#FF1493] px-8 py-4 text-xl font-[500] italic text-left">
            IS PIGGY VERIFIED? YES!<br />
            FULL PROTOCOL VERIFICATION
          </button>
        </div>
      </div>
    </section>
  )
} 