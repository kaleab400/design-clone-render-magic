
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Home, BarChart3, Briefcase, LogOut, Plus, Edit, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

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
  const { user, logout } = useAuth();

  const handleAgentsClick = () => {
    navigate('/agents');
  };

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleAddAgents = () => {
    console.log('Add agents functionality');
    // TODO: Implement add agents functionality
  };

  const handleModifyAgents = () => {
    console.log('Modify agents functionality');
    // TODO: Implement modify agents functionality
  };

  const handleDeleteAgents = () => {
    console.log('Delete agents functionality');
    // TODO: Implement delete agents functionality
  };

  const canAddModify = user?.role === 'admin' || user?.role === 'superadmin';
  const canDelete = user?.role === 'superadmin';

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
      <DropdownMenuContent 
        className="w-48 bg-black border border-gray-700 shadow-lg z-50 p-2 min-h-[calc(100vh-120px)]"
        align="start"
        side="bottom"
        sideOffset={5}
      >
        <DropdownMenuItem 
          className="cursor-pointer hover:bg-gray-800 text-white p-3 rounded-md mb-2 flex items-center gap-3"
          onClick={handleHomeClick}
        >
          <Home className="w-5 h-5" />
          <span className="text-base">Home</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="cursor-pointer hover:bg-gray-800 text-white p-3 rounded-md mb-2 flex items-center gap-3"
          onClick={handleDashboardClick}
        >
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
        
        {canAddModify && (
          <>
            <DropdownMenuSeparator className="bg-gray-600" />
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-gray-800 text-white p-3 rounded-md mb-2 flex items-center gap-3"
              onClick={handleAddAgents}
            >
              <Plus className="w-5 h-5" />
              <span className="text-base">Add Agents</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-gray-800 text-white p-3 rounded-md mb-2 flex items-center gap-3"
              onClick={handleModifyAgents}
            >
              <Edit className="w-5 h-5" />
              <span className="text-base">Modify Agents</span>
            </DropdownMenuItem>
          </>
        )}
        
        {canDelete && (
          <DropdownMenuItem 
            className="cursor-pointer hover:bg-gray-800 text-white p-3 rounded-md mb-2 flex items-center gap-3 hover:bg-red-800"
            onClick={handleDeleteAgents}
          >
            <Trash2 className="w-5 h-5" />
            <span className="text-base">Delete Agents</span>
          </DropdownMenuItem>
        )}
        
        {user && (
          <>
            <DropdownMenuSeparator className="bg-gray-600" />
            <DropdownMenuItem 
              className="cursor-pointer hover:bg-gray-800 text-white p-3 rounded-md flex items-center gap-3"
              onClick={handleLogout}
            >
              <LogOut className="w-5 h-5" />
              <span className="text-base">Sign Out</span>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
