"use client";

import React, { useEffect } from 'react';

interface AnimatedRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'fade';
}

const AnimatedReveal: React.FC<AnimatedRevealProps> = ({ 
  children, 
  className = '',
  delay = 0,
  direction = 'up'
}) => {
  
  useEffect(() => {
    if (!document.getElementById('animated-reveal-styles')) {
      const style = document.createElement('style');
      style.id = 'animated-reveal-styles';
      style.textContent = `
        @keyframes smoothRevealLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes smoothRevealRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes smoothRevealUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes smoothRevealFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .smooth-reveal-left {
          animation: smoothRevealLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          animation-timeline: view();
          animation-range: entry 0% cover 70%;
          animation-fill-mode: both;
        }
        
        .smooth-reveal-right {
          animation: smoothRevealRight 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          animation-timeline: view();
          animation-range: entry 0% cover 70%;
          animation-fill-mode: both;
        }
        
        .smooth-reveal-up {
          animation: smoothRevealUp 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          animation-timeline: view();
          animation-range: entry 0% cover 30%;
          animation-fill-mode: both;
        }
        
        .smooth-reveal-fade {
          animation: smoothRevealFade 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          animation-timeline: view();
          animation-range: entry 0% cover 30%;
          animation-fill-mode: both;
        }
        
        /* Respeta preferencias de accesibilidad */
        @media (prefers-reduced-motion: reduce) {
          .smooth-reveal-left,
          .smooth-reveal-right,
          .smooth-reveal-up,
          .smooth-reveal-fade {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const getClassName = () => {
    switch (direction) {
      case 'left':
        return 'smooth-reveal-left';
      case 'right':
        return 'smooth-reveal-right';
      case 'up':
        return 'smooth-reveal-up';
      case 'fade':
        return 'smooth-reveal-fade';
      default:
        return 'smooth-reveal-up';
    }
  };

  const style = delay > 0 ? { animationDelay: `${delay}ms` } : {};

  return (
    <div className={`${getClassName()} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default AnimatedReveal;