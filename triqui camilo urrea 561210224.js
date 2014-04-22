//matriz del triqui
var triqui = 
[
	[0,0,0],
	[0,0,0],
	[0,0,0]
]
var guarda_triqui = [[],[],[]];
//el ciclo guarda las fichas al arreglo guarda_triqui
for(var i = 0; i < 3; i++)
{	
	for(var n = 0; n < 3; n++)
	{
		 if(triqui[i][n] == 1)
		 {
		 	guarda_triqui [i][n] = "Ẋ";
		 }
		 if (triqui[i][n]==2)
		 {
		 	guarda_triqui [i][n] = "۞";
		 }
	}
} 
//ficha Ẋ
//validacion jugadas en vertical
	if(triqui[0][0] == 1 && triqui[1][0] == 1 && triqui[2][0] == 1)
	{
	alert("Gana X");
	}
	if(triqui[0][1] == 1 && triqui[1][1] == 1 && triqui[1][2] == 1)
	{
		console.log("Gana X");
	}

	if(triqui[0][2] == 1 && triqui[1][2] == 1 && triqui[2][2] == 1)
	{
		console.log("Gana x");
	}
	//validacion jugadas en horizontal
	if(triqui[0][0] == 1 && triqui[0][1] == 1 && triqui[0][2] == 1)
	{
		console.log("Gana x");
	}
	if(triqui[1][0] == 1 && triqui[1][1] == 1 && triqui[1][2] =1)
		console.log("Gana x");
	}
	if(triqui[2][0] == 1 && triqui[2][1] == 1 && triqui[2][2] == 1)
	{
		console.log("Gana x");
	}
	//validacion jugadas en diagonal
	if(triqui[0][0] == 1 && triqui[1][1] == 1 && triqui[2][2] == 1)
	{
		console.log("Gana x");
	}

	if(triqui[0][2] == 1 && triqui[1][1] == 1 && triqui[2][0] == 1)
	{
		console.log("Gana x");
	}

	//ficha ۞
	if(tablero[0][0] == 2 && tablero[1][0] == 2 && tablero[2][0] == 2)
	{
	alert("Gana ۞" );
	}
	if(tablero[0][1] == 2 && tablero[1][1] == 2 && tablero[1][2] == 2)
	{
		console.log("Gana ۞");
	}

	if(tablero[0][2] == 2 && tablero[1][2] == 2 && tablero[2][2] == 2)
	{
		console.log("Gana ۞");
	}
	//validacion jugadas en horizontal
	if(tablero[0][0] == 2 && tablero[0][1] == 2 && tablero[0][2] == 2)
	{
		console.log("Gana ۞");
	}
	if(tablero[1][0] == 2 && tablero[1][1] == 2 && tablero[1][2] == 2)
	{
		console.log("Gana ۞");
	}
	if(tablero[2][0] == 2 && tablero[2][1] == 2 && tablero[2][2] == 2)
	{
		console.log("Gana ۞");
	}
	//validacion jugadas en diagonal
	if(tablero[0][0] == 2 && tablero[1][1] == 2 && tablero[2][2] == 2)
	{
		console.log("Gana ۞");
	}

	if Gana [0][2] ==2 && tablero[1][1] ==2 && tablero[2][0] ==2)
	{
		console.log("Gana ۞");
	}
	

