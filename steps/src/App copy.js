import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


export default function App (){
  const [step, setStep] = useState(1);

  function handleNext(){
    if(step < 3) setStep((s) => step+1)
  }
  function handlePrevius(){
    if(step < 1) setStep((s) => step-1)
  }

  return(
    <div className="steps">
      <div className="numbers">
        <div className={`if ${step} >= 1 "active"`} >1</div>
        <div className={`if ${step} >= 2 "active"`} >2</div>
        <div className={`if ${step} >= 3 "active"`} >3</div>
      </div>
      <p className="message">
        Step: {step} {messages[step-1]}
      </p>
      <button className="button" onClick={handlePrevius}>Previus</button>
      <button className="button" onClick={handleNext}>Next</button>
    </div>
  )
}
