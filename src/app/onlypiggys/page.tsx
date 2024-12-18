import Image from 'next/image';

export default function OnlyPiggysPage() {
  return (
    <main className="min-h-screen bg-deeppink flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold italic text-white mb-8">ONLYPIGGYS</h1>
        <div className="relative w-[400px] h-[400px] mx-auto mb-8">
          <Image
            src="/onlyPiggy.png"
            alt="OnlyPiggys"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="text-4xl font-bold italic text-white mb-4">COMING SOON</p>
      </div>
    </main>
  );
}; 