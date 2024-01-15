import React from 'react';
import cl from './MyButton.module.css'

const MyButton = ({children, onClick, disabled}) => {
    return (
        <button
            disabled={disabled}
            className={cl.myButton}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default MyButton;
