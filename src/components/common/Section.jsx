import React from 'react';

const Section = ({
    children,
    id,
    title,
    subtitle,
    className = '',
    centered = false
}) => {
    return (
        <section id={id} className={`py-16 md:py-24 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {(title || subtitle) && (
                    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
                        {title && (
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                {subtitle}
                            </p>
                        )}
                        <div className={`mt-4 h-1 w-20 bg-blue-600 rounded-full ${centered ? 'mx-auto' : ''}`} />
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
