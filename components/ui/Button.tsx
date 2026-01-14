import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "border-transparent text-white bg-brand-primary hover:bg-brand-primaryHover focus:ring-brand-primary shadow-sm hover:shadow-md",
    outline: "border-brand-primary text-brand-primary bg-transparent hover:bg-blue-50 focus:ring-brand-primary",
    white: "border-transparent text-brand-primary bg-white hover:bg-gray-50 focus:ring-white shadow-sm hover:shadow-md",
    ghost: "border-transparent text-white bg-transparent hover:bg-white/10 focus:ring-white",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};