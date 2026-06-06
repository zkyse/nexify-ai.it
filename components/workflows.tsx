import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section className="relative bg-black overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          
          {/* TESTATA DELLA SEZIONE */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20 transition-all duration-1000 ease-out opacity-100 translate-y-0 dynamic-fade-up">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent font-medium tracking-wide text-xs uppercase animate-pulse">
                Soluzioni Sartoriali
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Automazioni e Agenti IA su misura
            </h2>
            <p className="text-lg text-indigo-200/65">
              Non crediamo nelle soluzioni copia-incolla. Analizziamo i tuoi processi quotidiani per cucirti addosso l'infrastruttura IA perfetta per le tue reali necessità.
            </p>
          </div>

          {/* GRIGLIA SPOTLIGHT CARD */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            
            {/* CARD 1: Modellato sulle tue Esigenze */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-indigo-500/30 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#contatti"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 flex flex-col justify-between">
                
                {/* GRAFICA TAILWIND 1: Interfaccia Utente & Target (Privato/PMI/Corporate) */}
                <div className="relative h-48 w-full bg-gray-900/40 border-b border-gray-800/60 flex items-center justify-center p-6 overflow-hidden group-hover/card:bg-gray-900/20 transition-colors">
                  <div className="absolute inset-0 bg-radial-gradient from-indigo-500/5 to-transparent pointer-events-none"></div>
                  {/* Mockup di 3 blocchi/target che si collegano */}
                  <div className="flex space-x-3 items-end z-10 w-full justify-center transition-transform duration-500 group-hover/card:scale-105">
                    <div className="w-1/4 h-16 bg-gray-800/80 border border-gray-700/50 rounded-xl p-2 flex flex-col justify-between shadow-lg">
                      <div className="w-4 h-4 rounded-full bg-indigo-500/30 flex items-center justify-center text-[8px] text-indigo-300">P</div>
                      <div className="w-full h-1.5 bg-gray-700 rounded-sm"></div>
                    </div>
                    <div className="w-1/3 h-28 bg-gradient-to-b from-indigo-950/40 to-gray-800/80 border border-indigo-500/30 rounded-xl p-3 flex flex-col justify-between shadow-[0_0_20px_rgba(99,102,241,0.05)] relative">
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-indigo-500 text-[6px] text-white font-bold rounded-full uppercase tracking-wider">PMI</div>
                      <div className="w-6 h-6 rounded-lg bg-indigo-500/20 flex items-center justify-center text-xs">🏢</div>
                      <div className="space-y-1">
                        <div className="w-full h-1.5 bg-indigo-400/30 rounded-sm"></div>
                        <div className="w-2/3 h-1.5 bg-gray-700 rounded-sm"></div>
                      </div>
                    </div>
                    <div className="w-1/4 h-20 bg-gray-800/80 border border-gray-700/50 rounded-xl p-2 flex flex-col justify-between shadow-lg">
                      <div className="w-4 h-4 rounded-full bg-purple-500/30 flex items-center justify-center text-[8px] text-purple-300">C</div>
                      <div className="w-full h-1.5 bg-gray-700 rounded-sm"></div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal border border-gray-800 group-hover/card:border-indigo-500/30 transition-colors duration-300">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent font-medium">
                        Modellato sulle tue Esigenze
                      </span>
                    </span>
                  </div>
                  <p className="text-sm text-indigo-200/65 leading-relaxed">
                    Sia che tu sia un professionista privato, una PMI o una grande azienda, progettiamo logiche di automazione specifiche basate sul tuo reale volume di lavoro.
                  </p>
                </div>
              </div>
            </a>

            {/* CARD 2: Agenti Autonomi 24/7 */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-indigo-500/30 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#contatti"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 flex flex-col justify-between">
                
                {/* GRAFICA TAILWIND 2: L'Agente IA in azione (Chat & AI core) */}
                <div className="relative h-48 w-full bg-gray-900/40 border-b border-gray-800/60 flex items-center justify-center p-6 overflow-hidden group-hover/card:bg-gray-900/20 transition-colors">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>
                  
                  {/* Nodo centrale IA con onde radar animate */}
                  <div className="relative z-10 flex flex-col items-center space-y-3 transition-transform duration-500 group-hover/card:scale-105 w-full max-w-[240px]">
                    <div className="w-full bg-gray-900/90 border border-gray-800 rounded-xl p-2.5 flex items-center space-x-3 shadow-xl transform -translate-x-4">
                      <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] animate-pulse">🤖</div>
                      <div className="space-y-1 flex-1">
                        <div className="w-2/3 h-1.5 bg-indigo-400/40 rounded-sm"></div>
                        <div className="w-1/2 h-1 bg-gray-700 rounded-sm"></div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-800/50 border border-gray-700/30 rounded-xl p-2.5 flex items-center space-x-3 shadow-lg transform translate-x-4">
                      <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center text-[10px]">👤</div>
                      <div className="space-y-1 flex-1">
                        <div className="w-3/4 h-1.5 bg-gray-400 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal border border-gray-800 group-hover/card:border-indigo-500/30 transition-colors duration-300">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent font-medium">
                        Agenti Autonomi 24/7
                      </span>
                    </span>
                  </div>
                  <p className="text-sm text-indigo-200/65 leading-relaxed">
                    Sviluppiamo veri e propri assistenti virtuali capaci di dialogare con i clienti, qualificare i contatti commerciali e aggiornare i tuoi database in totale autonomia.
                  </p>
                </div>
              </div>
            </a>

            {/* CARD 3: Connessione Ecosistema */}
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-indigo-500/30 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
              href="#contatti"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 flex flex-col justify-between">
                
                {/* GRAFICA TAILWIND 3: Ecosistema connesso (I software che comunicano) */}
                <div className="relative h-48 w-full bg-gray-900/40 border-b border-gray-800/60 flex items-center justify-center p-6 overflow-hidden group-hover/card:bg-gray-900/20 transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover/card:scale-105">
                    
                    {/* Linee di rete con nodi */}
                    <div className="relative w-40 h-20 flex items-center justify-between">
                      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"></div>
                      
                      {/* Nodo di sinistra (es. CRM) */}
                      <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center shadow-lg relative z-10 group-hover/card:border-indigo-500/40 transition-colors">
                        <span className="text-sm">📧</span>
                      </div>

                      {/* Hub Centrale */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)] relative z-20">
                        <div className="w-3 h-3 bg-white rounded-full animate-ping absolute"></div>
                        <span className="text-white text-xs font-bold">⚡</span>
                      </div>

                      {/* Nodo di destra (es. WhatsApp / Database) */}
                      <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center shadow-lg relative z-10 group-hover/card:border-purple-500/40 transition-colors">
                        <span className="text-sm">💬</span>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal border border-gray-800 group-hover/card:border-indigo-500/30 transition-colors duration-300">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent font-medium">
                        Connessione Ecosistema
                      </span>
                    </span>
                  </div>
                  <p className="text-sm text-indigo-200/65 leading-relaxed">
                    Mettiamo in comunicazione i tuoi software preferiti. Creiamo flussi automatici tra gestionali, email, fogli di calcolo e piattaforme di messaggistica senza attriti.
                  </p>
                </div>
              </div>
            </a>
