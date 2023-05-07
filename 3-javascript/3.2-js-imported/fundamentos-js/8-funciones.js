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

// Ejemplo 2
function sayHello(name, age) { // parametros
    // se usan con el nombre de la linea anterior dentro de la funcion
    console.log(`Mi nombre es ${name} y tengo ${age} años`);
}
  
const myName = 'jose'
const patito = 29;
// el envio de parametros se les dice argumentos
sayHello(myName, patito);