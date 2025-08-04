import React from 'react'

export default function Container({ children, className = "" }) {
    return (
        <div className={`max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-12 xl:px-6 ${className}`}>
            {children}
        </div>
    )
}
