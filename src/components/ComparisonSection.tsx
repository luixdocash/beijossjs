import React from 'react';
import { RedCrossIcon, GreenCheckIcon } from './Icons';

export const ComparisonSection: React.FC = () => {
  const withoutStrategy = [
    'Fica nervoso e ansioso na hora de chegar em uma mulher.',
    'Perde oportunidades por falta de confiança.',
    'Se sente travado e sem assunto durante a conversa.',
    'Toma foras e acaba na "seca".',
    'Assistir a homens feios conseguirem o que você gostaria, sem saber o que fazer.',
  ];

  const withStrategy = [
    'Aborda qualquer mulher com confiança, sem vergonha ou nervosismo.',
    'Sabe exatamente o que dizer para deixar ela interessada e atraída por você.',
    'Conquista mulheres incríveis e tem o poder de escolher com quem sair.',
    'Seja diferenciado, usando habilidades que te tornarão um homem inesquecível.',
    'Aprende tudo isso com o Guia Prático e Divertido do Beijo, que transforma qualquer homem em alguém irresistível e confiante.',
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#000724]">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-[850px] mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
            Tudo isso foi <span className="cor">100% aprovado</span> por milhares de homens, agora a escolha é sua:
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-[1000px] mx-auto">
          
          {/* SEM Estratégia Card */}
          <div className="flex flex-col rounded-2xl bg-[#151C37]/90 border border-red-500/20 p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-white/10">
              <img
                src="/assets/emoji-5.webp"
                alt="Sem Estratégia"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
                loading="lazy"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-red-500 uppercase tracking-wide">
                SEM Estratégia
              </h3>
            </div>

            <ul className="flex flex-col gap-4">
              {withoutStrategy.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#EDEEF1]/90 font-normal leading-snug">
                  <span className="shrink-0 mt-0.5">
                    <RedCrossIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* COM Estratégia Card */}
          <div className="flex flex-col rounded-2xl bg-[#151C37] border-2 border-[#3BD248]/50 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden ring-1 ring-[#3BD248]/20">
            {/* Recommended subtle ribbon or glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-white/10 relative z-10">
              <img
                src="/assets/emoji-6.webp"
                alt="Com Estratégia"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
                loading="lazy"
              />
              <h3 className="text-xl sm:text-2xl font-bold text-[#3BD248] uppercase tracking-wide">
                COM Estratégia
              </h3>
            </div>

            <ul className="flex flex-col gap-4 relative z-10">
              {withStrategy.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-white font-medium leading-snug">
                  <span className="shrink-0 mt-0.5">
                    <GreenCheckIcon className="w-5 h-5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
