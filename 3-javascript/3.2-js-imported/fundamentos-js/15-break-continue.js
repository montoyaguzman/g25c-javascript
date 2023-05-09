// break: utilizado para romper el flujo de ejecucion de un ciclo o los switch
// continue: utilizado para saltar una iteracion en un ciclo

const fruits = [
    'berry',
    'banana',
    'orange',
    'mangoo',
    'guava',
    'avocato'
];

// romper el ciclo al llegar al mangoo, es decir, solo imprimir hasta encontrar mangoo
for (i=0; i < fruits.length; i ++) {
    if (fruits[i] === mangoo) {
        break;
    }
    console.log(fruits[i]);
}

// saltarse la impresion de la fruta mangoo, es decir, imprimir todas las frutas excepto mangoo
for (i=0; i < fruits.length; i ++) {
    if (fruits[i] === mangoo) {
        continue;
    }
    console.log(fruits[i]);
}