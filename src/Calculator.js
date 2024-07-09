import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [previousInput, setPreviousInput] = useState('');
  const [operator, setOperator] = useState('');

  const handleButtonClick = (value) => {
    if (isNaN(value) && value !== '.') {
      handleOperator(value);
    } else {
      setInput(input + value);
    }
  };

  const handleOperator = (value) => {
    switch (value) {
      case 'C':
        setInput('');
        setPreviousInput('');
        setOperator('');
        break;
      case '±':
        setInput((parseFloat(input) * -1).toString());
        break;
      case '%':
        setInput((parseFloat(input) / 100).toString());
        break;
      case '÷':
      case '×':
      case '-':
      case '+':
        setPreviousInput(input);
        setInput('');
        setOperator(value);
        break;
      case '=':
        if (previousInput && input) {
          const result = calculate(previousInput, input, operator);
          setInput(result);
          setPreviousInput('');
          setOperator('');
        }
        break;
      case 'x²':
        setInput(Math.pow(parseFloat(input), 2).toString());
        break;
      case 'x³':
        setInput(Math.pow(parseFloat(input), 3).toString());
        break;
      case '√x':
        setInput(Math.sqrt(parseFloat(input)).toString());
        break;
      case '³√x':
        setInput(Math.cbrt(parseFloat(input)).toString());
        break;
      case 'log₁₀':
        setInput(Math.log10(parseFloat(input)).toString());
        break;
      case 'ln':
        setInput(Math.log(parseFloat(input)).toString());
        break;
      case 'sin':
        setInput(Math.sin(parseFloat(input)).toString());
        break;
      case 'cos':
        setInput(Math.cos(parseFloat(input)).toString());
        break;
      case 'tan':
        setInput(Math.tan(parseFloat(input)).toString());
        break;
      case 'π':
        setInput((Math.PI).toString());
        break;
      case 'e':
        setInput((Math.E).toString());
        break;
      default:
        break;
    }
  };

  const calculate = (a, b, operator) => {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    switch (operator) {
      case '÷':
        return (num1 / num2).toString();
      case '×':
        return (num1 * num2).toString();
      case '-':
        return (num1 - num2).toString();
      case '+':
        return (num1 + num2).toString();
      default:
        return '';
    }
  };

  const renderButton = (value, className = '') => (
    <button className={className} onClick={() => handleButtonClick(value)}>
      {value}
    </button>
  );

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <div className="numbers-basic-buttons">
          {renderButton('7', 'number')}
          {renderButton('8', 'number')}
          {renderButton('9', 'number')}
          {renderButton('÷', 'function')}
          {renderButton('4', 'number')}
          {renderButton('5', 'number')}
          {renderButton('6', 'number')}
          {renderButton('×', 'function')}
          {renderButton('1', 'number')}
          {renderButton('2', 'number')}
          {renderButton('3', 'number')}
          {renderButton('-', 'function')}
          {renderButton('0', 'number zero')}
          {renderButton('.', 'number')}
          {renderButton('=', 'function')}
          {renderButton('+', 'function')}
          {renderButton('C', 'function')}
          {renderButton('±', 'function')}
          {renderButton('%', 'function')}
        </div>
        <div className="scientific-buttons">
          {renderButton('(', 'function')}
          {renderButton(')', 'function')}
          {renderButton('mc', 'function')}
          {renderButton('m+', 'function')}
          {renderButton('m-', 'function')}
          {renderButton('mr', 'function')}
          {renderButton('2nd', 'function')}
          {renderButton('x²', 'function')}
          {renderButton('x³', 'function')}
          {renderButton('xʸ', 'function')}
          {renderButton('eˣ', 'function')}
          {renderButton('10ˣ', 'function')}
          {renderButton('1/x', 'function')}
          {renderButton('√x', 'function')}
          {renderButton('³√x', 'function')}
          {renderButton('ʸ√x', 'function')}
          {renderButton('ln', 'function')}
          {renderButton('log₁₀', 'function')}
          {renderButton('x!', 'function')}
          {renderButton('sin', 'function')}
          {renderButton('cos', 'function')}
          {renderButton('tan', 'function')}
          {renderButton('e', 'function')}
          {renderButton('EE', 'function')}
          {renderButton('Rad', 'function')}
          {renderButton('sinh', 'function')}
          {renderButton('cosh', 'function')}
          {renderButton('tanh', 'function')}
          {renderButton('π', 'function')}
          {renderButton('Rand', 'function')}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
