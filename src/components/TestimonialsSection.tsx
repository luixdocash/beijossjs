import React from 'react';

export const TestimonialsSection: React.FC = () => {
  const prints = [
    { src: '/assets/print-1.webp', alt: 'Depoimento Aluno WhatsApp 1' },
    { src: '/assets/print-2.webp', alt: 'Depoimento Aluno WhatsApp 2' },
    { src: '/assets/print-3.webp', alt: 'Depoimento Aluno WhatsApp 3' },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#000724]">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Se eles conseguiram <span className="cor">você também consegue.</span>
          </h2>
        </div>

        {/* 3 WhatsApp Prints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 justify-items-center items-center">
          {prints.map((item, idx) => (
            <div
              key={idx}
              className="w-full max-w-[340px] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02] border border-white/5 bg-[#151C37]/40"
            >
              <img
                src={item.src}
                alt={item.alt}
                width={607}
                height={998}
                className="w-full h-auto object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
