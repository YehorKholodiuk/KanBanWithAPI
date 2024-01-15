import React, {useState} from 'react';

const Counter = () => {

    const [state, setState] = useState(1)

    const increment = (dig) => setState(prevState => prevState + dig )

    return (
        <div>
            <button onClick={() => increment(-1)}>-</button>
            {state}
            <button onClick={() => increment(1)}>+</button>
        </div>
    );
};

export default Counter;
