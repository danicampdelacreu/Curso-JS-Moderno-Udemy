//----PROYECTO ENVIO EMAIL----

document.addEventListener('DOMContentLoaded', function () {

    // Seleccionar elementos interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    //console.log(inputMensaje); comprobar que nos envie a log la info de cada input

    // Assingar eventos 

    // (blur) cada vez que salimos del input
    // (input) cada vez que escribamos en el input (validacion a tiempo real)

    inputEmail.addEventListener('blur', validar);// llamamos a la funcion cuando suceda el evento si ponemos validar() la llamamos sin que suceda el evento

    inputAsunto.addEventListener('blur', validar);

    inputMensaje.addEventListener('blur', validar);

    // esta funcion nos trae el valor del elemento que escribimos en el input
    function validar(e) {
        if (e.target.value.trim() === '') { // .trim() elimina los espacios
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement) //${e.target.id} hace que alert diga el id del input que salimos
        } else {                                                                            //e.target.parentElement pasamos ref del div que contiene level como input
            console.log('si hay algo');
        }

    }

    function mostrarAlerta(mensaje, referencia) {
        // console.log('hubo un error...');

        // comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) { // alerta con referencia nos revisar si hay classe .bg-red-600 en el div que estamos saliendo
            alerta.remove();// con el remove hace que nos elimine la alerta previa del div que hemos salido cuando se nos generan multiples alertes
        }

        // Generar alert en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        // Inyectar error al from , agregamos elemento con appendChild
        referencia.appendChild(error) // le decimos a formulario que agregue un hijo que sera (error) 
    }
});