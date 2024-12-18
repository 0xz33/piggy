import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import HowToBuySection from './HowToBuySection'
import FeatureSection from './FeatureSection'
import CountdownSection from './CountdownSection'
import NewEraSection from './NewEraSection'
import FAQSection from './FAQSection'
import AdvancedFinanceSection from './AdvancedFinanceSection'
import FooterSection from './FooterSection'
import SocialSection from './SocialSection'

export default function HomePage() {
  return (
    <div className="relative bg-[#FF1493] text-white overflow-hidden font-helvetica">
      <HeroSection />
      <StatsSection />
      <HowToBuySection />
      <FeatureSection />
      <CountdownSection />
      <NewEraSection />
      <FAQSection />
      <AdvancedFinanceSection />
      <FooterSection />
      <SocialSection />
    </div>
  )
} 