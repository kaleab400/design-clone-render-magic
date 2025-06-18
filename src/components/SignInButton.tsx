
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

const signInSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type SignInFormData = z.infer<typeof signInSchema>;

interface SignInButtonProps {
  iconSrc: string;
  className?: string;
}

export const SignInButton: React.FC<SignInButtonProps> = ({ 
  iconSrc, 
  className = "" 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login, logout, user, isAuthenticated } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInFormData) => {
    setIsLoading(true);
    try {
      const success = await login(data.email, data.password);
      if (success) {
        toast({
          title: "Success",
          description: "You have been signed in successfully.",
        });
        setIsOpen(false);
        reset();
      } else {
        toast({
          title: "Error",
          description: "Invalid email or password.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Sign in error:', error);
      toast({
        title: "Error",
        description: "An error occurred during sign in.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Signed out",
      description: "You have been signed out successfully.",
    });
  };

  if (isAuthenticated && user) {
    return (
      <Button
        onClick={handleLogout}
        className={`bg-red-600 hover:bg-red-700 text-white text-[45px] font-normal px-[18px] py-3 h-auto flex items-center gap-[17px] max-md:text-[40px] whitespace-nowrap overflow-hidden ${className}`}
        size="lg"
      >
        <span className="basis-auto max-md:text-[40px] truncate">
          Sign Out ({user.name.split(' ')[0]})
        </span>
      </Button>
    );
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            className={`bg-[#098BD1] hover:bg-[#0776b8] text-white text-[45px] font-normal px-[18px] py-3 h-auto flex items-center gap-[17px] max-md:text-[40px] ${className}`}
            size="lg"
          >
            <img
              src={iconSrc}
              alt="Sign in icon"
              className="aspect-[1.05] object-contain w-[61px] shrink-0"
            />
            <span className="basis-auto max-md:text-[40px]">Sign In</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Sign In to AI-DU Agent Portal</DialogTitle>
            <DialogDescription>
              Enter your credentials to access your agent dashboard.
              <br /><br />
              <strong>Demo accounts:</strong><br />
              User: user@example.com / password123<br />
              Admin: admin@example.com / admin123<br />
              Super Admin: superadmin@example.com / super123
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register('email')}
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && (
                <p className="text-sm text-red-600" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register('password')}
                aria-invalid={errors.password ? 'true' : 'false'}
              />
              {errors.password && (
                <p className="text-sm text-red-600" role="alert">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex justify-end space-x-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-[#098BD1] hover:bg-[#0776b8]"
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
