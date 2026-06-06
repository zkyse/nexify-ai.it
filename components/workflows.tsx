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
    
    const rotateX = -(y / (box.height / 2)) * 8;
    const rotateY = (x / (box.width / 2)) * 8;
    
    card.style.animationPlayState = "paused";
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
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
      
      {/* ================= CORE DI ANIMAZIONE POTENZIATO CON RETE NEURALE FLOATING ================= */}
      <style dangerouslySetInnerHTML={{__html: `
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

        /* NUOVA ANIMAZIONE: Fluttuazione orbitale per i nodi della rete neurale */
        @keyframes neuralFloat {
          0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.2; }
          50% { transform: translate(15px, -25px) scale(1.2); opacity: 0.5; filter: drop-shadow(0 0 8px currentColor); }
        }

        /* Classi operative di base */
        .animate-liquid-1 { animation: liquidNebula 26s ease-in-out infinite; }
        .animate-liquid-2 { animation: liquidNebula 20s ease-in-out infinite reverse; }
        .cyber-flow { animation: cyberStream 8s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
        .float-icon { animation: floatCardElement 4.5s ease-in-out infinite; }

        /* Applicazione del floating continuo nativo (di base attivo su desktop) */
        .desktop-float-1 { animation: floatingCard1 7s ease-in-out infinite; }
        .desktop-float-2 { animation: floatingCard2 8s ease-in-out infinite; animation-delay: 0.5s; }
        .desktop-float-3 { animation: floatingCard3 7.5s ease-in-out infinite; animation-delay: 1s; }

        /* Gestione stato iniziale e reveal su dispositivi mobile */
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
      `}} />

      {/* --- STRATO 1: RETE GEOMETRICA DI LOGICA (GRID FIX) --- */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none z-0" />

      {/* --- NUOVO STRATO 1.5: RETE NEURALE DI NODI CONNESSI E FLUTTUANTI (Sostituisce la pioggia) --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Nodo 1 - Indigo */}
        <div 
          className="absolute text-indigo-500/40" 
          style={{ top: '18%', left: '12%', animation: 'neuralFloat 9s ease-in-out infinite' }}
        >
          <div className="w-2 h-2 rounded-full bg-current" />
          <div className="absolute top-1 left-2 h-[1px] w-32 bg-gradient-to-r from-indigo-500/20 to-transparent rotate-[30deg] origin-left" />
        </div>

        {/* Nodo 2 - Cyan */}
        <div 
          className="absolute text-cyan-500/30" 
          style={{ top: '45%', left: '7%', animation: 'neuralFloat 12s ease-in-out infinite 1s' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-current" />
          <div className="absolute top-1 left-1 h-[1px] w-24 bg-gradient-to-r from-cyan-500/20 to-transparent rotate-[-45deg] origin-left" />
        </div>

        {/* Nodo 3 - Purple */}
        <div 
          className="absolute text-purple-500/40" 
          style={{ top: '75%', left: '20%', animation: 'neuralFloat 10s ease-in-out infinite 2s' }}
        >
          <div className="w-2 h-2 rounded-full bg-current" />
          <div className="absolute top-1 left-1 h-[1px] w-40 bg-gradient-to-r from-purple-500/20 to-transparent rotate-[15deg] origin-left" />
        </div>

        {/* Nodo 4 - Blue (Destra) */}
        <div 
          className="absolute text-blue-500/30" 
          style={{ top: '25%', right: '15%', animation: 'neuralFloat 11s ease-in-out infinite 0.5s' }}
        >
          <div className="w-3 h-3 rounded-full bg-current opacity-60 blur-[1px]" />
          <div className="absolute top-1 right-1 h-[1px] w-36 bg-gradient-to-l from-blue-500/20 to-transparent rotate-[60deg] origin-right" />
        </div>

        {/* Nodo 5 - Violet */}
        <div 
          className="absolute text-violet-500/40" 
          style={{ top: '60%', right: '8%', animation: 'neuralFloat 8s ease-in-out infinite 1.5s' }}
        >
          <div className="w-2 h-2 rounded-full bg-current" />
          <div className="absolute top-1 right-1 h-[1px] w-28 bg-gradient-to-l from-violet-500/20 to-transparent rotate-[-20deg] origin-right" />
        </div>

        {/* Nodo 6 - Indigo Centro Basso */}
        <div 
          className="absolute text-indigo-400/20 hidden md:block" 
          style={{ top: '85%', left: '48%', animation: 'neuralFloat 14s ease-in-out infinite 3s' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-current" />
        </div>
      </div>

      {/* --- STRATO 2: NEBULOSE DINAMICHE AD ALTA FLUIDITÀ --- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="animate-liquid-1 absolute top-[5%] left-[15%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-indigo-600/10 via-purple-500/5 to-transparent" />
        <div className="animate-liquid-2 absolute bottom-[-5%] right-[10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-transparent" />
      </div>

      {/* --- STRATO 3: SCORRIMENTO FLUSSI CYBER ORIZZONTALI --- */}
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
            </a>

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
            </a>

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
            </a>

          </Spotlight>
        </div>
      </div>
    </section>
  );
}
