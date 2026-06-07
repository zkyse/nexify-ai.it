"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Struttura dati lineare per i messaggi della chat simulata
const chatSteps = [
  { id: 1, type: "user", sender: "Marco", avatar: "M", text: "...", isTyping: true },
  { id: 2, type: "user", sender: "Marco", avatar: "M", text: "Vorrei spostare l'appuntamento a settimana prossima.", isTyping: false },
  { id: 3, type: "ai", sender: "Agente IA", avatar: "AI", text: "...", isTyping: true },
  { id: 4, type: "ai", sender: "Agente IA", avatar: "AI", text: "Certamente! Ti va bene Martedì alle 15:00 o preferisci Giovedì?", isTyping: false },
  { id: 5, type: "user", sender: "Marco", avatar: "M", text: "...", isTyping: true },
  { id: 6, type: "user", sender: "Marco", avatar: "M", text: "Vada per Martedì alle 15:00. Grazie!", isTyping: false },
  { id: 7, type: "ai", sender: "Agente IA", avatar: "AI", text: "...", isTyping: true },
  { id: 8, type: "ai", sender: "Agente IA", avatar: "AI", text: "Perfetto Marco, cambio appuntamento confermato! Ti ho inviato la conferma via mail.", isTyping: false },
  
  // Scenario 2: Sara (Id da 9 a 14)
  { id: 9, type: "user", sender: "Sara", avatar: "S", text: "...", isTyping: true },
  { id: 10, type: "user", sender: "Sara", avatar: "S", text: "Ciao! Vorrei saperne di più sulle vostre automazioni.", isTyping: false },
  { id: 11, type: "ai", sender: "Agente IA", avatar: "AI", text: "...", isTyping: true },
  { id: 12, type: "ai", sender: "Agente IA", avatar: "AI", text: "Ciao Sara! Automatizziamo flussi ripetitivi. Di cosa si occupa il tuo business?", isTyping: false },
  { id: 13, type: "user", sender: "Sara", avatar: "S", text: "...", isTyping: true },
  { id: 14, type: "user", sender: "Sara", avatar: "S", text: "Gestisco un'agenzia e vorrei inviare report settimanali in automatico.", isTyping: false },
  { id: 15, type: "ai", sender: "Agente IA", avatar: "AI", text: "...", isTyping: true },
  { id: 16, type: "ai", sender: "Agente IA", avatar: "AI", text: "Sincronizzando Database ed Email possiamo farlo! Ti va una breve chiamata strategica?", isTyping: false },
];

