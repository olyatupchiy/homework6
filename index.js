let firstNumber = prompt("Enter the first number");
     if (!( firstNumber===null)) {
let secondNumber = prompt("Enter the second number");
if  (!( secondNumber===null)) {
const result1 = +firstNumber + +secondNumber;
const result2 = +firstNumber - +secondNumber;
const result3 = +firstNumber * +secondNumber;
const result4 = +firstNumber / +secondNumber;
alert((firstNumber) + "+" + (secondNumber) + "=" + result1 + "\n" + (firstNumber) + "-" + (secondNumber) + "=" + result2 +
    "\n" + (firstNumber) + "*" + (secondNumber) + "=" + result3 + "\n" + (firstNumber) + "/" + (secondNumber) + "=" + result4);
}
}