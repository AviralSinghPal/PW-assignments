import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setDisplayValue(displayValue + value);
  };

  const clearDisplay = () => {
    setDisplayValue('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(displayValue);
      setDisplayValue(calculatedResult);
      setResult(displayValue + ' = ' + calculatedResult);
    } catch (error) {
      setDisplayValue('');
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="result">{result}</div>
        <input type="text" value={displayValue} readOnly />
      </div>
      <div className="keypad">
        <div className="row">
          <button onClick={clearDisplay} className="button light-gray">AC</button>
          <button onClick={() => handleInput('/')} className="button orange">/</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput('7')} className="button">7</button>
          <button onClick={() => handleInput('8')} className="button">8</button>
          <button onClick={() => handleInput('9')} className="button">9</button>
          <button onClick={() => handleInput('*')} className="button orange">*</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput('4')} className="button">4</button>
          <button onClick={() => handleInput('5')} className="button">5</button>
          <button onClick={() => handleInput('6')} className="button">6</button>
          <button onClick={() => handleInput('-')} className="button orange">-</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput('1')} className="button">1</button>
          <button onClick={() => handleInput('2')} className="button">2</button>
          <button onClick={() => handleInput('3')} className="button">3</button>
          <button onClick={() => handleInput('+')} className="button orange">+</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput('0')} className="button double">0</button>
          <button onClick={() => handleInput('.')} className="button">.</button>
          <button onClick={calculateResult} className="button orange">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
