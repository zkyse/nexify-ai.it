"use client";

import { useEffect, useRef } from "react";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Si attiva solo su Mobile e Tablet (sotto i 1024px)
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const bgGlow = entry.target.querySelector(".mobile-bg-glow");
              if (bgGlow) {
                // Attiva l'animazione del grande faro sullo sfondo
                bgGlow.classList.add("animate-bg-glow");
              }
            }
          });
        },
        { 
          threshold: 0.1, // Si attiva non appena la sezione spunta sul display
          rootMargin: "0px 0px -10% 0px"
        }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black overflow-hidden">
      
      {/* Iniezione CSS per l'animazione del super-gradiente di sfondo su Mobile */}
      <style jsx global>{`
        @keyframes mobileMegaGlow {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.6);
          }
          40% {
            opacity: 0.25; /* Intensità massima del bagliore di sfondo */
            transform: translate(-50%, -45%) scale(1.1);
          }
          70% {
            opacity: 0.25;
            transform: translate(-50%, -45%) scale(1.1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.7);
          }
        }

        @media (max-width: 1023px) {
          .mobile-bg-glow.animate-bg-glow {
            animation: mobileMegaGlow 4s ease-in-out forwards;
          }
        }
      `}</style>

      {/* GRANDE FARO DI LUCE SULLO SFONDO (Solo per Mobile/Tablet) */}
      {/* Posizionato esattamente al centro della sezione, dietro tutto il contenuto */}
      <div className="mobile-bg-glow absolute pointer-events-none opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-radial from-indigo-500/50 via-purple-500/20 to-transparent blur-3xl lg:hidden z-0"></div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="pb-12 md:pb-20">
          
          {/* TESTATA DELLA SEZIONE */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20 transition-all duration-1000 ease-out opacity-100 translate-y-0 dynamic-fade-up">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent font-medium tracking-wide text-xs uppercase animate-pulse">
                Soluzioni Sartoriali
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Automazioni e Agenti IA su misura
            </h2>
            <p className="text-lg text-indigo-200/65">
              Non crediamo nelle soluzioni copia-incolla. Analizziamo i tuoi processi quotidiani per cucirti addosso l'infrastruttura IA perfetta per her le tue reali necessità.
            </p>
          </div>

          {/* GRIGLIA SPOTLIGHT CARD */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            
            {/* CARD 1: Modellato sulle tue Esigenze */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-indigo-500/30 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#contatti"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 flex flex-col justify-between">
                
                <div className="relative h-48 w-full bg-gray-900/40 border-b border-gray-800/60 flex items-center justify-center p-4 overflow-hidden group-hover/card:bg-gray-900/20 transition-colors">
                  <div className="absolute inset-0 bg-radial-gradient from-indigo-500/5 to-transparent pointer-events-none"></div>
                  
                  <div className="flex items-center justify-between w-full max-w-[260px] z-10 transition-transform duration-500 group-hover/card:scale-105">
                    {/* Input */}
                    <div className="w-16 h-16 rounded-xl border border-gray-800 bg-gray-950/80 p-2 flex flex-col justify-between shadow-lg relative group-hover/card:border-gray-700 transition-colors">
                      <span className="text-xs">📥</span>
                      <div className="space-y-1">
                        <div className="w-full h-1 bg-gray-800 rounded-xs"></div>
                        <div className="w-2/3 h-1 bg-gray-800 rounded-xs"></div>
                      </div>
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-mono text-gray-500 uppercase tracking-wider">Process</div>
                    </div>

                    {/* Connettore */}
                    <div className="flex-1 px-2 relative flex items-center justify-center">
                      <svg className="w-full h-8 text-gray-800 group-hover/card:text-indigo-500/30 transition-colors" viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 4 C20 4, 10 16, 30 16" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                        <path d="M0 16 C20 16, 10 16, 30 16" stroke="currentColor" strokeWidth="1" />
                        <path d="M0 28 C20 28, 10 16, 30 16" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                        <path d="M30 16 C45 16, 40 16, 60 16" stroke="currentColor" strokeWidth="1" />
                      </svg>
                      <div className="absolute w-1 h-1 bg-indigo-400 rounded-full left-1/4 animate-pulse group-hover/card:bg-purple-400"></div>
                    </div>

                    {/* Output Custom */}
                    <div className="w-20 h-24 rounded-xl border border-indigo-500/30 bg-gradient-to-b from-indigo-950/30 to-purple-950/10 p-2 flex flex-col justify-between shadow-[0_0_20px_rgba(99,102,241,0.05)] relative overflow-hidden group-hover/card:border-indigo-500/60 group-hover/card:shadow-[0_0_25px_rgba(99,102,241,0.15)] transition-all">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4px_4px]"></div>
                      
                      <div className="flex items-center justify-between relative z-10">
                        <span className="text-[10px] font-black font-mono text-indigo-400 tracking-tighter">SPEC-01</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                      </div>

                      <div className="space-y-1.5 relative z-10">
                        <div className="w-full h-3 bg-indigo-500/20 border border-indigo-500/30 rounded-xs flex items-center px-1">
                          <div className="w-full h-1 bg-indigo-400 rounded-2xs animate-[pulse_2s_infinite]"></div>
                        </div>
                        <div className="w-full h-3 bg-purple-500/20 border border-purple-500/30 rounded-xs flex items-center px-1">
                          <div className="w-4/5 h-1 bg-purple-400 rounded-2xs"></div>
                        </div>
                        <div className="w-3/4 h-3 bg-gray-900 border border-gray-800 rounded-xs flex items-center px-1">
                          <div className="w-1/2 h-1 bg-gray-600 rounded-2xs"></div>
                        </div>
                      </div>
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-mono text-indigo-400/70 uppercase tracking-wider whitespace-nowrap">Tailored</div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal border border-gray-800 group-hover/card:border-indigo-500/30 transition-colors duration-300">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent font-medium">
                        Modellato sulle tue Esigenze
                      </span>
                    </span>
                  </div>
                  <p className="text-sm text-indigo-200/65 leading-relaxed">
                    Sia che tu sia un professionista privato, una PMI o una grande azienda, progettiamo logiche di automazione specifiche basate sul tuo reale volume di lavoro.
                  </p>
                </div>
              </div>
            </a>

            {/* CARD 2: Agenti Autonomi 24/7 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-indigo-500/30 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#contatti"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 flex flex-col justify-between">
                
                <div className="relative h-48 w-full bg-gray-900/40 border-b border-gray-800/60 flex items-center justify-center p-6 overflow-hidden group-hover/card:bg-gray-900/20 transition-colors">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>
                  
                  <div className="relative z-10 flex flex-col items-center space-y-3 transition-transform duration-500 group-hover/card:scale-105 w-full max-w-[240px]">
                    <div className="w-full bg-gray-900/90 border border-gray-800 rounded-xl p-2.5 flex items-center space-x-3 shadow-xl transform -translate-x-4">
                      <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] animate-pulse">🤖</div>
                      <div className="space-y-1 flex-1">
                        <div className="w-2/3 h-1.5 bg-indigo-400/40 rounded-sm"></div>
                        <div className="w-1/2 h-1 bg-gray-700 rounded-sm"></div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-800/50 border border-gray-700/30 rounded-xl p-2.5 flex items-center space-x-3 shadow-lg transform translate-x-4">
                      <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center text-[10px]">👤</div>
                      <div className="space-y-1 flex-1">
                        <div className="w-3/4 h-1.5 bg-gray-400 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal border border-gray-800 group-hover/card:border-indigo-500/30 transition-colors duration-300">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent font-medium">
                        Agenti Autonomi 24/7
                      </span>
                    </span>
                  </div>
                  <p className="text-sm text-indigo-200/65 leading-relaxed">
                    Sviluppiamo veri e propri assistenti virtuali capaci di dialogare con i clienti, qualificare i contatti commerciali e aggiornare i tuoi database in totale autonomia.
                  </p>
                </div>
              </div>
            </a>

            {/* CARD 3: Connessione Ecosistema */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-indigo-500/30 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#contatti"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 flex flex-col justify-between">
                
                <div className="relative h-48 w-full bg-gray-900/40 border-b border-gray-800/60 flex items-center justify-center p-6 overflow-hidden group-hover/card:bg-gray-900/20 transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover/card:scale-105">
                    
                    <div className="relative w-40 h-20 flex items-center justify-between">
                      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"></div>
                      
                      <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center shadow-lg relative z-10 group-hover/card:border-indigo-500/40 transition-colors">
                        <span className="text-sm">📧</span>
                      </div>

                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)] relative z-20">
                        <div className="w-3 h-3 bg-white rounded-full animate-ping absolute"></div>
                        <span className="text-white text-xs font-bold">⚡</span>
                      </div>

                      <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center shadow-lg relative z-10 group-hover/card:border-purple-500/40 transition-colors">
                        <span className="text-sm">💬</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal border border-gray-800 group-hover/card:border-indigo-500/30 transition-colors duration-300">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent font-medium">
                        Connessione Ecosistema
                      </span>
                    </span>
                  </div>
                  <p className="text-sm text-indigo-200/65 leading-relaxed">
                    Mettiamo in comunicazione i tuoi software preferiti. Creiamo flussi automatici tra gestionali, email, fogli di calcolo e piattaforme di messaggistica senza attriti.
                  </p>
                </div>
              </div>
            </a>

          </Spotlight>
        </div>
      </div>
    </section>
  );
}
