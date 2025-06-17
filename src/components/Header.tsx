import React from 'react';
import { Logo } from './Logo';
import { SignInButton } from './SignInButton';

interface HeaderProps {
  logoSrc: string;
  signInIconSrc: string;
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  logoSrc, 
  signInIconSrc, 
  title = "AI-DU Agent Portal" 
}) => {
  return (
    <header 
      className="bg-[#1B1A1A] w-full pr-[31px] py-[5px] max-md:max-w-full max-md:pr-5"
      role="banner"
    >
      <nav className="gap-5 flex max-md:flex-col max-md:items-stretch" role="navigation">
        <div className="w-[16%] max-md:w-full max-md:ml-0 flex items-center">
          <Logo 
            src={logoSrc} 
            alt="AI-DU Agent Portal Logo"
            className="max-md:mt-10" 
          />
        </div>
        
        <div className="w-[56%] ml-5 max-md:w-full max-md:ml-0 flex items-center">
          <h1 className="text-white text-6xl font-normal self-stretch my-auto max-md:max-w-full max-md:text-[40px] max-md:mt-10">
            {title}
          </h1>
        </div>
        
        <div className="w-[28%] ml-5 max-md:w-full max-md:ml-0 flex items-center">
          <div className="mt-[25px] max-md:mt-10 w-full">
            <SignInButton 
              iconSrc={signInIconSrc}
              className="w-full"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};
