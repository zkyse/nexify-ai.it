"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import TechGraphic from "@/public/images/hero-image-01.jpg"; 

export default function HeroHome() {
  // Stato per gestire le fasi della chat (da 1 a 10)
  const [step, setStep] = useState(1);
  // Stato per la dissolvenza fluida durante il cambio di utente
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // ================= FLUSSO MARCO =================
    // Step 1: Marco sta scrivendo il primo messaggio (pallini)
    
    // Step 2: Compare il primo messaggio di Marco
    const t1 = setTimeout(() => setStep(2), 2000); 
    
    // Step 3: L'IA mostra i pallini di digitazione
    const t2 = setTimeout(() => setStep(3), 4500); 
    
    // Step 4: L'IA risponde con le opzioni (Martedì o Giovedì)
    const t3 = setTimeout(() => setStep(4), 7500); 
    
    // Step 5: Marco sta digitando la risposta (pallini)
    const t4 = setTimeout(() => setStep(5), 11000); 

    // Step 6: Compare la risposta di Marco (sceglie l'orario)
    const t5 = setTimeout(() => setStep(6), 13000); 
    
    // Step 7: L'IA mostra i pallini per l'ultima conferma
    const t6 = setTimeout(() => setStep(7), 15500); 
    
    // Step 8: L'IA conferma l'appuntamento
    const t7 = setTimeout(() => setStep(8), 18000); 

    // ================= TRANSIZIONE SMOOTH =================
    // Avvia la sfumatura in uscita (fade-out)
    const t8 = setTimeout(() => setIsExiting(true), 23000);
    
    // Switch sullo Step 9 (entra Sara che scrive) e resetta l'opacità
    const t9 = setTimeout(() => {
      setStep(9);
      setIsExiting(false);
    }, 23500);

    // ================= FLUSSO SARA =================
    // Step 9: Sara sta digitando (pallini)
    
    // Step 10: Compare il messaggio di Sara
    const t10 = setTimeout(() => setStep(10), 25500);

    // Step 11: L'IA mostra i pallini per Sara
    const t11 = setTimeout(() => setStep(11), 28000);

    // Step 12: L'IA risponde a Sara
    const t12 = setTimeout(() => setStep(12), 31000);

    // Fine ciclo: avvia fade-out finale
    const t13 = setTimeout(() => setIsExiting(true), 37000);

    // Loop completo: resetta allo Step 1
    const loop = setTimeout(() => {
      setStep(1);
      setIsExiting(false);
    }, 37500); 

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
      clearTimeout(t8);
      clearTimeout(t9);
      clearTimeout(t10);
      clearTimeout(t11);
      clearTimeout(t12);
      clearTimeout(t13);
      clearTimeout(loop);
    };
  }, [step === 1]);

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

          {/* COLONNA DESTRA: Mockup Chat Realistica */}
          <div className="relative flex justify-center w-full" data-aos="fade-left" data-aos-delay={200}>
            <div className="absolute w-72 h-72 bg-indigo-500/10 rounded-full filter blur-3xl pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10 border border-gray-800 bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 w-full max-w-[440px] aspect-square flex flex-col justify-center shadow-2xl overflow-hidden">
              
              <div className={`space-y-3.5 transition-all duration-500 ease-in-out ${isExiting ? "opacity-0 scale-95 blur-xs" : "opacity-100 scale-100 blur-none"}`}>
                
                {/* ================= CHAT 1: MARCO (Step 1-8) ================= */}
                {step <= 8 && (
                  <div className="space-y-3.5">
                    
                    {/* 1. Marco scrive / Messaggio 1 */}
                    <div className="flex items-start justify-end space-x-3 animate-[fadeIn_0.4s_ease-out]">
                      <div className="bg-gray-800/90 text-gray-200 rounded-2xl rounded-tr-none p-3 max-w-[80%] min-w-[60px] border border-gray-700/50">
                        <span className="block text-xs font-semibold text-gray-400 mb-0.5">Marco</span>
                        {step === 1 ? (
                          <div className="flex items-center space-x-1 py-1.5 justify-end">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                          </div>
                        ) : (
                          <p className="text-xs sm:text-sm leading-relaxed">Vorrei spostare il mio appuntamento alla prossima settimana.</p>
                        )}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold shadow-[0_0_15px_rgba(99,102,241,0.2)]">M</div>
                    </div>

                    {/* 2. Prima Risposta IA */}
                    {step >= 3 && (
                      <div className="flex items-start space-x-3 animate-[fadeIn_0.4s_ease-out]">
                        <div className="w-8 h-8 rounded-xl bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8 1 5.4-4.9-2.5-4.9 2.5 1-5.4-3.9-3.8 5.4-.8z" /></svg>
                        </div>
                        <div className="bg-gray-800/60 border border-gray-700 text-gray-200 rounded-2xl rounded-tl-none p-3 max-w-[80%] min-w-[90px]">
                          <span className="block text-xs font-semibold text-indigo-400 mb-0.5">Agente IA</span>
                          {step === 3 && (
                            <div className="flex items-center space-x-1 py-1.5">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                            </div>
                          )}
                          {step >= 4 && (
                            <p className="text-xs sm:text-sm leading-relaxed text-white">Certamente! Ti va bene Martedì alle 15:00 o preferisci Giovedì mattina?</p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* 3. Marco risponde / Messaggio 2 */}
                    {step >= 5 && (
                      <div className="flex items-start justify-end space-x-3 animate-[fadeIn_0.4s_ease-out]">
                        <div className="bg-gray-800/90 text-gray-200 rounded-2xl rounded-tr-none p-3 max-w-[80%] min-w-[60px] border border-gray-700/50">
                          <span className="block text-xs font-semibold text-gray-400 mb-0.5">Marco</span>
                          {step === 5 ? (
                            <div className="flex items-center space-x-1 py-1.5 justify-end">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                            </div>
                          ) : (
                            <p className="text-xs sm:text-sm leading-relaxed">Ottimo, vada per Martedì alle 15:00. Grazie!</p>
                          )}
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold shadow-[0_0_15px_rgba(99,102,241,0.2)]">M</div>
                      </div>
                    )}

                    {/* 4. Seconda Risposta IA (Conferma finale) */}
                    {step >= 7 && (
                      <div className="flex items-start space-x-3 animate-[fadeIn_0.4s_ease-out]">
                        <div className="w-8 h-8 rounded-xl bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8 1 5.4-4.9-2.5-4.9 2.5 1-5.4-3.9-3.8 5.4-.8z" /></svg>
                        </div>
                        <div className="bg-gray-800/60 border border-gray-700 text-gray-200 rounded-2xl rounded-tl-none p-3 max-w-[80%] min-w-[90px]">
                          <span className="block text-xs font-semibold text-indigo-400 mb-0.5">Agente IA</span>
                          {step === 7 && (
                            <div className="flex items-center space-x-1 py-1.5">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                            </div>
                          )}
                          {step === 8 && (
                            <p className="text-xs sm:text-sm leading-relaxed text-white">Perfetto Marco, appuntamento spostato e confermato per Martedì prossimo alle 15:00. Riceverai un promemoria via email!</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ================= CHAT 2: SARA (Step 9-12) ================= */}
                {step >= 9 && (
                  <div className="space-y-3.5">
                    {/* Sara scrive / Messaggio */}
                    <div className="flex items-start justify-end space-x-3 animate-[fadeIn_0.4s_ease-out]">
                      <div className="bg-gray-800/90 text-gray-200 rounded-2xl rounded-tr-none p-3 max-w-[80%] min-w-[60px] border border-gray-700/50">
                        <span className="block text-xs font-semibold text-gray-400 mb-0.5">Sara</span>
                        {step === 9 ? (
                          <div className="flex items-center space-x-1 py-1.5 justify-end">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                          </div>
                        ) : (
                          <p className="text-xs sm:text-sm leading-relaxed">Ciao! Vorrei saperne di più sui vostri servizi di automazione.</p>
                        )}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold shadow-[0_0_15px_rgba(99,102,241,0.2)]">S</div>
                    </div>

                    {/* Risposta IA a Sara */}
                    {step >= 11 && (
                      <div className="flex items-start space-x-3 animate-[fadeIn_0.4s_ease-out]">
                        <div className="w-8 h-8 rounded-xl bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8 1 5.4-4.9-2.5-4.9 2.5 1-5.4-3.9-3.8 5.4-.8z" /></svg>
                        </div>
                        <div className="bg-gray-800/60 border border-gray-700 text-gray-200 rounded-2xl rounded-tl-none p-3 max-w-[80%] min-w-[90px]">
                          <span className="block text-xs font-semibold text-indigo-400 mb-0.5">Agente IA</span>
                          {step === 11 && (
                            <div className="flex items-center space-x-1 py-1.5">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                            </div>
                          )}
                          {step === 12 && (
                            <p className="text-xs sm:text-sm leading-relaxed text-white">Ciao Sara! Sviluppiamo agenti IA su misura per eliminare compiti ripetitivi. Che tipo di business gestisci?</p>
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
