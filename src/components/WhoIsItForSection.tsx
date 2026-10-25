import React from 'react';
import { PersonaBadge1, PersonaBadge2, PersonaBadge3 } from './Icons';

export const WhoIsItForSection: React.FC = () => {
  const cards = [
    {
      badge: <PersonaBadge1 className="w-16 h-16 sm:w-20 sm:h-20" />,
      title: 'Para você que está começando do zero com mulheres.',
      description:
        'Criada pela Psicóloga especialista em relacionamento Gabriela Marinho, esse guia já ajudou mais de 4700 homens e vai te ajudar a durar mais na hora H.',
    },
    {
      badge: <PersonaBadge2 className="w-16 h-16 sm:w-20 sm:h-20" />,
      title: 'Para você que não sabe por onde começar na hora de chegar nela.',
      description:
        'Com menos de 10 minutos por dia, você aprenderá como abordar, conversar e conquistar mulheres de forma natural, sem travar ou sentir medo.',
    },
    {
      badge: <PersonaBadge3 className="w-16 h-16 sm:w-20 sm:h-20" />,
      title: 'Para você que não tem confiança, mas precisa melhorar.',
      description:
        'Este curso foi pensado para homens que querem destravar sua autoconfiança. Mesmo que você se sinta inseguro hoje, vai aprender a abordar mulheres, dominar a arte do beijo e criar conversas envolventes e engraçadas em tempo recorde.',
    },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#000724]">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-[750px] mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            <span className="cor">Está em dúvida?</span> Entenda para quem é esse guia!
          </h2>
        </div>

        {/* 3 Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-[#151C37] border border-white/10 shadow-xl hover:border-[#E86C85]/40 transition-all duration-300"
            >
              <div className="mb-5 flex justify-center">
                {card.badge}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 leading-snug">
                {card.title}
              </h3>

              <p className="text-sm sm:text-base text-[#EDEEF1]/85 font-normal leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
