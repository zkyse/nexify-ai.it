"use client";

import { useEffect, useRef } from "react";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Rileva sia mobile che tablet
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // console.log("Is intersecting:", entry.isIntersecting); // Puoi decommentarlo per fare debug in console
            if (entry.isIntersecting) {
              const bgGlow = entry.target.querySelector(".mobile-bg-glow");
              if (bgGlow) {
                bgGlow.classList.add("animate-bg-glow");
              }
              // Una volta attivata, possiamo smettere di osservare per ottimizzare le performance
              observer.unobserve(entry.target);
            }
          });
        },
        { 
          threshold: 0.01, // Scatta non appena compare anche solo 1 pixel della sezione
          rootMargin: "0px" // Nessun rinvio o ritardo sul calcolo dei margini
        }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    }
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-black overflow-hidden min-h-[500px]" // Min-height di sicurezza per l'observer
    >
      
      {/* Iniezione CSS ultra-compatibile */}
      <style jsx global>{`
        @keyframes mobileMegaGlow {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
          }
          35% {
            opacity: 0.28; /* Intensità del cerchio luminoso dietro le card */
            transform: translate(-50%, -45%) scale(1.1);
          }
          75% {
            opacity: 0.28;
            transform: translate(-50%, -45%) scale(1.1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.6);
          }
        }

        @media (max-width: 1023px) {
          .mobile-bg-glow.animate-bg-glow {
            animation: mobileMegaGlow 4s ease-in-out forwards !important;
          }
        }
      `}</style>

      {/* IL GRANDE FARO RADIALE DI SFONDO */}
      <div className="mobile-bg-glow absolute pointer-events-none opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-indigo-500/50 blur-[100px] lg:hidden z-0"></div>

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
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-indigo-500/30 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#contatti"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 flex flex-col justify-between">
                <div className="relative h-48 w-full bg-gray-900/40 border-b border-gray-800/60 flex items-center justify-center p-4 overflow-hidden group-hover/card:bg-gray-900/20 transition-colors">
                  <div className="absolute inset-0 bg-radial-gradient from-indigo-500/5 to-transparent pointer-events-none"></div>
                  {/* ... resto del mockup dell'Infrastruttura Custom inserito prima ... */}
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal border border-gray-800">
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

            {/* CARD 2 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-indigo-500/30 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity before:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#contatti"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 flex flex-col justify-between">
                <div className="relative h-48 w-full bg-gray-900/40 border-b border-gray-800/60 flex items-center justify-center p-6 overflow-hidden group-hover/card:bg-gray-900/20 transition-colors">
                  {/* ... resto del mockup dei Bot 24/7 inserito prima ... */}
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal border border-gray-800">
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

            {/* CARD 3 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-indigo-500/30 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity before:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#contatti"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 flex flex-col justify-between">
                <div className="relative h-48 w-full bg-gray-900/40 border-b border-gray-800/60 flex items-center justify-center p-6 overflow-hidden group-hover/card:bg-gray-900/20 transition-colors">
                  {/* ... resto del mockup degli ecosistemi/webhooks inserito prima ... */}
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal border border-gray-800">
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
