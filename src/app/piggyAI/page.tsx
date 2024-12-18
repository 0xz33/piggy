import Image from 'next/image';

export default function PiggyAIPage() {
  return (
    <main className="min-h-screen bg-white bg-deeppink flex flex-col items-center justify-center p-4 gap-8">
      <div className="flex flex-col gap-6 text-center">
        <div className="bg-deeppink px-8 py-4">
          <h2 className="text-5xl font-bold italic">
            <span className="text-lime">A</span>
            <span className="text-white">bsolutely</span>
            {" "}
            <span className="text-lime">I</span>
            <span className="text-white">ntelligent</span>
          </h2>
        </div>

        <div className="bg-deeppink px-8 py-4">
          <h2 className="text-5xl font-bold italic">
            <span className="text-lime">A</span>
            <span className="text-white">lways</span>
            {" "}
            <span className="text-lime">I</span>
            <span className="text-white">nnovative</span>
          </h2>
        </div>

        <div className="bg-deeppink px-8 py-4">
          <h2 className="text-5xl font-bold italic">
            <span className="text-lime">A</span>
            <span className="text-white">dorably</span>
            {" "}
            <span className="text-lime">I</span>
            <span className="text-white">rresistable</span>
          </h2>
        </div>
      </div>

      <Image src="/piggyAI.svg" alt="Piggy AI" width={400} height={400} className="h-12" />
    </main>
  );
}; 