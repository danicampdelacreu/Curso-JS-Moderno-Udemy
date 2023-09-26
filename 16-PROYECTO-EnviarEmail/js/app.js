//----PROYECTO ENVIO EMAIL----

document.addEventListener('DOMContentLoaded', function () {

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }


    // Seleccionar elementos interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');

    //console.log(inputMensaje); comprobar que nos envie a log la info de cada input

    // Assingar eventos 

    // (blur) cada vez que salimos del campo (mas lento)
    // (input) cada vez que escribamos en el input (validacion a tiempo real)

    inputEmail.addEventListener('input', validar);// llamamos a la funcion cuando suceda el evento si ponemos validar() la llamamos sin que suceda el evento
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    btnReset.addEventListener('click',function(e){
        e.preventDefault();

        // reiniciar el el objeto array
        email.email='';
        email.asunto='';
        email.mensaje='';

        formulario.reset();
        comprobarEmail(); // llamamos funcion comprobarEmail
    })

    // esta funcion nos trae el valor del elemento que escribimos en el input
    function validar(e) {
        if (e.target.value.trim() === '') { // .trim() elimina los espacios
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement) //${e.target.id} hace que alert diga el id del input que salimos
            email[e.target.name] = '';// reiniciamos el objeto
            comprobarEmail();
            return;// detiene la ejecucion del codigo cuando if es true
        }

        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('email no es valido', e.target.parentElement) // pasamos referencia despues del mesaje para que valide
            email[e.target.name] = '';// reniciamos el objecto
            comprobarEmail();
            return;
        }

        limpiarAlerta(e.target.parentElement);

        // asignar valores 

        email[e.target.name] = e.target.value.trim().toLowerCase();

        // comprobar el objeto email

        comprobarEmail();

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

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) { // alerta con referencia nos revisar si hay classe .bg-red-600 en el div que estamos saliendo
            alerta.remove();// con el remove hace que nos elimine la alerta previa del div que hemos salido cuando se nos generan multiples alertes
        }
    }

    function validarEmail(email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email)
        return resultado;
    }

    function comprobarEmail() {
        // console.log(email); vemos el array
        if (Object.values(email).includes('')) { // lado derecho del array lo que el usuario ha escrito, includes nos devuelve true minetras un parametro del array este vacio, cuando estan llenos devuelve false
            btnSubmit.classList.add('opacity-50');
            btnSubmit.desabled = true;
            return;
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.desabled = false;
    }
});