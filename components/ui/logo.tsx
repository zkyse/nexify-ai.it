import Link from "next/link";

export default function Logo() {
  return (
    <Link 
      href="/" 
      className="inline-flex items-center tracking-tight font-sans text-2xl font-bold text-white transition-colors hover:text-indigo-400" 
      aria-label="Nexify"
    >
      {/* La N diventa viola/indigo, il resto rimane bianco */}
      <span className="text-indigo-500">N</span>exify
    </Link>
  );
}
