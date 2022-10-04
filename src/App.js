import "./App.css";
import { useState } from "react";
import CreateDigits from "./Components/digitbutton";
import CalcButtons from "./Components/calcbuttons";

function App() {
  const [calculation, setCalculation] = useState("");
  const [output, setOutput] = useState("");
  const actionsArray = ["/", "*", "+", "-", "Del", "."];

  const updateCalculation = (value) => {
    console.log("updateCalculation  ", value + " " + actionsArray[4]);
    if (value == actionsArray[4]) {
      if (calculation === "") {
        return;
      }
      const res = calculation.slice(0, -1); //removes the last element from the string
      console.log("line 17", res);
      setCalculation(res);
      return;
    } else if (
      //if the array includes the value and the calculation is empty or the last character is an action
      actionsArray.includes(value) & (calculation === "") ||
      actionsArray.includes(value) &
        actionsArray.includes(calculation.slice(-1))
    ) {
      return; //don't do anything and stop the function
    }
    setCalculation(calculation + value);

    if (!actionsArray.includes(value)) {
      setOutput(eval(calculation + value).toString());
    }
  };

  const calculate = () => {
    setCalculation(eval(calculation).toString());
  };

  // const clear = () => {
  //   if (calculation === "") {
  //     return;
  //   }
  //   const value = calculation.slice(0, -1); //removes the last element from the string
  //   setCalculation(value);
  // };

  return (
    <div>
      <center>
        <h1> React Calculator</h1>
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

          <button
            onClick={() => {
              updateCalculation(".");
            }}
          >
            .
          </button>

          <button
            onClick={() => {
              updateCalculation("0");
            }}
          >
            0
          </button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
