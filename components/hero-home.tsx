"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import TechGraphic from "@/public/images/hero-image-01.jpg"; 

export default function HeroHome() {
  const [step, setStep] = useState(1);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // ================= FLUSSO MARCO (Step 1-8) =================
    const t1 = setTimeout(() => setStep(2), 2000);   // Marco msg 1
    const t2 = setTimeout(() => setStep(3), 4500);   // IA typing 1
    const t3 = setTimeout(() => setStep(4), 7500);   // IA msg 1
    const t4 = setTimeout(() => setStep(5), 10500);  // Marco typing 2
    const t5 = setTimeout(() => setStep(6), 12500);  // Marco msg 2
    const t6 = setTimeout(() => setStep(7), 15000);  // IA typing 2
    const t7 = setTimeout(() => setStep(8), 17500);  // IA msg 2 (Conferma)

    // Transizione Marco -> Sara
    const t8 = setTimeout(() => setIsExiting(true), 22000);
    const t9 = setTimeout(() => {
      setStep(9);
      setIsExiting(false);
    }, 22500);

    // ================= FLUSSO SARA (Step 9-16) =================
    // Step 9: Sara typing 1 (già attivo al cambio)
    const t10 = setTimeout(() => setStep(10), 24500); // Sara msg 1
    const t11 = setTimeout(() => setStep(11), 27000); // IA typing 3
    const t12 = setTimeout(() => setStep(12), 30000); // IA msg 3 (Che business?)
    const t13 = setTimeout(() => setStep(13), 33500); // Sara typing 2
    const t14 = setTimeout(() => setStep(14), 35500); // Sara msg 2 (Spiega business)
    const t15 = setTimeout(() => setStep(15), 38500); // IA typing 4
    const t16 = setTimeout(() => setStep(16), 41500); // IA msg 4 (Propone Call)

    // Fine ciclo: Fade out e Loop
    const t17 = setTimeout(() => setIsExiting(true), 47000);
    const loop = setTimeout(() => {
      setStep(1);
      setIsExiting(false);
    }, 47500); 

    return () => {
      [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, loop].forEach(clearTimeout);
    };
  }, [step === 1]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full">
        <div className="pt-2 pb-12 md:pt-4 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* COLONNA SINISTRA */}
          <div className="text-left space-y-6" data-aos="fade-right">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-2 font-nacelle text-4xl font-semibold text-transparent md:text-5xl leading-tight">
              Automatizza il presente. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                Progetta il futuro.
              </span>
            </h1>
            <p className="text-lg text-indigo-200/65 max-w-xl">
              Soluzioni IA personalizzate per PMI e professionisti. Automatizziamo la tua operatività quotidiana per eliminare i tempi morti e aumentare la produttività.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a className="btn group bg-linear-to-t from-indigo-600 to-indigo-500 text-white shadow-md hover:scale-105 transition-transform" href="#contatti">
                Automatizza Ora <span className="ml-1 group-hover:translate-x-1 transition-transform">-&gt;</span>
              </a>
              <a className="btn relative bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700" href="#consulenza">
                Fissa una Chiamata
              </a>
            </div>
          </div>

          {/* COLONNA DESTRA: Mockup Chat */}
          <div className="relative flex justify-center w-full" data-aos="fade-left" data-aos-delay={200}>
            <div className="absolute w-72 h-72 bg-indigo-500/10 rounded-full filter blur-3xl pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10 border border-gray-800 bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 w-full max-w-[440px] aspect-square flex flex-col justify-center shadow-2xl overflow-hidden">
              <div className={`space-y-3 transition-all duration-500 ease-in-out ${isExiting ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-none"}`}>
                
                {/* ================= CHAT 1: MARCO ================= */}
                {step <= 8 && (
                  <div className="space-y-3">
                    <div className="flex items-start justify-end space-x-2 animate-[fadeIn_0.3s]">
                      <div className="bg-gray-800/90 text-gray-200 rounded-2xl rounded-tr-none p-3 border border-gray-700/50">
                        <span className="block text-[10px] font-semibold text-gray-400 mb-1 uppercase">Marco</span>
                        {step === 1 ? <div className="flex space-x-1 py-1"><div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div><div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div><div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div></div> : <p className="text-xs leading-snug">Vorrei spostare l'appuntamento a settimana prossima.</p>}
                      </div>
                      <div className="w-7 h-7 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">M</div>
                    </div>

                    {step >= 3 && (
                      <div className="flex items-start space-x-2 animate-[fadeIn_0.3s]">
                        <div className="w-7 h-7 rounded-lg bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white shadow-lg"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8 1 5.4-4.9-2.5-4.9 2.5 1-5.4-3.9-3.8 5.4-.8z" /></svg></div>
                        <div className="bg-gray-800/60 border border-gray-700 text-gray-200 rounded-2xl rounded-tl-none p-3">
                          <span className="block text-[10px] font-semibold text-indigo-400 mb-1 uppercase">Agente IA</span>
                          {step === 3 ? <div className="flex space-x-1 py-1"><div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div><div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div><div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div></div> : <p className="text-xs leading-snug">Certamente! Ti va bene Martedì alle 15:00 o preferisci Giovedì?</p>}
                        </div>
                      </div>
                    )}

                    {step >= 5 && (
                      <div className="flex items-start justify-end space-x-2 animate-[fadeIn_0.3s]">
                        <div className="bg-gray-800/90 text-gray-200 rounded-2xl rounded-tr-none p-3 border border-gray-700/50">
                          <span className="block text-[10px] font-semibold text-gray-400 mb-1 uppercase">Marco</span>
                          {step === 5 ? <div className="flex space-x-1 py-1"><div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div><div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div><div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div></div> : <p className="text-xs leading-snug">Vada per Martedì alle 15:00. Grazie!</p>}
                        </div>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center text-white text-[10px] font-bold">M</div>
                      </div>
                    )}

                    {step >= 7 && (
                      <div className="flex items-start space-x-2 animate-[fadeIn_0.3s]">
                        <div className="w-7 h-7 rounded-lg bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8 1 5.4-4.9-2.5-4.9 2.5 1-5.4-3.9-3.8 5.4-.8z" /></svg></div>
                        <div className="bg-gray-800/60 border border-gray-700 text-gray-200 rounded-2xl rounded-tl-none p-3">
                          <span className="block text-[10px] font-semibold text-indigo-400 mb-1 uppercase">Agente IA</span>
                          {step === 7 ? <div className="flex space-x-1 py-1"><div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div><div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div><div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div></div> : <p className="text-xs leading-snug">Perfetto Marco, appuntamento confermato. Ti ho inviato un promemoria email!</p>}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ================= CHAT 2: SARA (Step 9-16) ================= */}
                {step >= 9 && (
                  <div className="space-y-3">
                    <div className="flex items-start justify-end space-x-2 animate-[fadeIn_0.3s]">
                      <div className="bg-gray-800/90 text-gray-200 rounded-2xl rounded-tr-none p-3 border border-gray-700/50">
                        <span className="block text-[10px] font-semibold text-gray-400 mb-1 uppercase">Sara</span>
                        {step === 9 ? <div className="flex space-x-1 py-1"><div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div><div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div><div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div></div> : <p className="text-xs leading-snug">Ciao! Vorrei saperne di più sulle vostre automazioni.</p>}
                      </div>
                      <div className="w-7 h-7 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">S</div>
                    </div>

                    {step >= 11 && (
                      <div className="flex items-start space-x-2 animate-[fadeIn_0.3s]">
                        <div className="w-7 h-7 rounded-lg bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8 1 5.4-4.9-2.5-4.9 2.5 1-5.4-3.9-3.8 5.4-.8z" /></svg></div>
                        <div className="bg-gray-800/60 border border-gray-700 text-gray-200 rounded-2xl rounded-tl-none p-3">
                          <span className="block text-[10px] font-semibold text-indigo-400 mb-1 uppercase">Agente IA</span>
                          {step === 11 ? <div className="flex space-x-1 py-1"><div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div><div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div><div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div></div> : <p className="text-xs leading-snug">Ciao Sara! Automatizziamo processi ripetitivi. Di cosa si occupa il tuo business?</p>}
                        </div>
                      </div>
                    )}

                    {step >= 13 && (
                      <div className="flex items-start justify-end space-x-2 animate-[fadeIn_0.3s]">
                        <div className="bg-gray-800/90 text-gray-200 rounded-2xl rounded-tr-none p-3 border border-gray-700/50">
                          <span className="block text-[10px] font-semibold text-gray-400 mb-1 uppercase">Sara</span>
                          {step === 13 ? <div className="flex space-x-1 py-1"><div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div><div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div><div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div></div> : <p className="text-xs leading-snug">Gestisco un'agenzia e vorrei automatizzare i report settimanali per i clienti.</p>}
                        </div>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center text-white text-[10px] font-bold">S</div>
                      </div>
                    )}

                    {step >= 15 && (
                      <div className="flex items-start space-x-2 animate-[fadeIn_0.3s]">
                        <div className="w-7 h-7 rounded-lg bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8 1 5.4-4.9-2.5-4.9 2.5 1-5.4-3.9-3.8 5.4-.8z" /></svg></div>
                        <div className="bg-gray-800/60 border border-gray-700 text-gray-200 rounded-2xl rounded-tl-none p-3">
                          <span className="block text-[10px] font-semibold text-indigo-400 mb-1 uppercase">Agente IA</span>
                          {step === 15 ? <div className="flex space-x-1 py-1"><div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div><div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div><div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div></div> : <p className="text-xs leading-snug">Possiamo farlo integrando i tuoi dati! Ti va di parlarne in una breve chiamata domani?</p>}
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
