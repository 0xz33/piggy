import HeroSection from './HeroSection'
import HowToBuySection from './HowToBuySection'
import CountdownSection from './CountdownSection'
import AdvancedFinanceSection from './AdvancedFinanceSection'
import FooterSection from './FooterSection'
import SocialSection from './SocialSection'
import TheOinks from './TheOinks'
import StatsSection from './StatsSection'
import FAQSection from './FAQSection'

export default function HomePage() {
  return (
    <div className="relative bg-[#FF1493] text-white overflow-hidden font-helvetica">
      <HeroSection />
      {/* <StatsSection /> */}
      <HowToBuySection />
      <SocialSection />
      <TheOinks />
      <CountdownSection />
      <FAQSection />
      <AdvancedFinanceSection />
      <FooterSection />
    </div>
  )
} 