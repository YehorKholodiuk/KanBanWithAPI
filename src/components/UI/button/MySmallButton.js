import React from 'react';
import cl from './MyButton.module.css'

const MySmallButton = ({children, onClick, disabled}) => {
    return (
        <button
            disabled={disabled}
            className={cl.mySmallButton}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default MySmallButton;
