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
        @keyframes cosmicNebulaMobile {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(5%, 8%, 0) rotate(180deg); }
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
        
        /* Animazione per la pioggia di codice tech */
        @keyframes techRain {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.4; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        .msg-pop { 
          animation: msgPopIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; 
        }
        .custom-dot { 
          animation: pulseDots 0.8s ease-in-out infinite; 
        }
        
        /* Regola per i flussi di pioggia digitale */
        .rain-stream {
          position: absolute;
          top: 0;
          color: #6366f1;
          font-family: monospace;
          font-size: 11px;
          writing-mode: vertical-rl;
          text-orientation: uppercase;
          white-space: nowrap;
          user-select: none;
          animation: techRain linear infinite;
          opacity: 0;
        }
      `}} />

      {/* STRATO PIOGGIA TECH (Matrix-style indaco/viola) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.25]">
        <div className="rain-stream left-[5%]" style={{ animationDuration: '7s', animationDelay: '0s' }}>1010011011001</div>
        <div className="rain-stream left-[12%] text-purple-400" style={{ animationDuration: '9s', animationDelay: '2s', fontSize: '13px' }}>0110101</div>
        <div className="rain-stream left-[22%]" style={{ animationDuration: '6s', animationDelay: '0.5s' }}>0011001110</div>
        <div className="rain-stream left-[35%] text-purple-500" style={{ animationDuration: '11s', animationDelay: '4s' }}>1101001011</div>
        <div className="rain-stream left-[48%]" style={{ animationDuration: '8s', animationDelay: '1s', fontSize: '10px' }}>01011100</div>
        <div className="rain-stream left-[58%] text-indigo-400" style={{ animationDuration: '7s', animationDelay: '3s' }}>100101101</div>
        <div className="rain-stream left-[68%]" style={{ animationDuration: '10s', animationDelay: '0.2s' }}>11100101</div>
        <div className="rain-stream left-[78%] text-purple-400" style={{ animationDuration: '6s', animationDelay: '2.5s', fontSize: '12px' }}>001011011</div>
        <div className="rain-stream left-[88%]" style={{ animationDuration: '9s', animationDelay: '1.5s' }}>110010101</div>
        <div className="rain-stream left-[95%] text-indigo-300" style={{ animationDuration: '12s', animationDelay: '5s' }}>011010</div>
      </div>

      {/* STRATO GRIGLIA PROSPETTICA */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.35] overflow-hidden" style={{ WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 90%)", maskImage: "radial-gradient(circle at center, black 40%, transparent 90%)" }}>
        <div className="absolute inset-[-80px] bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:40px_40px]" style={{ animation: "gridPanPerfect 12s linear infinite", willChange: "transform" }} />
      </div>

      {/* STRATO NEBULOSE / NEON BLOB */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-20%] w-[320px] sm:w-[600px] md:w-[900px] h-[320px] sm:h-[600px] md:h-[900px] rounded-full bg-indigo-600/10 md:bg-indigo-600/15 blur-[80px] sm:blur-[120px]" style={{ animation: "cosmicNebulaMobile 20s linear infinite", willChange: "transform" }} />
        <div className="absolute bottom-[-10%] right-[-20%] w-[280px] sm:w-[500px] md:w-[800px] h-[280px] sm:h-[500px] md:h-[800px] rounded-full bg-purple-600/10 blur-[90px] sm:blur-[130px]" style={{ animation: "cosmicNebulaMobile 16s linear infinite reverse", willChange: "transform" }} />
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
            <div className="absolute w-64 h-64 md:w-85 md:h-85 rounded-full pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600/10 blur-[50px] md:blur-[60px]" style={{ animation: "centralPulse 5s ease-in-out infinite", willChange: "transform" }} />
            
            <div className="relative w-full max-w-[420px] min-h-[380px] md:aspect-[10/11] z-10 border border-gray-800/60 bg-gray-950/50 backdrop-blur-xl rounded-2xl p-4 md:p-5 flex flex-col justify-end shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden pt-10 [contain:paint]">
              <div className={`space-y-3 w-full transition-all duration-400 ${isExiting ? "opacity-0 translate-y-[-4px] blur-sm" : "opacity-100 translate-y-0"}`}>
                
                {visibleMessages.map((msg) => {
                  const isUser = msg.type === "user";
                  return (
                    <div key={msg.id} className={`flex items-start space-x-2 msg-pop ${isUser ? "justify-end space-x-reverse" : ""}`}>
                      {!isUser && (
                        <div className="w-6.5 h-6.5 rounded-lg bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white shadow-sm">
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
                        <div className={`w-6.5 h-6.5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[9px] font-black bg-gradient-to-br ${msg.sender === "Sara" ? "from-purple-500 to-pink-500" : "from-indigo-500 to-purple-500"}`}>
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
