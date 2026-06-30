Ecco il codice aggiornato. Ho modificato la funzione `handleSubmit` per strutturare il corpo della richiesta (`body`) esattamente come richiesto, assicurandomi che tutti i campi siano inclusi correttamente.

```tsx
"use client";

import { useState } from "react";

export default function ContattiPage() {
  const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/1j5py4jf8z37gumwy1ov8ftqqceyxisp";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: formData.name,
          email: formData.email,
          cellulare: formData.phone,
          azienda: formData.company || "Non specificata",
          descrizione_bisogno: formData.message,
          sentAt: new Date().toISOString(),
          source: "Sito Web - Form Contatti"
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Errore durante l'invio del form:", error);
      setStatus("error");
    }
  };

  return (
    <main className="relative bg-[#02040a] text-gray-300 min-h-screen overflow-hidden">
      
      <style>{`
        @keyframes advancedFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(0.4deg); }
        }
        @keyframes advancedFloatReverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(-0.4deg); }
        }
      `}</style>

      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[600px] w-full -translate-x-1/2 opacity-25 [background:radial-gradient(circle_at_center,_#4f46e5_0%,_transparent_65%)]" />

      <div className="mx-auto max-w-4xl px-6 py-24 lg:py-32">
        <div className="mb-16 border-b border-gray-800 pb-10 text-center lg:text-left">
          <h1 className="mb-4 bg-gradient-to-r from-white via-indigo-200 to-indigo-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
            Contatti
          </h1>
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-400/80">
            Parliamo del tuo prossimo progetto di automazione
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-5 items-start">
          
          <div className="md:col-span-2 space-y-6">
            <div className="text-base leading-relaxed text-indigo-100/70 mb-2">
              <p>
                Hai un'idea da sviluppare o un flusso aziendale da ottimizzare? Scegli il canale che preferisci o compila il modulo. Il nostro team ti risponderà entro 24 ore lavorative.
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-950/40 p-5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(79,70,229,0.12)] [animation:advancedFloat_4.8s_ease-in-out_infinite]">
              <h3 className="text-sm font-semibold text-white mb-1">Canale Diretto</h3>
              <p className="text-xs text-gray-400 mb-3">Avvia una chat immediata con un nostro consulente.</p>
              <a 
                href="https://wa.me/message/Y7G7NANQK6ACA1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition"
              >
                Parla su WhatsApp &rarr;
              </a>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-950/40 p-5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(79,70,229,0.12)] [animation:advancedFloatReverse_5.2s_ease-in-out_infinite] [animation-delay:0.3s]">
              <h3 className="text-sm font-semibold text-white mb-1">Via Email</h3>
              <p className="text-xs text-gray-400 mb-2">Per richieste commerciali, dettagliate o partnership.</p>
              <a 
                href="mailto:office@nexify-ai.it" 
                className="text-xs font-mono text-indigo-400 hover:text-indigo-300 transition break-all"
              >
                office@nexify-ai.it
              </a>
            </div>
          </div>

          <div className="md:col-span-3 rounded-xl border border-gray-800 bg-gray-950/40 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_25px_rgba(79,70,229,0.15)] [animation:advancedFloat_5.8s_ease-in-out_infinite] [animation-delay:0.5s]">
            <h2 className="text-xl font-bold text-white mb-6 tracking-tight">Invia un messaggio</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Nome e Cognome</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === "sending" || status === "success"}
                  className="w-full rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all duration-200 disabled:opacity-50"
                  placeholder="Mario Rossi"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Email Aziendale</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === "sending" || status === "success"}
                  className="w-full rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all duration-200 disabled:opacity-50"
                  placeholder="nome@azienda.it"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Numero di Cellulare</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={status === "sending" || status === "success"}
                  className="w-full rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all duration-200 disabled:opacity-50"
                  placeholder="+39 333 1234567"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Azienda (facoltativo)</label>
                <input 
                  type="text" 
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={status === "sending" || status === "success"}
                  className="w-full rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all duration-200 disabled:opacity-50"
                  placeholder="Es. Nexify S.r.l."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Descrizione del bisogno</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === "sending" || status === "success"}
                  className="w-full rounded-lg border border-gray-800 bg-gray-900/50 px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all duration-200 resize-none disabled:opacity-50"
                  placeholder="Quali processi ti piacerebbe automatizzare?"
                />
              </div>

              <button 
                type="submit"
                disabled={status === "sending" || status === "success"}
                className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-lg shadow-indigo-600/10 disabled:bg-gray-800 disabled:text-gray-500"
              >
                {status === "idle" && "Invia Richiesta"}
                {status === "sending" && "Invio in corso..."}
                {status === "success" && "Richiesta Ricevuta!"}
                {status === "error" && "Errore, riprova"}
              </button>

              {status === "success" && <p className="text-xs text-emerald-400 mt-2 text-center">Richiesta inoltrata correttamente.</p>}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
