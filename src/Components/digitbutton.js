import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

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
          Swal.fire({
            title: "Don't click this button",
            text: "This is just to cover up the empty place",
            icon: "success",
            denyButtonText: "I'm sorry",

            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }}
      >
        ~
      </button>
    </div>
  );
}
export default CreateDigits;
