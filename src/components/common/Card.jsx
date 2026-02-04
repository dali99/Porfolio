import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hoverEffect = true, ...props }) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5 } : {}}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`
        bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden
        ${hoverEffect ? 'hover:shadow-md hover:border-gray-200' : ''}
        transition-shadow duration-300
        ${className}
      `}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
