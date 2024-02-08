import './App.css';
import Calculator from './components/Calculator/index.js'
import Clock from './components/Clock/index.js';

function App() {
  return (
    <div className='calculator-container'>
      <Clock/>
      <Calculator/>
    </div>
  );
}

export default App;
