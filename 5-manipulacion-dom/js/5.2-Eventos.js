// Evento de clic en Boton (desencadena eventos al oprimir un boton)

document.getElementById("miBoton").addEventListener("click", function(){
    alert("Hiciste clic donde no te dije.");
});

// Evento de cambio a una etiqueta input

document.getElementById("inputText").addEventListener("change", function(){
    alert("El valor ha cambiado");
});

// Evento de teclado en un input
document.getElementById("inputText2").addEventListener("keyup", function(){
    alert("Presionaste la tecla: "+ event.key);
});

// Evento de carga de una imagen
document.getElementById("miImagen").addEventListener("load", function(){
    alert("Se cargo la imagen de manera exitosa");
});