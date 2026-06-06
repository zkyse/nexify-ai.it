"use client";

import { useState } from "react";

// Definiamo i dati statistici divisi per categorie
const statsData = [
  {
    id: 1,
    value: "-85%",
    label: "Tempo speso in task ripetitivi",
    desc: "Elimina l'inserimento manuale dei dati. I nostri agenti IA elaborano flussi e report in pochi secondi al posto tuo.",
    categories: [1, 2, 3], // Presente in: Tutti, Automazione, E-commerce
  },
  {
    id: 2,
    value: "24/7",
    label: "Supporto e Gestione Lead",
    desc: "Niente più clienti persi fuori orario. Risposte istantanee via WhatsApp o Web Chat collegate direttamente al tuo CRM.",
    categories: [1, 2, 4, 5], // Presente in: Tutti, Automazione, Professionisti, Gestione Lead
  },
  {
    id: 3,
    value: "0%",
    label: "Errori di Trascrizione Umana",
    desc: "L'IA sincronizza gestionali, fogli di calcolo e piattaforme email senza perdere una singola riga di informazione.",
    categories: [1, 2, 4], 
  },
  {
    id: 7, // NUOVA CARD: Lead Qualification & Appuntamenti
    value: "+70%",
    label: "Lead Qualificati e Prenotati",
    desc: "L'IA dialoga con i potenziali clienti, valuta il loro budget/esigenze e fissa l'appuntamento sul tuo Google Calendar o Cal.com in automatico.",
    categories: [1, 2, 4, 5], // Presente in: Tutti, Automazione, Professionisti, Gestione Lead
  },
  {
    id: 4,
    value: "+15h",
    label: "Liberate ogni settimana",
    desc: "Tempo reale guadagnato da ogni dipendente per concentrarsi su attività strategiche e chiusura dei contratti.",
    categories: [1, 3, 4], // Presente in: Tutti, E-commerce, Professionisti
  },
  {
    id: 5,
    value: "< 2 min",
    label: "Tempo di risposta medio",
    desc: "Sincronizza le automazioni per inviare preventivi o cataloghi appena un utente mostra interesse, alzando i tassi di conversione.",
    categories: [1, 3, 5], // Presente in: Tutti, E-commerce, Gestione Lead
  },
  {
    id: 6,
    value: "10x",
    label: "Scalabilità del Business",
    desc: "Gestisci un volume di richieste dieci volte superiore senza dover assumere o sovraccaricare il tuo team attuale.",
    categories: [1, 2, 3, 5], 
  },
];

export default function Testimonials() {
  const [category, setCategory] = useState<number>(1);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Stili CSS custom iniettati per gestire l'effetto fluttuante asincrono */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        .animate-float-1 { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-medium 5s ease-in-out infinite 1s; }
        .animate-float-3 { animation: float-slow 7s ease-in-out infinite 0.5s; }
      `}</style>

      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        
        {/* Section header basato sull'Opzione 3 */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Perché automatizzare conviene?
          </h2>
          <p className="text-lg text-indigo-200/65">
            Non servono giri di parole, parlano i dati. Ecco l'impatto stimato dell'integrazione di sistemi intelligenti e IA nei flussi di lavoro della tua attività.
          </p>
        </div>

        <div>
          {/* Menu Filtri ottimizzato in Italiano con nuova categoria Gestione Lead */}
          <div className="flex justify-center pb-12 md:pb-16">
            <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1 backdrop-blur-xs gap-y-1">
              
              {/* Bottone 1 */}
              <button
                className={`flex h-8 items-center gap-2.5 whitespace-nowrap rounded-full px-4 text-sm font-medium transition-all duration-300 ${category === 1 ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" : "text-gray-400 hover:text-gray-200"}`}
                onClick={() => setCategory(1)}
              >
                <span>Mostra Tutto</span>
              </button>

              {/* Bottone 2 */}
              <button
                className={`flex h-8 items-center gap-2.5 whitespace-nowrap rounded-full px-4 text-sm font-medium transition-all duration-300 ${category === 2 ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" : "text-gray-400 hover:text-gray-200"}`}
                onClick={() => setCategory(2)}
              >
                <span>Automazione CRM</span>
              </button>

              {/* Bottone 3 */}
              <button
                className={`flex h-8 items-center gap-2.5 whitespace-nowrap rounded-full px-4 text-sm font-medium transition-all duration-300 ${category === 3 ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" : "text-gray-400 hover:text-gray-200"}`}
                onClick={() => setCategory(3)}
              >
                <span>E-commerce</span>
              </button>

              {/* Bottone 4 */}
              <button
                className={`flex h-8 items-center gap-2.5 whitespace-nowrap rounded-full px-4 text-sm font-medium transition-all duration-300 ${category === 4 ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" : "text-gray-400 hover:text-gray-200"}`}
                onClick={() => setCategory(4)}
              >
                <span>Professionisti</span>
              </button>

              {/* NUOVO Bottone 5: Gestione Lead & Qualificazione */}
              <button
                className={`flex h-8 items-center gap-2.5 whitespace-nowrap rounded-full px-4 text-sm font-medium transition-all duration-300 ${category === 5 ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" : "text-gray-400 hover:text-gray-200"}`}
                onClick={() => setCategory(5)}
              >
                <span>Gestione Lead</span>
              </button>

            </div>
          </div>

          {/* Griglia delle Card Statistiche con Effetti Avanzati */}
          <div className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            {statsData.map((stat, index) => {
              // L'indice matematico `% 3` continua a funzionare perfettamente per ripartire le 3 animazioni fluide custom
              const floatClasses = ["animate-float-1", "animate-float-2", "animate-float-3"];
              const currentFloat = floatClasses[index % 3];
              const isVisible = stat.categories.includes(category);

              return (
                <div 
                  key={stat.id} 
                  className={`transition-all duration-500 ${currentFloat} ${!isVisible ? "opacity-15 scale-95 pointer-events-none blur-xs" : "opacity-100 scale-100"}`}
                >
                  <article
                    className="relative overflow-hidden rounded-2xl bg-linear-to-br from-gray-900/80 via-gray-800/40 to-gray-900/80 p-6 backdrop-blur-md shadow-2xl border border-gray-800/60 hover:border-indigo-500/50 transition-all duration-300 group"
                  >
                    {/* Glow effect di sfondo che si attiva al passaggio del mouse */}
                    <div className="absolute -inset-px bg-radial from-indigo-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="flex flex-col gap-3 relative z-10">
                      {/* Numero / Statistica Gigante Animata in Gradiente */}
                      <div className="bg-linear-to-r from-indigo-400 via-purple-300 to-indigo-200 bg-clip-text font-nacelle text-5xl font-bold text-transparent tracking-tight group-hover:scale-105 transition-transform duration-300 origin-left">
                        {stat.value}
                      </div>
                      
                      {/* Label della statistica */}
                      <div className="text-md font-semibold text-gray-100 tracking-wide">
                        {stat.label}
                      </div>
                      
                      {/* Descrizione del beneficio */}
                      <p className="text-sm text-indigo-200/65 leading-relaxed">
                        {stat.desc}
                      </p>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
