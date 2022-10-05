import swal from "sweetalert";
function CreateDigits(props) {
  const digits = []; //create an empty array

  for (let i = 1; i < 10; i++) {
    digits.push(
      //add new elements to the array
      <button onClick={() => props.updateCalculation(i.toString())} key={i}>
        {i}
      </button>
    );
  }
  return (
    <div>
      {digits}
      <button
        onClick={() => {
          props.updateCalculation(".");
        }}
      >
        .
      </button>

      <button
        onClick={() => {
          props.updateCalculation("0");
        }}
      >
        0
      </button>
      <button
        onClick={() => {
          swal("Don't click this button!", "I just needed to fill this hole");
        }}
      >
        ~
      </button>
    </div>
  );
}
export default CreateDigits;
