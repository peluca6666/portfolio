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
  Soy Germán, desarrollador Full Stack de Argentina con experiencia trabajando en proyectos reales con <strong>React</strong>, <strong>Node.js</strong>, <strong>TypeScript</strong> y <strong>MySQL</strong>. Me gusta combinar desarrollo frontend y backend con buenas prácticas de seguridad y eficiencia, creando soluciones completas y escalables.
</p>

<p className="text-white font-medium text-left md:text-justify leading-relaxed text-lg">
  Me motiva resolver problemas reales con tecnología y generar impacto tangible. En cada proyecto busco equilibrar la experiencia del usuario con la eficiencia del sistema, priorizando siempre soluciones mantenibles y de calidad. Actualmente busco oportunidades donde pueda seguir creciendo, aportando valor desde mi experiencia previa en entornos profesionales y remotos.
</p>

          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default AboutMe;