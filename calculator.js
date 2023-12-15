var userPrompt = require("prompt-sync")();
var firstNumber = parseInt(userPrompt("Enter the first number: "));
var secondNumber = parseInt(userPrompt("Enter the second number: "));
var operator = userPrompt("Enter the operator to use +, -, *, /: ");
if (operator == "+") {
    var answer = firstNumber + secondNumber;
    console.log(answer);
}
else if (operator == "-") {
    var answer = firstNumber - secondNumber;
    console.log(answer);
}
else if (operator == "*") {
    var answer = firstNumber * secondNumber;
    console.log(answer);
}
else if (operator == "/") {
    var answer = firstNumber / secondNumber;
    console.log(answer);
}
else {
    console.log("Invalid Operator");
}
