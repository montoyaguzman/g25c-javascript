function sum(firstNumber, secondNumber) {
    result = firstNumber + secondNumber;
}

function substract(firstNumber, secondNumber) {
    result = firstNumber - secondNumber;
    return result;
}

const firstNum = 10;
const secondNum = 5;
console.log(`${firstNumber} + ${secondNum} = ${sum(firstNum, secondNum)}`);
console.log(`${firstNumber} - ${secondNum} = ${substract(firstNum, secondNum)}`);