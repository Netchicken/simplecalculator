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
  return digits;
}
export default CreateDigits;
