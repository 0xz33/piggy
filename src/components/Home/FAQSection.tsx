import Link from 'next/link';

export default function FAQSection() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-[900] italic mb-12 text-center">FAQs</h2>
        <div className="flex flex-col gap-6 max-w-2xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="text-center bg-white text-black px-8 py-4 text-xl font-[500] italic text-left">
              <h3 className="text-3xl font-[900] italic mb-2">Is Piggy Involved With<br />AI (ARTIFICIAL INTELLIGENCE)?</h3>
              <p className="text-3xl text-deeppink font-[900] mb-2">NO!</p>
              <Link href="/piggyAI" className="inline-block px-4 py-2" style={{ backgroundColor: '#0000FF' }}>
                <span className="text-lime text-2xl font-bold">(& YES)</span>
              </Link>
            </div>
            <div className="text-center bg-white text-black px-8 py-4 text-xl font-[500] italic text-left">
              <h3 className="text-3xl font-[900] italic mb-2">Is Piggy Involved With<br />ARTIFICIAL INTELLIGENCE<br />AGENTS?</h3>
              <p className="text-3xl text-deeppink font-[900] mb-2">NO!</p>
              <Link href="/piggyAI" className="inline-block px-4 py-2" style={{ backgroundColor: '#0000FF' }}>
                <span className="text-lime text-2xl font-bold">(& YES)</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 