// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  // store number when clicked
  let [result_num, setResult_num] = useState("");

  const handleClick = (num) => {
    if (num === 'C'){
      setResult_num("");
    } else{setResult_num(result_num + num)}
    
  }

  const calculateResult = () => {
    try {
      let calculation = result_num.replace('x', '*')
      let result = evaluate(calculation);
      setResult_num(result_num + " = " + result);
    } catch (error) {
      setResult_num("Error");
    }
  }

  return (
    <div className="App">
      <h1 className='title'>Calculator</h1>
      <h4 className='result'>{result_num}</h4>
      <table>
        <tr>
            <td onClick={() => handleClick('1')}>1</td>
            <td onClick={() => handleClick('2')}>2</td>
            <td onClick={() => handleClick('3')}>3</td>
            <td className='operator' onClick={() => handleClick('+')}>+</td>
        </tr>
        <tr>
            <td onClick={() => handleClick('4')}>4</td>
            <td onClick={() => handleClick('5')}>5</td>
            <td onClick={() => handleClick('6')}>6</td>
            <td className='operator' onClick={() => handleClick('-')}>-</td>
        </tr>
        <tr>
            <td onClick={() => handleClick('7')}>7</td>
            <td onClick={() => handleClick('8')}>8</td>
            <td onClick={() => handleClick('9')}>9</td>
            <td className='operator' onClick={() => handleClick('x')}>x</td>
        </tr>
        <tr>
            <td onClick={() => handleClick('C')}>C</td>
            <td onClick={() => handleClick('0')}>0</td>
            <td onClick={() => handleClick('.')}>.</td>
            <td className='operator' onClick={() => handleClick('/')}>/</td>
        </tr>
      </table>
      <button className='button' onClick={calculateResult}>Calculate</button>
    </div>
  );
}



export default App;
