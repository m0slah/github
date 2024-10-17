const sumation = (firstNumber, secondNumber) => {
  const sumationResult = firstNumber + secondNumber;

  return sumationResult;
};

const multiplication = (firstNumber, secondNumber) => {
  const multiplicationResult = firstNumber * secondNumber;

  return multiplicationResult;
};

const subtraction = (firstNumber, secondNumber) => {
  const subtractionResult = firstNumber - secondNumber;

  return subtractionResult;
};

const division = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return "Error: Division by zero is not allowed";
  }
  const divisionResult = firstNumber / secondNumber;

  return divisionResult;
};

console.log(sumation(2, 1));
console.log(multiplication(2, 1));
