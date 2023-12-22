import './App.css';
import Calculator from './components/Calculator/index.js'
import { useState } from 'react';

function App() {
  return (
    <div className='calculator-container'>
      <Calculator/>
    </div>
  );
}

export default App;
