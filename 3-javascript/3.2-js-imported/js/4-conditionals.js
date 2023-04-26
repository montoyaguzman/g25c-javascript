console.log('============ CONDITIONAL ============');
/**
 * condicionales: son birfurcaciones que existen en la logica de
 * nuestro codigo
 */

// 1. ver video champions
// 2. ver video miranda
// 3. desplegar el menu
/**
 SINTAXIS
 if (condition) {
    // sentences
 } else if (otherCondition) {
    // other sentences
 } else {
    // sentences when neither else if or if is executed
 }
 */
var video = 'CHAMPIONS';
var clickInMenu = true;

if (clickInMenu == true) {
    console.log('mostrando menu...');
}

if (video == 'CHAMPIONS') {
    console.log('ver video champions');
} else if (video == 'MIRANDA') {
    console.log('ver video miranda');
} else {
   console.log('video no existente...');
}

var isOldMayor = 1; // 0: no // 1 : si
if (isOldMayor === 1) {
  console.log('puedo usar esta pagina web...') 
} else {
  console.log('mentiroso...') 
}