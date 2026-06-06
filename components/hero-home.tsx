"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import TechGraphic from "@/public/images/hero-image-01.jpg"; 

export default function HeroHome() {
  // Stato per gestire le fasi della chat (da 1 a 6)
  const [step, setStep] = useState(1);
  // Stato per gestire la dissolvenza fluida dell'intero blocco durante il cambio chat
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // FASE 1 (Inizio): Marco ha già inviato il messaggio.
    
    // Dopo 2.5 secondi, l'IA inizia a digitare (compaiono i pallini)
    const t1 = setTimeout(() => setStep(2), 2500); 
    
    // L'IA digita per 3 secondi, poi mostra la risposta testuale (Fase 3)
    const t2 = setTimeout(() => setStep(3), 5500); 
    
    // Lasciamo leggere la risposta per 5 secondi, poi avviamo il fade-out (isExiting = true)
    const t3 = setTimeout(() => setIsExiting(true), 10500);
    
    // Dopo 500ms di fade-out, switchiamo sulla chat di Sara (Fase 4) e resettiamo il fade-out
    const t4 = setTimeout(() => {
      setStep(4);
      setIsExiting(false);
    }, 11000);

    // Sara è entrata. Dopo 2.5 secondi l'IA inizia a digitare per lei (Fase 5)
    const t5 = setTimeout(() => setStep(5), 13500);

    // L'IA digita per 3 secondi, poi risponde a Sara (Fase 6)
    const t6 = setTimeout(() => setStep(6), 16500);

    // Lasciamo leggere l'ultima risposta per 6 secondi, poi sfumiamo di nuovo per il loop
    const t7 = setTimeout(() => setIsExiting(true), 22500);

    // Reset completo e restart da capo dopo che tutto è tornato invisibile
    const loop = setTimeout(() => {
      setStep(1);
      setIsExiting(false);
    }, 23000); 

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
      clearTimeout(loop);
    };
  }, [step === 1]); // Si riavvia solo quando torna allo step 1

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full">
        <div className="pt-2 pb-12 md:pt-4 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* COLONNA SINISTRA: Testi e Pulsanti */}
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

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div>
                <a className="btn group w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:w-auto" href="#contatti">
                  <span className="relative inline-flex items-center justify-center">
                    Automatizza Ora <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">-&gt;</span>
                  </span>
                </a>
              </div>
              <div>
                <a className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:w-auto" href="#consulenza">
                  Fissa una Chiamata
                </a>
              </div>
            </div>
          </div>

          {/* COLONNA DESTRA: Mockup Chat Smooth */}
          <div className="relative flex justify-center w-full" data-aos="fade-left" data-aos-delay={200}>
            <div className="absolute w-72 h-72 bg-indigo-500/10 rounded-full filter blur-3xl pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10 border border-gray-800 bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 w-full max-w-[440px] aspect-square flex flex-col justify-center space-y-4 shadow-2xl overflow-hidden">
              
              {/* Contenitore dinamico con transizione di opacità controllata dallo stato isExiting */}
              <div className={`space-y-4 transition-all duration-500 ease-in-out ${isExiting ? "opacity-0 scale-95 blur-xs" : "opacity-100 scale-100 blur-none"}`}>
                
                {/* ================= CHAT 1: MARCO ================= */}
                {step <= 3 && (
                  <div className="space-y-4">
                    {/* Messaggio Marco */}
                    <div className="flex items-start justify-end space-x-3 animate-[fadeIn_0.5s_ease-out]">
                      <div className="bg-gray-800/90 text-gray-200 rounded-2xl rounded-tr-none p-3.5 max-w-[80%] border border-gray-700/50">
                        <span className="block text-xs font-semibold text-gray-400 mb-0.5">Marco</span>
                        <p className="text-sm leading-relaxed">Vorrei spostare il mio appuntamento alla prossima settimana.</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                        M
                      </div>
                    </div>

                    {/* Risposta IA a Marco */}
                    {step >= 2 && (
                      <div className="flex items-start space-x-3 animate-[fadeIn_0.5s_ease-out]">
                        <div className="w-8 h-8 rounded-xl bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8 1 5.4-4.9-2.5-4.9 2.5 1-5.4-3.9-3.8 5.4-.8z" /></svg>
                        </div>
                        <div className="bg-gray-800/60 border border-gray-700 text-gray-200 rounded-2xl rounded-tl-none p-3.5 max-w-[80%] min-w-[100px]">
                          <span className="block text-xs font-semibold text-indigo-400 mb-0.5">Agente IA</span>
                          
                          {step === 2 && (
                            <div className="flex items-center space-x-1 py-2">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                            </div>
                          )}
                          
                          {step === 3 && (
                            <p className="text-sm leading-relaxed text-white transition-opacity duration-500">
                              Certamente! Ti va bene Martedì alle 15:00 o preferisci Giovedì mattina?
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ================= CHAT 2: SARA ================= */}
                {step >= 4 && (
                  <div className="space-y-4">
                    {/* Messaggio Sara */}
                    <div className="flex items-start justify-end space-x-3 animate-[fadeIn_0.5s_ease-out]">
                      <div className="bg-gray-800/90 text-gray-200 rounded-2xl rounded-tr-none p-3.5 max-w-[80%] border border-gray-700/50">
                        <span className="block text-xs font-semibold text-gray-400 mb-0.5">Sara</span>
                        <p className="text-sm leading-relaxed">Ciao! Vorrei saperne di più sui vostri servizi di automazione.</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                        S
                      </div>
                    </div>

                    {/* Risposta IA a Sara */}
                    {step >= 5 && (
                      <div className="flex items-start space-x-3 animate-[fadeIn_0.5s_ease-out]">
                        <div className="w-8 h-8 rounded-xl bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8 1 5.4-4.9-2.5-4.9 2.5 1-5.4-3.9-3.8 5.4-.8z" /></svg>
                        </div>
                        
                        <div className="bg-gray-800/60 border border-gray-700 text-gray-200 rounded-2xl rounded-tl-none p-3.5 max-w-[80%] min-w-[100px]">
                          <span className="block text-xs font-semibold text-indigo-400 mb-0.5">Agente IA</span>
                          
                          {step === 5 && (
                            <div className="flex items-center space-x-1 py-2">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                            </div>
                          )}
                          
                          {step === 6 && (
                            <p className="text-sm leading-relaxed text-white transition-opacity duration-500">
                              Ciao Sara! Sviluppiamo agenti IA su misura per eliminare compiti ripetitivi. Che tipo di business gestisci?
                            </p>
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
