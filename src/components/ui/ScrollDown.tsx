"use client";
import React, { useState, useEffect } from 'react';

interface ScrollDownButtonProps {
  className?: string;
  scrollThreshold?: number;
}

const ScrollDownButton: React.FC<ScrollDownButtonProps> = ({
  className = '',
  scrollThreshold = 100
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold]);

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={handleClick}
      className={`
        fixed bottom-8 left-1/2 -translate-x-1/2 z-50
        w-12 h-12 rounded-full
        bg-slate-900/80 backdrop-blur-md border border-slate-600/50
        text-slate-300 hover:text-blue-300 hover:border-blue-400/70
        hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:scale-105
        flex items-center justify-center cursor-pointer
        transition-all duration-300 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
        ${className}
      `}
      aria-label="Scroll down"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </button>
  );
};

export default ScrollDownButton;