export default function HeroHome() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    const timeline = [
      { step: 2, delay: 2000 },
      { step: 3, delay: 4500 },
      { step: 4, delay: 7500 },
      { step: 5, delay: 10500 },
      { step: 6, delay: 12500 },
      { step: 7, delay: 15000 },
      { step: 8, delay: 17500 },
      
      { exit: true, delay: 22000 },
      { step: 9, delay: 22600 },
      
      { step: 10, delay: 24500 },
      { step: 11, delay: 27000 },
      { step: 12, delay: 30000 },
      { step: 13, delay: 33500 },
      { step: 14, delay: 35500 },
      { step: 15, delay: 38500 },
      { step: 16, delay: 41500 },
      
      { exit: true, delay: 47000 },
      { step: 1, delay: 47600 }
    ];

    const runTimeline = () => {
      timeline.forEach((item) => {
        const timer = setTimeout(() => {
          if (item.exit) {
            setIsExiting(true);
          } else if (item.step !== undefined) {
            setIsExiting(false);
            setCurrentStep(item.step);
          }
        }, item.delay);
        timers.push(timer);
      });
    };

    runTimeline();

    const interval = setInterval(() => {
      timers.forEach(clearTimeout);
      runTimeline();
    }, 48000);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  const isSaraScenario = currentStep >= 9;
  
  const activeMessages = chatSteps.filter(msg => {
    if (isSaraScenario) {
      return msg.id >= 9 && msg.id <= currentStep;
    } else {
      return msg.id <= currentStep;
    }
  });

  const visibleMessages = activeMessages.filter((msg, idx) => {
    const nextMsg = activeMessages[idx + 1];
    if (nextMsg && nextMsg.sender === msg.sender && nextMsg.isTyping === false) {
      return false;
    }
    return true;
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-4 pb-12 bg-[#02040a]">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes cosmicNebulaPerfect {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(2%, 4%, 0) rotate(90deg); }
          100% { transform: translate3d(0, 0, 0) rotate(180deg); }
        }
        @keyframes gridPanPerfect {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-40px, -40px, 0); }
        }
        @keyframes msgPopIn {
          0% { opacity: 0; transform: translate3d(0, 8px, 0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes pulseDots {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes techRainLuminous {
          0% { transform: translate3d(0, -120%, 0); }
          100% { transform: translate3d(0, 110vh, 0); }
        }

        /* Animazione automatica in loop per il bottone del test nell'Hero */
        @keyframes pulseButtonHero { 0%, 100% { transform: scale(1); box-shadow: 0 4px 15px rgba(99,102,241,0.2); } 50% { transform: scale(1.02); box-shadow: 0 4px 22px rgba(99,102,241,0.45); } }

        .msg-pop { 
          animation: msgPopIn 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards; 
        }
        .custom-dot { 
          animation: pulseDots 0.8s ease-in-out infinite; 
        }
        
        .animate-auto-hero-primary { animation: pulseButtonHero 3s ease-in-out infinite; }
        
        .rain-stream {
          position: absolute;
          top: 0;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          writing-mode: vertical-rl;
          text-orientation: uppercase;
          white-space: nowrap;
          user-select: none;
          animation: techRainLuminous linear infinite;
          transform: translateZ(0);
          backface-visibility: hidden;
          letter-spacing: 0.25em;
          font-weight: 700;
        }
      `}} />

      {/* STRATO PIOGGIA CONCEPTUALE (AUTOMATION & AI) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <div className="rain-stream left-[4%] text-[#818cf8]/15 text-[8px] blur-[1px]" style={{ animationDuration: '18s', animationDelay: '0s' }}>AI_AGENT_DEPLOY</div>
        <div className="rain-stream left-[25%] text-[#a855f7]/10 text-[9px] blur-[1px]" style={{ animationDuration: '22s', animationDelay: '4s' }}>DATABASE_SYNC</div>
        <div className="rain-stream left-[55%] text-[#6366f1]/15 text-[8px]" style={{ animationDuration: '19s', animationDelay: '1s' }}>LLM_PROCESSING</div>
        <div className="rain-stream left-[70%] text-[#22d3ee]/10 text-[9px] blur-[2px]" style={{ animationDuration: '25s', animationDelay: '7s' }}>WORKFLOW_FLOW</div>
        <div className="rain-stream left-[88%] text-[#c084fc]/15 text-[8px]" style={{ animationDuration: '20s', animationDelay: '2s' }}>API_CONNECTED</div>

        {/* Livello Intermedio */}
        <div className="rain-stream left-[14%] text-[#c084fc]/35 text-[11px]" style={{ animationDuration: '12s', animationDelay: '2s', textShadow: '0 0 4px rgba(192,132,252,0.2)' }}>AUTOMATE_NOW</div>
        <div className="rain-stream left-[38%] text-[#38bdf8]/30 text-[10px]" style={{ animationDuration: '14s', animationDelay: '0.8s', textShadow: '0 0 4px rgba(56,189,248,0.2)' }}>INTEGRATION</div>
        <div className="rain-stream left-[62%] text-[#818cf8]/30 text-[11px]" style={{ animationDuration: '13s', animationDelay: '3s', textShadow: '0 0 4px rgba(129,140,248,0.2)' }}>EFFICIENCY_UP</div>
        <div className="rain-stream left-[80%] text-[#22d3ee]/35 text-[10px]" style={{ animationDuration: '11s', animationDelay: '5s', textShadow: '0 0 4px rgba(34,211,238,0.2)' }}>ZERO_ERRORS</div>

        {/* Primo piano */}
        <div className="rain-stream left-[8%] text-[#818cf8]/60 text-[13px]" style={{ animationDuration: '7s', animationDelay: '0.3s', textShadow: '0 0 8px rgba(129,140,248,0.4)' }}>AI_WORKFLOW</div>
        <div className="rain-stream left-[20%] text-[#22d3ee]/55 text-[12px]" style={{ animationDuration: '6.5s', animationDelay: '1.5s', textShadow: '0 0 8px rgba(34,211,238,0.4)' }}>SMART_AGENTS</div>
        <div className="rain-stream left-[48%] text-[#6366f1]/65 text-[14px]" style={{ animationDuration: '8s', animationDelay: '2.5s', textShadow: '0 0 10px rgba(99,102,241,0.5)' }}>NO_CODE_OPS</div>
        <div className="rain-stream left-[75%] text-[#c084fc]/60 text-[12px]" style={{ animationDuration: '7.2s', animationDelay: '1s', textShadow: '0 0 8px rgba(192,132,252,0.4)' }}>PROD_MAX</div>
        <div className="rain-stream left-[94%] text-[#38bdf8]/55 text-[13px]" style={{ animationDuration: '6s', animationDelay: '3.5s', textShadow: '0 0 8px rgba(56,189,248,0.4)' }}>AUTO_REPORT</div>
      </div>

      {/* STRATO GRIGLIA PROSPETTICA */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.18] overflow-hidden" style={{ WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 90%)", maskImage: "radial-gradient(circle at center, black 40%, transparent 90%)" }}>
        <div className="absolute inset-[-80px] bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:40px_40px]" style={{ animation: "gridPanPerfect 20s linear infinite", transform: "translateZ(0)" }} />
      </div>

      {/* STRATO NEBULOSE / NEON BLOB */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-20%] w-[320px] sm:w-[600px] md:w-[900px] h-[320px] sm:h-[600px] md:h-[900px] rounded-full bg-indigo-600/10 blur-[100px]" style={{ animation: "cosmicNebulaPerfect 40s linear infinite", transform: "translateZ(0)" }} />
        <div className="absolute bottom-[-10%] right-[-20%] w-[280px] sm:w-[500px] md:w-[800px] h-[280px] sm:h-[500px] md:h-[800px] rounded-full bg-purple-600/6 blur-[110px]" style={{ animation: "cosmicNebulaPerfect 35s linear infinite reverse", transform: "translateZ(0)" }} />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full relative z-10">
        <div className="pt-4 pb-4 md:pt-4 md:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* TEXT COLUMN */}
          <div className="text-left space-y-5 md:space-y-6 text-center lg:text-left">
            <h1 className="bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-1 font-nacelle text-3xl sm:text-4xl font-bold text-transparent md:text-5xl tracking-tight leading-[1.1]">
              Automatizza il presente. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Progetta il futuro.
              </span>
            </h1>
            <p className="text-base md:text-lg text-indigo-200/65 max-w-xl mx-auto lg:mx-0">
              Soluzioni IA personalizzate per PMI e professionisti. Automatizziamo la tua operatività quotidiana per eliminare i tempi morti e aumentare la produttività.
            </p>
            
            {/* Blocco Doppi Pulsanti Bilanciato */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-1 max-w-md mx-auto lg:mx-0">
              
              {/* Pulsante Primario - Test di Efficienza (Con animazione automatica) */}
              <Link 
                className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-t from-indigo-600 to-indigo-500 text-white font-semibold rounded-xl py-3 px-6 text-sm transition-all transform animate-auto-hero-primary active:scale-95 whitespace-nowrap text-center shadow-lg"
                href="/test"
              >
                Test di Efficienza <span className="ml-2 font-mono">📊</span>
              </Link>

              {/* Pulsante Secondario - Scopri di più (Stile Outline Minimalista) */}
              <Link 
                className="w-full sm:w-auto inline-flex items-center justify-center border border-gray-800 bg-gray-950/40 text-gray-300 hover:text-white hover:bg-gray-900/40 font-medium rounded-xl py-3 px-6 text-sm transition-all active:scale-95 whitespace-nowrap text-center backdrop-blur-xs group" 
                href="/scopri-di-piu"
              >
                Scopri di più <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">-&gt;</span>
              </Link>

            </div>
          </div>

          {/* CHAT MOCKUP COLUMN */}
          <div className="relative flex justify-center w-full mt-4 lg:mt-0">
            <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600/10 blur-[50px] md:blur-[60px]" style={{ transform: "translateZ(0)" }} />
            
            <div className="relative w-full max-w-[420px] min-h-[380px] md:aspect-[10/11] z-10 border border-gray-800/60 bg-gray-950/50 backdrop-blur-xl rounded-2xl p-4 md:p-5 flex flex-col justify-end shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden pt-10 [contain:paint]">
              <div className={`space-y-3 w-full transition-all duration-400 ${isExiting ? "opacity-0 translate-y-[-4px] blur-sm" : "opacity-100 translate-y-0"}`}>
                
                {visibleMessages.map((msg) => {
                  const isUser = msg.type === "user";
                  return (
                    <div key={msg.id} className={`flex items-start space-x-2 msg-pop ${isUser ? "justify-end space-x-reverse" : ""}`}>
                      {!isUser && (
                        <div className="w-7 h-7 rounded-lg bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white shadow-sm">
                          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8 1 5.4-4.9-2.5-4.9 2.5 1-5.4-3.9-3.8 5.4-.8z" />
                          </svg>
                        </div>
                      )}

                      <div className={`text-gray-200 border border-gray-800/70 rounded-2xl px-3.5 py-2 md:py-2.5 max-w-[85%] flex flex-col justify-center ${isUser ? "bg-gray-900/90 rounded-tr-none" : "bg-gray-900/40 rounded-tl-none"}`}>
                        <span className={`block text-[8px] font-bold tracking-wider mb-0.5 uppercase ${isUser ? "text-gray-500" : "text-indigo-400"}`}>
                          {msg.sender}
                        </span>
                        
                        {msg.isTyping ? (
                          <div className="flex space-x-1 py-1 px-0.5 items-center">
                            <div className={`w-1.5 h-1.5 rounded-full custom-dot ${isUser ? "bg-purple-400" : "bg-indigo-400"}`}></div>
                            <div className={`w-1.5 h-1.5 rounded-full custom-dot [animation-delay:0.15s] ${isUser ? "bg-purple-400" : "bg-indigo-400"}`}></div>
                            <div className={`w-1.5 h-1.5 rounded-full custom-dot [animation-delay:0.3s] ${isUser ? "bg-purple-400" : "bg-indigo-400"}`}></div>
                          </div>
                        ) : (
                          <p className="text-xs text-gray-200 leading-normal">{msg.text}</p>
                        )}
                      </div>

                      {isUser && (
                        <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[9px] font-black bg-gradient-to-br ${msg.sender === "Sara" ? "from-purple-500 to-pink-500" : "from-indigo-500 to-purple-500"}`}>
                          {msg.avatar}
                        </div>
                      )}
                    </div>
                  );
                })}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
