function CalcButtons(props) {
  // const actionsArray = ["/", "*", "+", "-", "."];

  const calcButtonArray = []; //create an empty array

  for (let i = 0; i < 6; i++) {
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

  return <div>{calcButtonArray}</div>;
}
export default CalcButtons;
