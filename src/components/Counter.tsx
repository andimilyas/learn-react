import React from 'react';
import useCounter from '../hooks/useCounter';

const Counter = () => {
    const {count, handleIncrement, handleDecrement, handleReset} = useCounter();
    
    return(
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}> 
            <button onClick={handleDecrement}>-</button>
            <p>{count}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Counter;
