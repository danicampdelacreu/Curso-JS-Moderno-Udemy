// INICIO PROYECTO API IMAGENES //
// KEY API = 41364789-abb2225bbfc3faae3dc582457 //

const resultado  = document.querySelector('#resultado');
const formulario  = document.querySelector('#formulario');

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e){
    e.preventDefault();

    const terminoBusqueda= document.querySelector('#termino').value;

    if(terminoBusqueda === ''){
        mostrarAlerta('Agregar un termino de busqueda');
        return;
    }

    buscarImagens(terminoBusqueda);
}

function mostrarAlerta(mensaje){

    const exsisteAlerta = document.querySelector('.bg-red-100');

    if(!exsisteAlerta) {
        const alerta = document.createElement('p');
    alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');

    alerta.innerHTML = `
    <strong class= "font-bold">Error!</strong>
    <span class="block sm:inline">${mensaje}</span>
    `;

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
    }

    
}

function buscarImagens(termino) {
    const key ='41364789-abb2225bbfc3faae3dc582457';
    const url =`https://pixabay.com/api/?key=${key}&q=${termino}`;

    fetch(url)
        .then(res => res.json())
        .then(resultado => {
            console.log(resultado);
        })
}