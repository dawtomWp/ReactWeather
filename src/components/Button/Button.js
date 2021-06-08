import React from 'react';

const Button = ({className, click,children,type, purpose}) =>  (
        <button
        className={className}
        onClick={click}
        type={type}
        purpose={purpose}
        >
        {children}
        </button>
    )

export default Button
