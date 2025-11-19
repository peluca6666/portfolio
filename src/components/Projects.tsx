import React, { useState } from 'react';
import NeonButton from './ui/NeonButton';
import AnimatedReveal from './ui/AnimatedReveal';
import ProjectGallery from './ui/ProjectGallery';
import { FaGithub, FaExternalLinkAlt, FaImages } from "react-icons/fa";
import { SiExpress, SiJavascript, SiMysql, SiNextdotjs, SiPrisma, SiReact, SiTailwindcss, SiTypescript, SiVite } from 'react-icons/si';

const Projects = () => {
  const [galleryState, setGalleryState] = useState({
    isOpen: false,
    images: [] as string[],
    projectName: ''
  });

  const projectImages = {
    verona: [
      '/images/verona-1.PNG',
      '/images/verona-2.PNG',
      '/images/verona-3.PNG',
      '/images/verona-4.PNG',
      '/images/verona-5.PNG',
      '/images/verona-6.PNG',
      '/images/verona-7.PNG',
      '/images/verona-8.PNG'

    ],
    salomarket: [
      '/images/salomarket.PNG',
      '/images/salomarket-2.PNG',
      '/images/salomarket-3.PNG',
      '/images/salomarket-4.PNG',
      '/images/salomarket-5.PNG',
      '/images/salomarket-6.PNG',
      '/images/salomarket-7.PNG'

    ]
  };

  const openGallery = (project: string, projectName: string) => {
    setGalleryState({
      isOpen: true,
      images: projectImages[project as keyof typeof projectImages] || [],
      projectName
    });
  };

  const closeGallery = () => {
    setGalleryState(prev => ({ ...prev, isOpen: false }));
  };

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

          {/* Verona Joyas */}
          <AnimatedReveal direction='left' delay={400}>
            <div className="bg-black/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-10 hover:bg-black/80 hover:border-purple-400/40 transition-all duration-300 group overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-2 relative group/image">
                  <div 
                    className="aspect-video bg-gray-800 rounded-lg overflow-hidden cursor-pointer relative"
                    onClick={() => openGallery('verona', 'Verona Joyas')}
                  >
                    <img 
                      src="/images/verona-1.PNG" 
                      alt="Screenshot de Verona Joyas - Landing page de joyería" 
                      className="w-full object-cover transition-transform duration-700 group-hover/image:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/image:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="text-center text-white transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-300">
                        <FaImages className="text-3xl mx-auto mb-2 text-purple-400" />
                        <span className="font-semibold text-lg">Ver galería</span>
                        <p className="text-sm text-gray-300 mt-1">Haz clic para ver más imágenes</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-purple-600/90 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 backdrop-blur-sm">
                    <FaImages className="text-xs" />
                    {projectImages.verona.length} imágenes
                  </div>
                </div>

                <div className="order-1 lg:order-1 relative pr-4">
                  <div className="absolute right-0 top-0 w-0.5 h-0 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-400 opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(147,51,234,0.6)]"></div>
                  <div className="absolute right-[-1px] top-0 w-1 h-0 bg-purple-400 blur-sm opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-1200 ease-out"></div>

                  <h3 className="text-2xl font-bold text-white mb-4">Verona Joyas</h3>
                  <p className="text-gray-300 text-lg mb-6 ml-5 leading-relaxed text-justify">
                    Catalogo online para una tienda de bijouterie, diseñada para resaltar la elegancia y sofisticación de los productos. Incluye animaciones sutiles, un diseño responsivo y un panel de administración
                    para la gestión de productos.
                    Actualmente en desarrollo, con un enfoque en la experiencia del usuario y la estética visual.
                  </p>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: 'Next.js', icon: <SiNextdotjs className="inline-block mr-1" /> },
                        { name: 'JavaScript', icon: <SiJavascript className="inline-block mr-1" /> },
                        { name: 'TypeScript', icon: <SiTypescript className="inline-block mr-1" /> },
                        { name: 'Tailwind CSS', icon: <SiTailwindcss className="inline-block mr-1" /> },
                        { name: 'MySQL', icon: <SiMysql className="inline-block mr-1" /> },
                        { name: 'Prisma', icon: <SiPrisma className="inline-block mr-1" /> },
                        { name: 'Express', icon: <SiExpress className="inline-block mr-1" /> },
                      ].map((tech) => (
                        <span
                          key={tech.name}
                          className="flex items-center px-4 py-2 bg-gray-800 text-purple-400 text-base rounded-full border border-purple-400/20"
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
                    <a
                      href="https://veronajoyas.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <NeonButton variant="secondary">
                        <div className="flex items-center gap-2">
                          <FaExternalLinkAlt className="text-lg" />
                          Ver live demo
                        </div>
                      </NeonButton>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedReveal>

          {/* SaloMarket */}
          <AnimatedReveal direction='right' delay={200}>
            <div className="bg-black/50 border backdrop-blur-sm border-cyan-400/20 rounded-lg p-10 hover:bg-black/80 hover:border-cyan-400/40 transition-all duration-300 group overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 relative group/image">
                  <div 
                    className="aspect-video bg-gray-800 rounded-lg overflow-hidden cursor-pointer relative"
                    onClick={() => openGallery('salomarket', 'SaloMarket')}
                  >
                    <img 
                      src="/images/salomarket.PNG" 
                      alt="Screenshot de SaloMarket - Plataforma de comercio electrónico" 
                      className="w-full object-cover transition-transform duration-700 group-hover/image:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/image:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="text-center text-white transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-300">
                        <FaImages className="text-3xl mx-auto mb-2 text-cyan-400" />
                        <span className="font-semibold text-lg">Ver galería</span>
                        <p className="text-sm text-gray-300 mt-1">Haz clic para ver más imágenes</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-cyan-600/90 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 backdrop-blur-sm">
                    <FaImages className="text-xs" />
                    {projectImages.salomarket.length} imágenes
                  </div>
                </div>

                <div className="order-1 lg:order-2 relative pl-4">
                  <div className="absolute left-0 top-0 w-0.5 h-0 bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
                  <div className="absolute left-[-1px] top-0 w-1 h-0 bg-cyan-400 blur-sm opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-1200 ease-out"></div>

                  <h3 className="text-2xl font-bold text-white mb-4">SaloMarket</h3>
                  <p className="text-gray-300 text-lg mb-6 mr-5 leading-relaxed text-justify">
                    Plataforma de comercio electrónico completa con carrito de compras, registro de usuarios,
                    gestión de productos y sistema de pagos integrado con Mercado Pago, incluyendo un panel de administración. Desarrollada con
                    React, Express, MySQL y Vite para una experiencia de usuario fluida y rápida.
                  </p>

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
        </div>
      </div>

      <ProjectGallery
        isOpen={galleryState.isOpen}
        images={galleryState.images}
        projectName={galleryState.projectName}
        onClose={closeGallery}
      />
    </section>
  );
};

export default Projects;