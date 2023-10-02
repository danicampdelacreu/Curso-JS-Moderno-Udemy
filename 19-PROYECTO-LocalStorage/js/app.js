// proyecto TWEETS localStorage

// Variable
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets =[];


//EventListenners
EventListenners();

function EventListenners() {
    formulario.addEventListener('submit', agregarTweet);
}



//Funciones
function agregarTweet(e) {
    e.preventDefault();

    console.log('agregando tweet');
}
