import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative px-6 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 z-10"
          >
            <div className="inline-flex items-center self-start rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-800">
              Premium Work Center em São Paulo
            </div>
            <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
              M.A. Salas
              <div className="block text-slate-500">
                Salas de Alto Padrão
              </div>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600">
              Conecte-se. Cresça. Inspire. O ambiente ideal para o seu sucesso em
              uma localização privilegiada, com infraestrutura de nível mundial.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-lg bg-primary px-8 py-4 text-base font-bold text-slate-900 shadow-lg shadow-primary/20 hover:scale-105 transition-transform cursor-pointer">
                Conhecer Espaços
              </button>
              <button className="rounded-lg border-2 border-slate-200 px-8 py-4 text-base font-bold text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer">
                Falar no WhatsApp
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
              <img
                alt="Profissional M.A. Salas"
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div
                    className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0SE6T8ss6aDJiDh9aE-E1Xfp7WPcTPZlJrUYL6bCJ3v3WNgLA_GsDfsmZg8KLf6z12Nkhu7oPB8RqJWxJrWk50DRr5k0EOIQPO1aWrmRwLbVStWCDVgLvTkO-U9dZnvwzvovFsphMdo9q3AQpGH_H98Nb3xfQ29JGtFsaP_gbAV1szC7Ymr6Y_bab0qaj80kL4jxykPl68v33H3vw_ph8soFx_TrUX0hneUEYD8syZWjPr2aui-hxkIi3Zef3X81uNwwvCH3Lzg")',
                    }}
                  ></div>
                  <div
                    className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuChLYkYGuCttp8QzifTOn_5MxS2PO2j-1CxRcY65hPq8r_0Ejl4llb5cmHylGSHArL8wvFUzdy-WIKUZkuI0fSwP3ixyVsn76VTiLb8QJ2tNxlf2Y3iGYkgCJPXA5YrMpvTCHq_mPCHJjLIsUR5USngdsUHmpVCQr8H5f3HLg9Cia_6kBa-EVBtaYoazR9Ok0CL-W6baUW9lw-T4FHctNppvBIccL1VCa7jnIOIKlQG4uYxbAv9WcrSdmlAh_cDHaMGYKqTHi4ogg")',
                    }}
                  ></div>
                  <div
                    className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEn0t7kpNHUJryhqcGZywdo9gFzClf-xyRIXSH_UgfYwOGOIcFtUrcJiM52imrTi_Z1JNWSYZxWPZnSjiXmN5htnhFEQ2SE-7nnXaD4n59MOsgiyQYjwcw6KpuYXzGQdvUT05xCDLN9LQnr0zg4g1D9rV8uqkFahhGHXri9hCjhF8Sr7YRWwDuiuwZu32izFmxOAW41NaDT5Tnfq9bQuuisZrG7p2PjlQA0tSb7dZZRHd9nCfaTjjDg0mRcaYT97B-uJ3vj3YPQQ")',
                    }}
                  ></div>
                </div>
                <p className="text-sm font-medium text-slate-600">
                  +100 clientes satisfeitos
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
