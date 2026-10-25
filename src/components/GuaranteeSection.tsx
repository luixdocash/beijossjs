import React from 'react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 bg-[#000724]">
      <div className="max-w-[1000px] mx-auto px-5 lg:px-6">
        <div className="rounded-2xl bg-[#151C37]/80 border border-white/10 p-6 sm:p-10 lg:p-12 shadow-xl flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          
          {/* Selo Garantia Badge */}
          <div className="shrink-0 w-32 sm:w-40 lg:w-48 flex justify-center">
            <img
              src="/assets/selo-garantia.svg"
              alt="Garantia de 7 dias"
              width={180}
              height={180}
              className="w-28 sm:w-36 lg:w-44 h-auto drop-shadow-xl"
              loading="lazy"
            />
          </div>

          {/* Guarantee Content */}
          <div className="flex flex-col text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
              COMPRA <span className="cor">100%</span> SEGURA
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-[#EDEEF1]/90 font-normal leading-relaxed">
              <p>
                Ao realizar a sua compra, você recebe o acesso imediato ao Guia Prático e Divertido do Beijo no seu e-mail + Bônus.
              </p>
              <p>
                Você pode começar assistir e colocar em prática imediatamente.
              </p>
              <p>
                Mas se por algum motivo você achar que o guia não te ajudará, basta solicitar o reembolso dentro de 7 dias que nós devolvemos o seu pagamento de forma integral.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
