const PI = 3.14;
function uno(){
 	var gato = "Esto es un gatillo";
 }
 var cadena = "Esta es una cadena";
 var booleano = "true";
 var fecha = new Date();

//imprime en la consola
//console.log(PI);

//Imprime en el documento
//document.write(PI);

//Imprime con un ventana emergente
//alert(PI);

//Para Averiguar el tipo de Variable
//document.write(typeof fecha);

//Impresion de Date tipo object
//document.write(fecha.getHours()+":",fecha.getMinutes() )

//var operacion = (15+15)/3;
//document.write(operacion);

//Comparaciones
//var a = 20;
//var b = 10;
//document.write(a < b);

//Condiciones
//var a = 10;
//var b = 10;

//Comparar si dos condiciones  son estrictamente true o false
//document.write(a==b && a >10);

//Corrobar si al menos una condicion es true o false
//document.write(a==b || b >10)


//Condicionales del Tipo No es igual a
//document.write( !(a==10) );//debe dar false

//a += 20; //Resultado es 30 porque incrementa 20 a la variable a 
//a -= 5; //Resta 5 a la variable a ..Resultado es 25
//document.write(a);

//Condicion ? TRUE : FALSE;
//document.write(a==b ? "Verdadero": "Falso")

/*
	if 
	if - else
	if - else if - else
	switch
*/

//if (a==b){
//	document.write("Es igual");
//}else{
//	document.write("No es igual");
//}//Resultado se cumple en el primer if

//swithc
// var uno = 1;
// var dos;
// switch(uno){
// 	case 0: dos= "Cero";
// 	break;

// 	case 1: dos= "Uno";
// 	break;

// 	default:dos="ninguno";
// 	break;

// }

// document.write(dos);


// while
// do while
// for
// break-continue

//var uno = 40;
// var dos = 20;

// while(uno <= dos){
// 	document.write(uno + "</br>");
// 	uno++;
// }

// do {
// 	document.write(uno + "</br>");
// 	uno--;
// }while(uno >=20);

// for(var i=0;i<=10;i++){
// 	document.write(i + "</br>");
// }

//for and break
// for (var i=1; i<=20; i++){
// 	if(i==5){break;}
// 	document.write(i+"</br>");
// }


//For and continue
// for (var i=1; i<=20; i++){
// 	if(i==5 || i==7){continue;}
// 	document.write(i+"</br>");
// }

// for (var i=1; i<=20; i++){
// 	if(i>=5 && i<=10){continue;}
// 	document.write(i+"</br>");
// }

//Funcion sin parametro
// function uno(){
// 	var saludo = document.write("Hola a todos</br>");
// 	return saludo;
// };

// //Funcion con parametro
// function dos(a,b,c){
// 	var datos = document.write("<b>Mi nombre es:</b> "+ a +"</br><b>Mi apelllido es: </b>" + b + "</br><b>Mi edad es:</b>" + c+"<br>");


// 	return datos;
// }

// function tres(nombre=""){
// var nombreCompleto = nombre
// return document.write(nombreCompleto);
// }

// function cuatro(nombre, apellido){
// 	var 
// }

// uno();
// dos("Julio", "Franco", 37);
// tres("Julio Franco")

// function cuatro(nombre, apellido){
//  	if (nombre != null && apellido!=null){
//  	respuesta = document.write(nombre + " ", apellido);

//  	}else{
//  	respuesta = document.write("No completo los campos");
//  		};
//  	return respuesta;
//  	}

// cuatro("Julio", "Franco");



function cinco(...meses){
 	for(let uno of meses){
 	document.write(uno + '<br>');	
 	}	
	
};
//cinco('Enero', 'Febrero', 'Marzo', 'Abril');

function seis(nombre, precio, peso){
	return "Nombre:" + nombre + "<br>Precio:"+precio + "<br>Peso:"+peso;
}

var pedido = ['Soldado', 15, 20];

//document.write( seis(...pedido))

var siete = function(){
		resultado = 'Hola a todos'
return resultado;
}

//document.write(siete());

//===============================================

var a = function(nombre, uno){
	var e=nombre;
	uno(e);
	} 	
	var b = function(i){
		document.write(i);
	}
//a("Julio", b)































































