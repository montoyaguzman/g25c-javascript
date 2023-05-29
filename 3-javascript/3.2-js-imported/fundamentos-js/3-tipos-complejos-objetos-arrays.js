/**
 * Tipos complejos
 */
// objects
var video = {
    name: "peaches", // video.name
    author: "jack black", // video.author
}

// arrays
var comments = [
    "el video es buenardo", // comments[0]
    "a mi no me gusto", // comments[1]
    "todos somos browser", // comments[2]
];
console.log(comments);
console.log(comments[1]);
console.log(comments[3]); // undefined

// ejemplo 2
var song = {
    // atributo/key: value 
    name: "peaches", // video.name
    author: "jack black", // video.author
    comments: [
    "el video es buenardo", // comments[0]
    "a mi no me gusto", // comments[1]
    "todos somos browser", // comments[2]
    ],
    reactions: [
      { type: 'like', user: 'gaby' },
      { type: 'unlike', user: 'cyn' },
      { type: 'love', user: 'salvador' },
    ]
}

console.log(song);
console.log(song.reactions);
console.log(song.reactions[1]);
console.log(song.reactions[1].user);
// obtener tamanio de array
console.log(song.reactions.length);

// mas formas de acceder a una key de un objeto
console.log(song.name);
console.log(song['name']);
const myName = 'name';
console.log(song[myName]);
console.log(song.myName); // error
const myNames = 'reactions';
console.log(song[myNames]);

/* RESUMEN DE ACCESO A DATOS
. para acceder a keys, atributo, propiedad, prop, clave, llave
[n] acceso a arreglos, donde n es la posicion
['nameProp'] para acceder a keys, atributo, propiedad, prop, clave, llave
[nameVar] para acceder a keys, atributo, propiedad, prop, clave, llave
nameObj.nameFuncion(param1, param2,.. paramN) Acceder a funciones 
*/
