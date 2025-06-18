
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Home, BarChart3, Briefcase, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleAgentsClick = () => {
    navigate('/agents');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

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
      <DropdownMenuContent className="w-48 bg-black border border-gray-700 shadow-lg z-50 p-2">
        <DropdownMenuItem 
          className="cursor-pointer hover:bg-gray-800 text-white p-3 rounded-md mb-2 flex items-center gap-3"
          onClick={handleHomeClick}
        >
          <Home className="w-5 h-5" />
          <span className="text-base">Home</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-800 text-white p-3 rounded-md mb-2 flex items-center gap-3">
          <BarChart3 className="w-5 h-5" />
          <span className="text-base">Dashboard</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="cursor-pointer hover:bg-gray-800 text-white p-3 rounded-md mb-2 flex items-center gap-3"
          onClick={handleAgentsClick}
        >
          <Briefcase className="w-5 h-5" />
          <span className="text-base">Agents</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:bg-gray-800 text-white p-3 rounded-md flex items-center gap-3">
          <LogOut className="w-5 h-5" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
