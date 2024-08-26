/**

1.- Crear una función que muestre "¡Hola, mundo!" en la consola.
2.- Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
3.- Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
4.- Crear una función que reciba tres números como parámetros y devuelva su promedio.
5.- Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
6.- Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

 */

let resultado = 0;

//1.-
function holaMundo() {
    console.log("holaMundo");
    return;
}

//2.- 
function saludo(nombre){
    console.log(`¡Hola, ${nombre}!`);
    return;
}

//3.-
function numeroDoble(numero){
    resultado = (numero * 2);
    console.log(resultado);
}

//4.-
function promedio(x, y, z) {
    resultado = (x + y + z)/3;
    console.log(`El promedio es ${resultado}`);
}

//5.-
function compararDosNumeros(x, y) {
    if (x > y){
        console.log(`El numero ${x} es el mayor`);
    } else {
        console.log(`El numero ${y} es el mayor`);
    }
}

//6.-
function numeroCuadrado(numero){
    resultado = (numero * numero);
    console.log(resultado);
}

holaMundo();
saludo('Alexander');
numeroDoble(2);
promedio(9,8,10);
compararDosNumeros(8,10);
numeroCuadrado(4);
