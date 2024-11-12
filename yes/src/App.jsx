import Header from "./components/Header";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput";
// import {calculateInvestmentResults} from "./util/investment.js"
import { useState } from "react";

export default function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1400,
    annualInvestment: 20000,
    expectedReturn: 6,
    duration: 2
  });

  const isvalid = userInput.duration > 0;

  function handleChange(inputId, newValue){
      setUserInput(prevInput => {
          return {
              ...prevInput,
              [inputId] : +newValue
          }
      })
  }
  return (
    <div>
      <Header/>
      <UserInput onChange ={handleChange} userInput={userInput}/>
      {!isvalid && <p className="center">Duration Cannot be 0</p>}
      {isvalid && <Results userInput = {userInput}/>}
    </div>
  )
}
