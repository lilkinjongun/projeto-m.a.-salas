export default function Stats() {
  return (
    <section className="bg-white py-12 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center space-y-2 border-slate-100 p-8 md:border-r">
            <span className="text-4xl font-black text-slate-900">
              7.3k
            </span>
            <span className="text-sm font-medium uppercase tracking-widest text-slate-500">
              Seguidores
            </span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 border-slate-100 p-8 md:border-r">
            <span className="text-4xl font-black text-slate-900">
              700+
            </span>
            <span className="text-sm font-medium uppercase tracking-widest text-slate-500">
              Posts
            </span>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 p-8">
            <span className="text-4xl font-black text-slate-900">
              10+
            </span>
            <span className="text-sm font-medium uppercase tracking-widest text-slate-500">
              Anos de Excelência
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
