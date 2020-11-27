/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package hilos;
import java.math.BigInteger;
import java.io.DataOutputStream;
import java.io.OutputStream;
import java.net.Socket;
import java.util.Scanner;

class Escribir extends Thread 
	{
	Socket socket;
	String name;
	Scanner entrada;
 	Escribir(Socket socket, String name){      //Recibe objeto de tipo Socket para identificar el Socket que está ejecutando el proceso y
                                                                                     // en el parámetro name recibirá como el cliente desea ser nombrado
		entrada = new Scanner(System.in);  //Objeto para recibir datos desde teclado
		this.socket=socket;
		this.name=name;
		start();  //Inicia el Hilo, se llama automáticamente al método run()
		}

    public void run(){
        
		try{
                    
			boolean terminar=false;
			String mensaje;
                        RSA rsa = new RSA(10);
			while(!terminar){      // Creamos bucle infinito para escritura
				
                                
                              
                                            System.out.println("¿Quiere descifrar algun msg? Escriba d, si quiere enviar msg escriba e");
                                            Scanner entrada2 = new Scanner(System.in);
                                            String opcion = entrada2.nextLine();
                                            if(opcion.equals("d")){
                                                System.out.println("¿Cuantos enteros son?");
                                                int op = entrada2.nextInt();
                                                BigInteger[] enteros = new BigInteger[op];
                                                for (int i = 0; i < op; i++) {
                                                    System.out.println("Ingrese el"+i+"entero");
                                                    int ent = entrada2.nextInt();
                                                    enteros[i] = BigInteger.valueOf(ent);
                                                }
                                                System.out.println("Ingrese n");
                                                int n = entrada2.nextInt();
                                                BigInteger n2 = BigInteger.valueOf(n);
                                                System.out.println("Ingrese d");
                                                int d = entrada2.nextInt();
                                                BigInteger d2 = BigInteger.valueOf(d);
                                                
                                                Descifrador des = new Descifrador();
                                                String descifrado = des.des(enteros, d2, n2);
                                                System.out.println("Mensaje descifrado: "+descifrado);
                                            }else{
                                                OutputStream os= socket.getOutputStream();
                                                DataOutputStream flujoDOS = new DataOutputStream(os);
                                                System.out.println("Escribe tu mensaje " + name +": ");
                                                mensaje=entrada.nextLine();
                                                
                                                String msn = "";
                                                BigInteger[] encriptado = rsa.encriptar(mensaje);
                                                for (int i = 0; i < encriptado.length; i++) {
                                                    msn+= encriptado[i].toString()+"\n";
                                                }
					flujoDOS.writeUTF(name+" dice: "+msn+"   Las claves son n="+rsa.damen()+" y d="+rsa.damed());  //Si no se ingresa salir, se envía mensaje de escritura
					}
				}
			socket.close();
			}
		catch(Exception e){
			System.out.println("Error");
			}
		}
	}

    

