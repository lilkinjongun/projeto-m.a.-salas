import { motion } from 'motion/react';

const spaces = [
  {
    title: 'Suítes Executivas',
    description: 'Privacidade total para liderança.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBUI2ByBPate43mWt8Ag5eyb9hNVqmcA_rl1EaDoXHXPWx2klKN-HbU0S6RzyQQkEQc0962FDS41c6gW7phZfINiCSL5T0LQCK6LVlx0QCfNFUVW2uSisSSSBKK8kFRRiSjUYUt8nIzDXXKkqU6Ya3rMIIrnH92qJRla4jTHgcTk1dukJIdopvgXiLVYh7TLfKikre6tblR7FOXJopETvuDJ-cjoA-1-um1w6APJ6TbJXUvUau5u_ZTkz4gpogNuF6tStN95-_B2A',
  },
  {
    title: 'Salas de Reunião',
    description: 'Equipadas com a melhor tecnologia.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBUuc90pzo_NM6h7p4Dhajc6_9I3KOuRroEk4KdOBJxfHoZMxMzYamuFmgR_xC3upfR3P_XUpoP15Qze6cTAhEylrsljQnR9QYRYT8ADYJwaP8PL3898f-zZX_ZQIrUVuE6OQbrXFz1jxVzn-uqNxz_jCoj-89Zt5gj0T9nw-vNbe-NG26VCkgIqL598aHXal60vKUnaQ5FW4MjLWPSa5v1Ti6aMAhR94g0cfYpW_5dm81bErEdTmvicggnIAozkdMeaZNnWbu6lA',
  },
  {
    title: 'Coworking Premium',
    description: 'Networking em um ambiente inspirador.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9UIMf_9wIZMICNkYajyBSTHvrQtitiu8mSJQxyBhhejA42APN5yx2sidD6D7ZkngDsXRthBwiVEkhmZ3k4AOX7JqRa-qqQOf5PuYfvWHND60gwvSIsMmjqoEhmzEr7ja6kpEffhcTkBUAeJvDcgoVrWDUiu5WlP6dm7Y84IvmmW_jB9XccV-py8RUR3jEzBA14qLxSvi9Tyxj7S-w1fx4F9K-Y_fnRGu2ioH0mZQsPGOBo44oDLHKipRl06ox5BZH8Ik8CGBpMQ',
  },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-background-light" id="espacos">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black text-slate-900 md:text-4xl">
            Nossos Espaços
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-primary"></div>
          <p className="mt-6 text-slate-600">
            Ambientes projetados para elevar o seu potencial profissional.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {spaces.map((space, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-slate-100 shadow-md transition-all hover:-translate-y-2 cursor-pointer"
            >
              <div className="aspect-[4/5] w-full">
                <img
                  alt={space.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={space.image}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">{space.title}</h3>
                <p className="mt-2 text-sm text-slate-200">{space.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
