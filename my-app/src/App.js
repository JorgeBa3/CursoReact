import { useState } from 'react';
import './App.css';

function App() {
  // const fecha_actual = new Date();
  const [fecha_actual, setFecha_actual] = useState(new Date ());
  const [fecha, setFecha] = useState(0);
  const [step, setStep] = useState(1);
  // const date = new Date();
  function handleStepLess (){
    if (step === 3) setStep((s) => s = 1)
    if (step === 5) setStep((s) => s = 3)
  }

  function handleStepMore (){
    if (step === 1) setStep((s) => s = 3)
    if (step === 3) setStep((s) => s = 5)
  }

  function handleNext (){
    
    setFecha_actual(
      (f) => {
        const nueva = new Date(f);
        nueva.setDate( + step)
        return nueva;
      }
    )
    setFecha((f) => f = f + step)
    
  }
  function handlePrevius () {
    
    setFecha_actual(
      (f) => {
        const nueva = new Date(f);
        nueva.setDate( - step)
        return nueva;
      }
    )
    setFecha((f) => f -= step);
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={handleStepLess}></button>
          Step: {step}
          <button onClick={handleStepMore}></button>
          
        </div>
        <div>
          <button onClick={handlePrevius}></button>
          <p>{fecha.toString()}</p>
          <button onClick={handleNext}></button>
        </div>
        <div>
          {fecha === 0
          ? "Hoy es: "
          : fecha>0
          ? ` en ${fecha} será: `
          : ` hace ${fecha*-1} días fué: `
        }
          {fecha_actual.toString()}
        </div>
      </header>
    </div>
  );
}

export default App;
