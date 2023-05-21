import React from 'react';
const Button = ({children, handleClick, buttonType, buttonClass}) => {
    return (
        <button
            className={buttonClass}
            type={buttonType}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};



export default Button;