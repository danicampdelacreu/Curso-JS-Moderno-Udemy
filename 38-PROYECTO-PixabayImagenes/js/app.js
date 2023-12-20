// INICIO PROYECTO API IMAGENES //
// KEY API = 41364789-abb2225bbfc3faae3dc582457 //

const resultado  = document.querySelector('#resultado');
const formulario  = document.querySelector('#formulario');

const registrosPorPagina = 40;
let totalPaginas;

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
    const url =`https://pixabay.com/api/?key=${key}&q=${termino}&per_page=100`;

    fetch(url)
        .then(res => res.json())
        .then(resultado => {
            //console.log(resultado)
            totalPaginas = calcularPaginas(resultado.totalHits);
            //console.log(totalPaginas);
            mostarImagenes(resultado.hits);
        })
}

function calcularPaginas(total) {
    return parseInt(Math.ceil(total / registrosPorPagina));
}

function mostarImagenes(imagenes) {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

    //iterar sobre el array de imagenes y construir HTML

    imagenes.forEach( imagen => {
        const { previewURL, likes, views, largeImageURL } = imagen;

        resultado.innerHTML +=`
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white">
                    <img class="w-full" src="${previewURL}">

                    <div class="p-4">
                        <p class="font-bold"> ${likes} <span class="font-light"> Likes </span> </p>
                        <p class="font-bold"> ${views} <span class="font-light"> Views </span> </p>

                        <a  
                            class="w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1 " 
                            href="${largeImageURL}" target="_blank" rel="noopener noreferrer"
                        >
                            Open image
                        </a>
                    </div>
                </div>
            </div>
            `;    
    })
}