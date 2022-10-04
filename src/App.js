import "./App.css";
import { useState } from "react";
import CreateDigits from "./Components/digitbutton";
import CalcButtons from "./Components/calcbuttons";

function App() {
  const [calculation, setCalculation] = useState("");
  const [output, setOutput] = useState("");
  const actionsArray = ["/", "*", "+", "-", "Del", "=", "."];

  //runs the calculation on each button click
  const updateCalculation = (value) => {
    console.log("updateCalculation  ", value + " " + actionsArray[4]);

    //if the value is a = sign, then calculate the result
    if (value == actionsArray[5]) {
      setCalculation(eval(calculation).toString());
      return;
    }
    //if the value is a Del sign, then delete the last character
    if (value == actionsArray[4] && calculation != "") {
      const result = calculation.slice(0, -1); //removes the last element from the string
      console.log("updateCalculation DEL", result);
      setCalculation(result);
      return;
    } else if (
      //if the array includes the value and the calculation is empty or the last character is an action
      actionsArray.includes(value) & (calculation === "") ||
      actionsArray.includes(value) &
        actionsArray.includes(calculation.slice(-1))
    ) {
      return; //don't do anything and stop the function
    }

    //finally add the value to the calculation
    setCalculation(calculation + value);
    //if the value is NOT in the array add it to the calculation
    if (!actionsArray.includes(value)) {
      setOutput(eval(calculation + value).toString());
    }
  };

  return (
    <div>
      <center>
        <h1> ReactJS Calculator</h1>
      </center>
      <div className='calc-grid'>
        <div className='output'>
          {calculation || "0"}
          {output ? <span className='preRes'>{output}</span> : ""}
        </div>

        <CalcButtons
          updateCalculation={updateCalculation}
          actionsArray={actionsArray}
        />

        <div className='digits'>
          <CreateDigits updateCalculation={updateCalculation} />
        </div>
      </div>
    </div>
  );
}

export default App;
