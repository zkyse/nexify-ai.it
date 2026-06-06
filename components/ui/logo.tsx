import Link from "next/link";

export default function Logo() {
  return (
    <Link 
      href="/" 
      className="inline-flex items-center tracking-tight font-sans text-3xl font-bold text-white transition-colors hover:text-indigo-400" 
      aria-label="Nexify"
    >
      {/* La N diventa viola/indigo, il resto rimane bianco */}
      <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">N</span>exify
    </Link>
  );
}
