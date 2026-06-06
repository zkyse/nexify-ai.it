"use client";

import { useEffect, useRef } from "react";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    const rotateX = -(y / (box.height / 2)) * 8;
    const rotateY = (x / (box.width / 2)) * 8;
    
    card.style.animation = "none";
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0, -12px, 0)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    if (card.classList.contains("card-1")) card.style.animation = "floatCard1 6s ease-in-out infinite";
    if (card.classList.contains("card-2")) card.style.animation = "floatCard2 6.5s ease-in-out infinite";
    if (card.classList.contains("card-3")) card.style.animation = "floatCard3 7s ease-in-out infinite";
    card.style.transform = "";
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".mobile-reveal-card");
            cards.forEach((card, index) => {
              (card as HTMLElement).style.setProperty("--delay", `${index * 0.2}s`);
              card.classList.add("active");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#02040a] overflow-hidden py-20 md:py-28">
      
      {/* Iniezione sicura dei Keyframes nel foglio di stile globale tramite stringa pura */}
      <style>{`
        @keyframes floatCard1 { 0%, 100% { transform: translateY(0px) translateZ(0); } 50% { transform: translateY(-22px) translateZ(0); } }
        @keyframes floatCard2 { 0%, 100% { transform: translateY(-12px) translateZ(0); } 50% { transform: translateY(10px) translateZ(0); } }
        @keyframes floatCard3 { 0%, 100% { transform: translateY(6px) translateZ(0); } 50% { transform: translateY(-16px) translateZ(0); } }
        @keyframes floatInternalCore { 0%, 100% { transform: translateY(0px) scale(1); } 50% { transform: translateY(-6px) scale(1.02); } }
        @keyframes floatInternalAgent { 0%, 100% { transform: translate(0px, 0px) rotate(0deg); } 33% { transform: translate(2px, -4px) rotate(1deg); } 66% { transform: translate(-2px, -2px) rotate(-1deg); } }
        @keyframes floatInternalHub { 0%, 100% { transform: translateY(0px) scale(1); } 50% { transform: translateY(5px) scale(0.98); } }
        @keyframes microMoveInput { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-8px) scale(1.04); } }
        @keyframes microScaleBrain { 0%, 100% { transform: scale(1) rotate(0deg); filter: drop-shadow(0 0 2px rgba(168,85,247,0.2)); } 50% { transform: scale(1.22) rotate(8deg); filter: drop-shadow(0 0 12px rgba(168,85,247,0.6)); } }
        @keyframes microRotateLightning { 0%, 100% { transform: scale(1) rotate(0deg); filter: drop-shadow(0 0 2px rgba(59,130,246,0.2)); } 50% { transform: scale(1.3) rotate(-15deg); filter: drop-shadow(0 0 14px rgba(59,130,246,0.7)); } }
        @keyframes appScatter { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-3px, -4px) scale(1.06); } }
        @keyframes pulseGlow { 0%, 100% { opacity: 0.4; transform: scale(0.95); } 50% { opacity: 1; transform: scale(1.25); } }
        @keyframes dataFlow { to { stroke-dashoffset: -20; } }
        
        .mobile-reveal-card { opacity: 0; transform: translateY(40px); transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); transition-delay: var(--delay, 0s); }
        .mobile-reveal-card.active { opacity: 1; transform: translateY(0); }
        .mobile-reveal-card.active.card-1 { animation: floatCard1 6s ease-in-out infinite; }
        .mobile-reveal-card.active.card-2 { animation: floatCard2 6.5s ease-in-out infinite; }
        .mobile-reveal-card.active.card-3 { animation: floatCard3 7s ease-in-out infinite; }
      `}</style>
      
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none z-0" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="pb-12 md:pb-20">
          
          {/* TESTATA SEZIONE */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-24">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-10 before:bg-gradient-to-r before:from-transparent before:to-indigo-500/40 after:h-px after:w-10 after:bg-gradient-to-l after:from-transparent after:to-indigo-500/40">
              <span className="inline-flex bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent font-semibold tracking-widest text-[11px] uppercase">
                Infrastrutture Evolute
              </span>
            </div>
            <h2 className="bg-gradient-to-r from-gray-200 via-indigo-200 to-gray-50 bg-clip-text pb-4 font-nacelle text-3xl font-bold tracking-tight text-transparent md:text-4.5xl leading-tight">
              Automazioni e Agenti IA su Misura
            </h2>
            <p className="text-lg text-indigo-200/60 max-w-2xl mx-auto">
              Abbandona i sistemi rigidi e precostituiti. Analizziamo i colli di bottiglia dei tuoi flussi di lavoro per creare ecosistemi intelligenti cuciti sulle tue reali necessità operative.
            </p>
          </div>

          {/* GRIGLIA CARD */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-12 lg:max-w-none lg:grid-cols-3 pt-4">
            
            {/* CARD 1 */}
            <a
              className="mobile-reveal-card card-1 group/card relative h-full overflow-hidden rounded-2xl bg-gray-900/60 border border-gray-800/80 p-px transition-all duration-500 ease-out"
              style={{ transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              href="#contatti"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 flex flex-col justify-between" style={{ transform: "translateZ(20px)" }}>
                <div className="relative h-52 w-full bg-gray-900/20 border-b border-gray-900/80 flex items-center justify-center p-4 overflow-hidden group-hover/card:bg-gray-900/10 transition-colors">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)] pointer-events-none" />
                  <div className="flex items-center justify-between w-full max-w-[260px] z-10">
                    
                    <div 
                      style={{ animation: "microMoveInput 3.5s ease-in-out infinite" }}
                      className="w-16 h-16 rounded-xl border border-gray-800 bg-gray-950 p-2 flex flex-col justify-between shadow-xl relative group-hover/card:border-indigo-500/40 transition-all duration-300"
                    >
                      <span className="text-sm">📥</span>
                      <div className="space-y-1">
                        <div className="w-full h-1 bg-gray-800 group-hover/card:bg-indigo-950 rounded-xs transition-colors" />
                        <div className="w-2/3 h-1 bg-gray-800 group-hover/card:bg-indigo-900 rounded-xs transition-colors" />
                      </div>
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-mono font-medium text-gray-500 uppercase tracking-widest group-hover/card:text-indigo-400 transition-colors">INPUT</div>
                    </div>

                    <div className="flex-1 px-3 relative flex items-center justify-center">
                      <svg className="w-full h-8 text-gray-800 group-hover/card:text-indigo-500/70 transition-colors duration-500" viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path style={{ strokeDasharray: "6 4", animation: "dataFlow 1.2s linear infinite" }} d="M0 4 C20 4, 10 16, 30 16" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M0 16 C20 16, 10 16, 30 16" stroke="currentColor" strokeWidth="1.5" />
                        <path style={{ strokeDasharray: "6 4", animation: "dataFlow 1.2s linear infinite" }} d="M0 28 C20 28, 10 16, 30 16" stroke="currentColor" strokeWidth="1.5" />
                        <path style={{ strokeDasharray: "5 3", animation: "dataFlow 0.8s linear infinite" }} d="M30 16 C45 16, 40 16, 60 16" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>

                    {/* Core Box Animato */}
                    <div 
                      style={{ animation: "floatInternalCore 4s ease-in-out infinite" }}
                      className="w-20 h-24 rounded-xl border border-indigo-500/20 bg-gradient-to-b from-indigo-950/20 to-purple-950/5 p-2.5 flex flex-col justify-between shadow-2xl relative overflow-hidden group-hover/card:border-indigo-500/60 group-hover/card:shadow-[0_0_30px_rgba(99,102,241,0.25)] group-hover/card:scale-105 transition-all duration-500"
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px)] bg-[size:4px_4px]" />
                      <div className="flex items-center justify-between relative z-10">
                        <span className="text-[9px] font-black font-mono text-indigo-400">CORE-A1</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" style={{ animation: "pulseGlow 1.5s infinite" }} />
                      </div>
                      <div className="space-y-1.5 relative z-10">
                        <div className="w-full h-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xs flex items-center px-1">
                          <div className="w-full h-1 bg-indigo-400/80 rounded-2xs group-hover/card:w-4/5 transition-all duration-500" />
                        </div>
                        <div className="w-full h-3 bg-purple-500/10 border border-purple-500/20 rounded-xs flex items-center px-1">
                          <div className="w-4/5 h-1 bg-purple-400/80 rounded-2xs group-hover/card:w-full transition-all duration-500" />
                        </div>
                      </div>
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-mono text-indigo-400/60 uppercase tracking-widest whitespace-nowrap">CUSTOM</div>
                    </div>

                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3.5">
                    <span className="btn-sm inline-flex rounded-full bg-gray-900 border border-gray-800/80 px-3 py-0.5 text-xs font-normal shadow-inner">
                      <span className="bg-gradient-to-r from-indigo-400 to-indigo-200 bg-clip-text text-transparent font-medium">
                        Architetture Flessibili
                      </span>
                    </span>
                  </div>
                  <p className="text-sm text-indigo-200/60 leading-relaxed group-hover/card:text-indigo-200/85 transition-colors duration-300">
                    Sia che tu gestisca una ditta individuale o flussi societari complessi, mappiamo i passaggi ridondanti e configuriamo algoritmi capaci di assorbire l'operatività meccanica.
                  </p>
                </div>
              </div>
            </a>

            {/* CARD 2 */}
            <a
              className="mobile-reveal-card card-2 group/card relative h-full overflow-hidden rounded-2xl bg-gray-900/60 border border-gray-800/80 p-px transition-all duration-500 ease-out"
              style={{ transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              href="#contatti"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 flex flex-col justify-between" style={{ transform: "translateZ(20px)" }}>
                <div className="relative h-52 w-full bg-gray-900/20 border-b border-gray-900/80 flex items-center justify-center p-4 overflow-hidden group-hover/card:bg-gray-900/10 transition-colors">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08)_0%,transparent_70%)] pointer-events-none" />
                  <div className="flex items-center justify-between w-full max-w-[260px] z-10">
                    
                    <div 
                      style={{ animation: "microMoveInput 3.5s ease-in-out infinite" }}
                      className="w-16 h-16 rounded-xl border border-gray-800 bg-gray-950 p-2 flex flex-col justify-between shadow-xl relative group-hover/card:border-purple-500/40 transition-all duration-300"
                    >
                      <span className="text-sm">👤</span>
                      <div className="space-y-1">
                        <div className="w-full h-1 bg-gray-800 group-hover/card:bg-purple-950 rounded-xs transition-colors" />
                        <div className="w-4/5 h-1 bg-gray-800 group-hover/card:bg-purple-900 rounded-xs transition-colors" />
                      </div>
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-mono font-medium text-gray-500 uppercase tracking-widest group-hover/card:text-purple-400 transition-colors">PROMPT</div>
                    </div>

                    <div className="flex-1 px-3 relative flex items-center justify-center">
                      <svg className="w-full h-8 text-gray-800 group-hover/card:text-purple-500/70 transition-colors duration-500" viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path style={{ strokeDasharray: "5 3", animation: "dataFlow 0.8s linear infinite" }} d="M0 4 C20 4, 10 16, 30 16" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M0 16 C20 16, 10 16, 30 16" stroke="currentColor" strokeWidth="1.5" />
                        <path style={{ strokeDasharray: "6 4", animation: "dataFlow 1.2s linear infinite" }} d="M0 28 C20 28, 10 16, 30 16" stroke="currentColor" strokeWidth="1.5" />
                        <path style={{ strokeDasharray: "6 4", animation: "dataFlow 1.2s linear infinite" }} d="M30 16 C45 16, 40 16, 60 16" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>

                    {/* Agent Box Animato */}
                    <div 
                      style={{ animation: "floatInternalAgent 4.5s ease-in-out infinite" }}
                      className="w-20 h-24 rounded-xl border border-purple-500/20 bg-gradient-to-b from-purple-950/20 to-indigo-950/5 p-2.5 flex flex-col justify-between shadow-2xl relative overflow-hidden group-hover/card:border-purple-500/60 group-hover/card:shadow-[0_0_30px_rgba(168,85,247,0.25)] group-hover/card:scale-105 transition-all duration-500"
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px)] bg-[size:4px_4px]" />
                      <div className="flex items-center justify-between relative z-10">
                        <span className="text-[9px] font-black font-mono text-purple-400">AGENT-IA</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" style={{ animation: "pulseGlow 1.2s infinite" }} />
                      </div>
                      <div className="text-center text-lg py-0.5 select-none">
                        <span style={{ display: "inline-block", animation: "microScaleBrain 2.8s ease-in-out infinite" }}>🤖</span>
                      </div>
                      <span className="text-[7px] font-mono text-purple-400 bg-purple-950/60 px-1 py-0.5 rounded border border-purple-900/40 text-center tracking-tighter uppercase group-hover/card:bg-purple-500 group-hover/card:text-white transition-colors duration-300">THINKING</span>
                    </div>

                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3.5">
                    <span className="btn-sm inline-flex rounded-full bg-gray-900 border border-gray-800/80 px-3 py-0.5 text-xs font-normal shadow-inner">
                      <span className="bg-gradient-to-r from-indigo-400 to-indigo-200 bg-clip-text text-transparent font-medium">
                        Automazione Cognitiva
                      </span>
                    </span>
                  </div>
                  <p className="text-sm text-indigo-200/60 leading-relaxed group-hover/card:text-indigo-200/85 transition-colors duration-300">
                    Sviluppiamo agenti autonomi dotati di memoria storica e logica aziendale, capaci di smistare ticket complessi, aggiornare i tuoi software interni e dialogare in linguaggio naturale.
                  </p>
                </div>
              </div>
            </a>

            {/* CARD 3 */}
            <a
              className="mobile-reveal-card card-3 group/card relative h-full overflow-hidden rounded-2xl bg-gray-900/60 border border-gray-800/80 p-px transition-all duration-500 ease-out"
              style={{ transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              href="#contatti"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 flex flex-col justify-between" style={{ transform: "translateZ(20px)" }}>
                <div className="relative h-52 w-full bg-gray-900/20 border-b border-gray-900/80 flex items-center justify-center p-4 overflow-hidden group-hover/card:bg-gray-900/10 transition-colors">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />
                  <div className="flex items-center justify-between w-full max-w-[260px] z-10">
                    
                    <div 
                      style={{ animation: "appScatter 4s ease-in-out infinite" }}
                      className="w-16 h-16 rounded-xl border border-gray-800 bg-gray-950 p-1.5 flex flex-col justify-between shadow-xl relative group-hover/card:border-blue-500/40 transition-all duration-300"
                    >
                      <div className="flex justify-between items-center select-none">
                        <span className="text-xs">📧</span>
                        <span className="text-xs">💬</span>
                      </div>
                      <div className="space-y-1">
                        <div className="w-full h-1 bg-gray-800 group-hover/card:bg-blue-950 rounded-xs transition-colors" />
                        <div className="w-full h-1 bg-gray-800 group-hover/card:bg-blue-900 rounded-xs transition-colors" />
                      </div>
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-mono font-medium text-gray-500 uppercase tracking-widest group-hover/card:text-blue-400 transition-colors">APPS</div>
                    </div>

                    <div className="flex-1 px-3 relative flex items-center justify-center">
                      <svg className="w-full h-8 text-gray-800 group-hover/card:text-blue-500/70 transition-colors duration-500" viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path style={{ strokeDasharray: "6 4", animation: "dataFlow 1.2s linear infinite" }} d="M0 4 C20 4, 10 16, 30 16" stroke="currentColor" strokeWidth="1.5" />
                        <path style={{ strokeDasharray: "5 3", animation: "dataFlow 0.8s linear infinite" }} d="M0 16 C20 16, 10 16, 30 16" stroke="currentColor" strokeWidth="1.5" />
                        <path style={{ strokeDasharray: "6 4", animation: "dataFlow 1.2s linear infinite" }} d="M0 28 C20 28, 10 16, 30 16" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M30 16 C45 16, 40 16, 60 16" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>

                    {/* Hub API Animato */}
                    <div 
                      style={{ animation: "floatInternalHub 3.8s ease-in-out infinite" }}
                      className="w-20 h-24 rounded-xl border border-blue-500/20 bg-gradient-to-b from-blue-950/20 to-indigo-950/5 p-2.5 flex flex-col justify-between shadow-2xl relative overflow-hidden group-hover/card:border-blue-500/60 group-hover/card:shadow-[0_0_30px_rgba(59,130,246,0.25)] group-hover/card:scale-105 transition-all duration-500"
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px)] bg-[size:4px_4px]" />
                      <div className="flex items-center justify-between relative z-10">
                        <span className="text-[9px] font-black font-mono text-blue-400">HUB-API</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" style={{ animation: "pulseGlow 1.4s infinite" }} />
                      </div>
                      <div className="relative flex justify-center py-1 select-none">
                        <span style={{ display: "inline-block", animation: "microRotateLightning 2.2s ease-in-out infinite" }} className="text-blue-400 text-base font-black relative z-10 block">⚡</span>
                      </div>
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-mono text-blue-400/60 uppercase tracking-widest whitespace-nowrap">SYNC-ON</div>
                    </div>

                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3.5">
                    <span className="btn-sm inline-flex rounded-full bg-gray-900 border border-gray-800/80 px-3 py-0.5 text-xs font-normal shadow-inner">
                      <span className="bg-gradient-to-r from-indigo-400 to-indigo-200 bg-clip-text text-transparent font-medium">
                        Zero Attriti API
                      </span>
                    </span>
                  </div>
                  <p className="text-sm text-indigo-200/60 leading-relaxed group-hover/card:text-indigo-200/85 transition-colors duration-300">
                    Uniamo i tuoi applicativi isolati (CRM, gestionali, database, email, fogli cloud) in un unico organismo centrale sincronizzato, eliminando i passaggi manuali di copia-incolla.
                  </p>
                </div>
              </div>
            </a>

          </Spotlight>
        </div>
      </div>
    </section>
  );
}
