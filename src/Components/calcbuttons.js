function CalcButtons(props) {
  // const actionsArray = ["/", "*", "+", "-", "."];

  const calcButtonArray = []; //create an empty array

  for (let i = 0; i < 5; i++) {
    calcButtonArray.push(
      <button
        onClick={() => {
          props.updateCalculation(props.actionsArray[i]);
        }}
        key={i}
      >
        {props.actionsArray[i]}
      </button>
    );
  }

  return (
    <div>
      {calcButtonArray}

      {/* <button onClick={props.clear}>
        <img
          width={40}
          height={40}
          src='https://cdn-icons-png.flaticon.com/512/159/159805.png'
        />
      </button> */}
    </div>
  );
}
export default CalcButtons;

{
  /* <button
        onClick={() => {
          props.updateCalculation(props.actionsArray[1]);
        }}
      >
        {props.actionsArray[1]}
      </button>
      <button
        onClick={() => {
          props.updateCalculation(props.actionsArray[2]);
        }}
      >
        {props.actionsArray[2]}
      </button>
      <button
        onClick={() => {
          props.updateCalculation(props.actionsArray[3]);
        }}
      >
        {props.actionsArray[3]}
      </button>

      <button onClick={props.clear}>
        <img
          width={40}
          height={40}
          src='https://cdn-icons-png.flaticon.com/512/159/159805.png'
        />
      </button>  */
}
