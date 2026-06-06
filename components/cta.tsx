"use client";

import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-[#02040a] py-12 md:py-20">
      
      {/* CSS Animazioni Custom per la CTA - Con animazioni automatiche per i bottoni */}
      <style>{`
        @keyframes gradientFlow { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes floatShape { 0%, 100% { transform: translate(-50%, 0) scale(1); opacity: 0.5; } 50% { transform: translate(-45%, -15px) scale(1.05); opacity: 0.8; } }
        
        /* Nuove animazioni automatiche per i bottoni (attive senza interazione) */
        @keyframes pulseButton { 0%, 100% { transform: scale(1); shadow: [0_4px_20px_rgba(99,102,241,0.25)]; } 50% { transform: scale(1.02); box-shadow: 0 4px 25px rgba(99,102,241,0.5); } }
        @keyframes floatButtonSec { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }

        .animate-gradient-text { background-size: 200% auto; animation: gradientFlow 6s linear infinite; }
        .animate-float-shape { animation: floatShape 8s ease-in-out infinite; }
        
        /* Classi helper per l'esecuzione loop dell'animazione */
        .animate-auto-btn-primary { animation: pulseButton 3s ease-in-out infinite; }
        .animate-auto-btn-secondary { animation: floatButtonSec 3.5s ease-in-out infinite; }
      `}</style>

      {/* STRATO SFONDO: Forma Sfumata Animata */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-32 ml-10 -translate-x-1/2 animate-float-shape"
        aria-hidden="true"
      >
        <Image
          className="max-w-none opacity-40 mix-blend-screen"
          src={BlurredShape}
          width={800}
          height={700}
          alt="Infrastruttura IA Background"
        />
      </div>

      {/* Bagliore radiale addizionale focalizzato per il centro */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Box con bordi sfumati orizzontali */}
        <div className="bg-gradient-to-r from-transparent via-gray-900/40 to-transparent border-y border-gray-800/40 py-16 md:py-24 backdrop-blur-xs">
          <div className="mx-auto max-w-3xl text-center">
            
            {/* Tagline sopra il titolo */}
            <div className="inline-flex items-center gap-2 pb-4" data-aos="fade-up">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
              <span className="text-xs font-mono tracking-widest text-indigo-400/80 uppercase">
                Pronto all'efficienza assoluta?
              </span>
            </div>

            {/* Titolo Principale ad Impatto dell'Agenzia */}
            <h2
              className="animate-gradient-text bg-gradient-to-r from-gray-100 via-indigo-200 to-purple-300 bg-clip-text pb-6 font-nacelle text-3xl font-bold tracking-tight text-transparent md:text-5xl leading-tight"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Costruisci i tuoi prossimi Flussi di Lavoro Intelligenti
            </h2>

            {/* Sottotitolo descrittivo */}
            <p className="text-base text-indigo-200/50 max-w-xl mx-auto pb-10" data-aos="fade-up" data-aos-delay={200}>
              Smetti di perdere tempo in task ripetitivi. Unisciti alle aziende che hanno automatizzato la propria operatività con i nostri Agenti IA custom.
            </p>

            {/* Pulsanti di Azione Alternati */}
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center items-center gap-4">
              
              {/* Pulsante Primario Animato Automaticamente */}
              <div data-aos="fade-up" data-aos-delay={300} className="w-full sm:w-auto">
                <a
                  className="btn group mb-4 sm:mb-0 w-full inline-flex justify-center items-center bg-gradient-to-t from-indigo-600 to-indigo-500 text-white font-medium rounded-xl px-6 py-3 transition-all duration-300 animate-auto-btn-primary active:scale-95"
                  href="#contatti"
                >
                  <span className="relative inline-flex items-center">
                    Inizia a Scalare
                    <span className="ml-1.5 tracking-normal text-white/70 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>

              {/* Pulsante Secondario Animato Automaticamente */}
              <div data-aos="fade-up" data-aos-delay={400} className="w-full sm:w-auto">
                <a
                  className="btn relative w-full inline-flex justify-center items-center bg-gray-950/80 active:bg-gray-900 border border-gray-800 text-gray-300 font-medium rounded-xl px-6 py-3 transition-all duration-300 animate-auto-btn-secondary shadow-inner group active:scale-95"
                  href="https://wa.me/message/Y7G7NANQK6ACA1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-60 group-hover:opacity-100 group-hover:scale-125 group-active:opacity-100 group-active:scale-125 transition-all duration-300" />
                    Prenota una Consulenza
                  </span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
