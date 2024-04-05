import Calculator from './components/Calculator/index.js'
import Clock from './components/Clock/index.js';
import { CalculatorContainer } from './styled.js';
import { useCurrentRates } from './useCurrentRates.js';

function App() {
  const rateData = useCurrentRates();
  return (
    <CalculatorContainer>
      <Clock />
      <Calculator rateData={rateData} />
    </CalculatorContainer>
  );
}

export default App;