import { Menu, MessageCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            alt="Logo M.A. Salas"
            className="h-10 w-auto"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-8m6A9pODEsChYawLxEwP66gDcCEPKd9adXIJQzpcD5wY4_hyn844MHUF3lnmSKkxFqAthmV5uNJ94mhfF2Y3ODYaYF-GbnsT2Yn3yqNanshmJjeLEL_0Z1zBE6Sur8D8iebgpb2V21fGtDHdxdDcI_k5HGdNN-4uRZm4ze9KvoNW6E9Aex6oDcLWC0RhNXFzpPLv3eT205iVuYZyCOlyDZJ_-PAwkNWkK1tEG9x2vL09CEWMxrjeXmo-ej4Ff78AaYk4GrOFRQ"
          />
          <span className="text-xl font-bold tracking-tight text-slate-900">
            M.A. Salas
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a
            className="text-sm font-medium hover:text-primary transition-colors text-slate-700"
            href="#espacos"
          >
            Espaços
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors text-slate-700"
            href="#diferenciais"
          >
            Diferenciais
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors text-slate-700"
            href="#depoimentos"
          >
            Depoimentos
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors text-slate-700"
            href="#contato"
          >
            Contato
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-slate-900 hover:bg-primary/90 transition-all cursor-pointer">
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </button>
          <button className="md:hidden text-slate-900 cursor-pointer">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
