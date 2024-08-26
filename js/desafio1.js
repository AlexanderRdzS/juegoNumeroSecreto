/* 1.- Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. 
Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".

2.- Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".

3.- Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta. */

function intentoDeUsuario(){
/* 1.- 

    let ciudad = "";
    ciudad = prompt("Menciona una ciudad de México");
    alert(`Estuve en ${ciudad} y me acorde de ti`);

2.-
    alert('yo amo JS'); 

3.-  
*/
    let num1, num2, resultado;
    num1 = parseInt(prompt('Ingresa el primer numero'));
    num2 = parseInt(prompt('Ingresa el segundo numero'));

    resultado = num1 + num2;

    alert(`El resultado de la suma de los dos números es ${resultado}`);
}