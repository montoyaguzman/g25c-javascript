// Cambio de contenido a un elemento
document.getElementById("titulo").innerHTML = "Este es otro texto";

// Cambio de estilo a un elemento
document.getElementById("botonEjemplo").style.backgroundColor = "red";

// Agaregar un elemento a la pagina
var nuevoParrafo = document.createElement("p");
nuevoParrafo.setAttribute("id","miNuevoParrafo");
nuevoParrafo.innerHTML = "Este es mi parrafo nuevo";
document.body.appendChild(nuevoParrafo);

// Eliminar un elemento de nuesta pagina
var parrafoAEliminar = document.getElementById("parrafoAEliminar");
parrafoAEliminar.parentNode.removeChild(parrafoAEliminar);