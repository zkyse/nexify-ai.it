"use client";

import Image from "next/image";
// Sostituisci questo import con il percorso del tuo logo 200x200 o dell'immagine tech che preferisci
import TechGraphic from "@/public/images/hero-image-01.jpg"; 

export default function HeroHome() {
  return (
    /* 1. Ridotto pt-24 a pt-8 per avvicinare la sezione all'header superiore */
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full">
        
        {/* 2. Ridotto il padding top (py-12 md:py-20 -> pt-2 pb-12 md:pt-4 md:pb-20) per stringere lo spazio in mezzo */}
        <div className="pt-2 pb-12 md:pt-4 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* COLONNA SINISTRA: Testi e Pulsanti di Azione */}
          <div className="text-left space-y-6" data-aos="fade-right">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-2 font-nacelle text-4xl font-semibold text-transparent md:text-5xl leading-tight">
              Automatizza il presente. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                Progetta il futuro.
              </span>
            </h1>
            
            <p className="text-lg text-indigo-200/65 max-w-xl">
              Soluzioni IA personalizzate per PMI e professionisti. Automatizziamo la tua operatività quotidiana per eliminare i tempi morti, abbattere i colli di bottiglia e aumentare la produttività.
            </p>

            {/* Pulsanti di interazione */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div>
                <a
                  className="btn group w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:w-auto"
                  href="#contatti"
                >
                  <span className="relative inline-flex items-center justify-center">
                    Automatizza Ora
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
              <div>
                <a
                  className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:w-auto"
                  href="#consulenza"
                >
                  Fissa una Chiamata
                </a>
              </div>
            </div>
          </div>

          {/* COLONNA DESTRA: Box Grafico con Effetto Glow (Stile Indigo.ai) */}
          <div className="relative flex justify-center w-full" data-aos="fade-left" data-aos-delay={200}>
            {/* Alone luminoso soffuso viola/indaco sullo sfondo */}
            <div className="absolute w-72 h-72 bg-indigo-500/10 rounded-full filter blur-3xl pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            
            {/* Contenitore della grafica o del logo */}
            <div className="relative z-10 border border-gray-800 bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 w-full max-w-[440px] aspect-square flex flex-col items-center justify-center shadow-2xl">
              <div className="animate-pulse flex flex-col items-center space-y-4">
                {/* Cerchio centrale animato con l'iniziale o il logo */}
                <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-5xl shadow-[0_0_40px_rgba(99,102,241,0.25)]">
                  N
                </div>
                <div className="text-center space-y-1">
                  <span className="block text-xs tracking-[0.2em] text-indigo-400 font-mono font-bold">
                    AI AGENT ACTIVE
                  </span>
                  <span className="block text-2xl font-bold text-white tracking-wide">
                    Nexify
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
