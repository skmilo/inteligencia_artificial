/*
 *******************inteligencia artificial************************************
 * universidad de cundinamarca ext chia ingenieria de sistemas 8 semestre 
 * ***************PIEDRA PAPEL TIJERAS SPOCK LAGARTO***************************
 */
package piedra;
/**
 *
 * @author skmilo
 */
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;
import java.util.Random;
public class Piedra {
    
    
    public static void main(String[] args) {
 int numMaquina;
 System.out.println("bienvenido al piedra papel tijera spock lagarto");
 System.out.println("digite su opciion 1-piedra 2-papel 3-tijera 4-spock 5-lagarto");
 int n;
for(;;){
Scanner sc = new Scanner(System.in);
System.out.print("Introduzca su eleccion numero entero: ");
n = sc.nextInt();
    if (n==1){
    System.out.println( "usuario:"+" "+n+"-piedra");    
}else 
    if (n==2){
    System.out.println( "usuario:"+" "+n+"-papel");
} else 
    if (n==3){
    System.out.println( "usuario:"+" "+n+"-tijeras");
}  else 
    if (n==4){
    System.out.println( "usuario:"+" "+n+"-spock");
}else 
    if (n==5){
    System.out.println( "usuario:"+" "+n+"-lagarto");
}else
        if (n>5){
            
                 System.out.println("numero no admitido favor digite una opcion del 1 al 5");
        }
    
      numMaquina=(int)(Math.random()*5+1);
         switch (numMaquina){
         
         case 1:
            if(numMaquina==1){
         System.out.println("maquina:"+" "+numMaquina+"-piedra");
            }break;
         case 2:
            if(numMaquina==2){
         System.out.println("maquina:"+" "+numMaquina+"-papel");
            }break;   
         case 3:
            if(numMaquina==3){
         System.out.println("maquina:"+" "+numMaquina+"-tijeras");
            }break;
         case 4:
            if(numMaquina==4){
         System.out.println("maquina:"+" "+numMaquina+"-spock");
            }break;
         case 5:
            if(numMaquina==5){
         System.out.println("maquina:"+" "+numMaquina+"-lagarto");
            }break;
                 
     }
     
           if (numMaquina==n){
               System.out.println("empate");
           }
           if (numMaquina==1&n==2){
                System.out.println("gana usuario papel cubre la piedra");
             }else if (numMaquina==2&n==1){
                System.out.println("gana computador papel cubre la piedra");
             }
            if (numMaquina==2&n==3){
                System.out.println("gana usuario tijeras cortan el papel");
             }else if (numMaquina==3&n==2){
                System.out.println("gana computador tijeras cortan el papel2");
             }
             if (numMaquina==5&n==1){
                System.out.println("gana usuario la piedra aplasta al lagarto");
             }else if (numMaquina==1&n==5){
                System.out.println("gana computador la piedra aplasta al lagarto");
             }
              if (numMaquina==4&n==5){
                System.out.println("gana usuario el lagarto envenena al spock");
             }else if (numMaquina==5&n==4){
                System.out.println("gana computador el lagarto envenena al spock");
             }
              if (numMaquina==3&n==4){
                System.out.println("gana usuario el spock destroza las tijeras");
             }else if (numMaquina==4&n==3){
                System.out.println("gana computador el spock destroza las tijeras");
             }
              if (numMaquina==5&n==3){
                System.out.println("gana usuario las tijeras decapitan el lagarto");
             }else if (numMaquina==3&n==5){
                System.out.println("gana computador las tijeras decapitan al lagarto");
             }
              if (numMaquina==2&n==5){
                System.out.println("gana usuario el lagarto se come el papel");
             }else if (numMaquina==5&n==2){
                System.out.println("gana computador el lagarto se come el papel");
             }
              if (numMaquina==4&n==2){
                System.out.println("gana usuario el papel refuta el spock");
             }else if (numMaquina==2&n==4){
                System.out.println("gana computador el papel refuta el spock");
             }
              if (numMaquina==1&n==4){
                System.out.println("gana usuario el spock vaporiza la piedra");
             }else if (numMaquina==4&n==1){
                System.out.println("gana computador el spock vaporiza la piedra");
             }
              if (numMaquina==3&n==1){
                System.out.println("gana usuario la piedra aplasta las tijeras");
             }else if (numMaquina==1&n==3){
                System.out.println("gana computador la piedra aplasta las tijeras");
             }
    }
    }
    }

//System.out.println("piedra"+numMaquina+"su opcion"+n+"empate");
    

    

