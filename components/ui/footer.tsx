import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer className="border-t border-gray-900 bg-[#02040a]">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none opacity-60 mix-blend-screen"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>

        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,180px))_1fr] lg:grid-rows-1 xl:gap-20">
          
          {/* 1st block - Servizi Principali */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-200">Servizi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="/servizi">
                  Agenti IA su Misura
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="/servizi">
                  Ricerca Lead & Data Mining Automatico
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="/servizi">
                  Qualificazione Lead & Follow-Up H24
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="/servizi">
                  Sincronizzazione CRM & Assistenti Chat
                </a>
              </li>
            </ul>
          </div>

          {/* 2nd block - Soluzioni per Target */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-200">Soluzioni</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="/per-aziende">
                  Per Grandi Aziende
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="/soluzioni-pmi">
                  Per Piccole e Medie Imprese
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="/soluzioni-professionisti">
                  Per Privati e Professionisti
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="/casi-studio">
                  Casi di Successo
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block - L'Agenzia */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-200">L'Agenzia</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="/chi-siamo">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="/il-nostro-metodo">
                  Il Nostro Metodo
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="/contatti">
                  Contatti
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="/contatti" target="_blank" rel="noopener noreferrer">
                  Prenota una Consulenza
                </a>
              </li>
            </ul>
          </div>

          {/* 4th block - Note Legali e Privacy */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-200">Note Legali</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="/privacy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="/cookie">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="/termini">
                  Termini e Condizioni
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block - Branding, Copyright & Social */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right flex flex-col lg:items-end justify-between space-y-4 lg:space-y-0">
            <div>
              <div className="mb-3 inline-block lg:block">
                <Logo />
              </div>
              <p className="text-xs text-indigo-200/50 leading-relaxed max-w-xs lg:max-w-none">
                Sviluppiamo ecosistemi intelligenti e automazioni su misura per liberare il potenziale del tuo business.
              </p>
            </div>
            
            <div className="text-sm pt-2">
              <p className="mb-3 text-indigo-200/65">
                © {new Date().getFullYear()} nexify-ai.it
              </p>
              <ul className="inline-flex gap-2">
                <li>
                  {/* Icona Instagram */}
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400 hover:scale-110 transform duration-200"
                    href="https://www.instagram.com/_nexify_ai_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <svg className="h-7 w-7 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8.3c2.5 0 2.8 0 3.8.1 1 .05 1.5.2 1.8.35.5.2.8.4 1.2.8.4.4.6.7.8 1.2.15.3.3.9.35 1.8.1 1 .1 1.3.1 3.8s0 2.8-.1 3.8c-.05 1-.2 1.5-.35 1.8-.2.5-.4.8-.8 1.2-.4.4-.7.6-1.2.8-.3.15-.9.3-1.8.35-1 .1-1.3.1-3.8.1s-2.8 0-3.8-.1c-1-.05-1.5-.2-1.8-.35-.5-.2-.8-.4-1.2-.8-.4-.4-.6-.7-.8-.1.2-.15-.3-.9-.35-1.8-.1-1-.1-1.3-.1-3.8s0-2.8.1-3.8c.05-1 .2-1.5.35-1.8.2-.5.4-.8.8-1.2.4-.4.7-.6 1.2-.8.3-.15.9-.3 1.8-.35 1-.1 1.3-.1 3.8-.1M16 6.5c-2.5 0-2.9 0-3.9.1-1 .05-1.7.2-2.3.45-.65.25-1.2.6-1.75 1.15-.55.55-.9 1.1-1.15 1.75-.25.6-.4 1.3-.45 2.3-.1 1-.1 1.4-.1 3.9s0 2.9.1 3.9c.05 1 .2 1.7.45 2.3.25.65.6 1.2 1.15 1.75.55.55 1.1.9 1.75 1.15.6.25 1.3.4 2.3.45 1 .1 1.4.1 3.9.1s2.9 0 3.9-.1c1-.05 1.7-.2 2.3-.45.65-.25 1.2-.6 1.75-1.15.55-.55.9-1.1 1.15-1.75.25-.6.4-1.3.45-2.3.1-1.1.1-1.4.1-3.9s0-2.9-.1-3.9c-.05-1-.2-1.7-.45-2.3-.25-.65-.6-1.2-1.15-1.75-.55-.55-1.1-.9-1.75-1.15-.6-.25-1.3-.4-2.3-.45-1-.1-1.4-.1-3.9-.1Z"/>
                      <path d="M16 11.15a4.85 4.85 0 1 0 0 9.7 4.85 4.85 0 0 0 0-9.7Zm0 8a3.15 3.15 0 1 1 0-6.3 3.15 3.15 0 0 1 0 6.3ZM21.1 12a1.13 1.13 0 1 0 0-2.26 1.13 1.13 0 0 0 0 2.26Z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400 hover:scale-110 transform duration-200"
                    href="https://www.linkedin.com/company/nexify-it-ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-7 w-7 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 8H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-11.64 12.72H9.13v-6.95h2.23v6.95ZM10.25 12.8a1.16 1.16 0 1 1 1.15-1.16 1.16 1.16 0 0 1-1.15 1.16Zm10.39 7.92h-2.23v-3.72c0-.94-.34-1.58-1.17-1.58a1.27 1.27 0 0 0-1.2 1c-.08.26-.1.61-.1.95v3.35h-2.23v-6.95h2.23v1a2.2 2.2 0 0 1 2-1.21c1.47 0 2.57 1 2.57 3.06v4.1Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
