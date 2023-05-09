var reactions = [
    { type: 'like', user: 'gaby' },
    { type: 'unlike', user: 'cyn' },
    { type: 'love', user: 'salvador' },
];

// console.log(reactions[0].type);
// console.log(reactions[1].type);
// console.log(reactions[2].type);

/* 
Los ciclos sirven para repetir un codigo N veces,
No siempre se usan con arrays
Tienen 3 partes: inicio, condicion, razon de cambio
*/

/* 
SINTAXIS
inicio
while (condicion) {
  // SENTENCES
  // razonDeCambio
}
*/
let i = 0; // inicio
while (i < reactions.length) { // condicion
  // debugger
  console.log(reactions[i].type);
  i = i + 1; // razonDeCambio
}

/**
 * SINTAXIS
 * for (inicio; condicion ; razonCambio) {
 * // sentences
 * }
 */
for (let i = 0; i < reactions.length; i = i + 1) {
    console.log(reactions[i].type);
}

