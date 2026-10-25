import React from 'react';
import { GreenOfferCheck, GiftBonusIcon, TrustFireIcon, TrustShieldIcon, TrustAccessIcon, TrustDigitalIcon } from './Icons';
import { getCheckoutUrl, trackInitiateCheckout } from '../utils/checkout';

export const PricingSection: React.FC = () => {
  const checkoutUrl = getCheckoutUrl();

  const deliverables = [
    { text: 'Guia das cantadas infalíveis', isBonus: false },
    { text: 'Cantadas testada e aprovadas', isBonus: false },
    { text: '07 dias de garantia', isBonus: false },
    { text: 'Valor único e sem mensalidade', isBonus: false },
    { text: 'Acesso a atualizações', isBonus: false },
    {
      text: 'Bônus Exclusivo escrito pela Psi. Gabriela Marinho: 21 Práticas para durar mais na hora H.',
      isBonus: true,
    },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-24 bg-[#000724]">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-6">
        
        {/* Pricing Card Outer Box */}
        <div className="max-w-[1000px] mx-auto rounded-3xl bg-[#121D43] border border-[#636363]/60 p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
          
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight">
              Oferta Especial
            </h2>
            <div className="inline-block mt-1 px-4 py-1.5 rounded-full bg-[#FC1A40]/15 border border-[#FC1A40]/40 text-[#E86C85] text-xs sm:text-sm font-semibold tracking-wide uppercase">
              ESTA CONDIÇÃO É VÁLIDA SOMENTE ATÉ HOJE!
            </div>
          </div>

          {/* 2 Columns: Features Left, Checkout CTA Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Deliverables Checklist */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              {deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#EDEEF1] font-normal leading-snug">
                  {item.isBonus ? (
                    <span className="shrink-0 -mt-0.5">
                      <GiftBonusIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </span>
                  ) : (
                    <span className="shrink-0 mt-1">
                      <GreenOfferCheck className="w-5 h-4 text-[#016E4F]" />
                    </span>
                  )}
                  <span className={item.isBonus ? 'text-white font-semibold' : ''}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Column: Pricing & Checkout Button */}
            <div className="lg:col-span-6 flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-[#151C37] border border-white/10 shadow-lg">
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Guia Prático e Divertido Do Beijo
              </h3>
              <p className="text-xs sm:text-sm text-[#C780B3] mb-6">
                Curso Completo de Acesso Imediato:
              </p>

              {/* Price Details */}
              <div className="mb-6">
                <span className="text-sm sm:text-base text-slate-400">
                  De <span className="line-through">R$ 197</span>
                </span>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white my-1">
                  R$ <span className="cor">29,90</span>
                </div>
                <span className="text-xs sm:text-sm text-[#EDEEF1]/80">
                  (ou até 3x de R$ 10,63)
                </span>
              </div>

              {/* CTA Button */}
              <a
                href={checkoutUrl}
                onClick={trackInitiateCheckout}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta w-full inline-flex items-center justify-center text-center px-6 py-4 sm:py-5 text-white font-bold text-base sm:text-lg rounded-lg uppercase tracking-wider transition-all duration-300"
              >
                QUERO ENTRAR NO GUIA
              </a>

              {/* Trust badges row */}
              <div className="grid grid-cols-2 gap-3 mt-6 w-full text-center">
                <div className="flex items-center justify-center gap-1.5 text-xs text-[#EDEEF1] font-medium">
                  <TrustShieldIcon className="w-4 h-4 text-[#E86C85]" />
                  <span>100% seguro</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-xs text-[#EDEEF1] font-medium">
                  <TrustAccessIcon className="w-4 h-4 text-[#E86C85]" />
                  <span>Acesso imediato</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-xs text-[#EDEEF1] font-medium">
                  <TrustDigitalIcon className="w-4 h-4 text-[#E86C85]" />
                  <span>100% Digital</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-xs text-[#EDEEF1] font-medium">
                  <TrustFireIcon className="w-4 h-4 text-[#E86C85]" />
                  <span>Aprovado por +10k</span>
                </div>
              </div>

              {/* Avatars */}
              <div className="mt-5 flex items-center justify-center gap-2.5">
                <img
                  src="/assets/alunos.webp"
                  alt="Alunos"
                  width={110}
                  height={35}
                  className="h-7 w-auto object-contain"
                  loading="lazy"
                />
                <span className="text-xs text-slate-300">
                  +10.000 alunos
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
