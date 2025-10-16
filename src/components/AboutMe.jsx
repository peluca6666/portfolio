import React from 'react';
import AnimatedReveal from './ui/AnimatedReveal';

const AboutMe = () => {
  return (
    <section id="sobre-mi" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedReveal direction='right'>
        
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Sobre mí
            </h2>
            <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="bg-black/75 backdrop-blur-md border border-cyan-400/30 rounded-lg p-10 shadow-xl hover:bg-black/85 hover:border-cyan-400/50 transition-all duration-300 group overflow-hidden">
            <p className="text-white font-medium mb-6 text-left md:text-justify leading-relaxed text-lg">
              Soy Germán, desarrollador de Argentina y recién graduado de mi tecnicatura en programación. Me gusta trabajar con React, Node.js y MySQL, y siempre busco
              combinar el desarrollo con seguridad informática y comercio digital, para crear soluciones que sean completas y útiles en la práctica.
            </p>

            <p className="text-white font-medium text-left md:text-justify leading-relaxed text-lg">
              Me motiva resolver problemas reales con tecnología. En cada proyecto busco equilibrar la experiencia 
              del usuario con el impacto en el negocio, siempre priorizando soluciones escalables y útiles. 
              Hoy estoy buscando mi primera oportunidad profesional, donde pueda aplicar mis conocimientos,
              crecer en un equipo y aportar valor desde el primer día.
            </p>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default AboutMe;