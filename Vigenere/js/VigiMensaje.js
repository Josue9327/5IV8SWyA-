





function main_cifrar() {
    var entrada = document.getElementById("cadena").value.toUpperCase();
    var clave = document.getElementById("clave").value.toUpperCase();
    document.getElementById("resultado").value = encriptarTextoClaro(entrada, clave);
}

function main_descifrar() {
    var entrada = document.getElementById("cadena").value.toUpperCase();
    var clave = document.getElementById("clave").value.toUpperCase();
    document.getElementById("resultado").value = desencriptarTextoClaro(entrada, clave);
}








//Metodos para Cifrar    

function encriptarTextoClaro(textoClaro, textoClave) {
    var textoCifrado = "";
    var claveCompleta = "";
    var indice = 0;

    //aqui lo que estamos haciendo es rellenar n veces la clave respecto del mensaje
    for (var i = 0; i < textoClaro.length; i++) {
        for (var j = 0; j < textoClave.length; j++) {
            //vamos a comparar el tamaño del mensaje vs clave
            if (claveCompleta.length < textoClaro.length) {
                if (textoClaro.charAt(indice) != ' ') {
                    claveCompleta += textoClave.charAt(j) + "";
                } else {
                    claveCompleta += " ";
                    j--;
                }
                indice++;
            }
        }
    }
    for (var i = 0; i < textoClaro.length; i++) {
        var TextoClaro = textoClaro.charAt(i);
        var TextoClave = claveCompleta.charAt(i);

        if (TextoClaro != ' ') {
            textoCifrado += getTextoCifrado(TextoClaro, TextoClave) + "";
        } else {
            textoCifrado += " ";
        }
    }
    return textoCifrado;
}

var tablaCesar = ['A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'];


function getTextoCifrado(TextoClaro, TextoClave) {
    var indiceX = 0;
    var indiceY = 0;

    for (var i = 0; i < tablaCesar.length; i++) {
        if (TextoClaro == tablaCesar[i]) {
            indiceX = i;
            break;
        }
    }

    for (var j = 0; j < tablaCesar.length; j++) {
        if (TextoClave == tablaCesar[j]) {
            indiceY = j;
            break;
        }
    }
    return tablaCesar[(indiceX + indiceY) % 27];
}

//Metodos para Descifrar

function desencriptarTextoClaro(textoCifrado, textoClave) {
    var textoClaro = "";
    var claveCompleta = "";
    var indice = 0;

    //aqui lo que estamos haciendo es rellenar n veces la clave respecto del mensaje
    for (var i = 0; i < textoCifrado.length; i++) {
        for (var j = 0; j < textoClave.length; j++) {
            //vamos a comparar el tamaño del mensaje vs clave
            if (claveCompleta.length < textoCifrado.length) {
                if (textoCifrado.charAt(indice) != ' ') {
                    claveCompleta += textoClave.charAt(j) + "";
                } else {
                    claveCompleta += " ";
                    j--;
                }
                indice++;
            }
        }
    }

    for (var i = 0; i < textoCifrado.length; i++) {
        var TextoCifrado = textoCifrado.charAt(i);
        var TextoClave = claveCompleta.charAt(i);

        if (TextoCifrado != ' ') {
            textoClaro += getTextoDescifrado(TextoCifrado, TextoClave) + "";
        } else {
            textoClaro += " ";
        }
    }
    return textoClaro;
}

var tablaCesar = ['A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'];


function getTextoDescifrado(TextoCifrado, TextoClave) {
    var indiceTextoCifrado = 0;
    var indiceTextoClave = 0;

    for (var i = 0; i < tablaCesar.length; i++) {
        if (TextoCifrado == tablaCesar[i]) {
            indiceTextoCifrado = i;
            break;
        }
    }

    for (var j = 0; j < tablaCesar.length; j++) {
        if (TextoClave == tablaCesar[j]) {
            indiceTextoClave = j;
            break;
        }
    }
    if (indiceTextoCifrado >= indiceTextoClave) {
        return tablaCesar[(indiceTextoCifrado - indiceTextoClave) % 27];
    } else {
        return tablaCesar[27 - (indiceTextoClave - indiceTextoCifrado)];
    }

}


