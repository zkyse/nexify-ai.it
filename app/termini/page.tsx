export default function TerminiPage() {
  return (
    <main className="relative bg-[#02040a] text-gray-300 min-h-screen overflow-hidden">
      {/* Sfondo decorativo per coerenza con il brand */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[500px] w-full -translate-x-1/2 opacity-20 [background:radial-gradient(circle_at_center,_#4f46e5_0%,_transparent_70%)]" />

      <div className="mx-auto max-w-4xl px-6 py-24 lg:py-32">
        {/* Intestazione Pagina */}
        <div className="mb-16 border-b border-gray-800 pb-10 text-center lg:text-left">
          <h1 className="mb-4 bg-gradient-to-r from-white via-indigo-200 to-indigo-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
            Termini e Condizioni
          </h1>
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-400/80">
            Nexify Automation Agency • Ultimo aggiornamento: Giugno 2026
          </p>
        </div>

        {/* Contenuto Legale */}
        <div className="space-y-12 text-sm leading-relaxed text-indigo-100/70">
          
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">1. Accettazione dei Termini</h2>
            <p>
              Accedendo al sito nexify-ai.it o utilizzando i servizi di Nexify, l'utente accetta di essere vincolato dai presenti Termini e Condizioni, da tutte le leggi e dai regolamenti applicabili. Se non si accettano tali termini, è vietato l'uso dei nostri servizi.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">2. Descrizione dei Servizi</h2>
            <p>
              Nexify fornisce servizi di consulenza e implementazione tecnologica, inclusi ma non limitati a:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Sviluppo di Agenti IA e assistenti virtuali personalizzati.</li>
              <li>Ottimizzazione e ingegnerizzazione dei workflow aziendali.</li>
              <li>Integrazione di sistemi CRM, ERP e software di terze parti via API.</li>
              <li>Sistemi di qualificazione automatica dei lead.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">3. Proprietà Intellettuale e Licenze</h2>
            <p>
              Salvo diversi accordi scritti, il codice sorgente, le architetture logiche e i flussi di automazione sviluppati da Nexify rimangono di proprietà intellettuale dell'agenzia fino al saldo totale della prestazione. Al cliente viene concessa una licenza d'uso esclusiva per le implementazioni realizzate specificamente per il suo business.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">4. Limitazione di Responsabilità (IA e Automazioni)</h2>
            <p>
              Nexify implementa soluzioni basate su modelli di Intelligenza Artificiale (come OpenAI, Anthropic, ecc.). Il Cliente riconosce che:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>I modelli IA possono generare errori o "allucinazioni" al di fuori del controllo di Nexify.</li>
              <li>Nexify non è responsabile per interruzioni di servizio dovute a downtime di fornitori terzi (Make.com, Stripe, WhatsApp/Meta, OpenAI).</li>
              <li>L'utente è responsabile della supervisione finale degli output generati dai sistemi automatizzati.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">5. Pagamenti e Fatturazione</h2>
            <p>
              I pagamenti per i servizi offerti sono gestiti tramite la piattaforma sicura <strong>Stripe</strong>. Nexify non memorizza i dati della carta di credito dell'utente. Eventuali abbonamenti ricorrenti possono essere disdetti secondo i termini specificati nel singolo contratto di servizio.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">6. Riservatezza (NDA)</h2>
            <p>
              Nexify si impegna a non divulgare informazioni sensibili, dati aziendali o segreti commerciali del Cliente di cui venga a conoscenza durante la fase di analisi o implementazione dei processi.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white">7. Modifiche ai Termini</h2>
            <p>
              Nexify si riserva il diritto di modificare questi termini in qualsiasi momento senza preavviso. Continuando a utilizzare il sito o i servizi dopo tali modifiche, l'utente accetta i nuovi termini.
            </p>
          </section>

          <section className="space-y-4 border-t border-gray-800 pt-10">
            <h2 className="text-xl font-bold text-white">8. Contatti e Foro Competente</h2>
            <p>
              Per qualsiasi chiarimento relativo ai presenti termini, è possibile contattarci all'indirizzo email dedicato o tramite i canali ufficiali indicati nel sito. Per ogni controversia, il foro competente è quello previsto dalla normativa italiana vigente.
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
