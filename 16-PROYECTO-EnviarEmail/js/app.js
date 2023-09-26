//----PROYECTO ENVIO EMAIL----

document.addEventListener('DOMContentLoaded', function () {

    // Seleccionar elementos interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    //console.log(inputMensaje); comprobar que nos envie a log la info de cada input

    // Assingar eventos 

    // (blur) cada vez que salimos del input
    // (input) cada vez que escribamos en el input (validacion a tiempo real)

    inputEmail.addEventListener('blur', validar);// llamamos a la funcion cuando suceda el evento si ponemos validar() la llamamos sin que suceda el evento

    inputAsunto.addEventListener('blur', validar);

    inputMensaje.addEventListener('blur', validar);

    // esta funcion nos trae el valor del elemento que escribimos en el input
    function validar(e) {
        console.log(e.target.value);

    }
});