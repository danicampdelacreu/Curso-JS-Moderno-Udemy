// ---------PROYECTO CARRITO------

// varibable

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    // Cuando agregas un curso clickando "Agrefar al Carrito"
    listaCursos.addEventListener('click', agregarCurso)
}



// Funciones
function agregarCurso(e) {
    e.preventDefault();// prevenmos la accion por defecto

    if (e.target.classList.contains('agregar-carrito')) { // asegurar que se clicke solo en agregar carrito y no en cualquier parte de div
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// Lee contenido HTML y extrae info del curso cuando hacemos click
function leerDatosCurso(curso) {
    //console.log(curso); ver todo elemento de curso

    // crear objeto con el contenido del curso actual

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'), // para seleccionar atributo dentro de la a
        cantidad: 1,
    }

    //console.log(infoCurso); ver elementos que vamos teniendo dentro de infoCurso 
    //Agrega elementos al array carrito
    articulosCarrito = [...articulosCarrito, infoCurso];//... tomamos copia del carrito como esta, ( lo vamos llenando cada vez que agregamos algo de nuevo)

    console.log(articulosCarrito);

    carritoHTML();// llamamos funcion de mas abajo
}

// Muestra el carrito de compras en HTML

function carritoHTML() {

    // limpiar HTML porque no vaya dupliquemos los arrays en el carrito
    limpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr');// tr por el html que ya tenemos creado como carrito
        row.innerHTML = `
            <td>
                ${curso.titulo}
            </td>
        `;

        // Agrega HTML del carrito en el body

        contenedorCarrito.appendChild(row);
    })
}

// elimina los cursos del tbody

function limpiarHTML() {
    //forma lenta
    //  contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
    // while limpia array antrior, antes de crear un array nuevo, porque mientras tenga hijos
    // se va a ejectura el removeChild, cuando no tiene nada pasa a ejectura articulos.carrito 
    // dentro de la funcion carritoHTML
}