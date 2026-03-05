import { Megaphone, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                alt="Logo M.A. Salas"
                className="h-8 w-auto"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYM5GS-u04GYvUnVFpMx8bb9xbP1cz8MEK5QV4q16xE4OeBlUmiC75tlqUShLgHXm2p42loIEw3dFL4USXD5UAOnQkflBNRxKz5Hv3Em9XfrTY037F7zQYdWzkxp_i_iIRa_OFyQN1ERcVykIs-o4v-_q5AVcIdxywamB3zvUwh5jo2UOW4MW9aUZZvZMvfAg-JtUTmN3nKMNbxPqiAe9_c7Q-IMuNytNx7i8XNfOViRRlZCH7Fzj5p2OcjzLsfzf5IHKfa_05RQ"
              />
              <span className="text-xl font-bold tracking-tight text-slate-900">
                M.A. Salas | Work Center
              </span>
            </div>
            <p className="max-w-xs text-slate-500 leading-relaxed">
              Espaços corporativos de alto padrão com soluções flexíveis para o
              profissional moderno.
            </p>
            <div className="flex gap-4 mt-8">
              <a
                className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-900 hover:bg-primary transition-colors"
                href="#"
              >
                <Megaphone className="w-5 h-5" />
              </a>
              <a
                className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-900 hover:bg-primary transition-colors"
                href="#"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h6 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">
              Links Rápidos
            </h6>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-slate-500 hover:text-primary text-sm transition-colors"
                  href="#"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-primary text-sm transition-colors"
                  href="#"
                >
                  Nossos Espaços
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-primary text-sm transition-colors"
                  href="#"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 hover:text-primary text-sm transition-colors"
                  href="#"
                >
                  Planos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">
              Contato
            </h6>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <MapPin className="w-4 h-4 text-primary" />
                Av. Paulista, 1000 - SP
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Mail className="w-4 h-4 text-primary" />
                contato@masalas.com.br
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Phone className="w-4 h-4 text-primary" />
                (11) 99999-9999
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            © 2024 M.A. Salas | Work Center. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a
              className="text-xs text-slate-400 hover:text-slate-900"
              href="#"
            >
              Políticas de Privacidade
            </a>
            <a
              className="text-xs text-slate-400 hover:text-slate-900"
              href="#"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
