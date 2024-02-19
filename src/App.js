import Calculator from './components/Calculator/index.js'
import Clock from './components/Clock/index.js';
import { CalculatorContainer } from './styled.js';

function App() {
  return (
    <CalculatorContainer>
      <Clock />
      <Calculator />
    </CalculatorContainer>
  );
}

export default App;
