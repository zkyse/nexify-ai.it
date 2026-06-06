"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import TechGraphic from "@/public/images/hero-image-01.jpg"; 

export default function HeroHome() {
  // Stato per gestire le fasi della chat (da 1 a 8)
  const [step, setStep] = useState(1);
  // Stato per la dissolvenza fluida durante il cambio di utente
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // ================= FLUSSO MARCO =================
    // Step 1: Messaggio iniziale di Marco (già visibile)
    
    // Step 2: L'IA mostra i pallini di digitazione
    const t1 = setTimeout(() => setStep(2), 2000); 
    
    // Step 3: L'IA risponde con le opzioni (Martedì o Giovedì)
    const t2 = setTimeout(() => setStep(3), 5000); 
    
    // Step 4 (NUOVO): Marco risponde scegliendo l'orario
    const t3 = setTimeout(() => setStep(4), 9000); 
    
    // Step 5 (NUOVO): L'IA mostra i pallini per l'ultima conferma
    const t4 = setTimeout(() => setStep(5), 12000); 
    
    // Step 6 (NUOVO): L'IA conferma l'appuntamento
    const t5 = setTimeout(() => setStep(6), 14500); 

    // ================= TRANSIZIONE SMOOTH =================
    // Avvia la sfumatura in uscita (fade-out) dopo aver letto la conferma
    const t6 = setTimeout(() => setIsExiting(true), 19500);
    
    // Switch sullo Step 7 (entra Sara) e resetta l'opacità
    const t7 = setTimeout(() => {
      setStep(7);
      setIsExiting(false);
    }, 20000);

    // ================= FLUSSO SARA =================
    // Step 7: Sara entra con la sua domanda (già visibile all'entrata)
    
    // Step 8: L'IA mostra i pallini e poi risponde direttamente
    const t8 = setTimeout(() => setStep(8), 22500);
    const t9 = setTimeout(() => setStep(9), 25500);

    // Fine ciclo: avvia fade-out finale
    const t10 = setTimeout(() => setIsExiting(true), 31500);

    // Loop completo: resetta allo Step 1
    const loop = setTimeout(() => {
      setStep(1);
      setIsExiting(false);
    }, 32000); 

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
      clearTimeout(t8);
      clearTimeout(t9);
      clearTimeout(t10);
      clearTimeout(loop);
    };
  }, [step === 1]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full">
        <div className="pt-2 pb-12 md:pt-4 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* COLONNA SINISTRA: Testi e Pulsanti */}
          <div className="text-left space-y-6" data-aos="fade-right">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-2 font-nacelle text-4xl font-semibold text-transparent md:text-5xl leading-tight">
              Automatizza il presente. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                Progetta il futuro.
              </span>
            </h1>
            
            <p className="text-lg text-indigo-200/65 max-w-xl">
              Soluzioni IA personalizzate per PMI e professionisti. Automatizziamo la tua operatività quotidiana per eliminare i tempi morti, abbattere i colli di bottiglia e aumentare la produttività.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div>
                <a className="btn group w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:w-auto" href="#contatti">
                  <span className="relative inline-flex items-center justify-center">
                    Automatizza Ora <span className="ml-1 tracking-normal text-white/50 transition-
