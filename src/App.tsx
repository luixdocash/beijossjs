/**
 * Clone of https://sergioliveira.com.br/guia-v1/
 * Guia Prático do Beijo | Sergio Oliveira
 */
import { HeroSection } from './components/HeroSection';
import { MarqueeTicker } from './components/MarqueeTicker';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ModulesSection } from './components/ModulesSection';
import { WhoIsItForSection } from './components/WhoIsItForSection';
import { ComparisonSection } from './components/ComparisonSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { AboutAuthorSection } from './components/AboutAuthorSection';
import { FaqSection } from './components/FaqSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#000724] text-[#EDEEF1] flex flex-col overflow-x-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Marquee Ticker */}
      <MarqueeTicker />

      {/* 3. Testimonials (WhatsApp Prints) */}
      <TestimonialsSection />

      {/* 4. Capabilities (Com este Guia...) */}
      <CapabilitiesSection />

      {/* 5. Modules Delivered & Sub-CTA */}
      <ModulesSection />

      {/* 6. Who is it for (3 Persona Cards) */}
      <WhoIsItForSection />

      {/* 7. Comparison (SEM vs COM Estratégia) */}
      <ComparisonSection />

      {/* 8. Pricing & Special Offer */}
      <PricingSection />

      {/* 9. 7-Day Guarantee */}
      <GuaranteeSection />

      {/* 10. About Sergio Oliveira */}
      <AboutAuthorSection />

      {/* 11. FAQ Accordion */}
      <FaqSection />

      {/* 12. Footer & Legal Disclaimer */}
      <FooterSection />
    </div>
  );
}
