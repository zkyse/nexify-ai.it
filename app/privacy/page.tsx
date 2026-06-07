export default function PrivacyPolicyPage() {
  return (
    <main className="relative bg-[#02040a] text-gray-300 min-h-screen overflow-hidden">
      {/* Sfondo decorativo per coerenza con il brand */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[500px] w-full -translate-x-1/2 opacity-20 [background:radial-gradient(circle_at_center,_#4f46e5_0%,_transparent_70%)]" />

      <div className="mx-auto max-w-4xl px-6 py-24 lg:py-32">
        {/* Intestazione Pagina */}
        <div className="mb-16 border-b border-gray-800 pb-10 text-center lg:text-left">
          <h1 className="mb-4 bg-gradient-to-r from-white via-indigo-200 to-indigo-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-400/80">
            Nexify Automation Agency • Ultimo aggiornamento: Giugno 2026
          </p>
        </div>

        {/* Contenuto Legale */}
        <div className="space-y-12 text-sm leading-relaxed text-indigo-100/70">
          
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">1. Informazioni Generali</h2>
            <p>
              Nexify si impegna a proteggere e rispettare la privacy degli utenti che visitano il sito nexify-ai.it e che usufruiscono dei nostri servizi di automazione. Questa informativa descrive le modalità di raccolta, trattamento, conservazione e tutela dei dati personali in conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR - Regolamento UE 2016/679).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">2. Dati Raccolti e Finalità</h2>
            <p>
              Raccogliamo i dati strettamente necessari per erogare i nostri servizi di ingegnerizzazione dei flussi aziendali. Tali dati includono:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li><strong>Dati di contatto:</strong> Nome, indirizzo email e numero di telefono inseriti volontariamente nei moduli di contatto o per la prenotazione di una consulenza (es. tramite link WhatsApp).</li>
              <li><strong>Dati aziendali:</strong> Informazioni relative alla struttura operativa o software in uso fornite durante la fase di analisi dei workflow.</li>
              <li><strong>Dati di navigazione e pagamento:</strong> Indirizzi IP e log raccolti in modo anonimo per scopi tecnici. I dati di fatturazione e pagamento sono processati interamente e in modo sicuro tramite il gateway di terze parti <strong>Stripe</strong>.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">3. Condivisione dei Dati e Strumenti Terzi</h2>
            <p>
              I dati personali non vengono venduti o ceduti a terzi per scopi di marketing. Tuttavia, per la corretta esecuzione delle automazioni software e l'ottimizzazione del sito, i dati potrebbero transitare o essere elaborati da infrastrutture tecnologiche affidabili, quali:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Piattaforme di pagamento (Stripe) per l'elaborazione dei corrispettivi.</li>
              <li>Infrastrutture Cloud e API di Intelligenza Artificiale (OpenAI, Anthropic) limitatamente ai parametri operativi concordati.</li>
              <li>Piattaforme di integrazione (come Make.com) utilizzate per connettere in sicurezza i CRM aziendali o i gestionali interni.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">4. Conservazione e Sicurezza dei Dati</h2>
            <p>
              I dati sono trattati mediante strumenti informatici protetti da adeguate misure di sicurezza logiche e organizzative. Nexify conserva i dati personali per il tempo strettamente necessario a conseguire le finalità per le quali sono stati raccolti o per adempiere agli obblighi di legge commerciali e fiscali.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">5. Diritti dell'Utente (GDPR)</h2>
            <p>
              In ogni momento, l'utente può esercitare i diritti previsti dagli articoli 15 e seguenti del GDPR, tra cui il diritto di accedere ai propri dati, richiederne la rettifica, la cancellazione (diritto all'oblio), la limitazione del trattamento o l'opposizione totale al loro utilizzo scrivendo ai nostri canali di contatto.
            </p>
          </section>

          <section className="space-y-4 border-t border-gray-800 pt-10">
            <h2 className="text-xl font-bold text-white">6. Titolare del Trattamento</h2>
            <p>
              Il titolare del trattamento dei dati è Nexify. Per qualsiasi richiesta relativa all'esercizio dei tuoi diritti o per ricevere delucidazioni su come gestiamo i tuoi flussi informativi, puoi contattarci direttamente tramite i riferimenti email ufficiali presenti nel sito web.
            </p>
          </section>

        </div>

        {/* Pulsante Torna alla Home */}
        <div className="mt-20">
          <a 
            href="/" 
            className="inline-flex items-center text-sm font-semibold text-indigo-400 transition hover:text-indigo-300"
          >
            <svg className="mr-2 h-4 w-4 fill-current" viewBox="0 0 16 16">
              <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
            </svg>
            Torna alla Home
          </a>
        </div>
      </div>
    </main>
  );
}
