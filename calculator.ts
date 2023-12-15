let userPrompt = require("prompt-sync")();

let firstNumber: number = parseInt(userPrompt("Enter the first number: "));
let secondNumber: number = parseInt(userPrompt("Enter the second number: "));
let operator: string = userPrompt("Enter the operator to use +, -, *, /: ");

if (operator == "+") {
  let answer = firstNumber + secondNumber;
  console.log(answer);
} else if (operator == "-") {
    let answer = firstNumber - secondNumber;
    console.log(answer);

} else if (operator == "*") {
    let answer = firstNumber * secondNumber;
    console.log(answer);

} else if (operator == "/") {
    let answer = firstNumber / secondNumber;
    console.log(answer);

} else {
    console.log("Invalid Operator");
}

