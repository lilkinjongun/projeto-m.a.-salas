import { Star } from 'lucide-react';

const testimonials = [
  {
    text: '"O melhor custo-benefício que já encontrei. A localização é perfeita e a infraestrutura das salas de reunião impressiona meus clientes."',
    name: 'Rodrigo Silva',
    role: 'Advogado Sênior',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA5kNuaCj7NqB5kRhQuNIcHBBXtiqH907TGa1XRTV5qT8adRStqi2Z0wBtUdiqzYwP2xarxptIcIZ7OwqaQ3tDcVP2_cs3H9zFcEBaoJ-n7Bf_efg4xCF9VRWDt4km--Zomc5CENCrEKAWSG2VVabUunYCZQrQ31Qqr_ibUAWX84D9Nr7ezph0y39jwb4tKa-FUC-rHMtmDgKnz1-BxbFSI4lQUXX542CgayIYmFu9Wiz62kDewE3dr3R7UfTEqBnuHFpuzSB96OA',
  },
  {
    text: '"Ambiente extremamente profissional e silencioso. O suporte da equipe administrativa é impecável, sinto que minha empresa está em boas mãos."',
    name: 'Ana Beatriz',
    role: 'Consultora de Marketing',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCr-rs48YfAzufPJ3OSprS9t9EgunXnzuvoFwHHz70KUHSCiDI-9gAql8MajSZCe8AIuxuGEfNbxe6Bfr6nxQaRhxrUMp9d84cDyfc3YbPmSVFekYbSTfR7f3PBHwVu5nbep44BUaZ08L9q1pB0_6qwkWP3rs6HncjkcewJXpjT3P7WLt3CXwUYSooUMYs39GB4wnyeVk7YX85P2cvB71mm72dPv0yTVGMPowtbzmS2WLVT-K3USn19Vj_05Yr6pSnB69xvL7193g',
  },
  {
    text: '"As suítes executivas são o que há de mais luxuoso em São Paulo. O isolamento acústico realmente funciona e o design é muito moderno."',
    name: 'Marcus Viana',
    role: 'CEO - Tech Startup',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAoebZcFmksZI71Yn8atQMRW6zuK38VX6smsNWiEHhCqsxSNPtG0Y-Cfu6gqq_yVAX3o596LA_W9LPDX_jpAhNtyvopleXa52F-XFUk63P_Tna_r_Vz3aljhJuakx2mVMMyahYc5w89FcXVz8_HAv9PY7cBSu5tozZNkl36ucnNy6imQCLCdNVYT6KpL03UEZD49QfX02o0pbeabOVDdfOnYasq8xdCzD15eDBxkKznLIA8agpxxTBuOUjZsZzLQtE8zHE54ES7uw',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background-light" id="depoimentos">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black text-slate-900 md:text-4xl">
            O que dizem nossos clientes
          </h2>
          <p className="mt-4 text-slate-600">
            A satisfação de quem vive o dia a dia na M.A. Salas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="flex text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="italic text-slate-600 mb-6">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="h-12 w-12 rounded-full bg-slate-200 bg-cover bg-center"
                  style={{ backgroundImage: `url("${testimonial.image}")` }}
                ></div>
                <div>
                  <h5 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h5>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
