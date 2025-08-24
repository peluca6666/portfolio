import React from 'react';
import AnimatedReveal from './ui/AnimatedReveal';

const Experience = () => {
  return (
    <section id="experiencia" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedReveal direction='left'>
        
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Experiencia
            </h2>
            <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="bg-black/75 backdrop-blur-md border border-cyan-400/35 rounded-lg p-10 shadow-xl hover:bg-black/85
           hover:border-cyan-400/55 hover:shadow-cyan-400/10 transition-all duration-300 relative overflow-hidden">
            
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500"></div>
            
            <div className="pl-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Pasantia Backend</h3>
                <p className="text-cyan-400 font-medium text-lg">Litoral Software • Junio 2025 - Presente</p>
              </div>

              <p className="text-white font-medium text-lg leading-relaxed text-justify">
            Pasante full stack, trabajando en el desarrollo de una aplicación web de gestión de turnos con Next.js, Express, TypeScript, Tailwind CSS y MySQL.


               
              </p>
            </div>

          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default Experience;