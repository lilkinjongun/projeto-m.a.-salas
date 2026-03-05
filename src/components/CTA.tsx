export default function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl bg-slate-900 p-12 text-center text-white shadow-2xl overflow-hidden relative">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          ></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black md:text-5xl">
              Pronto para elevar o seu negócio?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
              Agende uma visita hoje mesmo e descubra por que os melhores
              profissionais escolhem a M.A. Salas.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="rounded-lg bg-primary px-10 py-4 text-lg font-bold text-slate-900 hover:scale-105 transition-transform cursor-pointer">
                Agendar Visita
              </button>
              <button className="rounded-lg border border-white/20 bg-white/10 px-10 py-4 text-lg font-bold backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                Ver Tabela de Preços
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
