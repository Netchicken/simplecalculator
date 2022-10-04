import "./App.css";
import { useState } from "react";
import CreateDigits from "./Components/digitbutton";
import CalcButtons from "./Components/calcbuttons";

function App() {
  const [calculation, setCalculation] = useState("");
  const [output, setOutput] = useState("");
  const actions = ["/", "*", "+", "-", "."];

  const updateCalculation = (value) => {
    if (
      actions.includes(value) & (calculation === "") ||
      actions.includes(value) & actions.includes(calculation.slice(-1))
    ) {
      return;
    }
    setCalculation(calculation + value);

    if (!actions.includes(value)) {
      setOutput(eval(calculation + value).toString());
    }
  };

  const calculate = () => {
    setCalculation(eval(calculation).toString());
  };

  const clear = () => {
    if (calculation === "") {
      return;
    }
    const value = calculation.slice(0, -1);
    setCalculation(value);
  };

  return (
    <div>
      <center>
        <h1> React Calculator With React Hooks</h1>
      </center>
      <div className='calc-grid'>
        <div className='output'>
          {calculation || "0"}
          {output ? <span className='preRes'>{output}</span> : ""}
        </div>
        {/* <div className='buttonGrid'> */}
        <CalcButtons updateCalculation={updateCalculation} clear={clear} />
        {/* </div> */}
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

/* {
  <div>
          <div className='buttonGrid'>
            <button
              onClick={() => {
                updateCalculation("/");
              }}
            >
              /
            </button>
            <button
              onClick={() => {
                updateCalculation("*");
              }}
            >
              *
            </button>
            <button
              onClick={() => {
                updateCalculation("+");
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                updateCalculation("-");
              }}
            >
              -
            </button>

            <button onClick={clear}>
              {" "}
              <img
                width={40}
                height={40}
                src='https://cdn-icons-png.flaticon.com/512/159/159805.png'
              />
            </button>
          </div> 
 }

// const createDigits = () => {
  //   const digits = []; //create an empty array

  //   for (let i = 1; i < 10; i++) {
  //     digits.push(  //add new elements to the array
  //       <button onClick={() => updateCalculation(i.toString())} key={i}>
  //         {i}
  //       </button>
  //     );
  //   }
  //   return digits;
  // };
*/
