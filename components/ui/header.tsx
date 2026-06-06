"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-6 w-full md:mt-10 animate-fade-in">
      
      {/* INIEZIONE DEI KEYFRAMES PER L'HEADER */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes headerFadeIn {
          0% { opacity: 0; transform: translate3d(0, -10px, 0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes cyberGlow {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(99, 102, 241, 0.2)); }
          50% { filter: drop-shadow(0 0 12px rgba(168, 85, 247, 0.4)); }
        }
        .animate-fade-in {
          animation: headerFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .cyber-glow {
          animation: cyberGlow 6s ease-in-out infinite;
        }
      `}} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Contenitore Principale con effetto Glow dinamico */}
        <div className="relative flex h-14 items-center justify-center md:justify-between gap-3 rounded-2xl bg-gray-950/80 px-4 backdrop-blur-md cyber-glow transition-all duration-300
          before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent 
          before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-indigo-500),var(--color-purple-500),var(--color-gray-800))_border-box] 
          before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          
          {/* Effetto scia di luce interna sotto al logo */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-70 pointer-events-none" />

          {/* Site branding con transizione micro-scaling al passaggio del mouse */}
          <div className="flex flex-1 items-center justify-center md:justify-start transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]">
            <Logo />
          </div>

        </div>
      </div>
    </header>
  );
}
