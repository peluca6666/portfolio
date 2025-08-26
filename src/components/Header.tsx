"use client";

import React, { useState, useEffect } from "react";
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolleando hacia abajo - ocultar
                setIsVisible(false);
            } else {
                // Scrolleando hacia arriba - mostrar
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={`
                fixed top-0 w-full z-20 py-4 
                transition-all duration-300 ease-in-out
                flex justify-center md:justify-end 
                px-2 sm:px-4 md:pr-8 lg:pr-16 xl:pr-32 2xl:pr-48
                ${isVisible
                    ? 'translate-y-0 bg-black/20 backdrop-blur-md border-b border-white/10'
                    : '-translate-y-full bg-transparent backdrop-blur-none'
                }
            `}
        >
            {/* Navegación y redes sociales */}
            <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
                {/* Navegación */}
                <nav>
                    <ul className="flex space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-12">
                        <li>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="relative group text-white transition-colors duration-300 ease-in-out text-xs md:text-sm lg:text-base"
                            >
                                INICIO
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#proyectos"
                                className="relative group text-white transition-colors duration-300 ease-in-out text-xs md:text-sm lg:text-base"
                            >
                                PROYECTOS
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="#sobre-mi"
                                className="relative group text-white transition-colors duration-300 ease-in-out text-xs md:text-sm lg:text-base"
                            >
                                SOBRE MI
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contacto"
                                className="relative group text-white transition-colors duration-300 ease-in-out text-xs md:text-sm lg:text-base"
                            >
                                CONTACTO
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Separador */}
                <div className="w-px h-5 bg-white/30 hidden md:block"></div>

                {/* Redes sociales - a la derecha */}
                <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                    <a
                        href="https://github.com/peluca6666"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group text-white/80 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                        aria-label="GitHub"
                    >
                        <FiGithub className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/germán-eduardo-cabrera-628827217"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group text-white/80 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                        aria-label="LinkedIn"
                    >
                        <FiLinkedin className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;