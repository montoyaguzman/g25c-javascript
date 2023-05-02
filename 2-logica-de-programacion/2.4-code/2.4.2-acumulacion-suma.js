var numeroInicio = 1;
var numeroUsuario = parseInt(window.prompt("Ingresa numero: "));
var numeroFinal = numeroInicio + numeroUsuario;
var resultado = 0;

for (var i=0; i <= numeroFinal; i++) {
   resultado += + i;
}

alert("Resultado: " + resultado);
