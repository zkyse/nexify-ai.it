"use client";

import { useState, useEffect } from "react";

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
  { id: 10, type: "user", sender: "Sara", avatar: "S", text: "Ciao! Vorrei saberne di più sulle vostre automazioni.", isTyping: false },
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
        @keyframes cosmicNebulaMobile {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(3%, 5%, 0) rotate(180deg); }
          100% { transform: translate3d(0, 0, 0) rotate(360deg); }
        }
        @keyframes gridPanPerfect {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-40px, -40px, 0); }
        }
        @keyframes msgPopIn {
          0% { opacity: 0; transform: translate3d(0, 12px, 0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes pulseDots {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes techRainLuminous {
          0% { transform: translate3d(0, -100%, 0); }
          100% { transform: translate3d(0, 105vh, 0); }
        }

        .msg-pop { 
          animation: msgPopIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; 
        }
        .custom-dot { 
          animation: pulseDots 0.8s ease-in-out infinite; 
        }
        
        /* Strato pioggia ottimizzato per GPU ed effetto di profondità esteso */
        .rain-stream {
          position: absolute;
          top: 0;
          font-family: monospace;
          writing-mode: vertical-rl;
          text-orientation: uppercase;
          white-space: nowrap;
          user-select: none;
          animation: techRainLuminous linear infinite;
          transform: translateZ(0); /* Attiva accelerazione hardware nativa */
          backface-visibility: hidden;
          letter-spacing: 0.2em;
        }
      `}} />

      {/* STRATO PIOGGIA TECH IPER-LUMINOSA STRATIFICATA */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Sfondo lontano (Piccoli, lenti, opachi, leggermente sfocati) */}
        <div className="rain-stream left-[3%] text-[#818cf8]/20 text-[9px] blur-[1px]" style={{ animationDuration: '14s', animationDelay: '0s' }}>1010011011</div>
        <div className="rain-stream left-[28%] text-[#a855f7]/15 text-[10px] blur-[1px]" style={{ animationDuration: '16s', animationDelay: '3s' }}>110100101101</div>
        <div className="rain-stream left-[52%] text-[#6366f1]/20 text-[9px]" style={{ animationDuration: '13s', animationDelay: '1s' }}>010111001</div>
        <div className="rain-stream left-[73%] text-[#22d3ee]/15 text-[10px] blur-[1px]" style={{ animationDuration: '17s', animationDelay: '5s' }}>001011011</div>
        <div className="rain-stream left-[91%] text-[#c084fc]/20 text-[9px]" style={{ animationDuration: '15s', animationDelay: '2s' }}>11001010</div>

        {/* Livello Medio (Standard, bilanciati) */}
        <div className="rain-stream left-[12%] text-[#c084fc]/50 text-[13px]" style={{ animationDuration: '9s', animationDelay: '1.5s', textShadow: '0 0 6px rgba(192,132,252,0.3)' }}>0110101</div>
        <div className="rain-stream left-[39%] text-[#38bdf8]/40 text-[12px]" style={{ animationDuration: '10s', animationDelay: '0.5s', textShadow: '0 0 6px rgba(56,189,248,0.3)' }}>100101101</div>
        <div className="rain-stream left-[65%] text-[#818cf8]/40 text-[13px]" style={{ animationDuration: '11s', animationDelay: '2.5s', textShadow: '0 0 6px rgba(129,140,248,0.3)' }}>11100101</div>
        <div className="rain-stream left-[84%] text-[#22d3ee]/45 text-[11px]" style={{ animationDuration: '8s', animationDelay: '4s', textShadow: '0 0 6px rgba(34,211,238,0.3)' }}>110010101</div>

        {/* Primo piano (Grandi, veloci, molto luminosi) */}
        <div className="rain-stream left-[7%] text-[#818cf8]/75 text-[16px]" style={{ animationDuration: '5.5s', animationDelay: '0.2s', textShadow: '0 0 10px rgba(129,140,248,0.6)' }}>10110</div>
        <div className="rain-stream left-[21%] text-[#22d3ee]/70 text-[15px]" style={{ animationDuration: '4.8s', animationDelay: '1.2s', textShadow: '0 0 10px rgba(34,211,238,0.5)' }}>001101</div>
        <div className="rain-stream left-[47%] text-[#6366f1]/80 text-[18px]" style={{ animationDuration: '6s', animationDelay: '2.2s', textShadow: '0 0 12px rgba(99,102,241,0.6)' }}>1101</div>
        <div className="rain-stream left-[79%] text-[#c084fc]/75 text-[14px]" style={{ animationDuration: '5.2s', animationDelay: '0.7s', textShadow: '0 0 10px rgba(192,132,252,0.5)' }}>010111</div>
        <div className="rain-stream left-[96%] text-[#38bdf8]/70 text-[16px]" style={{ animationDuration: '4.5s', animationDelay: '3.1s', textShadow: '0 0 10px rgba(56,189,248,0.5)' }}>1001</div>
      </div>

      {/* STRATO GRIGLIA PROSPETTICA */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.25] overflow-hidden" style={{ WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 90%)", maskImage: "radial-gradient(circle at center, black 40%, transparent 90%)" }}>
        <div className="absolute inset-[-80px] bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:40px_40px]" style={{ animation: "gridPanPerfect 16s linear infinite", transform: "translateZ(0)" }} />
      </div>

      {/* STRATO NEBULOSE / NEON BLOB */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-20%] w-[320px] sm:w-[600px] md:w-[900px] h-[320px] sm:h-[600px] md:h-[900px] rounded-full bg-indigo-600/10 blur-[80px] sm:blur-[120px]" style={{ animation: "cosmicNebulaMobile 25s linear infinite", transform: "translateZ(0)" }} />
        <div className="absolute bottom-[-10%] right-[-20%] w-[280px] sm:w-[500px] md:w-[800px] h-[280px] sm:h-[500px] md:h-[800px] rounded-full bg-purple-600/8 blur-[90px] sm:blur-[130px]" style={{ animation: "cosmicNebulaMobile 22s linear infinite reverse", transform: "translateZ(0)" }} />
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
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3.5 pt-1">
              <a className="btn group bg-gradient-to-t from-indigo-600 to-indigo-500 text-white shadow-md rounded-xl py-3 px-5 text-sm font-medium transition-all transform active:scale-95" href="#contatti">
                Automatizza Ora <span className="ml-1 group-hover:translate-x-1 transition-transform inline-block">-&gt;</span>
              </a>
              <a className="btn bg-gray-900/80 text-gray-300 border border-gray-800/80 rounded-xl py-3 px-5 text-sm font-medium transition-colors hover:bg-gray-800" href="https://wa.me/message/Y7G7NANQK6ACA1" target="_blank" rel="noopener noreferrer">
                Fissa una Chiamata
              </a>
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
