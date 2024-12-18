import Image from 'next/image'

export default function HowToBuySection() {
  const socialLinks = [
    { icon: "/icons/logo-01.png", alt: "X (Twitter)", href: "#" },
    { icon: "/icons/logo-02.png", alt: "Telegram", href: "#" },
    { icon: "/icons/logo-03.png", alt: "Dextools", href: "#" },
    { icon: "/icons/logo-04.png", alt: "Etherscan", href: "#" },
  ]

  const buyLinks = [
    {
      title: "BUY BASE ETH",
      icon: "/icons/ethToken.png",
      href: "#",
      className: "bg-[#4F6EF7]"
    },
    {
      title: "BUY PIGGY",
      icon: "/icons/piggyToken.png",
      href: "#",
      className: "bg-deeppink"
    }
  ]

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4 text-center">
        {/* <h2 className="text-4xl font-[900] italic mb-12">HOW TO BUY $PIGGY ON BASE</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          <div className="flex flex-col items-center bg-white p-4 ">
            <p className="text-xl font-[500] text-black italic mb-4">STEP ONE</p>
            <Image
              src="/icons/ethToken.png"
              alt="Buy ETH"
              width={100}
              height={100}
              className="mb-4"
            />
            <p className="font-[500] italic text-deeppink">BUY BASE ETH</p>
          </div>
          <div className="flex flex-col items-center bg-white p-4">
            <p className="text-xl font-[500] text-black italic mb-4">STEP TWO</p>
            <Image
              src="/icons/piggyToken.png"
              alt="Bridge to Base"
              width={100}
              height={100}
              className="mb-4"
            />
            <p className="font-[500] italic text-deeppink">BUY $PIGGY</p>
          </div>
        </div> */}

        <div className="max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-[900] italic mb-8 text-black">ALL MY LINKS</h2>
          <div className="grid grid-cols-4 gap-12 mb-16 ">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="p-6 aspect-square flex items-center justify-center hover:opacity-90 transition-opacity border border-white p-4"
              >
                <Image
                  src={link.icon}
                  alt={link.alt}
                  width={40}
                  height={40}
                  className="w-full h-auto"
                />
              </a>
            ))}
          </div>

          {/* <div className="grid sm:grid-cols-2 gap-8">
            {buyLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`${link.className} p-6 flex items-center justify-center gap-4 hover:opacity-90 transition-opacity`}
              >
                <Image
                  src={link.icon}
                  alt={link.title}
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-white font-[900] italic">{link.title}</span>
              </a>
            ))}
          </div> */}
        </div>

        <div className="max-w-xs mx-auto text-center border-8 border-black">
          <p className="bg-black text-white text-2xl font-[500] italic px-4 py-2 ">
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