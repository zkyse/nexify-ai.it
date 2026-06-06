import Link from "next/link";

export default function Logo() {
  return (
    <Link 
      href="/" 
      className="inline-flex items-center tracking-tight font-sans text-xl font-bold text-white transition-colors hover:text-indigo-400" 
      aria-label="Nexify"
    >
      {/* Scritta testuale pulita in stile tech */}
      Nexify
    </Link>
  );
}
