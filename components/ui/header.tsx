"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    /* Ho aumentato mt-2 -> mt-6 e md:mt-5 -> md:mt-10 per spingere la barra verso il basso */
    <header className="z-30 mt-6 w-full md:mt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>
        </div>
      </div>
    </header>
  );
}
