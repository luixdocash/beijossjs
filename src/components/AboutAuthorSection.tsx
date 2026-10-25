import React from 'react';

export const AboutAuthorSection: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[700px] lg:min-h-[854px] bg-[#000724] bg-top lg:bg-center bg-no-repeat bg-cover flex items-center py-16 lg:py-0 overflow-hidden"
      style={{
        backgroundImage: `url('/assets/sergio-bio-desktop.webp')`,
      }}
    >
      {/* Mobile background override */}
      <div
        className="block lg:hidden absolute inset-0 bg-bottom bg-no-repeat bg-cover pointer-events-none z-0"
        style={{
          backgroundImage: `url('/assets/sergio-bio-mobile.webp')`,
        }}
      />

      <div className="relative z-10 w-full max-w-[1140px] mx-auto px-5 lg:px-6">
        <div className="w-full lg:max-w-[580px] xl:max-w-[620px] flex flex-col items-start pb-[260px] sm:pb-[340px] md:pb-[420px] lg:pb-0">
          
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            Conheça o <span className="cor">Sergio Oliveira</span>
          </h2>

          {/* Bio text */}
          <div className="space-y-4 text-sm sm:text-base lg:text-[17px] text-[#EDEEF1]/95 leading-relaxed font-normal">
            <p>
              <strong>
                Comediante stand-up,{' '}
                <span className="cor font-semibold">jornalista sério,</span> Roberto Cabrini do direito ao beijo.
              </strong>
            </p>

            <p>
              E aí, preparado para conhecer as mais letais armas da persuasão cômica? Técnicas que já ajudaram milhares de homens a ser desenrolados e conquistar mais mulheres!
              <br className="hidden sm:inline" />
              {' '}Eu, o Willian Bonner das cantadas, vou te mostrar, através do guia, como nunca mais ficar sozinho em qualquer lugar, nem se sentir reprimido por falta de coragem, assunto ou criatividade.
            </p>

            <p>
              Minha missão é fazer você enxergar o mundo com uma nova ótica, que eu gosto de chamar de: “Sem luz, sem câmera, só ação!”. Dentro do guia, eu te explico como essa abordagem simples e divertida, numa sequência lógica, pode fazer você conquistar em qualquer mulher, em qualquer lugar, e conseguir aquele beijo de forma simples e divertida.
            </p>

            <p className="font-semibold text-white pt-2">
              Seja bem-vindo. Isso é jornalismo!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
