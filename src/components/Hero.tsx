import React from "react";
import { 
  SiExpress, SiJavascript, SiMysql, SiNextdotjs, 
  SiPrisma, SiReact, SiTailwindcss, SiNodedotjs, SiGit, SiNpm 
} from 'react-icons/si';
import NeonButton from "./ui/NeonButton";
import ScrollDownButton from "./ui/ScrollDown";

const Hero = () => {
  return (
    <main className="relative w-full min-h-screen overflow-hidden flex items-center justify-center py-8 md:py-0">
      <section id="inicio">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            <div className="text-left">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                <span className="text-cyan-400 font-medium tracking-wide text-xs sm:text-sm">
                  DESARROLLADOR FULL STACK
                </span>
              </div>

             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
  <span className="text-white">Hola, soy</span><br />
  <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent animate-pulse">
    Germán
  </span>
</h1>

              <div className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                <p className="mb-3 sm:mb-4">
                  Desarrollo aplicaciones web full stack con JavaScript. Me enfoco en crear soluciones prácticas que resuelvan problemas reales y funcionen de manera eficiente.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 w-full">
                <a href="#proyectos" className="w-full sm:w-auto">
                  <NeonButton variant="primary">Ver proyectos</NeonButton>
                </a>
                <a 
                  href="/Cabrera_German_CV_ES.pdf"
                  download="Cabrera_German_CV_ES.pdf"
                  className="w-full sm:w-auto"
                >
                  <NeonButton variant="secondary">Descargar CV</NeonButton>  
                </a>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-sm sm:text-base">
                <span className="text-green-400 font-medium before:content-['●'] before:text-green-400 before:mr-2 before:animate-pulse">
                  Disponible para proyectos
                </span>
                <span className="text-gray-500 hidden sm:inline">•</span>
                <span className="text-gray-400">Córdoba, Argentina</span>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">

                <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-4 text-gray-400 text-sm">Mi stack</span>
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <div>{`const germanStack = {`}</div>
                    <div className="ml-4">frontend: ['React', 'Next.js', 'Tailwind CSS'],</div>
                    <div className="ml-4">backend: ['Node.js', 'Express'],</div>
                    <div className="ml-4">database: ['MySQL', 'Prisma'],</div>                  
                    <div className="ml-4">focus: 'JavaScript Full Stack',</div>
                    <div className="ml-4">currentProject: 'VeronaJoyas'</div>
                    <div>{`}`}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-white font-medium mb-3">Frontend</h3>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 px-3 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-lg">
                        <SiReact className="text-cyan-400 text-lg" />
                        <span className="text-cyan-400 text-sm font-medium">React</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-gray-700/40 border border-gray-500/30 rounded-lg">
                        <SiNextdotjs className="text-white text-lg" />
                        <span className="text-white text-sm font-medium">Next.js</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-blue-400/20 border border-blue-400/30 rounded-lg">
                        <SiTailwindcss className="text-blue-400 text-lg" />
                        <span className="text-blue-400 text-sm font-medium">Tailwind CSS</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-medium mb-3">Backend</h3>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 px-3 py-2 bg-green-600/20 border border-green-600/30 rounded-lg">
                        <SiNodedotjs className="text-green-500 text-lg" />
                        <span className="text-green-500 text-sm font-medium">Node.js</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-gray-600/20 border border-gray-500/30 rounded-lg">
                        <SiExpress className="text-gray-300 text-lg" />
                        <span className="text-gray-300 text-sm font-medium">Express</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-orange-400/20 border border-orange-400/30 rounded-lg">
                        <SiMysql className="text-orange-400 text-lg" />
                        <span className="text-orange-400 text-sm font-medium">MySQL</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-indigo-400/20 border border-indigo-400/30 rounded-lg">
                        <SiPrisma className="text-indigo-400 text-lg" />
                        <span className="text-indigo-400 text-sm font-medium">Prisma</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-medium mb-3">Herramientas & Core</h3>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 px-3 py-2 bg-yellow-400/20 border border-yellow-400/30 rounded-lg">
                        <SiJavascript className="text-yellow-400 text-lg" />
                        <span className="text-yellow-400 text-sm font-medium">JavaScript ES6+</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-orange-600/20 border border-orange-600/30 rounded-lg">
                        <SiGit className="text-orange-500 text-lg" />
                        <span className="text-orange-500 text-sm font-medium">Git</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-red-600/20 border border-red-600/30 rounded-lg">
                        <SiNpm className="text-red-500 text-lg" />
                        <span className="text-red-500 text-sm font-medium">npm</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          <ScrollDownButton />
        </div>
      </section>
    </main>
  );
};

export default Hero;