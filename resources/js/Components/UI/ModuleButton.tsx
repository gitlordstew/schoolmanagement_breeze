import React from 'react';

interface ModuleButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const ModuleButton: React.FC<ModuleButtonProps> = ({
    children,
    onClick,
    className = '',
}) => {
    return (
        <button
            onClick={onClick}
            className={`text-blue-600 hover:text-blue-800 text-sm font-semibold hover:translate-x-1 transition-transform duration-200 flex items-center ${className}`}
        >
            {children}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>
    );
};

export default ModuleButton;