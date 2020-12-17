var datos = new Array();
var nodoTd = document.getElementsByTagName('td');
var numFila;
var enEdicion = true;
function creaCajasTexto(inicio, fin){
	var nameForm = ['alimento', 'calorias', 'grasas', 'proteina', 'carbohidratos'];
	var instruccion = new Array();
	for(var i=inicio; i<fin; i++){
			datos[i-inicio] = nodoTd[i].textContent;
			instruccion[i-inicio] = '<input type=\'text\' style=\'width:70px\' name=\'' + nameForm[i-inicio] + '\' value=\'' + datos[i-inicio] + '\'>';
			nodoTd[i].innerHTML = instruccion[i-inicio];
		}
		cambiarEnEdicion(fin);
}
function editarFila(numeroFila){
	if(numeroFila==1 && enEdicion==true){creaCajasTexto(0, 5);}
	if(numeroFila==2 && enEdicion==true){creaCajasTexto(6, 11);}
	if(numeroFila==3 && enEdicion==true){creaCajasTexto(12, 17);}
	if(numeroFila==4 && enEdicion==true){creaCajasTexto(18, 23);}	
	if (enEdicion==true){
		var nodoDiv = document.getElementById('botonesForm');
		nodoDiv.innerHTML = '<span id=\'texto1\'>Pulse Aceptar para guardar los cambios o cancelar para anularlos.</span><br/>' +
			'<input type=\'submit\' value=\'Aceptar\' class=\'botonForm\'><input type=\'reset\' value=\'Cancelar\' class=\'botonForm\' onclick=\'reiniciarFila()\'>';
		numFila = numeroFila;
		enEdicion = false;
	}else{
		alert('Solo se puede editar una línea. Recargue la página para poder editar.')
	}
}
function reiniciarFila(){
	var inicio; var fin;
	var nodoDiv = document.getElementById('botonesForm');
	if(numFila==1){inicio=0; fin=5;}
	if(numFila==2){inicio=6; fin=11;}
	if(numFila==3){inicio=12; fin=17;}
	if(numFila==4){inicio=18; fin=23;}
	var instruccion = new Array();
	for(var i=inicio; i<fin; i++){
		instruccion[i-inicio] = datos[i-inicio];
		nodoTd[i].innerHTML = instruccion[i-inicio];
	}
	cambiarEnEdicion(fin);
	enEdicion = true;
	nodoDiv.innerHTML = '';
}
function cambiarEnEdicion(numEdicion){
	if(enEdicion==true){
		nodoTd[numEdicion].textContent = 'En edición';
		nodoTd[numEdicion].style.color = 'gray';
	}else{
		nodoTd[numEdicion].textContent = 'Editar';
		nodoTd[numEdicion].style.color = '#3300FF';
	}
}