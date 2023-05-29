
Algoritmo Inicio
    calculo <- 'Si'
	Mientras calculo == 'Si' Hacer
		Escribir '¿Qué tipo de figura desea calcular?'
		Escribir '1.- Cuadrado 2.-Triangulo isoceles 3.-Rectangulo'
		Leer figura
		Segun figura  Hacer
			"Cuadrado":
				Escribir 'Ingresa el lado del cuadrado'
				Leer lado
				perimetro <- lado*4
				area <- lado*lado
			"Triangulo isosceles":
				Escribir 'Ingresa la base y altura del triangulo isosceles'
				Leer base
				Leer altura
				perimetro <- base+(altura*2)
				area <- (base*altura)/2
			"Rectangulo":
				Escribir 'Ingresa la base y altura del rectangulo'
				Leer base
				Leer altura
				perimetro <- 2*(base+altura)
				area <- base*altura
			De Otro Modo:
				Escribir 'Ingresa una figura correcta'
		FinSegun
		Escribir 'El perimetro de ',figura,'es: ',perimetro
		Escribir 'El area de ',figura,'es: ',area
		Escribir 'Desea realizar otra consulta? Si/No'
		Leer calculo
	FinMientras
FinAlgoritmo






INICIO  
  -deseas calcular perimtro o area?
  -de que figura?
  -Guardar datos en variables 
    -sí es cuadrado   -> realizar operación perimetro y operacion area (Formula)
    -sí es trangulo   -> realizar operación (Formula)
    -sí es rectangulo -> realizar operación (Formula)
    -mostrar resultado en pantalla
FIN






Inicio
Solicita figura
Guarda figura en fig
Solicita tipo de cálculo
Guarda tipo de cálculo en resultado

Si y solo si figura es triangulo y calculo área ENTONCES pedir b,h y A=b*h/2
Guardar Resultado=A

Si y solo si figura es triangulo y calculo perímetro ENTONCES pedir L y P=3*L
Guardar Resultado=P

Si y solo si figura es Cuadrado y calculo área ENTONCES pedir L y A=L*L
Guardar Resultado=A

Si y solo si figura es Cuadrado y calculo perímetro ENTONCES pedir L y P=4*L
Guardar Resultado=P

Si y solo si figura es Rectangulo y calculo área ENTONCES pedir b,h y A=b*h
Guardar Resultado=A

Si y solo si figura es Rectángulo y calculo perímetro ENTONCES pedir L y P=2b+2h
Guardar Resultado=P

Mostrar Resultado

Si el usuario solicita un nuevo cálculo, nuevamente se solicita la figura

Sino Fin


