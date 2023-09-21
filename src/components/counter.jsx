import React, { useState } from 'react';
import '../styles/counter.css';

function Counter() {
  const [addCount, setAddCount] = useState(1);
  const [minusCount, setMinusCount] = useState(1);
  const [doubleCount, setDoubleCount] = useState(1);

  const handleAdd = () => {
    setAddCount((current) => current + 1);
  };

  const handleMinus = () => {
    setMinusCount((current) => current - 1);
  };

  const handleDouble = () => {
    setDoubleCount((current) => current * 2);
  };

  return (
    <div className="counter">
      <div className="counter-type">
        <h1>{addCount}</h1>
        <button onClick={handleAdd}>ADD</button>
      </div>
      <div className="counter-type">
        <h1>{minusCount}</h1>
        <button onClick={handleMinus}>MINUS</button>
      </div>
      <div className="counter-type">
        <h1>{doubleCount}</h1>
        <button onClick={handleDouble}>DOUBLE</button>
      </div>
    </div>
  );
}

export default Counter;
