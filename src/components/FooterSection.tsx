import React from 'react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="relative w-full py-12 bg-[#000518] border-t border-white/5 text-center text-xs sm:text-sm text-slate-400">
      <div className="max-w-[950px] mx-auto px-5 lg:px-6 flex flex-col items-center gap-6">
        
        {/* Brand Copyright header */}
        <div className="text-white font-semibold tracking-wider text-xs sm:text-sm uppercase">
          SERGIO OLIVEIRA – TODOS OS DIREITOS RESERVADOS
        </div>

        {/* Legal Disclaimer */}
        <p className="text-[11px] sm:text-xs leading-relaxed text-slate-400/90 font-normal max-w-[850px]">
          <strong className="text-slate-300">AVISO LEGAL:</strong> Nenhuma informação contida neste produto deve ser interpretada como uma afirmação da obtenção de resultados. Qualquer referência ao resultado passado ou potencial de uma estratégia abordada no conteúdo não é, e não deve ser interpretada como garantia de qualquer resultado específico. Este site não faz parte do site do Facebook ou do Facebook Inc.
        </p>

        {/* Incrivo Midia Copyright */}
        <p className="text-[11px] sm:text-xs text-slate-500">
          Copyright 2024 – Todos os Direitos Reservados a Incrivo Mídia
        </p>

      </div>
    </footer>
  );
};
