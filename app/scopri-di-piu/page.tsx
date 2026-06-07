"use client";

import Link from "next/link";

export default function ScopriDiPiuPage() {
  const pilastri = [
    {
      titolo: "Velocità Decisionale",
      descrizione: "Riduciamo il tempo che intercorre tra l'acquisizione di un dato e l'azione conseguente. I nostri sistemi eliminano i colli di bottiglia umani.",
      icona: "🚀"
    },
    {
      titolo: "Scalabilità Asincrona",
      descrizione: "Le nostre automazioni lavorano in parallelo. Puoi gestire 10 o 10.000 lead contemporaneamente senza aumentare i costi fissi del personale.",
      icona: "📈"
    },
    {
      titolo: "Precisione Chirurgica",
      descrizione: "L'IA non soffre di stanchezza o cali di attenzione. Ogni inserimento dati e ogni risposta viene eseguita con lo 0% di margine d'errore.",
      icona: "🎯"
    }
  ];

  return (
    <main className="relative bg-[#02040a] text-gray-300 min-h-screen overflow-hidden">
      
      {/* Animazione di fluttuazione leggera coerente con le altre pagine */}
      <style>{`
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      {/* Sfondo decorativo radiale Nexify */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[600px] w-full -translate-x-1/2 opacity-25 [background:radial-gradient(circle_at_center,_#4f46e5_0%,_transparent_65%)]" />

      <div className="mx-auto max-w-4xl px-6 py-24 lg:py-32">
        
        {/* Intestazione Strategica */}
        <div className="mb-16 border-b border-gray-800 pb-10 text-center lg:text-left">
          <h1 className="mb-4 bg-gradient-to-r from-white via-indigo-200 to-indigo-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
            Progettare l'Impresa Autonoma
          </h1>
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-400/80">
            Visione Nexify / Verso l'eliminazione dell'attrito operativo
          </p>
        </div>

        {/* Manifesto / Visione */}
        <div className="mb-16 text-base leading-relaxed text-indigo-100/70 space-y-6">
          <p>
            In un mercato che si muove alla velocità degli algoritmi, il lavoro manuale è diventato il freno a mano della crescita. Nexify non si limita a "installare software": noi ridisegniamo l'architettura dei tuoi processi per trasformare la tua azienda in un'entità agile, reattiva e autonoma.
          </p>
          <p>
            Il nostro obiettivo è liberare l'intelligenza umana dai task inerti, delegando alle macchine tutto ciò che è logica, calcolo e ripetizione. Questo è ciò che chiamiamo <strong>Impresa Autonoma</strong>.
          </p>
        </div>

        {/* Griglia Pilastri Fluttuanti */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pilastri.map((p, idx) => {
            const duration = 4.2 + idx * 0.4;
            const delay = idx * 0.3;
            return (
              <div 
                key={idx} 
                className="rounded-xl border border-gray-800 bg-gray-950/40 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-indigo-500/40"
                style={{ animation: `gentleFloat ${duration}s ease-in-out infinite`, animationDelay: `${delay}s` }}
              >
                <div className="text-2xl mb-4">{p.icona}</div>
                <h3 className="text-lg font-semibold text-white mb-2 leading-tight">{p.titolo}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {p.descrizione}
                </p>
              </div>
            );
          })}
        </div>

        {/* Focus Tecnologico Fluttuante */}
        <div 
          className="rounded-xl border border-gray-800 bg-gray-950/40 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:border-indigo-500/40 mb-12"
          style={{ animation: "gentleFloat 5.8s ease-in-out infinite", animationDelay: "1s" }}
        >
          <h2 className="text-xl font-bold text-white mb-4">Perché scegliere Nexify?</h2>
          <div className="grid sm:grid-cols-2 gap-8 text-sm text-indigo-100/70 leading-relaxed">
            <p>
              Non siamo generalisti. Siamo esperti di <strong>automazione profonda</strong>. Sappiamo come far parlare software che non dovrebbero comunicare tra loro e come istruire un'IA a rispondere con la stessa competenza del tuo miglior account manager.
            </p>
            <p>
              Ogni nostra soluzione è scalabile: partiamo da un singolo collo di bottiglia e costruiamo, passo dopo passo, un ecosistema che si auto-gestisce, lasciandoti il controllo totale sui dati e sulla strategia.
            </p>
          </div>
        </div>

        {/* Call to Action verso il Test */}
        <div 
          className="rounded-xl border border-indigo-500/30 bg-gray-950/60 p-10 text-center relative overflow-hidden shadow-[0_0_30px_rgba(79,70,229,0.1)]"
          style={{ animation: "gentleFloat 6.2s ease-in-out infinite", animationDelay: "1.5s" }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
          <h3 className="text-2xl font-bold text-white mb-4">Sei pronto a fare il primo passo?</h3>
          <p className="text-sm text-gray-400 max-w-lg mx-auto mb-8">
            Il cambiamento inizia con i dati. Scopri quanto valore stai perdendo e come possiamo aiutarti a recuperarlo in meno di 30 giorni.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/test"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-indigo-500 active:scale-95"
            >
              Avvia il Test di Efficienza
            </Link>
            <Link 
              href="/servizi"
              className="inline-flex items-center justify-center rounded-xl border border-gray-700 bg-transparent px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-gray-900 active:scale-95"
            >
              Esplora i Servizi
            </Link>
          </div>
        </div>

        {/* Pulsante Torna alla Home */}
        <div className="mt-20">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm font-semibold text-indigo-400 transition hover:text-indigo-300"
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
