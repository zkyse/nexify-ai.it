"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Importato per gestire il reindirizzamento

export default function TestEfficienzaAvanzatoPage() {
  const router = useRouter(); // Inizializzazione del router

  // Stati per i parametri del simulatore
  const [orePerse, setOrePerse] = useState<number>(12);
  const [costoOrario, setCostoOrario] = useState<number>(30);
  const [dipendenti, setDipendenti] = useState<number>(5);
  const [activeTab, setActiveTab] = useState<"time" | "cost" | "team">("time");

  // Costanti di business per l'algoritmo predittivo
  const ORE_LAVORATIVE_ANNO_PRORETA = 1720; 
  const FATTORE_COSTO_OPPORTUNITA = 3; // Il tempo liberato produce un valore 3x rispetto al costo puro

  // Formule di analisi realtime
  const orePerseMeseTotali = orePerse * 4 * dipendenti;
  const orePerseAnnoTotali = orePerseMeseTotali * 12;
  
  const sprecoFinanziarioMese = orePerseMeseTotali * costoOrario;
  const sprecoFinanziarioAnno = sprecoFinanziarioMese * 12;
  
  // Calcolo della saturazione da inefficienza sul monte ore totale dell'azienda
  const monteOreTotaleAzienda = ORE_LAVORATIVE_ANNO_PRORETA * dipendenti;
  const percentualeSaturazioneSpreco = ((orePerseAnnoTotali / monteOreTotaleAzienda) * 100).toFixed(1);
  
  // Costo opportunità: quanto valore si produce riallocando le risorse
  const valoreRiallocatoAnno = orePerseAnnoTotali * (costoOrario * FATTORE_COSTO_OPPORTUNITA);

  // Funzione che reindirizza direttamente alla pagina contatti al click
  const handleEngineeringRequest = () => {
    router.push("/contatti");
  };

  return (
    <main className="relative bg-[#02040a] text-gray-300 min-h-screen overflow-hidden">
      
      {/* Keyframes dedicati a componenti di backend/server stabili */}
      <style>{`
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes microPulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; filter: drop-shadow(0 0 15px rgba(99,102,241,0.3)); }
        }
      `}</style>

      {/* Sfondo decorativo ad alta definizione radiale */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[700px] w-full -translate-x-1/2 opacity-20 [background:radial-gradient(circle_at_center,_#4f46e5_0%,_transparent_70%)]" />

      <div className="mx-auto max-w-5xl px-6 py-24 lg:py-32">
        
        {/* Intestazione Audit */}
        <div className="mb-16 border-b border-gray-800 pb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 inline-block mb-3">
              Nexify Diagnostic Engine v2.4
            </span>
            <h1 className="bg-gradient-to-r from-white via-indigo-100 to-indigo-400 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl">
              Audit di Efficienza Operativa
            </h1>
          </div>
          <p className="text-xs text-gray-500 max-w-xs md:text-right font-mono">
            Algoritmo predittivo per la stima del ROI e riallocazione del capitale umano.
          </p>
        </div>

        {/* CONTENITORE PRINCIPALE DIAGNOSTICO */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* SEZIONE INPUT CONFIGURATION (7 Colonne) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Selettore Tab per rendere l'interfaccia pulita e focalizzata */}
            <div className="flex border border-gray-800 bg-gray-950/80 p-1 rounded-xl gap-1">
              <button 
                onClick={() => setActiveTab("time")}
                className={`flex-1 py-2.5 text-xs font-semibold rounded-lg transition-all ${activeTab === "time" ? "bg-indigo-600 text-white shadow-md" : "text-gray-400 hover:text-white"}`}
              >
                ⏱️ Analisi Temporale
              </button>
              <button 
                onClick={() => setActiveTab("cost")}
                className={`flex-1 py-2.5 text-xs font-semibold rounded-lg transition-all ${activeTab === "cost" ? "bg-indigo-600 text-white shadow-md" : "text-gray-400 hover:text-white"}`}
              >
                💶 Parametri Finanziari
              </button>
              <button 
                onClick={() => setActiveTab("team")}
                className={`flex-1 py-2.5 text-xs font-semibold rounded-lg transition-all ${activeTab === "team" ? "bg-indigo-600 text-white shadow-md" : "text-gray-400 hover:text-white"}`}
              >
                👥 Scala della Risorsa
              </button>
            </div>

            {/* CONTENUTO DINAMICO DEL TAB ATTIVO */}
            <div className="rounded-xl border border-gray-800 bg-gray-950/40 p-6 backdrop-blur-sm min-h-[180px] flex flex-col justify-center">
              {activeTab === "time" && (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Ore Sprecate / Settimana</h3>
                    <span className="text-base font-mono font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded border border-indigo-500/20">{orePerse} ore</span>
                  </div>
                  <input 
                    type="range" min="2" max="40" value={orePerse} 
                    onChange={(e) => setOrePerse(Number(e.target.value))}
                    className="w-full accent-indigo-500 bg-gray-900 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                  <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                    Include il tempo stimato speso dal singolo dipendente in attività ripetitive: data-entry asincrono, ordinamento manuale di lead non qualificate, risposte a flussi chat standard o reportistica ricorsiva.
                  </p>
                </div>
              )}

              {activeTab === "cost" && (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Costo Orario Interno (Lordo)</h3>
                    <span className="text-base font-mono font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded border border-indigo-500/20">{costoOrario} € / h</span>
                  </div>
                  <input 
                    type="range" min="15" max="150" value={costoOrario} 
                    onChange={(e) => setCostoOrario(Number(e.target.value))}
                    className="w-full accent-indigo-500 bg-gray-900 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                  <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                    Inserisci il costo aziendale effettivo lordo (RAL + oneri previdenziali e costi di infrastruttura divisi per le ore lavorate). Più il profilo è specializzato, maggiore è l'inefficienza finanziaria generata.
                  </p>
                </div>
              )}

              {activeTab === "team" && (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Volume della Forza Lavoro</h3>
                    <span className="text-base font-mono font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded border border-indigo-500/20">{dipendenti} operatori</span>
                  </div>
                  <input 
                    type="range" min="1" max="100" value={dipendenti} 
                    onChange={(e) => setDipendenti(Number(e.target.value))}
                    className="w-full accent-indigo-500 bg-gray-900 h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                  <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                    Indica il numero totale di collaboratori o account commerciali interni che subiscono questi rallentamenti operativi all'interno dell'attuale architettura dei processi aziendali.
                  </p>
                </div>
              )}
            </div>

            {/* LIVE KPI MATRIX */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-800 bg-gray-950/20 p-4">
                <span className="block text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-1">Frenata dell'Efficienza</span>
                <span className="text-lg font-mono font-bold text-white">{percentualeSaturazioneSpreco}%</span>
                <span className="block text-[9px] text-gray-500 mt-1">del tempo totale sprecato in task inerti.</span>
              </div>
              <div className="rounded-xl border border-gray-800 bg-gray-950/20 p-4">
                <span className="block text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-1">Ore Liberabili / Anno</span>
                <span className="text-lg font-mono font-bold text-white">{orePerseAnnoTotali.toLocaleString("it-IT")} h</span>
                <span className="block text-[9px] text-gray-500 mt-1">reindirizzabili su obiettivi di crescita core.</span>
              </div>
            </div>

          </div>

          {/* SEZIONE OUTPUT ANALYTICS PANEL (5 Colonne) */}
          <div 
            className="lg:col-span-5 rounded-xl border border-indigo-500/30 bg-gradient-to-b from-gray-950 to-[#05070f] p-6 backdrop-blur-sm shadow-[0_0_40px_rgba(79,70,229,0.12)] flex flex-col justify-between relative overflow-hidden"
            style={{ animation: "gentleFloat 5.2s ease-in-out infinite" }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-900">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-400">Financial Impact</span>
                <span className="w-2 h-2 rounded-full bg-red-500" style={{ animation: "microPulse 1.8s infinite" }} />
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-1">Perdita Finanziaria Mensile</p>
                  <p className="text-4xl font-black text-white tracking-tight font-mono">
                    {sprecoFinanziarioMese.toLocaleString("it-IT")}€
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-1">Costo di Inefficienza Annuale</p>
                  <p className="text-2xl font-bold text-red-400/90 tracking-tight font-mono">
                    {sprecoFinanziarioAnno.toLocaleString("it-IT")}€
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-900">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-indigo-400 mb-1">Costo Opportunità Recuperabile</p>
                  <p className="text-xl font-bold text-emerald-400 tracking-tight font-mono">
                    + {valoreRiallocatoAnno.toLocaleString("it-IT")}€ <span className="text-xs text-gray-500 font-normal">/ anno</span>
                  </p>
                  <p className="text-[9px] text-gray-500 mt-1 leading-relaxed">
                    Valore stimato generato riallocando le ore sbloccate in attività commerciali strategiche ad alta conversione.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button 
                onClick={handleEngineeringRequest}
                className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-4 py-3.5 text-xs font-bold tracking-wider uppercase text-white shadow-lg transition-all hover:from-indigo-500 hover:to-indigo-400 active:scale-[0.98] block text-center"
              >
                Richiedi Ingegnerizzazione del Flusso
              </button>
            </div>
          </div>

        </div>

        {/* NOTA METODOLOGICA SOFISTICATA */}
        <div 
          className="rounded-xl border border-gray-800 bg-gray-950/40 p-6 backdrop-blur-sm mt-8 transition-all duration-300 hover:scale-[1.01] hover:border-indigo-500/30"
          style={{ animation: "gentleFloat 5.8s ease-in-out infinite", animationDelay: "0.4s" }}
        >
          <div className="flex items-start gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-sm font-bold text-indigo-400 border border-indigo-500/20">
              ⚡
            </span>
            <div>
              <h3 className="text-sm font-bold text-white mb-1 uppercase tracking-wide">Nota di Analisi Nexify</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                I calcoli sopra riportati si basano su modelli aziendali medi e sul principio dell'eliminazione dell'attrito operativo tramite automazione software basata su protocolli Make, API REST e intelligenze artificiali generative. L'integrazione di un ecosistema automatizzato azzera l'errore umano e converte i costi passivi in asset scalabili a lungo termine.
              </p>
            </div>
          </div>
        </div>

        {/* Pulsante di Ritorno */}
        <div className="mt-20">
          <Link 
            href="/" 
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-indigo-400 transition hover:text-indigo-300"
          >
            <svg className="mr-2 h-4 w-4 fill-current" viewBox="0 0 16 16">
              <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
            </svg>
            Torna alla Home
          </Link>
        </div>
      </div>
    </main>
  );
}
