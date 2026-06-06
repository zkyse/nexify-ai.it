"use client";

import { useState, useEffect } from "react";

export default function HeroHome() {
  const [step, setStep] = useState(1);
  const [isExiting, setIsExiting] = useState(false);
  const [isIaThinking, setIsIaThinking] = useState(false);

  // Monitora quando l'IA sta elaborando per attivare i flussi energetici sullo sfondo
  useEffect(() => {
    if ([3, 7, 11, 15].includes(step)) {
      setIsIaThinking(true);
    } else {
      setIsIaThinking(false);
    }
  }, [step]);

  useEffect(() => {
    // ================= FLUSSO MARCO (Step 1-8) =================
    const t1 = setTimeout(() => setStep(2), 2000);   // Marco msg 1
    const t2 = setTimeout(() => setStep(3), 4500);   // IA typing 1
    const t3 = setTimeout(() => setStep(4), 7500);   // IA msg 1
    const t4 = setTimeout(() => setStep(5), 10500);  // Marco typing 2
    const t5 = setTimeout(() => setStep(6), 12500);  // Marco msg 2
    const t6 = setTimeout(() => setStep(7), 15000);  // IA typing 2
    const t7 = setTimeout(() => setStep(8), 17500);  // IA msg 2 (Conferma)

    // Transizione Marco -> Sara con effetto cinematic
    const t8 = setTimeout(() => setIsExiting(true), 22000);
    const t9 = setTimeout(() => {
      setStep(9);
      setIsExiting(false);
    }, 22600);

    // ================= FLUSSO SARA (Step 9-16) =================
    const t10 = setTimeout(() => setStep(10), 24500); // Sara msg 1
    const t11 = setTimeout(() => setStep(11), 27000); // IA typing 3
    const t12 = setTimeout(() => setStep(12), 30000); // IA msg 3 (Che business?)
    const t13 = setTimeout(() => setStep(13), 33500); // Sara typing 2
    const t14 = setTimeout(() => setStep(14), 35500); // Sara msg 2 (Spiega business)
    const t15 = setTimeout(() => setStep(15), 38500); // IA typing 4
    const t16 = setTimeout(() => setStep(16), 41500); // IA msg 4 (Propone Call)

    // Fine ciclo: Fade out e Reset Loop
    const t17 = setTimeout(() => setIsExiting(true), 47000);
    const loop = setTimeout(() => {
      setStep(1);
      setIsExiting(false);
    }, 47600); 

    return () => {
      [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, loop].forEach(clearTimeout);
    };
  }, [step === 1]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 pb-12 bg-[#02040a]">
      
      {/* ================= SUPER ANIMAZIONI DI SFONDO & CHAT INTERATTIVA ================= */}
      <style jsx global>{`
        /* 1. Flusso particelle tech di sfondo */
        @keyframes floatUp {
          0% { transform: translateY(100vh) scale(0.4) rotate(0deg); opacity: 0; }
          15% { opacity: 0.3; }
          85% { opacity: 0.3; }
          100% { transform: translateY(-10vh) scale(1) rotate(360deg); opacity: 0; }
        }

        /* 2. Movimento fluido dei grandi bagliori (Aurora) */
        @keyframes auroraMotion {
          0%, 100% { transform: translate(0px, 0px) scale(1); filter: hue-rotate(0deg); }
          33% { transform: translate(30px, -40px) scale(1.05); filter: hue-rotate(20deg); }
          66% { transform: translate(-20px, 20px) scale(0.95); filter: hue-rotate(-15deg); }
        }

        /* 3. Linee laser diagonali veloci */
        @keyframes laserBeam {
          0% { transform: translateX(-100%) translateY(-100%) rotate(-40deg); opacity: 0; }
          5% { opacity: 0.6; }
          25% { transform: translateX(120%) translateY(120%) rotate(-40deg); opacity: 0; }
          100% { transform: translateX(120%) translateY(120%) rotate(-40deg); opacity: 0; }
        }

        /* 4. Pulsazione magnetica dinamica potenziata quando l'IA "pensa" */
        @keyframes chatPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.12; filter: blur(65px); }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.22; filter: blur(85px); }
        }

        /* 5. NUOVA ANIMAZIONE AUTOMATICA PER INGRESSO MESSAGGI (Effetto iOS Molla) */
        @keyframes msgPopIn {
          0% { opacity: 0; transform: translateY(18px) scale(0.92) rotate(-1deg); filter: blur(2px); }
          60% { transform: translateY(-2px) scale(1.01) rotate(0.5deg); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotate(0deg); filter: blur(0); }
        }

        /* 6. Animazione di transizione di scena (Slide + Blur) */
        .scene-exit-active {
          transition: all 0.55s cubic-bezier(0.25, 1, 0.5, 1);
          opacity: 0;
          transform: translateY(-12px) scale(0.97);
          filter: blur(8px);
        }

        .scene-enter-active {
          animation: msgPopIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards;
        }

        /* Classi di utilità per l'esecuzione */
        .animate-aurora-1 { animation: auroraMotion 20s ease-in-out infinite; }
        .animate-aurora-2 { animation: auroraMotion 16s ease-in-out infinite reverse; }
        .particella { animation: floatUp infinite linear; pointer-events: none; }
        .laser-1 { animation: laserBeam 14s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        .laser-2 { animation: laserBeam 18s cubic-bezier(0.4, 0, 0.2, 1) infinite; animation-delay: 5s; }
        .msg-pop { animation: msgPopIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
      `}</style>

      {/* --- STRATO 1: EFFETTO AURORA CHROMATIC (Sfondi dinamici traslucidi) --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="animate-aurora-1 absolute top-[-15%] left-[10%] w-[750px] h-[750px] rounded-full bg-gradient-to-br from-indigo-600/15 via-purple-600/5 to-transparent blur-[130px]" />
        <div className={`absolute bottom-[-10%] right-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-purple-600/15 via-blue-500/10 to-transparent blur-[120px] transition-all duration-1000 ${isIaThinking ? "scale-125 opacity-40 bg-indigo-500/25" : "scale-100 opacity-10"}`} />
      </div>

      {/* --- STRATO 2: LINEE LASER RETE DATI --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="laser-1 absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/25 to-transparent shadow-[0_0_10px_rgba(99,102,241,0.3)]" />
        <div className="laser-2 absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/15 to-transparent shadow-[0_0_8px_rgba(168,85,247,0.2)]" />
      </div>

      {/* --- STRATO 3: SATELLITI DIGITALI FLUTTUANTI --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        <div className="particella absolute bg-indigo-400/50 w-1.5 h-1.5 rounded-xs left-[8%]" style={{ animationDuration: "13s", animationDelay: "0s" }}></div>
        <div className="particella absolute bg-purple-400/50 w-2 h-2 rounded-xs left-[22%]" style={{ animationDuration: "20s", animationDelay: "4s" }}></div>
        <div className="particella absolute bg-blue-400/50 w-1 h-1 rounded-xs left-[48%]" style={{ animationDuration: "12s", animationDelay: "1.5s" }}></div>
        <div className="particella absolute bg-indigo-300/40 w-2 h-2 rounded-xs left-[73%]" style={{ animationDuration: "24s", animationDelay: "6s" }}></div>
        <div className="particella absolute bg-purple-500/40 w-1.5 h-1.5 rounded-xs left-[90%]" style={{ animationDuration: "15s", animationDelay: "2.5s" }}></div>
      </div>

      {/* --- CONTENUTO INCENTRATO SULLA UI --- */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full relative z-10">
        <div className="pt-2 pb-12 md:pt-4 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* COLONNA TESTO (SINISTRA) */}
          <div className="text-left space-y-6">
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
              <a className="btn group bg-linear-to-t from-indigo-600 to-indigo-500 text-white shadow-md hover:scale-104 active:scale-98 transition-all" href="#contatti">
                Automatizza Ora <span className="ml-1 group-hover:translate-x-1 transition-transform">-&gt;</span>
              </a>
              <a className="btn relative bg-gray-900/80 text-gray-300 border border-gray-800 hover:bg-gray-800 transition-colors" href="#consulenza">
                Fissa una Chiamata
              </a>
            </div>
          </div>

          {/* COLONNA GRAFICA MOCKUP (DESTRA) */}
          <div className="relative flex justify-center w-full">
            
            {/* Bagliore magnetico della chat reattivo in base allo stato dell'IA */}
            <div 
              className={`absolute w-80 h-80 rounded-full pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${isIaThinking ? "bg-indigo-500/25 scale-110 shadow-[0_0_50px_rgba(99,102,241,0.2)]" : "bg-indigo-600/10 scale-100"}`} 
              style={{ animation: "chatPulse 4s ease-in-out infinite" }} 
            />
            
            {/* Scocca del terminale di Chat */}
            <div className="relative w-full max-w-[440px] aspect-[10/11] z-10 border border-gray-800/80 bg-gray-950/40 backdrop-blur-2xl rounded-2xl p-5 flex flex-col justify-end shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
              
              {/* Topbar simulata del Widget */}
              <div className="absolute top-0 inset-x-0 h-12 bg-gray-900/30 border-b border-gray-900/60 px-4 flex items-center justify-between opacity-80">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
                </div>
                <div className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">Live-Workflow Terminal</div>
                <div className="w-4 h-1 bg-gray-800 rounded-sm"></div>
              </div>

              {/* Contenitore interno con effetto di uscita della scena globale */}
              <div className={`space-y-3.5 w-full transition-all duration-500 ease-in-out ${isExiting ? "scene-exit-active" : "opacity-100 scale-100"}`}>
                
                {/* ================= SCENARIO CHAT 1: MARCO ================= */}
                {step <= 8 && (
                  <div className="space-y-3.5 flex flex-col justify-end h-full">
                    
                    {/* Messaggio 1 di Marco */}
                    {step >= 1 && (
                      <div className="flex items-start justify-end space-x-2.5 msg-pop">
                        <div className="bg-gray-900/90 text-gray-200 rounded-2xl rounded-tr-none px-3.5 py-2.5 border border-gray-800 shadow-md max-w-[85%]">
                          <span className="block text-[9px] font-bold tracking-wider text-gray-500 mb-1 uppercase">Marco</span>
                          {step === 1 ? (
                            <div className="flex space-x-1 py-1.5 px-1"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.15s]"></div><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.3s]"></div></div>
                          ) : (
                            <p className="text-xs leading-relaxed text-gray-200">Vorrei spostare l'appuntamento a settimana prossima.</p>
                          )}
                        </div>
                        <div className="w-7 h-7 rounded-full bg-linear-to-br from-indigo-500 to-purple-500 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-black shadow-inner">M</div>
                      </div>
                    )}

                    {/* Risposta 1 di Agente IA (Typing o Messaggio completo) */}
                    {step >= 3 && (
                      <div className="flex items-start space-x-2.5 msg-pop">
                        <div className="w-7 h-7 rounded-xl bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white shadow-[0_4px_12px_rgba(79,70,229,0.3)]"><svg className="w-3.5 h-3.5 fill-current animate-pulse" viewBox="0 0 24 24"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8 1 5.4-4.9-2.5-4.9 2.5 1-5.4-3.9-3.8 5.4-.8z" /></svg></div>
                        <div className={`text-gray-200 rounded-2xl rounded-tl-none px-3.5 py-2.5 border transition-all duration-300 max-w-[85%] ${step === 3 ? "bg-indigo-950/20 border-indigo-500/30" : "bg-gray-900/50 border-gray-800"}`}>
                          <span className="block text-[9px] font-bold tracking-wider text-indigo-400 mb-1 uppercase">Agente IA</span>
                          {step === 3 ? (
                            <div className="flex space-x-1 py-1.5 px-1"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.15s]"></div><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.3s]"></div></div>
                          ) : (
                            <p className="text-xs leading-relaxed text-gray-300">Certamente! Ti va bene Martedì alle 15:00 o preferisci Giovedì?</p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Messaggio 2 di Marco */}
                    {step >= 5 && (
                      <div className="flex items-start justify-end space-x-2.5 msg-pop">
                        <div className="bg-gray-900/90 text-gray-200 rounded-2xl rounded-tr-none px-3.5 py-2.5 border border-gray-800 shadow-md max-w-[85%]">
                          <span className="block text-[9px] font-bold tracking-wider text-gray-500 mb-1 uppercase">Marco</span>
                          {step === 5 ? (
                            <div className="flex space-x-1 py-1.5 px-1"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.15s]"></div><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.3s]"></div></div>
                          ) : (
                            <p className="text-xs leading-relaxed text-gray-200">Vada per Martedì alle 15:00. Grazie!</p>
                          )}
                        </div>
                        <div className="w-7 h-7 rounded-full bg-linear-to-br from-indigo-500 to-purple-500 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-black shadow-inner">M</div>
                      </div>
                    )}

                    {/* Risposta finale di Agente IA */}
                    {step >= 7 && (
                      <div className="flex items-start space-x-2.5 msg-pop">
                        <div className="w-7 h-7 rounded-xl bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white shadow-[0_4px_12px_rgba(79,70,229,0.3)]"><svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8 1 5.4-4.9-2.5-4.9 2.5 1-5.4-3.9-3.8 5.4-.8z" /></svg></div>
                        <div className={`text-gray-200 rounded-2xl rounded-tl-none px-3.5 py-2.5 border transition-all duration-300 max-w-[85%] ${step === 7 ? "bg-indigo-950/20 border-indigo-500/30" : "bg-gray-900/50 border-gray-800 shadow-[0_0_20px_rgba(99,102,241,0.08)]"}`}>
                          <span className="block text-[9px] font-bold tracking-wider text-indigo-400 mb-1 uppercase">Agente IA</span>
                          {step === 7 ? (
                            <div className="flex space-x-1 py-1.5 px-1"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.15s]"></div><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.3s]"></div></div>
                          ) : (
                            <p className="text-xs leading-relaxed text-gray-300">Perfetto Marco, cambio registrato nel CRM. Ti ho appena inviato il nuovo invito email!</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ================= SCENARIO CHAT 2: SARA ================= */}
                {step >= 9 && (
                  <div className="space-y-3.5 flex flex-col justify-end h-full enter-scene">
                    
                    {/* Messaggio 1 di Sara */}
                    <div className="flex items-start justify-end space-x-2.5 msg-pop">
                      <div className="bg-gray-900/90 text-gray-200 rounded-2xl rounded-tr-none px-3.5 py-2.5 border border-gray-800 shadow-md max-w-[85%]">
                        <span className="block text-[9px] font-bold tracking-wider text-gray-500 mb-1 uppercase">Sara</span>
                        {step === 9 ? (
                          <div className="flex space-x-1 py-1.5 px-1"><div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div><div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce [animation-delay:0.15s]"></div><div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce [animation-delay:0.3s]"></div></div>
                        ) : (
                          <p className="text-xs leading-relaxed text-gray-200">Ciao! Vorrei saperne di più sulle vostre automazioni.</p>
                        )}
                      </div>
                      <div className="w-7 h-7 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-black shadow-inner">S</div>
                    </div>

                    {/* Risposta 1 dell'Agente IA */}
                    {step >= 11 && (
                      <div className="flex items-start space-x-2.5 msg-pop">
                        <div className="w-7 h-7 rounded-xl bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white shadow-[0_4px_12px_rgba(79,70,229,0.3)]"><svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8 1 5.4-4.9-2.5-4.9 2.5 1-5.4-3.9-3.8 5.4-.8z" /></svg></div>
                        <div className={`text-gray-200 rounded-2xl rounded-tl-none px-3.5 py-2.5 border transition-all duration-300 max-w-[85%] ${step === 11 ? "bg-indigo-950/20 border-indigo-500/30" : "bg-gray-900/50 border-gray-800"}`}>
                          <span className="block text-[9px] font-bold tracking-wider text-indigo-400 mb-1 uppercase">Agente IA</span>
                          {step === 11 ? (
                            <div className="flex space-x-1 py-1.5 px-1"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.15s]"></div><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.3s]"></div></div>
                          ) : (
                            <p className="text-xs leading-relaxed text-gray-300">Ciao Sara! Automatizziamo flussi e compiti ripetitivi. Di cosa si occupa il tuo business?</p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Messaggio 2 di Sara */}
                    {step >= 13 && (
                      <div className="flex items-start justify-end space-x-2.5 msg-pop">
                        <div className="bg-gray-900/90 text-gray-200 rounded-2xl rounded-tr-none px-3.5 py-2.5 border border-gray-800 shadow-md max-w-[85%]">
                          <span className="block text-[9px] font-bold tracking-wider text-gray-500 mb-1 uppercase">Sara</span>
                          {step === 13 ? (
                            <div className="flex space-x-1 py-1.5 px-1"><div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div><div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce [animation-delay:0.15s]"></div><div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce [animation-delay:0.3s]"></div></div>
                          ) : (
                            <p className="text-xs leading-relaxed text-gray-200">Gestisco un'agenzia e vorrei generare e inviare report settimanali in automatico.</p>
                          )}
                        </div>
                        <div className="w-7 h-7 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-black shadow-inner">S</div>
                      </div>
                    )}

                    {/* Risposta finale Call dell'Agente IA */}
                    {step >= 15 && (
                      <div className="flex items-start space-x-2.5 msg-pop">
                        <div className="w-7 h-7 rounded-xl bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white shadow-[0_4px_12px_rgba(79,70,229,0.3)]"><svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8 1 5.4-4.9-2.5-4.9 2.5 1-5.4-3.9-3.8 5.4-.8z" /></svg></div>
                        <div className={`text-gray-200 rounded-2xl rounded-tl-none px-3.5 py-2.5 border transition-all duration-300 max-w-[85%] ${step === 15 ? "bg-indigo-950/20 border-indigo-500/30" : "bg-gray-900/50 border-gray-800 shadow-[0_0_20px_rgba(168,85,247,0.08)]"}`}>
                          <span className="block text-[9px] font-bold tracking-wider text-indigo-400 mb-1 uppercase">Agente IA</span>
                          {step === 15 ? (
                            <div className="flex space-x-1 py-1.5 px-1"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.15s]"></div><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.3s]"></div></div>
                          ) : (
                            <p className="text-xs leading-relaxed text-gray-300">Sincronizzando Database ed Email possiamo farlo! Ti va di parlarne in una breve chiamata strategica?</p>
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
