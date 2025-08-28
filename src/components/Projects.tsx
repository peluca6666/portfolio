import React from 'react';
import NeonButton from './ui/NeonButton';
import AnimatedReveal from './ui/AnimatedReveal';
import { FaGithub } from "react-icons/fa";
import { SiExpress, SiJavascript, SiMysql, SiNextdotjs, SiPrisma, SiReact, SiTailwindcss, SiTypescript, SiVite } from 'react-icons/si';



const Projects = () => {
  return (
    <section id="proyectos" className="pt-20 py-10 px-3 ">
      <div className="max-w-6xl mx-auto">
        <AnimatedReveal direction='right'>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Mis proyectos
            </h2>
            <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          </div>
        </AnimatedReveal>
        <div className="space-y-16">

          {/* Proyecto 1 - Goteo en lado izquierdo del texto */}
          <AnimatedReveal direction='right' delay={200}>

            <div className="bg-black/50 border backdrop-blur-sm border-cyan-400/20 rounded-lg p-10 hover:bg-black/80 hover:border-cyan-400/40 transition-all duration-300 group overflow-hidden">

              {/* Layout horizontal */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Imagen - 50% en desktop */}
                <div className="order-2 lg:order-2">
                  <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                    <img src="images/salomarket.PNG" alt="Screenshot de mi proyecto" className="w-full object-cover transition-transform duration-700 group-hover:scale-103" />
                  </div>
                </div>

                {/* Contenido con goteo en lado derecho*/}
                <div className="order-2 lg:order-2 relative pl-4">
                  {/* Goteo rojo en lado derecho del texto */}
                  <div className="absolute right-0 top-0 w-0.5 h-0 bg-gradient-to-b from-cyan-400 via-pruple-500 to-cyan-400 opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                  {/* Glow sutil */}
                  <div className="absolute right-[-1px] top-0 w-1 h-0 bg-cyan-400 blur-sm opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-1200 ease-out"></div>

                  <h3 className="text-2xl font-bold text-white mb-4">SaloMarket</h3>
                  <p className="text-gray-300 text-lg mb-6 mr-5 leading-relaxed text-justify">
                    Plataforma de comercio electrónico completa con carrito de compras, registro de usuarios,
                    gestión de productos y sistema de pagos integrado con Mercado Pago, incluyendo un panel de administración. Desarrollada con
                    React, Express, MySQL y  Vite para una experiencia de usuario fluida y rápida.
                  </p>

                  {/* Tecnologías */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: 'JavaScript', icon: <SiJavascript className="inline-block mr-1" /> },
                        { name: 'React', icon: <SiReact className="inline-block mr-1" /> },
                        { name: 'Express', icon: <SiExpress className="inline-block mr-1" /> },
                        { name: 'Vite', icon: <SiVite className="inline-block mr-1" /> },
                        { name: 'MySQL', icon: <SiMysql className="inline-block mr-1" /> },
                      ].map((tech) => (
                        <span
                          key={tech.name}
                          className="flex items-center px-4 py-2 bg-gray-800 text-cyan-400 text-base rounded-full border border-cyan-400/20"
                        >
                          {React.cloneElement(tech.icon, { className: "mr-2 text-xl" })}
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="https://github.com/peluca6666/ecommerce"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <NeonButton variant="primary">
                        <div className="flex items-center gap-2">
                          <FaGithub className="text-lg" />
                          Ver en GitHub
                        </div>
                      </NeonButton>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </AnimatedReveal>

          {/* Proyecto 2 - Goteo en lado derecho del texto */}
          <AnimatedReveal direction='left' delay={400}>
            <div className="bg-black/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-10 hover:bg-black/80 hover:border-purple-400/40 transition-all duration-300 group overflow-hidden">

              {/* Layout horizontal alternado */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Contenido con goteo en lado derecho */}
                <div className="order-1 lg:order-1 relative pl-4">
                  {/* Goteo naranja en lado derecho del texto */}
                  <div className="absolute left-0 top-0 w-0.5 h-0 bg-gradient-to-b from-purple-400 via-pruple to-purple-400 opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                  <div className="absolute left-[-1px] top-0 w-1 h-0 bg-orange-500/20 blur-sm opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-1200 ease-out"></div>
                  <h3 className="text-2xl font-bold text-white mb-4">Verona Joyas</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed text-justify ">
                    Landing page para una tienda de joyería, diseñada para resaltar la elegancia y sofisticación de los productos. Incluye animaciones sutiles, un diseño responsivo y un panel de administración
                    para la gestión de productos.
                    Actualmente en desarrollo, con un enfoque en la experiencia del usuario y la estética visual.
                  </p>

                  {/* Tecnologías */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: 'Next.js', icon: <SiNextdotjs /> },
                        { name: 'JavaScript', icon: <SiJavascript /> },
                        { name: 'TypeScript', icon: <SiTypescript /> },
                        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
                        { name: 'MySQL', icon: <SiMysql /> },
                        { name: 'Prisma', icon: <SiPrisma /> },
                        { name: 'Express', icon: <SiExpress /> },
                      ].map((tech) => (
                        <span
                          key={tech.name}
                          className="flex items-center px-2 py-1 bg-gray-800 text-purple-400 text-base rounded-full border border-purple-400/20"
                        >
                          {React.cloneElement(tech.icon, { className: "mr-2 text-xl" })}
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <NeonButton variant="secondary">
                        <div className="flex items-center gap-2">
                          <FaGithub className="text-lg" />
                          Ver en GitHub
                        </div>
                      </NeonButton>
                    </a>
                  </div>

                </div>

                {/* Imagen - Segunda columna en desktop */}
                  {/* Imagen - 50% en desktop */}
                <div className="order-2 lg:order-2">
                  <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                    <img src="images/verona.PNG" alt="Screenshot de mi proyecto" className="w-full object-cover transition-transform duration-700 group-hover:scale-103" />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
};

export default Projects;