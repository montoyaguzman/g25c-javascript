/* Tipos de datos
Primitivos
    Numericos (int y double) - 10 y 0.8
    Strings - hola mundo
    Boolean - true y false
    Char - H
Complejos
    Objetos {}
    Arreglos []


Fuertemente tipado
Que el lenguaje de programa requiere saber explicitamente el tipo de dato al momento de 
crear una variable.
Ejemplo (java):
int numero = 10;
double numeroDecimal = 22.75;
String myName = "montoya";
double numeroDecimal = 22.75;
char myInitial = 'M';
boolean flag = true;

// error
flag = 22.77;
flag = "juanito banana"

Debilmente tipado
Significa que el lenguaje interpreta el tipo de dato y no requiere que se defina explicitamente
Ejemplo (javascript):
var number = 6;
*/

/**
 * Tipos primitivos
 */
var numberSix = 6;
var decimalNumber = 22.75;
var myName = "montoya";
var myInitial = "M";
var flag = true;
// OK
flag = 22.77;
flag = "juanito banana";

/**
 * Tipos complejos
 */
// objects
var video = {
    name: "peaches",
    author: "jack black",
}
console.log(video);
console.log(video.name);
console.log(video.author);
console.log(video.date);

// arrays
var comments = [
    "el video es buenardo", // [0]
    "a mi no me gusto", // [1]
    "todos somos browser", // [2]
];
console.log(comments);
console.log(comments[1]);
console.log(comments[3]); // undefined
