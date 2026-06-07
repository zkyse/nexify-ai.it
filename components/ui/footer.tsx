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
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="#servizi">
                  Agenti IA su Misura
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="#servizi">
                  Ottimizzazione Workflow
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="#servizi">
                  Assistenti WhatsApp H24
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="#servizi">
                  Automazione Email & CRM
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="#servizi">
                  Qualificazione Lead IA
                </a>
              </li>
            </ul>
          </div>

          {/* 2nd block - Soluzioni per Target */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-200">Soluzioni</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="#soluzioni-aziende">
                  Per Grandi Aziende
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="#soluzioni-pmi">
                  Per Piccole e Medie Imprese
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="#soluzioni-professionisti">
                  Per Privati e Professionisti
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="#casi-studio">
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
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="#chi-siamo">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="#metodo">
                  Il Nostro Metodo
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="#contatti">
                  Contatti
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="https://wa.me/message/Y7G7NANQK6ACA1" target="_blank" rel="noopener noreferrer">
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
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="#privacy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-indigo-200/65 transition hover:text-indigo-400" href="#cookie">
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
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400 hover:scale-110 transform duration-200"
                    href="#0"
                    aria-label="Twitter / X"
                  >
                    <svg className="h-7 w-7 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
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
