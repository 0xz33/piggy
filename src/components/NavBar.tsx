'use client'

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent py-4 px-4">
      <div className="container mx-auto flex md:justify-end justify-center">
        <a
          href="https://app.uniswap.org/explore/tokens/base/0xe3cf8dbcbdc9b220ddead0bd6342e245daff934d"
          className="bg-lime hover:bg-black text-deeppink px-8 py-3 font-[900] italic text-xl transition-colors min-w-[240px] text-center mix-blend-exclusion"
        >
          BUY
        </a>
      </div>
    </nav>
  )
} 