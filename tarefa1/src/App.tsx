import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(prevNum => prevNum + 1)
  }

  function decrement() {
    setCount(prevNum => prevNum - 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>I bet you can't click Add+ 1000 times, then Add- 500 times!!!</p>
        <p>Counter: {count}</p>
        <button className='btn' onClick={increment}>Add+</button>
        <button className='btn' onClick={decrement}>Add-</button>
      </header>
    </div>
  );
}

export default App;
