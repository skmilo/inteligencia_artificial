window.onload = function()
{
	inicio();
}
var inicio = function()
{
	var numeros = [ "1","2","3","4","5","6","7","8","9","10",
					"1","2","3","4","5","6","7","8","9","10"									
			  	  ]
	var numclic = 1; 
	var num1; 
	var num2; 
	var PrimeraPoscicion = 0; 

	//esta funcion crea el escenario 
	var creaEscenario = function()
		{
			var txt = "<table id = 'chess_board' cellpadding = '0' cellspacing = '0'>";
			var divTabla = "";
			for(var i = 1; i <= 4; i++)
			{	
				txt += "<tr>";
						
				if(i == 1)
				{					
					for(var c = 1; c<=5; c++)
					{
						txt += "<td id = '"+(c)+"'></td>";
					}					
				}

				if(i == 2)
				{					
					for(var c = 1; c<=5; c++)
					{
						txt += "<td id = '"+(c+5)+"'></td>";
					}					
				}

				if(i == 3)
				{					
					for(var c = 1; c<=5; c++)
					{
						txt += "<td id = '"+(c+10)+"'></td>";
					}					
				}

				if(i == 4)
				{					
					for(var c = 1; c<=5; c++)
					{
						txt += "<td id = '"+(c+15)+"'></td>";
					}					
				}
				txt += "</tr>";				
			}
			txt += "</table>";
			return txt;
		}
		nom_div("escenario").innerHTML = creaEscenario();


//esta funcion genera numeros aleatorios 
		var asignar_ficha_escenario = function ()
		{	
			var aux = 0;
			for(i = 0; i < 20; i++)
			{
				var numerosaleatorios = Math.round(Math.random() * 19);
				aux = numeros[i]; 
				numeros[i] = numeros[numerosaleatorios]; 
				numeros[numerosaleatorios] = aux; 
				//console.log(numeros)
			}

			var espacio = 0;
			for(i = 1; i <= 20; i++)
			{
				nom_div(i).innerHTML = numeros[espacio];
				espacio++;
				
			}
		}
		
		
		var Ocultar = function()
		{
			for(i = 1; i <= 20; i++)
			{				
				nom_div(i).innerHTML = "";
			}
		}

		for(i=1;i<=20;i++)
		{
			nom_div(i).addEventListener('click', function(event)	
			{
				var Recuadro = event.target.id; 
				if(numclic == 1)
				{
					PrimeraPoscicion = Recuadro;
					numclic = 2;
					num1 = nom_div(Recuadro).innerHTML = numeros[Recuadro-1];

				}else
				{
					numclic = 1;
					num2 = nom_div(Recuadro).innerHTML = numeros[Recuadro-1];

						if(numeros[num1] != numeros[num2])
						{
							alert("no son parejas");					
							nom_div(PrimeraPoscicion).innerHTML = "";
							nom_div(Recuadro).innerHTML = "";
						}								
				}			
				
			});
		}

	nom_div("boton").addEventListener('click', function(event)  
	{		
		asignar_ficha_escenario();
		setTimeout(Ocultar, 5000);
		
	});

		
		
	function nom_div(div)
	{
		return document.getElementById(div);
	}

}

