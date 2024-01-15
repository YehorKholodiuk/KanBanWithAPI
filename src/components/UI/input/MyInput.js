import React from 'react';
import cl from './MyInput.module.css';

const MyInput = React.forwardRef((props, ref) => {

    return (
        <input
            className={cl.myInput}
            ref={ref}
            {...props}
        />
    );
});

export default MyInput;
