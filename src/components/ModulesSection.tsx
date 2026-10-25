import React from 'react';
import { TrustFireIcon, TrustShieldIcon, TrustAccessIcon, TrustDigitalIcon } from './Icons';
import { getCheckoutUrl, trackInitiateCheckout } from '../utils/checkout';

export const ModulesSection: React.FC = () => {
  const checkoutUrl = getCheckoutUrl();

  const modules = [
    {
      image: '/assets/mod-cantadas-infaliveis.webp',
      alt: 'Cantadas Infalíveis',
      title: 'Cantadas Infalíveis',
      description:
        'Aqui, você encontrará as melhores técnicas para conquistar corações. Com milhões de acessos nas redes sociais, essas cantadas comprovaram sua eficácia.',
      badges: ['Download Imediato', 'Aprovada por mais de 10.000 homens'],
    },
    {
      image: '/assets/mod-ebook-v2.png',
      alt: 'Cantadas Infalíveis Vol.2',
      title: 'Cantadas Infalíveis Vol.2',
      description:
        'Aqui, você encontrará as melhores cantadas para vários tipos de profissões... Esse é para conquistar corações.',
      badges: ['Download Imediato', 'Aprovada por mais de 10.000 homens'],
    },
    {
      image: '/assets/mod-atualizacoes.webp',
      alt: 'Atualizações a custo zero',
      title: 'Atualizações a custo zero',
      description:
        'Ao contrário de outros cursos que cobram um valor para você adquirir a nova versão, aqui no Guia Prático do Beijo, enquanto você estiver com acesso, você não pagará nada pelas atualizações quando houverem.',
      badges: [],
    },
    {
      image: '/assets/bonus-21-praticas.webp',
      alt: '21 Práticas Para Durar Mais',
      title: '21 Práticas Para Durar Mais',
      description:
        'Criada pela Psicóloga especialista em relacionamento Gabriela Marinho, esse guia já ajudou mais de 4700 homens e vai te ajudar a durar mais na hora H.',
      badges: ['Download Imediato', 'Você mais confiante na cama também'],
    },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#000724] border-t border-[#D2D2D2]/20">
      
      {/* Top Divider SVG */}
      <div className="w-full flex justify-center mb-10 overflow-hidden">
        <img
          src="/assets/divisor.svg"
          alt="Divisor"
          width={300}
          height={30}
          className="w-full max-w-[400px] h-auto opacity-75"
        />
      </div>

      <div className="max-w-[1140px] mx-auto px-5 lg:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3">
            Confira tudo <span className="cor">o que você receberá hoje:</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-[17px] text-[#C780B3] font-normal leading-relaxed">
            Tenha em suas mãos <span className="text-white font-semibold">o guia e as cantadas validadas</span> por mais de 10 mil homens para entender, gravar e ir para ação.
          </p>
        </div>

        {/* 5 Module Cards */}
        <div className="flex flex-col gap-8 sm:gap-10">
          {modules.map((mod, idx) => (
            <div
              key={idx}
              className="w-full rounded-2xl bg-[#000724] lg:bg-[#151C37]/80 border border-white/10 p-6 sm:p-8 lg:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 hover:border-[#E86C85]/30 transition-all duration-300"
            >
              {/* Module Graphic */}
              <div className="w-full md:w-[35%] lg:w-[32%] flex justify-center shrink-0">
                <img
                  src={mod.image}
                  alt={mod.alt}
                  width={300}
                  height={300}
                  className="w-48 sm:w-56 md:w-full max-w-[280px] h-auto object-contain rounded-xl drop-shadow-2xl"
                  loading="lazy"
                />
              </div>

              {/* Module Content */}
              <div className="w-full md:w-[65%] lg:w-[62%] flex flex-col items-start text-left">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
                  {mod.title}
                </h3>
                <p className="text-[#EDEEF1]/90 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                  {mod.description}
                </p>

                {/* Badges / Meta tags if present */}
                {mod.badges.length > 0 && (
                  <div className="flex flex-wrap gap-2.5 sm:gap-3">
                    {mod.badges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="inline-flex items-center px-3 py-1 rounded-md text-xs sm:text-sm font-semibold bg-[#1E3286]/60 border border-[#1E3286] text-white"
                      >
                        ✓ {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Sub-CTA Area */}
        <div className="mt-16 sm:mt-20 text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            Tudo isso por apenas <span className="cor">R$ 29,90</span>
          </h2>

          <a
            href={checkoutUrl}
            onClick={trackInitiateCheckout}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-flex items-center justify-center text-center px-8 sm:px-14 py-4 sm:py-5 text-white font-bold text-base sm:text-lg rounded-lg uppercase tracking-wider transition-all duration-300"
          >
            QUERO ENTRAR NO GUIA
          </a>

          {/* 4 Trust Points */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 max-w-[850px] w-full text-center">
            <div className="flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-medium">
              <TrustShieldIcon className="w-5 h-5 text-[#E86C85]" />
              <span>100% seguro</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-medium">
              <TrustAccessIcon className="w-5 h-5 text-[#E86C85]" />
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-medium">
              <TrustDigitalIcon className="w-5 h-5 text-[#E86C85]" />
              <span>100% Digital</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-medium">
              <TrustFireIcon className="w-5 h-5 text-[#E86C85]" />
              <span>Aprovado por mais 10.000 homens</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
