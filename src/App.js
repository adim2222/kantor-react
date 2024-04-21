import Calculator from './components/Calculator/index.js'
import Clock from './components/Clock/index.js';
import Loading from './components/Loading/index.js';
import Failure from './components/Failure/index.js';
import { CalculatorContainer } from './styled.js';
import { useCurrentRates } from './useCurrentRates.js';

function App() {
  const rateData = useCurrentRates();
  return (
    <CalculatorContainer>
      <Clock />
      {rateData.state === "loading" ? (
        <Loading />
      ) : rateData.state === "error" ? (
        <Failure />
      ) : (
        <Calculator rateData={rateData} />
      )}
    </CalculatorContainer>
  );
}

export default App;