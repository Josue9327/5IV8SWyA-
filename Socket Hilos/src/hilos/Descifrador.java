
package hilos;

import java.math.BigInteger;

public class Descifrador {
    public String des(BigInteger[] cifrado, BigInteger d, BigInteger n){
        BigInteger[] descifrado = new BigInteger[cifrado.length];

        //primero tenemos que recorrerlo

        for(int i = 0; i<descifrado.length; i++){
            //aplicado el descifrado
            descifrado[i] = cifrado[i].modPow(d,n);
        }

        //vamos a necesitar un arreglo de caracteres para toda la informacion
        char[] charArray = new char[descifrado.length];

        for(int i = 0; i<charArray.length; i++){
            charArray[i] = (char)(descifrado[i].intValue()); 
        }
        return (new String(charArray));
       
       
    
}
}