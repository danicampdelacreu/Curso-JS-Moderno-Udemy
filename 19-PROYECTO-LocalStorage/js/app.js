// proyecto TWEETS localStorage

// Variable
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets =[];


//EventListenners
EventListenners();

function EventListenners() {
    // Cuando usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', ()=>{
        tweets = JSON.parse( localStorage.getItem('tweets')) || [];

        console.log(tweets);

        crearHTML();
    });
}



//Funciones
function agregarTweet(e) {
    e.preventDefault();

    //Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;
    
    // validacion...
    if(tweet === ''){
      mostrarError('Un tweet no puede enviarse vacio');
        return;// evita ejecuten mas lineas de codigo
    }

    const tweetObj = {
        id:  Date.now(),
        tweet // = tweet : tweet
    }
    // añdir al arreglo de tweets
    tweets = [...tweets, tweetObj];
    // una vez agregado cremos HTML
    crearHTML();

    // reiniciar el fromulario

    formulario.reset();

}

 // mostrar mensaje de error
 function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //insertar en el contendio
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // elimina alert despues de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
 }

 // Muestra listado tweets

 function crearHTML() {

    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach(tweet =>{
            //crear HTML
            const li = document.createElement('li');

            // añadir el texto
            li.innerText = tweet.tweet;
            
            // insertar en el html
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
 }
 // Agregar tweets a localStorage
 function sincronizarStorage() {
    localStorage.setItem('tweets',JSON.stringify(tweets))
 }
 // limpar HTML

 function limpiarHTML() {
    while( listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
 }