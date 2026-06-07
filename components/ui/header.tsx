"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  // Stato per tracciare quale menu a tendina è aperto su mobile/clic
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const menuItems = {
    servizi: [
      { label: "Agenti IA su Misura", href: "/servizi/agenti-ia" },
      { label: "Ricerca Lead & Data Mining Automatico", href: "/servizi/data-mining" },
      { label: "Qualificazione Lead & Follow-Up H24", href: "/servizi/follow-up" },
      { label: "Sincronizzazione CRM & Assistenti Chat", href: "/servizi/crm-chat" },
    ],
    soluzioni: [
      { label: "Per Grandi Aziende", href: "/soluzioni/grandi-aziende" },
      { label: "Per Piccole e Medie Imprese", href: "/soluzioni/pmi" },
      { label: "Per Privati e Professionisti", href: "/soluzioni/professionisti" },
      { label: "Casi di Successo", href: "/casi-successo" },
    ],
    agenzia: [
      { label: "Chi Siamo", href: "/chi-siamo" },
      { label: "Il Nostro Metodo", href: "/metodo" },
      { label: "Contatti", href: "/contatti" },
    ],
  };

  return (
    <header className="z-50 mt-6 w-full md:mt-10 animate-fade-in relative">
      
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
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-950/80 px-6 backdrop-blur-md cyber-glow transition-all duration-300
          before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent 
          before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-indigo-500),var(--color-purple-500),var(--color-gray-800))_border-box] 
          before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          
          {/* Effetto scia di luce interna sotto al logo */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-70 pointer-events-none" />

          {/* Logo */}
          <div className="flex items-center transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          {/* Menu di Navigazione con Dropdown */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
            
            {/* DROPDOWN SERVIZI */}
            <div 
              className="relative group py-4"
              onMouseEnter={() => setActiveDropdown('servizi')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-white transition-colors duration-200">
                Servizi <span className="text-xs text-indigo-400 group-hover:rotate-180 transition-transform duration-200">▼</span>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                <div className="rounded-xl bg-gray-950 border border-gray-800 p-2 shadow-xl backdrop-blur-md">
                  {menuItems.servizi.map((item, idx) => (
                    <Link key={idx} href={item.href} className="block px-4 py-2 text-xs rounded-lg hover:bg-gray-900 hover:text-indigo-400 transition-all">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* DROPDOWN SOLUZIONI */}
            <div 
              className="relative group py-4"
              onMouseEnter={() => setActiveDropdown('soluzioni')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-white transition-colors duration-200">
                Soluzioni <span className="text-xs text-purple-400 group-hover:rotate-180 transition-transform duration-200">▼</span>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                <div className="rounded-xl bg-gray-950 border border-gray-800 p-2 shadow-xl backdrop-blur-md">
                  {menuItems.soluzioni.map((item, idx) => (
                    <Link key={idx} href={item.href} className="block px-4 py-2 text-xs rounded-lg hover:bg-gray-900 hover:text-purple-400 transition-all">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* DROPDOWN L'AGENZIA */}
            <div 
              className="relative group py-4"
              onMouseEnter={() => setActiveDropdown('agenzia')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-white transition-colors duration-200">
                L'Agenzia <span className="text-xs text-gray-500 group-hover:rotate-180 transition-transform duration-200">▼</span>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                <div className="rounded-xl bg-gray-950 border border-gray-800 p-2 shadow-xl backdrop-blur-md">
                  {menuItems.agenzia.map((item, idx) => (
                    <Link key={idx} href={item.href} className="block px-4 py-2 text-xs rounded-lg hover:bg-gray-900 hover:text-white transition-all">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </nav>

          {/* Placeholder a destra per bilanciare il layout se hai già un CTA fisso esterno */}
          <div className="hidden md:block w-[120px]" />

        </div>
      </div>
    </header>
  );
}
