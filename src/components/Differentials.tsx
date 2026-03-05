import { Clock, Wifi, Leaf } from 'lucide-react';

export default function Differentials() {
  return (
    <section className="py-24 bg-white" id="diferenciais">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black text-slate-900 md:text-4xl">
              Por que escolher a M.A. Salas?
            </h2>
            <p className="mt-4 text-slate-600">
              Cada detalhe foi pensado para proporcionar a melhor experiência de
              trabalho da cidade.
            </p>
            <div className="mt-12 space-y-10">
              <div className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-slate-900">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Flexibilidade
                  </h4>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    Aluguel por hora, período ou mensal. Adaptamos o contrato às
                    suas necessidades reais de negócio.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-slate-900">
                  <Wifi className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Infraestrutura
                  </h4>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    Internet de ultra-alta velocidade, café gourmet cortesia e
                    mobiliário ergonômico de marcas renomadas.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-slate-900">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Ambiente
                  </h4>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    Design biofílico com muitas plantas e luz natural, além de
                    isolamento acústico de alto padrão.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img
                className="rounded-xl shadow-lg"
                alt="Detalhe de mobiliário"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY2lbHA4HXSiFs0UsVUY8Y5Pfe_-mzf6JI4aSkE6gQIgpESg6jtOvyEYh0UooJ10FhQ9gytW9lmXDSW2xRBL1dxEG0VDd61UHkBUJNJydzm6eTBF5Oz1JRUM2ZfR76pnOm5y7nKaD8k9UMdVP6JaXBb0fQ2OpBhHVWcIuyeYUZ0-L_-Md2SoQgGdlRYQFmpLByOrTtugnIFTfu3WxnLSzoSmYYm78L99QOlZD10FwihGXP_4IUjIPaAVbe4MEORDloZiY4syvlcA"
              />
              <img
                className="rounded-xl shadow-lg"
                alt="Espaço lounge"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv4tMOeB-K9pMAlRZuZ2WY-mD3z0LS2oIOA1NQoQm4AruS-AKu34bk4KYhj0QcQ474gmYeBpL8NiGnDdYAvzyPLQqMvmsgAAfhrx2hi70aGzfST-cuRtTlMXSOZMIWh4VgZ7pLVIlmrfTuIVjCziFRrlanR2asmhE6g9lMhx65ax2r2zkSHW5t_nXJxsR_9LA5t2h0yxrwme-m6xDf5hWKY1mcMr_g_8bKDTKX2zA1l5H5ap9YlVegymMY7yx-KIblqm5v_mPKag"
              />
            </div>
            <div className="space-y-4">
              <img
                className="rounded-xl shadow-lg"
                alt="Equipe colaborando"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ0643nC6ttaBbR2WArbTj2F9WCOkanNqCT5WU2dqcpCKFFASKc5szRcUX_iPRcFDLAjar7ZvbpJFwccOPNkwJ5SEPpjE-zjsx59COiwr3n2QUD80ElSFzCeFfBR_XjDOrOsLbMfcTiUoB3gpgHWfP5AhYbNroRxG-j7fc34GaTkWUEnz-gj2ZVEGOySxMwTIboodCg4mky31tPiWDOxTUiswmA0mAYE81bc1UCWP4kILhfHV-ko4V0mlXgydtEV67iErkPqxVqw"
              />
              <img
                className="rounded-xl shadow-lg"
                alt="Corredor elegante"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJOzKRuFadfi3eHNt246b2JpaRGEvpKeAQmPy6d0Z_3QrPyWx0YBkvtvsOBpd9eqYL1Dub43MuRzynOi9F4jRAP5fuymBEUGZaEhBKsGyJPfxygVOxD441dZHCQh3FtAmucazrrO-p2eUJcVyxIz0tOJFrAZWEKqfORPA5ubJ4GY4TAr4odW4TWSgGs8BEsm3EHk9ZT8wnQsBLpeiCFxeDyBpXrpICPBENyGOdU-PLzbe5IZMzwq3cwypOT6JCw66rMjmaCw7GrQ"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
