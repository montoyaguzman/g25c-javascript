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

var numberSix = 6;
var decimalNumber = 22.75;
var myName = "montoya";
var myInitial = "M";
var flag = true;
// OK
flag = 22.77;
flag = "juanito banana";