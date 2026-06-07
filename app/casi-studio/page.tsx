export default function CasiDiSuccessoPage() {
  return (
    <main className="relative bg-[#02040a] text-gray-300 min-h-screen overflow-hidden">
      
      {/* Animazione specifica per i Casi di Studio */}
      <style>{`
        @keyframes caseFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(0.3deg); }
        }
        @keyframes caseFloatReverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-7px) rotate(-0.3deg); }
        }
      `}</style>

      {/* Sfondo indaco sfumato */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[700px] w-full -translate-x-1/2 opacity-20 [background:radial-gradient(circle_at_center,_#4f46e5_0%,_transparent_70%)]" />

      <div className="mx-auto max-w-5xl px-6 py-24 lg:py-32">
        
        {/* Header Pagina */}
        <div className="mb-20 border-b border-gray-800 pb-12 text-center lg:text-left">
          <h1 className="mb-6 bg-gradient-to-r from-white via-indigo-100 to-indigo-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
            Casi di Successo
          </h1>
          <p className="max-w-2xl text-lg font-medium text-indigo-200/70 leading-relaxed">
            Storie reali di aziende, PMI e professionisti che hanno rivoluzionato i propri flussi di lavoro grazie alle nostre infrastrutture di automazione IA.
          </p>
        </div>

        {/* Elenco dei Casi di Studio */}
        <div className="space-y-12">
          
          {/* Caso 1: Automazione CRM & Lead Management (PMI) */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950/40 p-8 lg:p-10 backdrop-blur-md transition-all duration-500 hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(79,70,229,0.12)] grid gap-8 md:grid-cols-3 items-center [animation:caseFloat_6s_ease-in-out_infinite]">
            <div className="md:col-span-2 space-y-4">
              <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                Settore: E-commerce / Servizi
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">Qualificazione Lead e Gestione Workflow</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Un'azienda accumulava ritardi significativi nel ricontattare i potenziali clienti dalle inserzioni marketing. Abbiamo integrato un sistema lineare con Webhook e modelli linguistici avanzati per analizzare l'intento del cliente in tempo reale, scartare lo spam e notificare istantaneamente il team commerciale.
              </p>
              <div className="pt-2 text-xs font-mono text-indigo-400">
                Tecnologie: Webhooks · OpenRouter · Integrazioni CRM
              </div>
            </div>
            {/* Metrica */}
            <div className="rounded-xl bg-gray-900/50 border border-gray-800 p-6 text-center md:border-l md:border-t-0 border-t border-gray-800">
              <div className="text-sm uppercase tracking-widest text-gray-500 font-medium">Tempo di Risposta</div>
              <div className="text-4xl font-extrabold text-white my-1">da 14h a &lt;3m</div>
              <p className="text-xs text-emerald-400 font-semibold">Tasso di conversione +35%</p>
            </div>
          </div>

          {/* Caso 2: Studio Professionale - Booking & Onboarding */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950/40 p-8 lg:p-10 backdrop-blur-md transition-all duration-500 hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(79,70,229,0.12)] grid gap-8 md:grid-cols-3 items-center [animation:caseFloatReverse_6.5s_ease-in-out_infinite] [animation-delay:0.3s]">
            <div className="md:col-span-2 space-y-4">
              <span className="inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 border border-indigo-500/20">
                Settore: Consulenza & Legal
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">Ecosistema di Onboarding Asincrono</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Uno studio associato spendeva troppe ore settimanali a coordinare agende, inviare promemoria su WhatsApp e raccogliere documenti preliminari dai clienti. Abbiamo orchestrato un flusso automatizzato che gestisce l'appuntamento, invia i reminder e archivia i dati in modo indipendente.
              </p>
              <div className="pt-2 text-xs font-mono text-indigo-400">
                Tecnologie: Google Calendar API · WhatsApp Automation · Cloud Storage
              </div>
            </div>
            {/* Metrica */}
            <div className="rounded-xl bg-gray-900/50 border border-gray-800 p-6 text-center">
              <div className="text-sm uppercase tracking-widest text-gray-500 font-medium">Ore liberate</div>
              <div className="text-4xl font-extrabold text-white my-1">18 Ore</div>
              <p className="text-xs text-indigo-400 font-semibold">Al mese per professionista</p>
            </div>
          </div>

          {/* Caso 3: Grandi Aziende - Sincronizzazione Dati ERP */}
          <div className="rounded-2xl border border-gray-800 bg-gray-950/40 p-8 lg:p-10 backdrop-blur-md transition-all duration-500 hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(79,70,229,0.12)] grid gap-8 md:grid-cols-3 items-center [animation:caseFloat_7s_ease-in-out_infinite] [animation-delay:0.6s]">
            <div className="md:col-span-2 space-y-4">
              <span className="inline-block rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-400 border border-violet-500/20">
                Settore: Enterprise / Logistica
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">Sincronizzazione Dati Multi-Piattaforma</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Una realtà strutturata riscontrava errori umani continuativi nel passaggio manuale dei dati logistici tra il vecchio software gestionale interno e i nuovi database cloud. Abbiamo creato una pipeline di sincronizzazione che valida, pulisce e ordina i record in modo trasparente e tracciabile.
              </p>
              <div className="pt-2 text-xs font-mono text-indigo-400">
                Tecnologie: Data Parsers · Gestione Errori · HTTP Router
              </div>
            </div>
            {/* Metrica */}
            <div className="rounded-xl bg-gray-900/50 border border-gray-800 p-6 text-center">
              <div className="text-sm uppercase tracking-widest text-gray-500 font-medium">Errori di Inserimento</div>
              <div className="text-4xl font-extrabold text-white my-1">0%</div>
              <p className="text-xs text-violet-400 font-semibold">Integrità dati garantita</p>
            </div>
          </div>

        </div>

        {/* Call to Action Operativa */}
        <div className="mt-24 text-center rounded-3xl border border-gray-800 bg-gray-950/30 p-10 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white mb-4">Vuoi essere il nostro prossimo caso studio?</h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto mb-8">
            Analizziamo insieme i colli di bottiglia della tua attività e strutturiamo un motore di automazione capace di farti scalare concretamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contatti" 
              className="rounded-full bg-white px-8 py-3 text-sm font-bold text-black transition hover:bg-indigo-50 hover:scale-105 active:scale-95 shadow-md"
            >
              Avvia il tuo Progetto
            </a>
          </div>
          <a href="/" className="mt-10 inline-block text-xs font-semibold text-gray-600 hover:text-indigo-400 transition tracking-widest uppercase">
            &larr; Torna alla Home
          </a>
        </div>

      </div>
    </main>
  );
}
