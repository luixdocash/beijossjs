import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: 'Como é o conteúdo do guia?',
      answer: 'É um material prático e direto ao ponto para que você entre em ação em poucos dias.',
    },
    {
      question: 'Como vou receber o acesso do curso?',
      answer: 'Assim que seu pagamento for aprovado, você receberá o acesso VIA EMAIL (preste atenção ao preencher seu email).',
    },
    {
      question: 'Quanto tempo terei de acesso?',
      answer: 'Assim que você entrar você vai ter acesso durante 2 anos para ver e rever quantas vezes quiser. Ah e dentro desse período, se tiver atualizações você vai ter acesso sem pagar nada a mais.',
    },
    {
      question: 'Quais as formas de pagamento?',
      answer: 'Você pode efetuar o pagamento via pix ou cartão de crédito.',
    },
    {
      question: 'Minha Identidade será revelada?',
      answer: 'Além da minha equipe, ninguém nunca saberá que você comprou o guia. Pode ficar tranquilo.',
    },
    {
      question: 'Em quanto tempo terei resultado?',
      answer: 'Isso pode variar de pessoa para pessoa, tem pessoas que aplicam no mesmo dia, outras dentro dos 7 dias e já consegue um beijo, um contato e alguns até mesmo já vão para os finalmentes. Tenho certeza que se você assistir e colocar em prática vai ter resultados em poucos dias também.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full py-14 sm:py-20 bg-[#000724]">
      <div className="max-w-[850px] mx-auto px-5 lg:px-6">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            Perguntas <span className="cor">Frequentes</span>
          </h2>
          <p className="text-sm sm:text-base text-[#C780B3] font-normal">
            Confira as respostas para as principais dúvidas a respeito do nosso método.
          </p>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#151C37] border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-sm sm:text-base text-white hover:text-[#E86C85] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <span className={`shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#E86C85]' : 'text-slate-400'}`}>
                    <svg
                      width="16"
                      height="10"
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 1.75L8 8.25L14.5 1.75"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-[#EDEEF1]/85 font-normal leading-relaxed border-t border-white/5 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
