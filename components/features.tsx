"use client";

import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Features() {
  return (
    <section className="relative bg-black overflow-hidden py-12 md:py-20">
      
      {/* --- CORE ANIMAZIONI AVANZATE (CARD FLUTTUANTI + ELEMENTI INTERNI) --- */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes subtleRadar {
          0% { transform: translate3d(-50%, -50%, 0) rotate(0deg); }
          100% { transform: translate3d(-50%, -50%, 0) rotate(360deg); }
        }
        @keyframes floatIcon {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -6px, 0); }
        }
        @keyframes signalWave {
          0%, 100% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes pulseBar {
          0%, 100% { transform: translate3d(-5%, 0, 0); opacity: 0.8; }
          50% { transform: translate3d(5%, 0, 0); opacity: 1; }
        }
        
        /* TIMING E TRAIETTORIE DI FLUTTUAZIONE ASINCRONA PER TUTTE LE CARD */
        @keyframes floatCard1 { 0%, 100% { transform: translate3d(0, 0, 0); } 50% { transform: translate3d(0, -10px, 0); } }
        @keyframes floatCard2 { 0%, 100% { transform: translate3d(0, -4px, 0); } 50% { transform: translate3d(0, 6px, 0); } }
        @keyframes floatCard3 { 0%, 100% { transform: translate3d(0, 2px, 0); } 50% { transform: translate3d(0, -8px, 0); } }
        @keyframes floatCard4 { 0%, 100% { transform: translate3d(0, -7px, 0); } 50% { transform: translate3d(0, 3px, 0); } }
        @keyframes floatCard5 { 0%, 100% { transform: translate3d(0, 5px, 0); } 50% { transform: translate3d(0, -5px, 0); } }
        @keyframes floatCard6 { 0%, 100% { transform: translate3d(0, -2px, 0); } 50% { transform: translate3d(0, 8px, 0); } }

        /* MICRO-MOVIMENTI COSTANTI PER GLI ELEMENTI INTERNI */
        @keyframes internalIconFloat {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(0, -5px, 0) scale(1.03); }
        }
        @keyframes internalTextPulse {
          0%, 100% { opacity: 0.75; transform: translate3d(0, 0, 0); }
          50% { opacity: 1; transform: translate3d(0, -1px, 0); }
        }

        /* Classi di utilità strutturali */
        .card-radar-effect {
          position: relative;
          overflow: hidden;
          will-change: transform;
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s, box-shadow 0.6s;
        }
        
        /* Attivazione fluttuazione globale su tutte le 6 card */
        .feat-anim-1 { animation: floatCard1 6.5s ease-in-out infinite; }
        .feat-anim-2 { animation: floatCard2 7.8s ease-in-out infinite; }
        .feat-anim-3 { animation: floatCard3 7.2s ease-in-out infinite; }
        .feat-anim-4 { animation: floatCard4 8.5s ease-in-out infinite; }
        .feat-anim-5 { animation: floatCard5 7.5s ease-in-out infinite; }
        .feat-anim-6 { animation: floatCard6 9.0s ease-in-out infinite; }
        
        /* Applicazione movimenti costanti a icone e testi interni */
        .card-radar-effect .inner-icon {
          animation: internalIconFloat 3.8s ease-in-out infinite;
          will-change: transform;
          display: inline-block;
        }
        .card-radar-effect .inner-text {
          animation: internalTextPulse 4.5s ease-in-out infinite;
          will-change: transform, opacity;
        }

        /* Sfalsamento dei delay interni per evitare movimenti sincronizzati a blocco */
        .feat-anim-1 .inner-icon { animation-delay: 0.2s; }
        .feat-anim-2 .inner-icon { animation-delay: 1.2s; animation-duration: 4.2s; }
        .feat-anim-3 .inner-icon { animation-delay: 0.7s; animation-duration: 3.5s; }
        .feat-anim-4 .inner-icon { animation-delay: 2.1s; animation-duration: 4.0s; }
        .feat-anim-5 .inner-icon { animation-delay: 1.5s; animation-duration: 4.5s; }
        .feat-anim-6 .inner-icon { animation-delay: 0.9s; animation-duration: 3.7s; }

        .feat-anim-1 .inner-text { animation-delay: 0.5s; }
        .feat-anim-2 .inner-text { animation-delay: 1.8s; }
        .feat-anim-3 .inner-text { animation-delay: 0.2s; }
        .feat-anim-4 .inner-text { animation-delay: 2.5s; }
        .feat-anim-5 .inner-text { animation-delay: 1.0s; }
        .feat-anim-6 .inner-text { animation-delay: 1.4s; }

        /* GESTIONE HOVER: La fluttuazione macro si ferma per dare stabilità al puntamento, 
           l'effetto radar si accende e gli elementi interni reagiscono in modo unico */
        .card-radar-effect:hover {
          animation-play-state: paused !important;
          transform: translate3d(0, -12px, 0) !important;
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15) !important;
          border-color: rgba(99, 102, 241, 0.4) !important;
        }
        
        /* Freeze controllato delle micro-animazioni cicliche in hover per lasciare spazio alle transizioni della classe group */
        .card-radar-effect:hover .inner-icon,
        .card-radar-effect:hover .inner-text {
          animation-play-state: paused !important;
        }
        .card-radar-effect:hover .inner-text {
          opacity: 1 !important;
          transform: translate3d(0, 0, 0) !important;
        }

        /* Effetto Radar Conico di Sfondo */
        .card-radar-effect::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 160%;
          height: 160%;
          background: conic-gradient(from 0deg, transparent 40%, var(--color-indigo-500, #6366f1) 70%, transparent 100%);
          opacity: 0;
          transition: opacity 0.6s ease;
          animation: subtleRadar 6s linear infinite;
          transform-origin: center center;
          z-index: 0;
          pointer-events: none;
        }
        .card-radar-effect:hover::before {
          opacity: 0.28;
        }
        .card-content-layer {
          position: relative;
          z-index: 10;
          background: rgba(9, 9, 11, 0.93);
          height: 100%;
          width: 100%;
        }
      `}} />

      {/* Sfondi Sfumati Ambientali */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2" aria-hidden="true">
        <Image className="max-w-none" src={BlurredShapeGray} width={760} height={668} alt="Blurred shape" />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50" aria-hidden="true">
        <Image className="max-w-none" src={BlurredShape} width={760} height={668} alt="Blurred shape" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          
          {/* TESTATA SEZIONE */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-24">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent font-medium tracking-wide text-xs uppercase animate-pulse">
                Infrastruttura Intelligente
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Sviluppato per far scalare il tuo business
            </h2>
            <p className="text-lg text-indigo-200/65">
              I nostri sistemi integrano intelligenza artificiale avanzata e logiche di automazione per eliminare i colli di bottiglia operativi, accelerando la crescita senza aumentare i costi fissi.
            </p>
          </div>

          {/* MOCKUP CENTRALE */}
          <div className="flex justify-center pb-16 md:pb-24" data-aos="fade-up">
            <div className="w-full max-w-[900px] h-auto md:h-64 rounded-2xl border border-gray-800/60 bg-gray-950/40 backdrop-blur-xs relative flex flex-col md:flex-row items-center justify-between p-6 md:p-8 overflow-hidden group gap-6 md:gap-0 shadow-[0_0_50px_rgba(99,102,241,0.05)]">
              <div className="absolute inset-0 bg-radial-gradient from-indigo-500/5 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Box 1 Interno */}
              <div className="w-full md:w-1/3 h-auto md:h-full bg-gray-900/40 border border-gray-800/50 rounded-xl p-4 flex flex-col justify-between gap-4 md:gap-0 transition-all duration-500 group-hover:border-indigo-500/30 group-hover:bg-indigo-950/10">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 group-hover:text-indigo-400 transition-colors">Canali Attivi</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                </div>
                <div className="space-y-2">
                  <div 
                    className="flex items-center justify-between bg-black/40 p-2 rounded-lg border border-gray-900 gap-2 transition-all duration-300 group-hover:translate-x-1.5"
                    style={{ animation: "signalWave 4s ease-in-out infinite" }}
                  >
                    <span className="text-xs truncate">💬 WhatsApp Custom Agent</span>
                    <span className="text-[9px] text-indigo-400 font-mono shrink-0 animate-pulse">LIVE</span>
                  </div>
                  <div 
                    className="flex items-center justify-between bg-black/40 p-2 rounded-lg border border-gray-900 gap-2 transition-all duration-300 group-hover:translate-x-1.5"
                    style={{ animation: "signalWave 4s ease-in-out infinite", animationDelay: "2s" }}
                  >
                    <span className="text-xs truncate">📩 Mail Automation HUB</span>
                    <span className="text-[9px] text-gray-500 font-mono shrink-0">IDLE</span>
                  </div>
                </div>
              </div>

              {/* Connettore Centrale */}
              <div className="flex-1 flex md:flex-row flex-col items-center justify-center relative h-12 md:h-full w-px md:w-full">
                <div className="w-px md:w-full h-full md:h-px bg-gradient-to-b md:bg-gradient-to-r from-indigo-500/10 via-indigo-500/60 to-purple-500/10 relative">
                  <div className="absolute w-2 h-2 bg-indigo-400 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[ping_2s_linear_infinite]"></div>
                </div>
                <div 
                  className="absolute w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.3)] z-10 group-hover:scale-110 transition-transform duration-300"
                  style={{ animation: "floatIcon 3s ease-in-out infinite" }}
                >
                  <span className="text-white text-sm">⚡</span>
                </div>
              </div>

              {/* Box 2 Interno */}
              <div className="w-full md:w-1/3 h-auto md:h-full bg-gray-900/40 border border-gray-800/50 rounded-xl p-4 flex flex-col justify-between gap-4 md:gap-0 transition-all duration-500 group-hover:border-purple-500/30 group-hover:bg-purple-950/10">
                <div className="text-[10px] uppercase font-bold tracking-widest text-gray-500 group-hover:text-purple-400 transition-colors">Sincronizzazione</div>
                <div className="space-y-1.5">
                  <div className="w-full h-2 bg-indigo-500/20 rounded-xs overflow-hidden relative">
                    <div 
                      className="w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xs"
                      style={{ 
                        width: "85%",
                        animation: "pulseBar 2.5s ease-in-out infinite", 
                        willChange: "transform, opacity" 
                      }}
                    ></div>
                  </div>
                  <div className="text-[11px] text-indigo-200/50 flex justify-between font-mono">
                    <span>Database CRM</span>
                    <span className="text-purple-400 font-bold animate-pulse">100% OK</span>
                  </div>
                </div>
                <div className="bg-black/40 p-2 rounded-lg border border-gray-900 text-center text-[11px] text-purple-300 font-medium transition-all group-hover:scale-[1.04] duration-300">
                  +340 Lead Qualificati questo mese
                </div>
              </div>
            </div>
          </div>

          {/* GRIGLIA CARATTERISTICHE (Tutte le card fluttuano + elementi sincronizzati) */}
          <div className="mx-auto grid max-w-sm gap-8 sm:max-w-none sm:grid-cols-2 md:gap-8 lg:grid-cols-3 pt-4">
            
            {/* CARATTERISTICA 1 */}
            <article className="card-radar-effect feat-anim-1 p-[1px] rounded-xl border border-gray-800/60 bg-gray-950/30 group">
              <div className="card-content-layer p-6 rounded-xl flex flex-col h-full justify-between">
                <div>
                  <div className="inner-icon mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <svg className="fill-indigo-500/80 transition-colors group-hover:fill-indigo-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                      <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
                      <path fillOpacity=".48" d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-nacelle text-[1.05rem] font-semibold text-gray-200 transition-colors group-hover:text-indigo-400">
                    Integrazione Omnicanale
                  </h3>
                  <p className="inner-text text-sm text-indigo-200/65 leading-relaxed">
                    Colleghiamo i tuoi agenti IA direttamente su WhatsApp, Telegram, Email o sul tuo sito web per catturare ogni singola opportunità senza interruzioni.
                  </p>
                </div>
              </div>
            </article>

            {/* CARATTERISTICA 2 */}
            <article className="card-radar-effect feat-anim-2 p-[1px] rounded-xl border border-gray-800/60 bg-gray-950/30 group">
              <div className="card-content-layer p-6 rounded-xl flex flex-col h-full justify-between">
                <div>
                  <div className="inner-icon mb-4 transition-transform duration-500 group-hover:scale-115 group-hover:-translate-y-0.5">
                    <svg className="fill-indigo-500/80 transition-colors group-hover:fill-indigo-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                      <path fillOpacity=".48" d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z" />
                      <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-nacelle text-[1.05rem] font-semibold text-gray-200 transition-colors group-hover:text-indigo-400">
                    Logiche Condizionali Complesse
                  </h3>
                  <p className="inner-text text-sm text-indigo-200/65 leading-relaxed">
                    Strutturiamo flussi intelligenti in grado di prendere decisioni autonome in base alle risposte degli utenti, inoltrando solo i lead caldi al tuo team umano.
                  </p>
                </div>
              </div>
            </article>

            {/* CARATTERISTICA 3 */}
            <article className="card-radar-effect feat-anim-3 p-[1px] rounded-xl border border-gray-800/60 bg-gray-950/30 group">
              <div className="card-content-layer p-6 rounded-xl flex flex-col h-full justify-between">
                <div>
                  <div className="inner-icon mb-4 transition-transform duration-500 group-hover:translate-x-1.5">
                    <svg className="fill-indigo-500/80 transition-colors group-hover:fill-indigo-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                      <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
                      <path fillOpacity=".48" d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-nacelle text-[1.05rem] font-semibold text-gray-200 transition-colors group-hover:text-indigo-400">
                    Sincronizzazione Real-Time
                  </h3>
                  <p className="inner-text text-sm text-indigo-200/65 leading-relaxed">
                    Tutti i dati raccolti dalle conversazioni vengono istantaneamente inseriti e aggiornati all'interno del tuo CRM, Notion o foglio di calcolo preferito.
                  </p>
                </div>
              </div>
            </article>

            {/* CARATTERISTICA 4 */}
            <article className="card-radar-effect feat-anim-4 p-[1px] rounded-xl border border-gray-800/60 bg-gray-950/30 group">
              <div className="card-content-layer p-6 rounded-xl flex flex-col h-full justify-between">
                <div>
                  <div className="inner-icon mb-4 transition-transform duration-500 group-hover:skew-x-6">
                    <svg className="fill-indigo-500/80 transition-colors group-hover:fill-indigo-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                      <path fillOpacity=".48" d="m3.031 9.05-.593-.805 1.609-1.187.594.804a6.966 6.966 0 0 1 0 8.276l-.594.805-1.61-1.188.594-.805a4.966 4.966 0 0 0 0-5.9Z" />
                      <path d="m7.456 6.676-.535-.845 1.69-1.07.534.844a11.944 11.944 0 0 1 0 12.789l-.535.845-1.69-1.071.536-.845a9.944 9.944 0 0 0 0-10.647Z" />
                      <path d="m11.888 4.35-.514-.858 1.717-1.027.513.858a16.9 16.9 0 0 1 2.4 8.677 16.9 16.9 0 0 1-2.4 8.676l-.513.859-1.717-1.028.514-.858A14.9 14.9 0 0 0 14.003 12a14.9 14.9 0 0 0-2.115-7.65Z" opacity=".48" />
                      <path d="m16.321 2-.5-.866 1.733-1 .5.866A22 22 0 0 1 21 12c0 3.852-1.017 7.636-2.948 10.97l-.502.865-1.73-1.003.501-.865A19.878 19.878 0 0 0 19 12a20 20 0 0 0-2.679-10Z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-nacelle text-[1.05rem] font-semibold text-gray-200 transition-colors group-hover:text-indigo-400">
                    Sviluppo Sartoriale
                  </h3>
                  <p className="inner-text text-sm text-indigo-200/65 leading-relaxed">
                    Nessuna soluzione rigida o pre-impostata. Costruiamo l'architettura logica basandoci esclusivamente sulle reali necessità operative della tua attività.
                  </p>
                </div>
              </div>
            </article>

            {/* CARATTERISTICA 5 */}
            <article className="card-radar-effect feat-anim-5 p-[1px] rounded-xl border border-gray-800/60 bg-gray-950/30 group">
              <div className="card-content-layer p-6 rounded-xl flex flex-col h-full justify-between">
                <div>
                  <div className="inner-icon mb-4 transition-transform duration-700 group-hover:[transform:rotate(90deg)]">
                    <svg className="fill-indigo-500/80 transition-colors group-hover:fill-indigo-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                      <path fillOpacity=".48" d="M12 8.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" />
                      <path d="m7.443 2.891.891-.454L7.437.655l-.891.454a12 12 0 0 0 0 21.382l.89.454.91-1.781-.892-.455a10 10 0 0 1 0-17.818ZM17.456 1.11l-.891-.454-.909 1.782.891.454a10 10 0 0 1 0 17.819l-.89.454.908 1.781.89-.454a12 12 0 0 0 0-21.382Z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-nacelle text-[1.05rem] font-semibold text-gray-200 transition-colors group-hover:text-indigo-400">
                    Sicurezza e Privacy dei Dati
                  </h3>
                  <p className="inner-text text-sm text-indigo-200/65 leading-relaxed">
                    Proteggiamo le informazioni aziendali e dei tuoi clienti utilizzando chiavi di crittografia proprietarie e sistemi conformi alle normative europee sul trattamento dati.
                  </p>
                </div>
              </div>
            </article>

            {/* CARATTERISTICA 6 */}
            <article className="card-radar-effect feat-anim-6 p-[1px] rounded-xl border border-gray-800/60 bg-gray-950/30 group">
              <div className="card-content-layer p-6 rounded-xl flex flex-col h-full justify-between">
                <div>
                  <div className="inner-icon mb-4 transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
                    <svg className="fill-indigo-500/80 transition-colors group-hover:fill-indigo-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                      <path fillOpacity=".48" d="M19 8h5v2h-5V8Zm-4 5h9v2h-9v-2Zm9 5H11v2h13v-2Z" />
                      <path d="M19.406 3.844 6.083 20.497.586 15 2 13.586l3.917 3.917L17.844 2.595l1.562 1.25Z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-nacelle text-[1.05rem] font-semibold text-gray-200 transition-colors group-hover:text-indigo-400">
                    Reportistica Automatica
                  </h3>
                  <p className="inner-text text-sm text-indigo-200/65 leading-relaxed">
                    Ricevi analisi chiare e report dettagliati sulle performance dei tuoi flussi e sui tassi di conversione dei tuoi agenti senza muovere un dito.
                  </p>
                </div>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
}
