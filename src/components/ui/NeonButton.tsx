import React from 'react';

interface NeonButtonProps {
 children: React.ReactNode;
 variant: 'primary' | 'secondary' | 'tertiary';
 onClick?: () => void;
}

const NeonButton = ({ children, variant, onClick }: NeonButtonProps) => {
 const baseStyles = "px-6 py-3 font-medium rounded-lg transition-all duration-300 ease-in-out";
 
 const variantStyles = {
   primary: `
     text-cyan-400 border-2 border-cyan-400 bg-transparent
     transition-all duration-300 ease-in-out
     hover:text-white hover:border-cyan-300
     shadow-[0_0_5px_rgba(34,211,238,0.3)]
     hover:shadow-[0_0_5px_rgba(34,211,238,0.5),0_0_20px_rgba(34,211,238,0.4),0_0_40px_rgba(34,211,238,0.2)]
   `,
   secondary: `
     text-purple-400 border-2 border-purple-400 bg-transparent
     transition-all duration-300 ease-in-out
     hover:text-white hover:border-purple-300
     shadow-[0_0_5px_rgba(168,85,247,0.3)]
     hover:shadow-[0_0_5px_rgba(168,85,247,0.5),0_0_20px_rgba(168,85,247,0.4),0_0_40px_rgba(168,85,247,0.2)]
   `,
   tertiary: `
     text-pink-400 border-2 border-pink-400 bg-transparent
     transition-all duration-300 ease-in-out
     hover:text-white hover:border-pink-300
     shadow-[0_0_5px_rgba(236,72,153,0.3)]
     hover:shadow-[0_0_5px_rgba(236,72,153,0.5),0_0_20px_rgba(236,72,153,0.4),0_0_40px_rgba(236,72,153,0.2)]
   `
 };

 return (
   <button 
     className={`${baseStyles} ${variantStyles[variant]}`}
     onClick={onClick}
   >
     {children}
   </button>
 );
};

export default NeonButton;