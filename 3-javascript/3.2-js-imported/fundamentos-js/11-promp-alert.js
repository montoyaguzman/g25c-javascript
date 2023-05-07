const numero1 = prompt('Deme el numero 1: ');
const numero2 = prompt('Deme el numero 2: ');

console.log(typeof numero1);
console.log(typeof numero2);
const result = parseInt(numero1) + parseInt(numero2);
console.log(typeof result, result);
// parsear, convertir un tipo de dato en otro

alert('Resultado: ' + result);