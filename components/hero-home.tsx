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
  { id: 8, type: "ai", sender: "Agente IA", avatar: "AI", text: "Perfetto Marco, cambio registrato nel CRM. Ti ho inviato l'invito email!", isTyping: false },
  
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

    // Timeline sequenziale basata sui tuoi delay originali
    const timeline = [
      { step: 2, delay: 2000 },
      { step: 3, delay: 4500 },
      { step: 4, delay: 7500 },
      { step: 5, delay: 10500 },
      { step: 6, delay: 12500 },
      { step: 7, delay: 15000 },
      { step: 8, delay: 17500 },
      
      // Transizione fuori e cambio scenario su Sara
      { exit: true, delay: 22000 },
      { step: 9, delay: 22600 },
      
      // Sequenza Sara
      { step: 10, delay: 24500 },
      { step: 11, delay: 27000 },
      { step: 12, delay: 30000 },
      { step: 13, delay: 33500 },
      { step: 14, delay: 35500 },
      { step: 15, delay: 38500 },
      { step: 16, delay: 41500 },
      
      // Reset totale e ritorno a Marco
      { exit: true, delay: 47000 },
      { step: 1, delay: 47600 }
    ];

    // Funzione ciclica per avviare la timeline
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

    // Loop infinito della timeline globale (48 secondi totali di ciclo completo)
    const interval = setInterval(() => {
      timers.forEach(clearTimeout);
      runTimeline();
    }, 48000);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, []);

  // Determina quale set di messaggi mostrare nel box
  const isSaraScenario = currentStep >= 9;
  
  // Filtra i messaggi attivi da renderizzare all'interno dello scenario corrente
  const activeMessages = chatSteps.filter(msg => {
    if (isSaraScenario) {
      return msg.id >= 9 && msg.id <= currentStep;
    } else {
      return msg.id <= currentStep;
    }
  });

  // Raggruppa i messaggi per "coppie" o mantiene gli ultimi per non rompere l'altezza del box
  // Mostra solo il messaggio definitivo se quello successivo (punti di finto typing) è già attivo
  const visibleMessages = activeMessages.filter((msg, idx) => {
    const nextMsg = activeMessages[idx + 1];
    if (nextMsg && nextMsg.sender === msg.sender && nextMsg.isTyping === false) {
      return false; // Nascondi la versione con i tre puntini se c'è già il testo pronto
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
        @keyframes dataStreamMobile {
          0% { transform: translate3d(0, -200px, 0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate3d(0, 110vh, 0); opacity: 0; }
        }
        @keyframes centralPulse {
          0%, 100% { transform: translate3d(-50%, -50%, 0) scale(0.92); opacity: 0.12; }
          50% { transform: translate3d(-50%, -50%, 0) scale(1.08); opacity: 0.22; }
        }
        @keyframes msgPopIn {
          0% { opacity: 0; transform: translate3d(0, 12px, 0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes pulseDots {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .msg-pop { 
          animation: msgPopIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; 
        }
        .custom-dot { 
          animation: pulseDots 0.8s ease-in-out infinite; 
        }
      `}} />

      {/* Background Grids & Streams */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.35] overflow-hidden" style={{ WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 90%)", maskImage: "radial-gradient(circle at center, black 40%, transparent 90%)" }}>
        <div className="absolute inset-[-80px] bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:40px_40px]" style={{ animation: "gridPanPerfect 12s linear infinite", willChange: "transform" }} />
      </div>
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
                
                {/* RENDERING DINAMICO E UNIFICATO DEI MESSAGGI */}
                {visibleMessages.map((msg) => {
                  const isUser = msg.type === "user";
                  return (
                    <div key={msg.id} className={`flex items-start space-x-2 msg-pop ${isUser ? "justify-end space-x-reverse" : ""}`}>
                      {/* Avatar Agente IA */}
                      {!isUser && (
                        <div className="w-6.5 h-6.5 rounded-lg bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white shadow-sm">
                          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8 1 5.4-4.9-2.5-4.9 2.5 1-5.4-3.9-3.8 5.4-.8z" />
                          </svg>
                        </div>
                      )}

                      {/* Corpo Messaggio */}
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

                      {/* Avatar Utente (Marco / Sara) */}
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
