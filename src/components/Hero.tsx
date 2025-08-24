import React from "react";
import { 
  SiExpress, SiJavascript, SiMysql, SiNextdotjs, 
  SiPrisma, SiReact, SiTailwindcss, SiTypescript, SiNodedotjs 
} from 'react-icons/si';
import NeonButton from "./ui/NeonButton";
import ScrollDownButton from "./ui/ScrollDown";

const Hero = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden flex items-center justify-center">
    
        <div className="w-full max-w-6xl mx-auto px-8">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Columna izquierda */}
            <div className="text-left">
              
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                <span className="text-cyan-400 font-medium tracking-wide">
                  DESARROLLADOR FULL STACK JR
                </span>
              </div>
              
              {/* Título principal */}
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                <span className="text-white">Hola, soy</span><br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Germán Cabrera
                </span>
              </h1>
              
              {/* Descripción más humana */}
              <div className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                <p className="mb-4">
                  Me gusta <span className="text-cyan-400 font-semibold">resolver problemas con código y crear cosas que funcionen bien</span>.
                  Aprendo cada día mientras desarrollo proyectos reales.
                </p>     
              </div>
              
              {/* Botones */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full">
                <a href="#proyectos" className="w-full sm:w-auto">
                  <NeonButton variant="primary">
                    Ver proyectos
                  </NeonButton>
                </a>
                <div className="w-full sm:w-auto">
                  <NeonButton variant="secondary">
                    Descargar CV
                  </NeonButton>
                </div>
              </div>
              
              {/* Estado actual */}
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-medium before:content-['●'] before:text-green-400 before:mr-2 before:animate-pulse">
                  Disponible para proyectos
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400">Córdoba, Argentina</span>
              </div>
            </div>
            
            {/* Columna derecha - Stack */}
            <div className="hidden lg:block">
              <div className="relative">
                
                {/* Card de código más humano */}
                <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-4 text-gray-400 text-sm">stack.js</span>
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <div><span className="text-purple-400">const</span> <span className="text-cyan-400">germanStack</span> = {`{`}</div>
                    <div className="ml-4"><span className="text-green-400">frontend</span>: [<span className="text-yellow-400">'React'</span>, <span className="text-yellow-400">'Next.js'</span>],</div>
                    <div className="ml-4"><span className="text-green-400">backend</span>: [<span className="text-yellow-400">'Node.js'</span>, <span className="text-yellow-400">'Express'</span>],</div>
                    <div className="ml-4"><span className="text-green-400">database</span>: [<span className="text-yellow-400">'MySQL'</span>, <span className="text-yellow-400">'Prisma'</span>],</div>
                    <div className="ml-4"><span className="text-green-400">currentProject</span>: <span className="text-yellow-400">'VeronaJoyas'</span></div>
                    <div>{`}`}</div>
                  </div>
                </div>
                
                {/* Tecnologías con colores más suaves */}
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
                        <span className="text-blue-400 text-sm font-medium">Tailwind</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-medium mb-3">Backend & Database</h3>
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
                    <h3 className="text-white font-medium mb-3">Languages</h3>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 px-3 py-2 bg-yellow-400/20 border border-yellow-400/30 rounded-lg">
                        <SiJavascript className="text-yellow-400 text-lg" />
                        <span className="text-yellow-400 text-sm font-medium">JavaScript</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-blue-600/20 border border-blue-600/30 rounded-lg">
                        <SiTypescript className="text-blue-500 text-lg" />
                        <span className="text-blue-500 text-sm font-medium">TypeScript</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
     
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ScrollDownButton />
      </div>
    </main>
  );
};

export default Hero;