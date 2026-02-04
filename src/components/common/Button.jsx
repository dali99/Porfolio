import React from 'react';
import { motion } from 'framer-motion';

const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20',
    secondary: 'bg-white text-gray-800 border border-gray-200 hover:bg-gray-50',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'text-gray-600 hover:text-blue-600 hover:bg-blue-50',
};

const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
};

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    ...props
}) => {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
        inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
