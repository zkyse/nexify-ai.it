"use client";

import { useEffect, useRef } from "react";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Gestore per l'effetto 3D Tilt sulle card al passaggio del mouse
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Calcola la rotazione basata sulla posizione del mouse (max 8 gradi)
    const rotateX = -(y / (box.height / 2)) * 8;
    const rotateY = (x / (box.width / 2)) * 8;
    
    // Disabilitiamo temporaneamente l'animazione CSS inline per non farla "combattere" con il mouse
    card.style.animationPlayState = "paused";
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    // Rimuoviamo il transform inline e riattiviamo l'animazione CSS nativa senza sovrascriverla
    card.style.transform = "";
    card.style.animationPlayState = "running";
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const bgGlows = entry.target.querySelectorAll(".mobile-bg-glow");
              bgGlows.forEach((glow) => glow.classList.add("animate-nebulosa"));

              const cards = entry.target.querySelectorAll(".mobile-reveal-card");
              cards.forEach((card, index) => {
                (card as HTMLElement).style.setProperty("--delay", `${index * 0.22}s`);
                card.classList.add("active");
              });

              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#02040a] overflow-hidden py-20 md:py-28">
      
      {/* ================= CORE DI ANIMAZIONE CSS AVANZATO ================= */}
      <style jsx global>{`
        /* Rotazione e deformazione fluida delle nebulose cosmiche di fondo */
        @keyframes liquidNebula {
          0%, 100% { transform: translate(-20%, -30%) scale(1) rotate(0deg); filter: hue-rotate(0deg) blur(130px); opacity: 0.2; }
          33% { transform: translate(-10%, -35%) scale(1.15) rotate(120deg); filter: hue-rotate(30deg) blur(150px); opacity: 0.3; }
          66% { transform: translate(-25%, -25%) scale(0.9) rotate(240deg); filter: hue-rotate(-20deg) blur(120px); opacity: 0.25; }
        }

        /* Flussi di dati a matrice ultra-veloci */
        @keyframes cyberStream {
          0% { transform: translateX(-150%) skewX(-45deg); opacity: 0; }
          5% { opacity: 0.7; }
          45% { opacity: 0.7; }
          50%, 100% { transform: translateX(250%) skewX(-45deg); opacity: 0; }
        }

        /* Animazione verticale per la pioggia di codice tech */
        @keyframes techRainFall {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.4; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        /* Effetto respirazione radar per i nodi interni */
        @keyframes pulseRadar {
          0% { transform: scale(0.95); opacity: 0.2; box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
          50% { opacity: 0.8; box-shadow: 0 0 12px 4px rgba(99, 102, 241, 0.2); }
          100% { transform: scale(1); opacity: 0.2; box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
        }

        /* Micro-movimenti oscillatori degli elementi fluttuanti nelle card */
        @keyframes floatCardElement {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(1.5deg); }
        }

        /* Spostiamo l'effetto floating dentro i singoli keyframes combinati per evitare conflitti */
        @keyframes floatingCard1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-0.5deg); }
        }
        @keyframes floatingCard2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(0.5deg); }
        }
        @keyframes floatingCard3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-7px) rotate(-0.3deg); }
        }

        /* Classi operative di base */
        .animate-liquid-1 { animation: liquidNebula 26s ease-in-out infinite; }
        .animate-liquid-2 { animation: liquidNebula 20s ease-in-out infinite reverse; }
        .cyber-flow { animation: cyberStream 8s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
        .float-icon { animation: floatCardElement 4.5s ease-in-out infinite; }

        /* Struttura della pioggia digitale */
        .wf-rain-stream {
          position: absolute;
          top: 0;
          color: #6366f1;
          font-family: monospace;
          font-size: 11px;
          writing-mode: vertical-rl;
          text-orientation: uppercase;
          white-space: nowrap;
          user-select: none;
          animation: techRainFall linear infinite;
          opacity: 0;
        }

        /* Applicazione del floating continuo nativo (di base attivo su desktop) */
        .desktop-float-1 { animation: floatingCard1 7s ease-in-out infinite; }
        .desktop-float-2 { animation: floatingCard2 8s ease-in-out infinite; animation-delay: 0.5s; }
        .desktop-float-3 { animation: floatingCard3 7.5s ease-in-out infinite; animation-delay: 1s; }

        /* Gestione stato iniziale e reveal su dispositivi mobile in armonia con il floating */
        @media (max-width: 1023px) {
          .mobile-reveal-card { 
            opacity: 0; 
            filter: blur(4px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s cubic-bezier(0.16, 1, 0.3, 1);
            transition-delay: var(--delay);
          }
          .mobile-reveal-card.active {
            opacity: 1;
            filter: blur(0);
          }
        }
      `}</style>

      {/* --- STRATO 1: SOTTILISSIMA RETE GEOMETRICA DI LOGICA --- */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none z-0" />

      {/* --- STRATO 1.5: CASCATA DI CODICE TECH (PIOGGIA DIGITALE) --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.22]">
        <div className="wf-rain-stream left-[4%]" style={{ animationDuration: '8s', animationDelay: '0s' }}>1100101101</div>
        <div className="wf-rain-stream left-[15%] text-purple-400" style={{ animationDuration: '11s', animationDelay: '3s', fontSize: '13px' }}>01011010</div>
        <div className="wf-rain-stream left-[28%]" style={{ animationDuration: '7s', animationDelay: '0.8s' }}>10110011</div>
        <div className="wf-rain-stream left-[42%] text-indigo-400" style={{ animationDuration: '13s', animationDelay: '5s' }}>0011010110</div>
        <div className="wf-rain-stream left-[55%] text-purple-500" style={{ animationDuration: '9s', animationDelay: '1.5s', fontSize: '10px' }}>111001</div>
        <div className="wf-rain-stream left-[68%]" style={{ animationDuration: '8s', animationDelay: '4.2s' }}>100110101</div>
        <div className="wf-rain-stream left-[82%] text-indigo-300" style={{ animationDuration: '12s', animationDelay: '2s' }}>011011001</div>
        <div className="wf-rain-stream left-[93%] text-purple-400" style={{ animationDuration: '7s', animationDelay: '0.3s', fontSize: '12px' }}>1010011</div>
      </div>

      {/* --- STRATO 2: NEBULOSE DINAMICHE AD ALTA FLUIDITÀ --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="animate-liquid-1 absolute top-[5%] left-[15%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-indigo-600/10 via-purple-500/5 to-transparent" />
        <div className="animate-liquid-2 absolute bottom-[-5%] right-[10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-transparent" />
      </div>

      {/* --- STRATO 3: SCORRIMENTO FLUSSI CYBER OREZZONTALI --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-50">
        <div className="cyber-flow absolute top-[35%] left-0 w-1/2 h-[1.5px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent shadow-[0_0_10px_rgba(99,102,241,0.4)]" style={{ animationDelay: "0s", animationDuration: "7s" }} />
        <div className="cyber-flow absolute top-[75%] left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent shadow-[0_0_8px_rgba(168,85,247,0.3)]" style={{ animationDelay: "2.5s", animationDuration: "10s" }} />
        <div className="cyber-flow absolute top-[15%] left-0 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" style={{ animationDelay: "4.8s", animationDuration: "13s" }} />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="pb-12 md:pb-20">
          
          {/* TESTATA SEZIONE */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-24">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-10 before:bg-gradient-to-r before:from-transparent before:to-indigo-500/40 after:h-px after:w-10 after:bg-gradient-to-l after:from-transparent after:to-indigo-500/40">
              <span className="inline-flex bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent font-semibold tracking-widest text-[11px] uppercase">
                Infrastrutture Evolute
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-bold tracking-tight text-transparent md:text-4.5xl leading-tight">
              Automazioni e Agenti IA su Misura
            </h2>
            <p className="text-lg text-indigo-200/60 max-w-2xl mx-auto">
              Abbandona i sistemi rigidi e precostituiti. Analizziamo i colli di bottiglia dei tuoi flussi di lavoro per creare ecosistemi intelligenti cuciti sulle tue reali necessità operative.
            </p>
          </div>

          {/* GRIGLIA CARD */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            
            {/* CARD 1 */}
            <a
              className="mobile-reveal-card desktop-float-1 group/card relative h-full overflow-hidden rounded-2xl bg-gray-900/60 border border-gray-800/80 p-px transition-all duration-500 ease-out will-change-transform"
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
                    <div className="w-16 h-16 rounded-xl border border-gray-800 bg-gray-950 p-2 flex flex-col justify-between shadow-xl relative group-hover/card:border-gray-700/80 transition-colors">
                      <span className="text-sm animate-pulse">📥</span>
                      <div className="space-y-1">
                        <div className="w-full h-1 bg-gray-800 rounded-xs" />
                        <div className="w-2/3 h-1 bg-gray-800 rounded-xs" />
                      </div>
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-mono font-medium text-gray-500 uppercase tracking-widest">INPUT</div>
                    </div>
                    <div className="flex-1 px-3 relative flex items-center justify-center">
                      <svg className="w-full h-8 text-indigo-500/40 md:text-gray-800/80 md:group-hover/card:text-indigo-500/40 transition-colors duration-500" viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 4 C20 4, 10 16, 30 16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                        <path d="M0 16 C20 16, 10 16, 30 16" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M0 28 C20 28, 10 16, 30 16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                        <path d="M30 16 C45 16, 40 16, 60 16" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                      <div className="absolute w-2 h-2 bg-indigo-400 rounded-full left-0 animate-[cyberStream_2s_linear_infinite]" style={{ boxShadow: "0 0 8px #6366f1" }} />
                    </div>
                    <div className="w-20 h-24 rounded-xl border border-indigo-500/30 md:border-indigo-500/20 bg-gradient-to-b from-indigo-950/20 to-purple-950/5 p-2.5 flex flex-col justify-between shadow-2xl relative overflow-hidden group-hover/card:border-indigo-500/50 group-hover/card:shadow-[0_0_30px_rgba(99,102,241,0.12)] transition-all duration-500 float-icon">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px)] bg-[size:4px_4px]" />
                      <div className="flex items-center justify-between relative z-10">
                        <span className="text-[9px] font-black font-mono text-indigo-400">CORE-A1</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" style={{ animation: "pulseRadar 2s infinite" }} />
                      </div>
                      <div className="space-y-1.5 relative z-10">
                        <div className="w-full h-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xs flex items-center px-1">
                          <div className="w-full h-1 bg-indigo-400/80 rounded-2xs animate-pulse" />
                        </div>
                        <div className="w-full h-3 bg-purple-500/10 border border-purple-500/20 rounded-xs flex items-center px-1">
                          <div className="w-4/5 h-1 bg-purple-400/80 rounded-2xs" />
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
                  <p className="text-sm text-indigo-200/60 leading-relaxed group-hover/card:text-indigo-200/75 transition-colors duration-300">
                    Sia che tu gestisca una ditta individuale o flussi societari complessi, mappiamo i passaggi ridondanti e configuriamo algoritmi capaci di assorbire l'operatività meccanica.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <a
              className="mobile-reveal-card desktop-float-2 group/card relative h-full overflow-hidden rounded-2xl bg-gray-900/60 border border-gray-800/80 p-px transition-all duration-500 ease-out will-change-transform"
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
                    <div className="w-16 h-16 rounded-xl border border-gray-800 bg-gray-950 p-2 flex flex-col justify-between shadow-xl relative group-hover/card:border-gray-700/80 transition-colors">
                      <span className="text-sm animate-pulse">👤</span>
                      <div className="space-y-1">
                        <div className="w-full h-1 bg-gray-800 rounded-xs" />
                        <div className="w-4/5 h-1 bg-gray-800 rounded-xs" />
                      </div>
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-mono font-medium text-gray-500 uppercase tracking-widest">PROMPT</div>
                    </div>
                    <div className="flex-1 px-3 relative flex items-center justify-center">
                      <svg className="w-full h-8 text-purple-500/40 md:text-gray-800/80 md:group-hover/card:text-purple-500/40 transition-colors duration-500" viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 4 C20 4, 10 16, 30 16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                        <path d="M0 16 C20 16, 10 16, 30 16" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M0 28 C20 28, 10 16, 30 16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                        <path d="M30 16 C45 16, 40 16, 60 16" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                      <div className="absolute w-2 h-2 bg-purple-400 rounded-full left-0 animate-[cyberStream_2s_linear_infinite]" style={{ boxShadow: "0 0 8px #a855f7" }} />
                    </div>
                    <div className="w-20 h-24 rounded-xl border border-purple-500/30 md:border-purple-500/20 bg-gradient-to-b from-purple-950/20 to-indigo-950/5 p-2.5 flex flex-col justify-between shadow-2xl relative overflow-hidden group-hover/card:border-purple-500/50 group-hover/card:shadow-[0_0_30px_rgba(168,85,247,0.12)] transition-all duration-500 float-icon">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px)] bg-[size:4px_4px]" />
                      <div className="flex items-center justify-between relative z-10">
                        <span className="text-[9px] font-black font-mono text-purple-400">AGENT-IA</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" style={{ animation: "pulseRadar 2s infinite" }} />
                      </div>
                      <div className="text-center text-base py-0.5 animate-bounce" style={{ animationDuration: "2.5s" }}>🤖</div>
                      <span className="text-[7px] font-mono text-purple-400 bg-purple-950/60 px-1 py-0.5 rounded border border-purple-900/40 text-center tracking-tighter uppercase">THINKING</span>
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
                  <p className="text-sm text-indigo-200/60 leading-relaxed group-hover/card:text-indigo-200/75 transition-colors duration-300">
                    Sviluppiamo agenti autonomi dotati di memoria storica e logica aziendale, capaci di smistare ticket complessi, aggiornare i tuoi software interni e dialogare in linguaggio naturale.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <a
              className="mobile-reveal-card desktop-float-3 group/card relative h-full overflow-hidden rounded-2xl bg-gray-900/60 border border-gray-800/80 p-px transition-all duration-500 ease-out will-change-transform"
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
                    <div className="w-16 h-16 rounded-xl border border-gray-800 bg-gray-950 p-1.5 flex flex-col justify-between shadow-xl relative group-hover/card:border-gray-700/80 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-xs">📧</span>
                        <span className="text-xs">💬</span>
                      </div>
                      <div className="space-y-1">
                        <div className="w-full h-1 bg-gray-800 rounded-xs" />
                        <div className="w-full h-1 bg-gray-800 rounded-xs" />
                      </div>
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-mono font-medium text-gray-500 uppercase tracking-widest">APPS</div>
                    </div>
                    <div className="flex-1 px-3 relative flex items-center justify-center">
                      <svg className="w-full h-8 text-blue-500/40 md:text-gray-800/80 md:group-hover/card:text-blue-500/40 transition-colors duration-500" viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 4 C20 4, 10 16, 30 16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                        <path d="M0 16 C20 16, 10 16, 30 16" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M0 28 C20 28, 10 16, 30 16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                        <path d="M30 16 C45 16, 40 16, 60 16" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                      <div className="absolute w-2 h-2 bg-blue-400 rounded-full left-0 animate-[cyberStream_2s_linear_infinite]" style={{ boxShadow: "0 0 8px #3b82f6" }} />
                    </div>
                    <div className="w-20 h-24 rounded-xl border border-blue-500/30 md:border-blue-500/20 bg-gradient-to-b from-blue-950/20 to-indigo-950/5 p-2.5 flex flex-col justify-between shadow-2xl relative overflow-hidden group-hover/card:border-blue-500/50 group-hover/card:shadow-[0_0_30px_rgba(59,130,246,0.12)] transition-all duration-500 float-icon">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px)] bg-[size:4px_4px]" />
                      <div className="flex items-center justify-between relative z-10">
                        <span className="text-[9px] font-black font-mono text-blue-400">HUB-API</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" style={{ animation: "pulseRadar 2s infinite" }} />
                      </div>
                      <div className="relative flex justify-center py-1">
                        <div className="w-4 h-4 bg-blue-500/20 rounded-full animate-ping absolute opacity-40" />
                        <span className="text-blue-400 text-sm font-black relative z-10">⚡</span>
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
                  <p className="text-sm text-indigo-200/60 leading-relaxed group-hover/card:text-indigo-200/75 transition-colors duration-300">
                    Uniamo i tuoi applicativi isolati (CRM, gestionali, database, email, fogli cloud) in un unico organismo centrale sincronizzato, eliminando i passaggi manuali di copia-incolla.
                  </p>
                </div>
              </div>
            </div>

          </Spotlight>
        </div>
      </div>
    </section>
  );
}
