function validar_cod(){
	var cadena = document.getElementById("cadena").value;
	var posicion = document.getElementById("clave").value;
	if(cadena.length == 0 || posicion.length == 0){
		document.getElementById("resultado").innerHTML = "no puede dejar los campos vacios";
	}else{
		main_cifrar();
	}
	
}
function validar_decod(){
	var cadena = document.getElementById("cadena").value;
	var posicion = document.getElementById("clave").value;
	if(cadena.length == 0 || posicion.length == 0){
		document.getElementById("resultado").value = "no puede dejar los campos vacios";
	}else{
		main_descifrar();
	}
	
}
function validar_entrada_cadena(e){
	var teclado = (document.all) ? e.keycode : e.which;
  		var patron = /[a-zA-ZñÑ\s]/;
  		var tec = String.fromCharCode(teclado);
  		return patron.test(tec);

}

