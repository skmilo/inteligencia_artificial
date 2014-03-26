var texto = prompt("ingrese un texto");//capturo texto ingresado por el usuario
											 
var vocales = ["a","e","i","o","u"];// arreglo con las vocales
var cuenta = [];//declaracion de un arreglo vacio
var a = 0;
var e = 0;
var i = 0;//variables para las contar las vocales iniciadas en 0
var o = 0;
var u = 0;


texto = texto.toLowerCase();//pasar el texto a minusculas
var sinespacios = texto.replace(/\s/g,''); //eliminar los espacios  
var palabra = sinespacios.split("");//partir palabra o convertir a arreglo 

for (var n = 0; n < palabra.length; n++)//recorre la palabra sin espacios y en minuscula
{
	
	if(palabra[n] == vocales [0]) // si esto cumple la condicion, la letra es a
	{
		cuenta [0] = a+1;
		a++;
	}
	if(palabra[n] == vocales [1])  // si cumple la letra es e
	{
		cuenta[1] = e+1;
		e++;
	}
	if(palabra[n] == vocales [2])  // si cumple la letra es i
	{
		cuenta[2] = i+1;
		i++;
	}
	if(palabra[n] == vocales [3])  // si cumple la letra es o
	{
		cuenta[3] = o+1;
		o++;
	}
	if(palabra[n] == vocales [4])  // si cumple la letra es u
	{
		cuenta[4] = u+1;
		u++;
	}
		
};	

console.log("la frase ingesada contiene "+cuenta[0]+ "letras a");
console.log("la frase ingesada contiene "+cuenta[1]+ "letras e");
console.log("la frase ingesada contiene "+cuenta[2]+ "letras i");
console.log("la frase ingesada contiene "+cuenta[3]+ "letras o");
console.log("la frase ingesada contiene "+cuenta[4]+ "letras u");