import React from 'react';
import { Link } from '@inertiajs/react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    className = '',
    type = 'button',
    disabled = false,
}) => {
    const baseClasses = 'font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 rounded-xl inline-flex items-center justify-center';
    
    const variantClasses = {
        primary: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white',
        secondary: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-md hover:shadow-lg',
        outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
        ghost: 'text-blue-700 hover:text-blue-900 hover:bg-blue-50',
    };
    
    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-10 py-4 text-lg',
    };
    
    const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    
    if (href) {
        return (
            <Link href={href} className={buttonClasses}>
                {children}
            </Link>
        );
    }
    
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${buttonClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            {children}
        </button>
    );
};

export default Button;