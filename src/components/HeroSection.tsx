import React from 'react';
import { VideoIcon, BookIcon, HeartChatIcon, HandBadgeIcon } from './Icons';
import { getCheckoutUrl, trackInitiateCheckout } from '../utils/checkout';

export const HeroSection: React.FC = () => {
  const checkoutUrl = getCheckoutUrl();

  return (
    <section className="relative w-full min-h-[920px] lg:min-h-[1080px] bg-[#000724] bg-top bg-no-repeat bg-cover overflow-hidden pt-8 pb-16 lg:py-0 flex items-center"
      style={{
        backgroundImage: `url('/assets/hero-desktop.webp')`,
      }}
    >
      {/* Mobile background override for screens under 1024px */}
      <div
        className="block lg:hidden absolute inset-0 bg-top bg-no-repeat bg-cover pointer-events-none z-0"
        style={{
          backgroundImage: `url('/assets/hero-mobile.webp')`,
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1140px] mx-auto px-5 lg:px-6">
        <div className="w-full lg:max-w-[500px] xl:max-w-[540px] flex flex-col items-start pt-[220px] sm:pt-[280px] md:pt-[360px] lg:pt-0">
          
          {/* Subtitle / Headline Kicker */}
          <h3 className="text-white text-xs sm:text-sm lg:text-[15px] font-semibold tracking-wide uppercase mb-3 text-left">
            🔥 O GUIA PRÁTICO E DIVERTIDO DO BEIJO REVELA:
          </h3>

          {/* Main Title */}
          <h1 className="text-white text-[28px] sm:text-[34px] lg:text-[40px] xl:text-[42px] font-bold leading-[1.2] lg:leading-[1.25] mb-4 text-left">
            O <span className="cor">passo a passo</span> para eliminar a timidez e conquistar qualquer mulher, em qualquer lugar!
          </h1>

          {/* Subheading / Explanatory text */}
          <p className="text-[#C780B3]/90 lg:text-[#EDEEF1] text-sm sm:text-base lg:text-[17px] leading-relaxed mb-6 text-left font-normal">
            (E sem sentir vergonha ou medo de rejeição; aprendendo a ser um homem interessante e divertido).
          </p>

          {/* List of 4 items with custom SVGs */}
          <ul className="w-full flex flex-col gap-3.5 mb-8">
            <li className="flex items-center gap-3 text-white text-sm sm:text-base font-normal">
              <span className="shrink-0 drop-shadow-sm">
                <BookIcon className="w-8 h-8 sm:w-9 sm:h-9" />
              </span>
              <span>Acesso imediato ao Guia Prático</span>
            </li>
            <li className="flex items-center gap-3 text-white text-sm sm:text-base font-normal">
              <span className="shrink-0 drop-shadow-sm">
                <BookIcon className="w-8 h-8 sm:w-9 sm:h-9" />
              </span>
              <span>Guia das cantadas infalíveis</span>
            </li>
            <li className="flex items-center gap-3 text-white text-sm sm:text-base font-normal">
              <span className="shrink-0 drop-shadow-sm">
                <HeartChatIcon className="w-8 h-8 sm:w-9 sm:h-9" />
              </span>
              <span>Cantadas aprovadas</span>
            </li>
            <li className="flex items-center gap-3 text-white text-sm sm:text-base font-normal">
              <span className="shrink-0 drop-shadow-sm">
                <HandBadgeIcon className="w-8 h-8 sm:w-9 sm:h-9" />
              </span>
              <span>Valor único</span>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="w-full flex flex-col items-center sm:items-start">
            <a
              href={checkoutUrl}
              onClick={trackInitiateCheckout}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta w-full sm:w-auto inline-flex items-center justify-center text-center px-7 sm:px-10 py-4 sm:py-5 text-white font-bold text-base sm:text-lg rounded-lg uppercase tracking-wider transition-all duration-300"
            >
              GARANTIR MEU GUIA PRÁTICO
            </a>

            {/* Price Anchor */}
            <div className="mt-3.5 text-center sm:text-left text-xs sm:text-sm text-[#EDEEF1]/90">
              <span>De: <span className="line-through text-slate-400">R$ 197</span> por <strong className="text-white text-base font-bold">R$ 29,90</strong></span>
              <span className="block sm:inline sm:ml-1 text-[#E86C85] text-xs font-medium"> (oferta válida por tempo limitado)</span>
            </div>

            {/* Social Proof with Avatars */}
            <div className="mt-6 flex items-center gap-3.5">
              <img
                src="/assets/alunos.webp"
                alt="Alunos satisfeitos"
                width={120}
                height={38}
                className="h-8 sm:h-9 w-auto object-contain"
                loading="eager"
              />
              <span className="text-xs sm:text-sm text-[#EDEEF1] font-medium">
                Aprovado por mais <strong className="text-white font-bold">10.000 homens</strong>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
