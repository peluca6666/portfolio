import React from "react";
import AnimatedReveal from "./ui/AnimatedReveal";

const Studies = () => {
    return (
        <section id="estudios" className="py-12 md:py-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <AnimatedReveal direction='right'>

                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                            Educación
                        </h2>
                        <div className="w-16 h-1 bg-cyan-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="bg-black/75 backdrop-blur-md border border-cyan-400/35 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl hover:bg-black/85 hover:border-cyan-400/55 hover:shadow-cyan-400/10 transition-all duration-300 relative overflow-hidden">

                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500"></div>

                        <div className="pl-4 sm:pl-6">
                            <div className="mb-3 sm:mb-5">
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">- Tecnico Universitario en Desarrollo de Aplicaciones Informáticas</h3>
                                <p className="text-cyan-400 font-medium text-sm sm:text-base md:text-lg">Instituto Universitario Aeronáutico - 2022 / 2025</p>
                            </div>

                            <p className="text-white font-medium text-sm sm:text-base md:text-lg leading-relaxed text-justify">
                                Graduado de la Tecnicatura en Programación en el Instituto Universitario Aeronáutico (IUA).
                            </p>
                        </div>

                        <div className="pl-4 sm:pl-6">
                            <div className="mb-4 sm:mb-6 mt-8 sm:mt-12">
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">- Scientific Computing with Python</h3>
                                <p className="text-cyan-400 font-medium text-sm sm:text-base md:text-lg">FreeCodeCamp - 2025 / Actualidad</p>
                            </div>

                            <p className="text-white font-medium text-sm sm:text-base md:text-lg leading-relaxed text-justify">
                                Actualmente me estoy formando en Python, enfocándome en estructuras de datos, algoritmos y programación orientada a objetos. El curso también aborda técnicas de análisis y manipulación de datos, permitiéndome resolver problemas reales con un enfoque práctico y basado en computación científica.
                            </p>
                        </div>

                    </div>
                </AnimatedReveal>
            </div>
        </section>
    );
}
export default Studies;