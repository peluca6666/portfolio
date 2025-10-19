import React from 'react';
import AnimatedReveal from './ui/AnimatedReveal';

const Experience = () => {
  return (
    <section id="experiencia" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Experiencia
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </div>

        <AnimatedReveal direction="right">
          <div className="bg-black/75 backdrop-blur-md border border-cyan-400/35 rounded-lg p-10 shadow-xl hover:bg-black/85
            hover:border-cyan-400/55 hover:shadow-cyan-400/10 transition-all duration-300 relative overflow-hidden">
            
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500"></div>
            
            <div className="pl-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Desarrollador Full Stack</h3>
                <p className="text-cyan-400 font-medium text-lg">Linear.app • Feb 2023 - Actualidad</p>
              </div>

              <ul className="list-disc list-inside text-white font-medium text-lg leading-relaxed">
                <li>Desarrollé dashboards internos y funcionalidades usando React y TailwindCSS, integrando APIs con Node.js y Express para gestionar datos de usuarios, proyectos y reportes.</li>
                <li>Participé en revisiones de código, refactorización de componentes y sprints ágiles, resolviendo errores y ajustando flujos según el feedback de QA y product managers.</li>
                <li>Implementé tests unitarios, validaciones de datos y documentación de funcionalidades.</li>
                <li>Desarrollé módulos internos como gestión de usuarios con roles, flujos de notificaciones y páginas de reportes, mejorando la eficiencia y consistencia del producto.</li>
              </ul>
            </div>
          </div>
        </AnimatedReveal>

        <AnimatedReveal direction="left">
          <div className="bg-black/75 backdrop-blur-md border border-cyan-400/35 rounded-lg p-10 shadow-xl hover:bg-black/85
            hover:border-cyan-400/55 hover:shadow-cyan-400/10 transition-all duration-300 relative overflow-hidden mt-10">
            
            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500"></div>
            
            <div className="pl-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Desarrollador Full Stack (Pasantía)</h3>
                <p className="text-cyan-400 font-medium text-lg">Litoral Software • Jun 2022 - Ene 2023</p>
              </div>

              <ul className="list-disc list-inside text-white font-medium text-lg leading-relaxed">
                <li>Desarrollé una aplicación de gestión de turnos usando React, Next.js, Express, Prisma y TailwindCSS, automatizando procesos manuales del cliente.</li>
                <li>Implementé autenticación con JWT y notificaciones automáticas; participé en la definición y documentación de la API REST.</li>
                <li>Colaboré en el diseño de UI/UX y ajustes del flujo de datos para mejorar la usabilidad y eficiencia del producto.</li>
                <li>Escribí tests unitarios y validaciones de datos para asegurar el correcto funcionamiento y prevenir errores.</li>
              </ul>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default Experience;
