function CalcButtons(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.updateCalculation("/");
        }}
      >
        /
      </button>
      <button
        onClick={() => {
          props.updateCalculation("*");
        }}
      >
        *
      </button>
      <button
        onClick={() => {
          props.updateCalculation("+");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          props.updateCalculation("-");
        }}
      >
        -
      </button>

      <button onClick={props.clear}>
        <img
          width={40}
          height={40}
          src='https://cdn-icons-png.flaticon.com/512/159/159805.png'
        />
      </button>
    </div>
  );
}
export default CalcButtons;
