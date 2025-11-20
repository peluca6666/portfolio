import React from 'react';
import AnimatedReveal from './ui/AnimatedReveal';

const Experience = () => {
  const experiences = [
    {
      title: "Desarrollador Full Stack",
      company: "Linear.app",
      period: "Octubre 2024 - Noviembre 2025",
      description: "Desarrollé paneles internos y funcionalidades con React y TailwindCSS, integrando APIs REST con Node.js y Express para gestionar usuarios, proyectos y reportes. Participé en code reviews, refactorización de componentes y resolución de incidencias en entornos de staging y producción. Implementé tests unitarios, validaciones de datos y manejo de errores para garantizar estabilidad, consistencia y confiabilidad del sistema."
    },
    {
      title: "Desarrollador Full Stack (Pasantía)",
      company: "Litoral Software",
      period: "Junio 2022 - Enero 2023",
      description: "Desarrollé una aplicación de gestión de turnos con React, Next.js, Express y Prisma, automatizando procesos manuales. Implementé autenticación con JWT, notificaciones automáticas y diseño de API REST con documentación técnica completa. Colaboré en diseño de interfaz de usuario, optimización de flujo de datos y mejora de experiencia de usuario final dentro de un equipo con metodologías ágiles."
    }
  ];

  return (
    <section id="experiencia" className="py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedReveal direction='left'>

          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Experiencia
            </h2>
            <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-black/75 backdrop-blur-md border border-cyan-400/35 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl hover:bg-black/85 hover:border-cyan-400/55 hover:shadow-cyan-400/10 transition-all duration-300 relative overflow-hidden">

                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500"></div>

                <div className="pl-4 sm:pl-6">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-cyan-400 font-medium text-sm sm:text-base md:text-lg">{exp.company} • {exp.period}</p>
                  </div>
                  <p className="text-white font-medium text-sm sm:text-base md:text-lg leading-relaxed text-justify">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default Experience;