"use client";

import { useEffect, useRef } from "react";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // 1. Attiva la nebulosa di sfondo
              const bgGlows = entry.target.querySelectorAll(".mobile-bg-glow");
              bgGlows.forEach((glow) => glow.classList.add("animate-nebulosa"));

              // 2. Attiva l'effetto reveal a cascata sulle card
              const cards = entry.target.querySelectorAll(".mobile-reveal-card");
              cards.forEach((card, index) => {
                (card as HTMLElement).style.setProperty("--delay", `${index * 0.25}s`);
                card.classList.add("active");
              });

              // Smettiamo di osservare per congelare l'animazione ed evitare calcoli inutili
              observer.unobserve(entry.target);
            }
          });
        },
        { 
          threshold: 0.05, 
          rootMargin: "0px 0px -5% 0px"
        }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black overflow-hidden py-16 md:py-24">
      
      {/* CORE ANIMAZIONI AVANZATE MOBILE */}
      <style jsx global>{`
        /* Movimento fluido della nebulosa sullo sfondo */
        @keyframes nebulosaFloatOne {
          0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 0; }
          20% { opacity: 0.25; }
          50% { transform: translate(-45%, -48%) scale(1.2) rotate(180deg); opacity: 0.3; }
          80% { opacity: 0.25; }
          100% { transform: translate(-50%, -50%) scale(1) rotate(360deg); opacity: 0; }
        }

        @keyframes nebulosaFloatTwo {
          0% { transform: translate(-40%, -60%) scale(0.8); opacity: 0; }
          30% { opacity: 0.2; }
          70% { transform: translate(-55%, -40%) scale(1.1); opacity: 0.25; }
          100% { transform: translate(-40%, -60%) scale(0.8); opacity: 0; }
        }

        /* Effetto di comparsa a cascata per le card */
        @keyframes cardRevealMobile {
          0% {
            opacity: 0;
            transform: translateY(24px) scale(0.96);
            border-color: rgba(31, 41, 55, 0.4);
            box-shadow: 0 0 0px rgba(99, 102, 241, 0);
          }
          40% {
            border-color: rgba(99, 102, 241, 0.5);
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.1);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            border-color: rgba(31, 41, 55, 1);
            box-shadow: 0 0 0px rgba(99, 102, 241, 0);
          }
        }

        @media (max-width: 1023px) {
          /* Gestione della comparsa delle card */
          .mobile-reveal-card {
            opacity: 0;
            transform: translateY(24px) scale(0.96);
            transition: border-color 0.5s ease;
          }
          
          .mobile-reveal-card.active {
            animation: cardRevealMobile 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            animation-delay: var(--delay);
          }

          /* Attivazione dei flussi di luce sullo sfondo */
          .mobile-bg-glow.glow-1.animate-nebulosa {
            animation: nebulosaFloatOne 6s ease-in-out forwards;
          }
          .mobile-bg-glow.glow-2.animate-nebulosa {
            animation: nebulosaFloatTwo 6s ease-in-out forwards;
            animation-delay: 0.5s;
          }
        }
      `}</style>

      {/* DOPPIO GRADIENTE INCROCIATO PER EFFETTO "NEBULOSA IA" */}
      <div className="mobile-bg-glow glow-1 absolute pointer-events-none opacity-0 top-1/2 left-1/2 w-[450px] h-[450px] rounded-full bg-indigo-500/40 blur-[110px] lg:hidden z-0"></div>
      <div className="mobile-bg-glow glow-2 absolute pointer-events-none opacity-0 top-1/3 left-1/3 w-[350px] h-[350px] rounded-full bg-purple-500/30 blur-[90px] lg:hidden z-0"></div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="pb-12 md:pb-20">
          
          {/* TESTATA DELLA SEZIONE */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent font-medium tracking-wide text-xs uppercase animate-pulse">
                Soluzioni Sartoriali
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Automazioni e Agenti IA su misura
            </h2>
            <p className="text-lg text-indigo-200/65">
              Non crediamo nelle soluzioni copia-incolla. Analizziamo i tuoi processi quotidiani per cucirti addosso l'infrastruttura IA perfetta per le tue reali necessità.
            </p>
          </div>

          {/* GRIGLIA SPOTLIGHT CARD */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            
            {/* CARD 1 */}
            <a
              className="mobile-reveal-card group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-indigo-500/30 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity before:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#contatti"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 flex flex-col justify-between">
                <div className="relative h-48 w-full bg-gray-900/40 border-b border-gray-800/60 flex items-center justify-center p-4 overflow-hidden group-hover/card:bg-gray-900/20 transition-colors">
                  <div className="absolute inset-0 bg-radial-gradient from-indigo-500/5 to-transparent pointer-events-none"></div>
                  {/* Mockup SVG inserito precedentemente */}
                  <div className="flex items-center justify-between w-full max-w-[260px] z-10 transition-transform duration-500 group-hover/card:scale-105">
                    <div className="w-16 h-16 rounded-xl border border-gray-800 bg-gray-950/80 p-2 flex flex-col justify-between shadow-lg relative">
                      <span className="text-xs">📥</span>
                      <div className="space-y-1"><div className="w-full h-1 bg-gray-800 rounded-xs"></div><div className="w-2/3 h-1 bg-gray-800 rounded-xs"></div></div>
                    </div>
                    <div className="flex-1 px-2 relative flex items-center justify-center">
                      <svg className="w-full h-8 text-gray-800" viewBox="0 0 60 32" fill="none"><path d="M0 16 C20 16, 10 16, 30 16" stroke="currentColor" strokeWidth="1" /><path d="M30 16 C45 16, 40 16, 60 16" stroke="currentColor" strokeWidth="1" /></svg>
                    </div>
                    <div className="w-20 h-24 rounded-xl border border-indigo-500/30 bg-gradient-to-b from-indigo-950/30 to-purple-950/10 p-2 flex flex-col justify-between shadow-[0_0_20px_rgba(99,102,241,0.05)] relative overflow-hidden">
                      <span className="text-[10px] font-black font-mono text-indigo-400">SPEC-01</span>
                      <div className="space-y-1.5"><div className="w-full h-1.5 bg-indigo-500/20 rounded-2xs"></div></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal border border-gray-800">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent font-medium">Modellato sulle tue Esigenze</span>
                    </span>
                  </div>
                  <p className="text-sm text-indigo-200/65 leading-relaxed">Sia che tu sia un professionista privato, una PMI o una grande azienda, progettiamo logiche di automazione specifiche basate sul tuo reale volume di lavoro.</p>
                </div>
              </div>
            </a>

            {/* CARD 2 */}
            <a
              className="mobile-reveal-card group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-indigo-500/30 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity before:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#contatti"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 flex flex-col justify-between">
                <div className="relative h-48 w-full bg-gray-900/40 border-b border-gray-800/60 flex items-center justify-center p-6 overflow-hidden group-hover/card:bg-gray-900/20 transition-colors">
                  <div className="relative z-10 flex flex-col items-center space-y-3 w-full max-w-[240px]">
                    <div className="w-full bg-gray-900/90 border border-gray-800 rounded-xl p-2.5 flex items-center space-x-3 shadow-xl transform -translate-x-2">
                      <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center text-[10px]">🤖</div>
                      <div className="w-2/3 h-1.5 bg-indigo-400/40 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal border border-gray-800">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent font-medium">Agenti Autonomi 24/7</span>
                    </span>
                  </div>
                  <p className="text-sm text-indigo-200/65 leading-relaxed">Sviluppiamo veri e propri assistenti virtuali capaci di dialogare con i clienti, qualificare i contatti commerciali e aggiornare i tuoi database in totale autonomia.</p>
                </div>
              </div>
            </a>

            {/* CARD 3 */}
            <a
              className="mobile-reveal-card group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-indigo-500/30 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity before:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#contatti"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 flex flex-col justify-between">
                <div className="relative h-48 w-full bg-gray-900/40 border-b border-gray-800/60 flex items-center justify-center p-6 overflow-hidden group-hover/card:bg-gray-900/20 transition-colors">
                  <div className="relative w-40 h-20 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center shadow-lg"><span className="text-sm">📧</span></div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg"><span className="text-white text-xs">⚡</span></div>
                    <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center shadow-lg"><span className="text-sm">💬</span></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal border border-gray-800">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent font-medium">Connessione Ecosistema</span>
                    </span>
                  </div>
                  <p className="text-sm text-indigo-200/65 leading-relaxed">Mettiamo in comunicazione i tuoi software preferiti. Creiamo flussi automatici tra gestionali, email, fogli di calcolo e piattaforme di messaggistica senza attriti.</p>
                </div>
              </div>
            </a>

          </Spotlight>
        </div>
      </div>
    </section>
  );
}
