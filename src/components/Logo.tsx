import React from 'react';

interface LogoProps {
  src: string;
  alt?: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  src, 
  alt = "AI-DU Logo", 
  className = "" 
}) => {
  return (
    <div className="flex items-center">
      <img
        src={src}
        alt={alt}
        className={`aspect-[0.91] object-contain w-[152px] shrink-0 max-w-full ${className}`}
      />
    </div>
  );
};
