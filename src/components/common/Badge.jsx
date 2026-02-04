import React from 'react';

const colors = {
    blue: 'bg-blue-50 text-blue-700 border-blue-100',
    green: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    purple: 'bg-purple-50 text-purple-700 border-purple-100',
    gray: 'bg-gray-100 text-gray-700 border-gray-200',
};

const Badge = ({ children, color = 'blue', className = '' }) => {
    return (
        <span className={`
      inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border
      ${colors[color] || colors.gray}
      ${className}
    `}>
            {children}
        </span>
    );
};

export default Badge;
