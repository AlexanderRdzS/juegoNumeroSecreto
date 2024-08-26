
let numeroMaximo = 10;
let numeroSecreto = generarNumeroSecreto();//variable global
let numeroIntentos = 1;

/*let titulo = document.querySelector('.titulo');
//la estructura de document.querySelector('.class'); nos permite llamar al propio elemento html y guardarlo en na variable para poder manipularlo.
titulo.innerHTML = 'Juego del numero secreto';
//la estructura .innerHTML = 'Juego del numero secreto'; nos permite asignarle un valor, en este caso de texto para que lo pueda mostrar en pantalla
*/

/* Esta función trabaja exactamente igual que el codigo anterior, llama al elemento html para poder modificarlo a nuestra preferencia
esta funcion hace que el codigo sea mas escalable, esto siginifica que si necesitamos modificar mas elementos del html mediante JS esta función nos facilita ese trabajo.
lo que estamos haciendo es asignarle dos variables genéricas, las cuales están en el paréntesis */
function asignarTextoElemento(element, text) {
    let elementoHTML = document.querySelector(element);
    elementoHTML.innerHTML = text;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('secretnumber').value);
    console.log('numero secreto: ' + numeroSecreto);
    console.log('numero de usuario: ' + numeroDeUsuario);
    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('.titulo', '¡¡Felicidades!!');
        asignarTextoElemento('.mensaje', `Acertaste el numero secreto en ${numeroIntentos} ${(numeroIntentos === 1 ? 'intento' : 'Intentos')}`);
        document.querySelector('.btnNewGame').removeAttribute('disabled');
        document.querySelector('.btnNewGame').setAttribute('style', 'background: #1875E8');
        document.querySelector('.btnTry').setAttribute('disabled', true);
        document.querySelector('.btnTry').setAttribute('style', 'background: #aec1d8');
    } else {
        asignarTextoElemento('.mensaje', 'lo lamento, inténtalo otra vez.');
        numeroIntentos ++;
        console.log(numeroIntentos);
        limpiarCaja();
    }

}

function limpiarCaja() {
    document.querySelector('#secretnumber').value = '';
}

//funcion paar generar un numero random
function generarNumeroSecreto() {
    return Math.floor(Math.random()*numeroMaximo)+1;
    //return numeroSecreto; //el return nos sirve para indicar que cuando se ejecute una función esta nos va a devolver un valor 
}

function reiniciarJuego() {
    numeroIntentos = 1;
    limpiarCaja();
    numeroSecreto = generarNumeroSecreto();
    asignarTextoElemento('.titulo', 'Juego del numero secreto!');
    asignarTextoElemento('.mensaje', '');
    document.querySelector('.btnNewGame').setAttribute('disabled', true);
    document.querySelector('.btnNewGame').setAttribute('style', 'background: #aec1d8');
    document.querySelector('.btnTry').removeAttribute('disabled');
    document.querySelector('.btnTry').setAttribute('style', 'background: #1875E8');
}

asignarTextoElemento('.titulo', 'Juego del numero secreto!');//al poner el nombre de esta manera lo que hacemos es ejecutar la funcion js sin necesidad de tener un evento que la active
/* posteriormente llamamos a la función de esta manera, entre paréntesis lo que hacemos es indicar el elemento que se va a modificar, en este caso el texto que queremos que 
aparezca en pantalla, si necesitaramos editar algun otro elemento lo unico que necesitamos hace es llamar a la funcion con los nuevos parametros 
asignarTextoElemento('element', 'text');*/