//1.    Declarar una variable llamada noValgoNi5 y asignarle el valor 4. Mostrar el valor de la variable por la terminal.

let noValgoNi5 = 4;
console.log(noValgoNi5);

//2.    Declarar 3 variables:
//o    miAnioDeNacimiento y asignarle el valor de tu año de nacimiento.
//o    meGustariaTener80Anios y asignarle el número 80.
//o    voyATener80ElAnio y asignarle el resultado de sumar las 2 variables anteriores
//Mostrar por la terminal el año en el que vas a cumplir 80 años.

let miAnioDeNacimiento = 1987;
let meGustariaTener80Anios = 80;
let voyATener80ElAnio = miAnioDeNacimiento + meGustariaTener80Anios;
console.log("voy a tener 80 en: " + voyATener80ElAnio);

//3.    Declarar 3 variables:
//o    variable costoDeUnaTele y asignarle el valor 10000.
//o    variable ahorros y asignarle el valor 9000.
//o    variable dineroQueMeFalta y asignarle el resultado de restar las 2 variables anteriores.
//Mostrar por la terminal cuanto dinero te falta para comprar la tele.

let costoDeUnaTele = 10000;
let ahorros = 9000;
let dineroQueMeFalta = costoDeUnaTele - ahorros;
console.log("EL dinero que me falta es: " + dineroQueMeFalta);

//4.    Declarar 3 variables:
//o    diasPorAnio y asignarle el número 365
//o    cantidadDeAniosEnUnaDecada y asignarle el número 10
//o    cantidadDeDiasEnUnaDecada y asignarle el resultado de multiplicar las 2 variables anteriores.
//Mostrar por la terminal cuantos días hay en una década.

let diasPorAnio = 365;
let cantidadDeAniosEnUnaDecada = 10;
let cantidadDeDiasEnUnaDecada = diasPorAnio * cantidadDeAniosEnUnaDecada;
console.log("Los dias que hay en una decada son: " + cantidadDeDiasEnUnaDecada);

//5.    Teniendo en cuenta que una pizza siempre tiene 8 porciones, mostrar por la terminal cuantas pizzas tengo en la mesa si conté 24 porciones.

let pizza = 8; // porciones
let porciones = 24;
let pizzas = porciones / pizza;
console.log("cuantas pizzas son 24 porciones: " + pizzas);


//6.  Declarar una variable de nombre miAnimalFavorito y asignarle como valor el string que represente el animal que más te gusta. 
//Escribir el código necesario para mostrar por la terminal el valor true si el animal que más te gusta es un 'perro'.
//De lo contrario, mostrar false. Usar el operador de igualdad (==).

let miAnimalFavorito = "perro" == "perro"; //devuelve true si ambos valores son iguales.
let siEsGato = "perro" == "gato";
console.log(miAnimalFavorito);
console.log(siEsGato)


//7. Usar el operador de desigualdad (!=) para mostrar por la terminal el resultado de comparar la cadena de caracteres 'flan' 
// y 'flan con dulce de leche' (Podés crear todas las variables que quieras, incluso podés resolverlo sin usar variables).

let sonDistintos = "flan" != "flan con dulce de leche"; //devuelve true si ambos valores son distintos.
let sonDiferentes = "flan" != "flan";
console.log(sonDistintos);
console.log(sonDiferentes);

//8.    Declarar una variable llamada soyMayorDeEdad y asignarle el resultado de comparar tu edad y 
// el número 17 usando el operador > (mayor). Mostrar el valor de la variable por la terminal.

let soyMayorDeEdad = 35 > 17;
console.log(soyMayorDeEdad);


//9.    Declarar una variable llamada soyMenorDe25 y asignarle el resultado de comparar tu edad y el número 25 
//usando el operador < (menor). Mostrar el valor de la variable por la terminal.

let soyMenorDe25 = 35 < 25;
console.log(soyMenorDe25);

//10. Declarar una variable llamada estamosEnEnero y asignarle el resultado de comparar si el nombre del mes actual es 
//igual a 'Enero'. Hacerlo usando el operador de igualdad estricta (===). Mostrar el valor de la variable por la terminal.

let estamosEnEnero = "Marzo" === "Enero"; //devuelve true si los valores son iguales y tienen el mismo tipo.
console.log(estamosEnEnero);

//11. Declarar una variable llamada noEstamosEnEnero y asignarle el resultado de comparar si el nombre del mes actual 
//y el string 'Enero' son diferentes. Hacerlo usando el operador de desigualdad estricta (!==). 
//Mostrar el valor de la variable por la terminal.

let noEstamosEnEnero = "Marzo" !== "Enero"; //devuelve true si los valores son distintos y tienen el mismo tipo.
console.log(noEstamosEnEnero);

//12. Declarar 3 variables:
//o    miNotaEnElParcial y asignarle un 8
//o    notaMinimaParaAprobar y asignarle un 6
//o    estoyAprobado y asignarle el resultado de comparar el número las dos variables anteriores usando el operador 
// >=(Mayor o igual).
//Mostrar el valor de la variable estoyAprobado por la terminal.

let miNotaEnElParcial = 8;
let notaMinimaParaAprobar = 6;
let estoyAprobado = miNotaEnElParcial >= notaMinimaParaAprobar;
console.log(estoyAprobado);

//14. Declarar una variable llamada esHoraDeAlmorzar cuyo valor sea el resultado de comparar con el operador 
//<= (Menor o igual) si la hora actual es menor o igual a 12. Mostrar el valor por la terminal.

let esHoraDeAlmorzar = 23 <= 12;
console.log(esHoraDeAlmorzar);