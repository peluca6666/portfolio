import React from 'react';
import AnimatedReveal from './ui/AnimatedReveal';

const Experience = () => {
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

            <div className="bg-black/75 backdrop-blur-md border border-cyan-400/35 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl hover:bg-black/85 hover:border-cyan-400/55 hover:shadow-cyan-400/10 transition-all duration-300 relative overflow-hidden">

              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500"></div>

              <div className="pl-4 sm:pl-6">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Pasantia Backend</h3>
                  <p className="text-cyan-400 font-medium text-sm sm:text-base md:text-lg">Litoral Software • Junio 2025 - Octubre 2025</p>
                </div>
                <p className="text-white font-medium text-sm sm:text-base md:text-lg leading-relaxed text-justify">
                  En Litoral Software hice mi pasantía como backend, aprendiendo y aplicando React, Next.js, Express y Prisma. Participé en el diseño y desarrollo de una aplicación para agendar turnos, con autenticación JWT y notificaciones por email, y trabajo en la arquitectura cliente-servidor y en APIs REST. Todo esto dentro de un equipo que utiliza metodologías ágiles adaptadas a nuestro flujo de trabajo.
                </p>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export default Experience;