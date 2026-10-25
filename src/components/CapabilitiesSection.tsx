import React from 'react';

export const CapabilitiesSection: React.FC = () => {
  const capabilities = [
    {
      icon: '/assets/emoji-1.webp',
      alt: 'Abordar com confiança',
      text: 'Abordar qualquer mulher com confiança, seja na balada, no barzinho, na faculdade ou na academia.',
    },
    {
      icon: '/assets/emoji-2.webp',
      alt: 'Conversa interessante',
      text: 'Deixar qualquer conversa interessante e cheia de desejo.',
    },
    {
      icon: '/assets/emoji-3.webp',
      alt: 'Escolher com quem sair',
      text: 'Escolher entre conquistar relacionamentos duradouros ou viver uma vida de solteiro.',
    },
    {
      icon: '/assets/emoji-4.webp',
      alt: 'Homem confiante e atraente',
      text: 'Ser um homem totalmente confiante, atraente e autêntico.',
    },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#000724]">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-[850px] mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
            Com este <span className="cor">Guia Prático</span> e Divertido do Beijo você será capaz de:
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-[1000px] mx-auto">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-[#151C37] border border-white/10 shadow-lg hover:border-[#E86C85]/40 transition-all duration-300"
            >
              <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.alt}
                  width={81}
                  height={77}
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-[#EDEEF1] text-sm sm:text-base lg:text-[17px] font-medium leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
