"use client";

import { useState, useEffect } from "react";

export default function HeroHome() {
  const [step, setStep] = useState(1);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const sequence = [
      { targetStep: 2, delay: 2000 },   // Marco msg 1
      { targetStep: 3, delay: 4500 },   // IA typing 1
      { targetStep: 4, delay: 7500 },   // IA msg 1
      { targetStep: 5, delay: 10500 },  // Marco typing 2
      { targetStep: 6, delay: 12500 },  // Marco msg 2
      { targetStep: 7, delay: 15000 },  // IA typing 2
      { targetStep: 8, delay: 17500 },  // IA msg 2 (Conferma)
    ];

    const saraSequence = [
      { targetStep: 10, delay: 24500 }, // Sara msg 1
      { targetStep: 11, delay: 27000 }, // IA typing 3
      { targetStep: 12, delay: 30000 }, // IA msg 3 (Che business?)
      { targetStep: 13, delay: 33500 }, // Sara typing 2
      { targetStep: 14, delay: 35500 }, // Sara msg 2 (Spiega business)
      { targetStep: 15, delay: 38500 }, // IA typing 4
      { targetStep: 16, delay: 41500 }, // IA msg 4 (Propone Call)
    ];

    const timers: NodeJS.Timeout[] = [];

    sequence.forEach((item) => {
      timers.push(setTimeout(() => setStep(item.targetStep), item.delay));
    });

    timers.push(setTimeout(() => setIsExiting(true), 22000));
    timers.push(setTimeout(() => {
      setStep(9);
      setIsExiting(false);
    }, 22600));

    saraSequence.forEach((item) => {
      timers.push(setTimeout(() => setStep(item.targetStep), item.delay));
    });

    timers.push(setTimeout(() => setIsExiting(true), 47000));
    timers.push(setTimeout(() => {
      setStep(1);
      setIsExiting(false);
    }, 47600));

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-4 pb-12 bg-[#02040a]">
      
      {/* ================= ANIMAZIONI ULTRA-OTTIMIZZATE (GPU ACCELERATED) ================= */}
      <style jsx global>{`
        /* Movimento cosmico delle luci di sfondo: usa solo scale e translate3d (Zero Lag) */
        @keyframes cosmicNebula {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          33% { transform: translate3d(4% , 6%, 0) scale(1.15); }
          66% { transform: translate3d(-3%, -4%, 0) scale(0.9); }
        }

        /* Movimento lento del reticolo cyber per dare profondità 3D */
        @keyframes gridPan {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(0, 40px, 0); }
        }

        /* Caduta strisce di codice/luce verticali */
        @keyframes dataStream {
          0% { transform: translate3d(0, -100%, 0); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% { transform: translate3d(0, 100vh, 0); opacity: 0; }
        }

        /* Pulsazione magnetica centrale attorno alla chat */
        @keyframes centralPulse {
          0%, 100% { transform: translate3d(-50%, -50%, 0) scale(0.95); opacity: 0.15; }
          50% { transform: translate3d(-50%, -50%, 0) scale(1.1); opacity: 0.25; }
        }

        @keyframes msgPopIn {
          0% { opacity: 0; transform: translate3d(0, 12px, 0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        @keyframes pulseDots {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        /* Classi di attivazione con hardware-acceleration forzata tramite will-change */
        .animate-nebula-1 { animation: cosmicNebula 25s ease-in-out infinite; will-change: transform; }
        .animate-nebula-2 { animation: cosmicNebula 18s ease-in-out infinite reverse; will-change: transform; }
        .animate-grid { animation: gridPan 8s linear infinite; will-change: transform; }
        .animate-stream { animation: dataStream 6s cubic-bezier(0.4, 0, 0.2, 1) infinite; will-change: transform; }
        
        .msg-pop { 
          animation: msgPopIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; 
          will-change: transform, opacity;
        }

        .custom-dot { animation: pulseDots 0.8s ease-in-out infinite; will-change: opacity, transform; }

        /* Ottimizzazione drastica per Mobile: rimuove i flussi verticali extra per preservare la batteria */
        @media (max-width: 767px) {
          .data-streamer { display: none !important; }
          .animate-nebula-1, .animate-nebula-2 { animation-duration: 40s; } /* Rallentato su mobile per alleggerire i ridisegni */
        }
      `}</style>

      {/* --- STRATO 1: RETICOLO CYBER TECNOLOGICO DI SCONDO --- */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.07] overflow-hidden">
        <div 
          className="animate-grid absolute inset-[-40px] bg-[linear-gradient(to_right,#312e81_1px,transparent_1px),linear-gradient(to_bottom,#312e81_1px,transparent_1px)] bg-[size:40px_40px]" 
        />
      </div>

      {/* --- STRATO 2: NEBULA CHROMATIC LIGHTS (Sfocature fisse, mosse solo in Transform) --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Cerchio Indigo Sinistro */}
        <div className="animate-nebula-1 absolute top-[-20%] left-[-10%] w-[500px] md:w-[900px] h-[500px] md:h-[900px] rounded-full bg-indigo-600/10 blur-[120px]" />
        {/* Cerchio Viola/Fucsia Destro */}
        <div className="animate-nebula-2 absolute bottom-[-10%] right-[-10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] rounded-full bg-purple-600/10 blur-[130px]" />
      </div>

      {/* --- STRATO 3: DATA STREAMERS (Linee di luce verticali ad alta performance) --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40 data-streamer">
        <div className="animate-stream absolute left-[15%] top-0 w-[1px] h-32 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent" style={{ animationDuration: "7s", animationDelay: "0s" }} />
        <div className="animate-stream absolute left-[45%] top-0 w-[1px] h-24 bg-gradient-to-b from-transparent via-purple-500/40 to-transparent" style={{ animationDuration: "5s", animationDelay: "2s" }} />
        <div className="animate-stream absolute left-[80%] top-0 w-[1px] h-40 bg-gradient-to-b from-transparent via-blue-500/40 to-transparent" style={{ animationDuration: "9s", animationDelay: "4s" }} />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full relative z-10">
        <div className="pt-4 pb-4 md:pt-4 md:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* COLONNA TESTO (SINISTRA) */}
          <div className="text-left space-y-5 md:space-y-6 text-center lg:text-left">
            <h1 className="bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-1 font-nacelle text-3.5xl sm:text-4xl font-semibold text-transparent md:text-5xl leading-tight">
              Automatizza il presente. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Progetta il futuro.
              </span>
            </h1>
            <p className="text-base md:text-lg text-indigo-200/65 max-w-xl mx-auto lg:mx-0">
              Soluzioni IA personalizzate per PMI e professionisti. Automatizziamo la tua operatività quotidiana per eliminare i tempi morti e aumentare la produttività.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3.5 pt-1">
              <a className="btn group bg-gradient-to-t from-indigo-600 to-indigo-500 text-white shadow-md rounded-xl py-3 px-5 text-sm font-medium transition-all transform active:scale-95" href="#contatti">
                Automatizza Ora <span className="ml-1 group-hover:translate-x-1 transition-transform inline-block">-&gt;</span>
              </a>
              <a className="btn bg-gray-900/80 text-gray-300 border border-gray-800/80 rounded-xl py-3 px-5 text-sm font-medium transition-colors hover:bg-gray-800" href="#consulenza">
                Fissa una Chiamata
              </a>
            </div>
          </div>

          {/* COLONNA GRAFICA MOCKUP (DESTRA) */}
          <div className="relative flex justify-center w-full mt-4 lg:mt-0">
            
            {/* Bagliore magnetico della chat lineare e costante */}
            <div 
              className="absolute w-72 h-72 md:w-85 md:h-85 rounded-full pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600/10 blur-[60px]" 
              style={{ animation: "centralPulse 6s ease-in-out infinite", willChange: "transform" }} 
            />
            
            {/* Scocca del terminale di Chat */}
            <div className="relative w-full max-w-[420px] min-h-[380px] md:aspect-[10/11] z-10 border border-gray-800/60 bg-gray-950/50 backdrop-blur-xl rounded-2xl p-4 md:p-5 flex flex-col justify-end shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden pt-10 [contain:paint]">
              
              {/* Contenitore interno con effetto di uscita della scena globale */}
              <div className={`space-y-3 w-full transition-all duration-400 ${isExiting ? "opacity-0 translate-y-[-4px] blur-sm" : "opacity-100 translate-y-0"}`}>
                
                {/* ================= SCENARIO CHAT 1: MARCO ================= */}
                {step <= 8 && (
                  <div className="space-y-3 flex flex-col justify-end h-full">
                    
                    {/* Messaggio 1 di Marco */}
                    {step >= 1 && (
                      <div className="flex items-start justify-end space-x-2 msg-pop">
                        <div className="bg-gray-900/90 border border-gray-800/70 text-gray-200 rounded-2xl rounded-tr-none px-3.5 py-2 md:py-2.5 max-w-[85%] flex flex-col justify-center">
                          <span className="block text-[8px] font-bold tracking-wider text-gray-500 mb-0.5 uppercase">Marco</span>
                          {step === 1 ? (
                            <div className="flex space-x-1 py-1 px-0.5 items-center"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full custom-dot"></div><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full custom-dot [animation-delay:0.15s]"></div><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full custom-dot [animation-delay:0.3s]"></div></div>
                          ) : (
                            <p className="text-xs text-gray-200 leading-normal">Vorrei spostare l'appuntamento a settimana prossima.</p>
                          )}
                        </div>
                        <div className="w-6.5 h-6.5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex-shrink-0 flex items-center justify-center text-white text-[9px] font-black">M</div>
                      </div>
                    )}

                    {/* Risposta 1 di Agente IA */}
                    {step >= 3 && (
                      <div className="flex items-start space-x-2 msg-pop">
                        <div className="w-6.5 h-6.5 rounded-lg bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white shadow-sm"><svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8 1 5.4-4.9-2.5-4.9 2.5 1-5.4-3.9-3.8 5.4-.8z" /></svg></div>
                        <div className="text-gray-200 border border-gray-800/70 bg-gray-900/40 rounded-2xl rounded-tl-none px-3.5 py-2 md:py-2.5 max-w-[85%] flex flex-col justify-center">
                          <span className="block text-[8px] font-bold tracking-wider text-indigo-400 mb-0.5 uppercase">Agente IA</span>
                          {step === 3 ? (
                            <div className="flex space-x-1 py-1 px-0.5 items-center"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full custom-dot"></div><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full custom-dot [animation-delay:0.15s]"></div><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full custom-dot [animation-delay:0.3s]"></div></div>
                          ) : (
                            <p className="text-xs text-gray-300 leading-normal">Certamente! Ti va bene Martedì alle 15:00 o preferisci Giovedì?</p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Messaggio 2 di Marco */}
                    {step >= 5 && (
                      <div className="flex items-start justify-end space-x-2 msg-pop">
                        <div className="bg-gray-900/90 border border-gray-800/70 text-gray-200 rounded-2xl rounded-tr-none px-3.5 py-2 md:py-2.5 max-w-[85%] flex flex-col justify-center">
                          <span className="block text-[8px] font-bold tracking-wider text-gray-500 mb-0.5 uppercase">Marco</span>
                          {step === 5 ? (
                            <div className="flex space-x-1 py-1 px-0.5 items-center"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full custom-dot"></div><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full custom-dot [animation-delay:0.15s]"></div><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full custom-dot [animation-delay:0.3s]"></div></div>
                          ) : (
                            <p className="text-xs text-gray-200 leading-normal">Vada per Martedì alle 15:00. Grazie!</p>
                          )}
                        </div>
                        <div className="w-6.5 h-6.5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex-shrink-0 flex items-center justify-center text-white text-[9px] font-black">M</div>
                      </div>
                    )}

                    {/* Risposta finale di Agente IA */}
                    {step >= 7 && (
                      <div className="flex items-start space-x-2 msg-pop">
                        <div className="w-6.5 h-6.5 rounded-lg bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white"><svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8 1 5.4-4.9-2.5-4.9 2.5 1-5.4-3.9-3.8 5.4-.8z" /></svg></div>
                        <div className="text-gray-200 border border-gray-800/70 bg-gray-900/40 rounded-2xl rounded-tl-none px-3.5 py-2 md:py-2.5 max-w-[85%] flex flex-col justify-center">
                          <span className="block text-[8px] font-bold tracking-wider text-indigo-400 mb-0.5 uppercase">Agente IA</span>
                          {step === 7 ? (
                            <div className="flex space-x-1 py-1 px-0.5 items-center"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full custom-dot"></div><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full custom-dot [animation-delay:0.15s]"></div><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full custom-dot [animation-delay:0.3s]"></div></div>
                          ) : (
                            <p className="text-xs text-gray-300 leading-normal">Perfetto Marco, cambio registrato nel CRM. Ti ho inviato l'invito email!</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ================= SCENARIO CHAT 2: SARA ================= */}
                {step >= 9 && (
                  <div className="space-y-3 flex flex-col justify-end h-full">
                    
                    {/* Messaggio 1 di Sara */}
                    <div className="flex items-start justify-end space-x-2 msg-pop">
                      <div className="bg-gray-900/90 border border-gray-800/70 text-gray-200 rounded-2xl rounded-tr-none px-3.5 py-2 md:py-2.5 max-w-[85%] flex flex-col justify-center">
                        <span className="block text-[8px] font-bold tracking-wider text-gray-500 mb-0.5 uppercase">Sara</span>
                        {step === 9 ? (
                          <div className="flex space-x-1 py-1 px-0.5 items-center"><div className="w-1.5 h-1.5 bg-purple-400 rounded-full custom-dot"></div><div className="w-1.5 h-1.5 bg-purple-400 rounded-full custom-dot [animation-delay:0.15s]"></div><div className="w-1.5 h-1.5 bg-purple-400 rounded-full custom-dot [animation-delay:0.3s]"></div></div>
                        ) : (
                          <p className="text-xs text-gray-200 leading-normal">Ciao! Vorrei saperne di più sulle vostre automazioni.</p>
                        )}
                      </div>
                      <div className="w-6.5 h-6.5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0 flex items-center justify-center text-white text-[9px] font-black">S</div>
                    </div>

                    {/* Risposta 1 dell'Agente IA */}
                    {step >= 11 && (
                      <div className="flex items-start space-x-2 msg-pop">
                        <div className="w-6.5 h-6.5 rounded-lg bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white"><svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8 1 5.4-4.9-2.5-4.9 2.5 1-5.4-3.9-3.8 5.4-.8z" /></svg></div>
                        <div className="text-gray-200 border border-gray-800/70 bg-gray-900/40 rounded-2xl rounded-tl-none px-3.5 py-2 md:py-2.5 max-w-[85%] flex flex-col justify-center">
                          <span className="block text-[8px] font-bold tracking-wider text-indigo-400 mb-0.5 uppercase">Agente IA</span>
                          {step === 11 ? (
                            <div className="flex space-x-1 py-1 px-0.5 items-center"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full custom-dot"></div><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full custom-dot [animation-delay:0.15s]"></div><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full custom-dot [animation-delay:0.3s]"></div></div>
                          ) : (
                            <p className="text-xs text-gray-300 leading-normal">Ciao Sara! Automatizziamo flussi ripetitivi. Di cosa si occupa il tuo business?</p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Messaggio 2 di Sara */}
                    {step >= 13 && (
                      <div className="flex items-start justify-end space-x-2 msg-pop">
                        <div className="bg-gray-900/90 border border-gray-800/70 text-gray-200 rounded-2xl rounded-tr-none px-3.5 py-2 md:py-2.5 max-w-[85%] flex flex-col justify-center">
                          <span className="block text-[8px] font-bold tracking-wider text-gray-500 mb-0.5 uppercase">Sara</span>
                          {step === 13 ? (
                            <div className="flex space-x-1 py-1 px-0.5 items-center"><div className="w-1.5 h-1.5 bg-purple-400 rounded-full custom-dot"></div><div className="w-1.5 h-1.5 bg-purple-400 rounded-full custom-dot [animation-delay:0.15s]"></div><div className="w-1.5 h-1.5 bg-purple-400 rounded-full custom-dot [animation-delay:0.3s]"></div></div>
                          ) : (
                            <p className="text-xs text-gray-200 leading-normal">Gestisco un'agenzia e vorrei inviare report settimanali in automatico.</p>
                          )}
                        </div>
                        <div className="w-6.5 h-6.5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0 flex items-center justify-center text-white text-[9px] font-black">S</div>
                      </div>
                    )}

                    {/* Risposta finale Call dell'Agente IA */}
                    {step >= 15 && (
                      <div className="flex items-start space-x-2 msg-pop">
                        <div className="w-6.5 h-6.5 rounded-lg bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white"><svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8 1 5.4-4.9-2.5-4.9 2.5 1-5.4-3.9-3.8 5.4-.8z" /></svg></div>
                        <div className="text-gray-200 border border-gray-800/70 bg-gray-900/40 rounded-2xl rounded-tl-none px-3.5 py-2 md:py-2.5 max-w-[85%] flex flex-col justify-center">
                          <span className="block text-[8px] font-bold tracking-wider text-indigo-400 mb-0.5 uppercase">Agente IA</span>
                          {step === 15 ? (
                            <div className="flex space-x-1 py-1 px-0.5 items-center"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full custom-dot"></div><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full custom-dot [animation-delay:0.15s]"></div><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full custom-dot [animation-delay:0.3s]"></div></div>
                          ) : (
                            <p className="text-xs text-gray-300 leading-normal">Sincronizzando Database ed Email possiamo farlo! Ti va una breve chiamata strategica?</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
