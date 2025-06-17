
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-0 h-auto bg-transparent hover:bg-transparent">
          <div className="flex items-center">
            <img
              src={src}
              alt={alt}
              className={`aspect-[0.91] object-contain w-[152px] shrink-0 max-w-full cursor-pointer ${className}`}
            />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg z-50">
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">
          Dashboard
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">
          Agent Management
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">
          Reports
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">
          Help & Support
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
