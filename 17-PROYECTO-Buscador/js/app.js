//----------PROYECTO BUSCADOR COCHES------------//

// Variable
const marca = document.querySelector('#marca');
const year= document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color= document.querySelector('#color');

// contenedor para resultado
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear(); // maximo año actual
const min = max - 15; // minimo año 10 menos del acutal

// generar objeto con la busqueda

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

// eventos
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(); // muestra lo autos al cargar

    //Llena las opaciones de años
    llenarSelect();
})

// Event listener para los select de busqueda

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
})

year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;

})

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
})

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    //console.log(datosBusqueda); revisar que todo funcione
})


// funciones
function mostrarAutos(){
    autos.forEach(auto =>{
        const { marca, modelo, year, precio, puertas, color, transmision} = auto;
        const autoHTML = document.createElement('P');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} PUERTAS  - transmision : ${transmision} -
            Precio: ${precio} - Color: ${color}
        `;


        // insertar resultado
        resultado.appendChild(autoHTML)
    })
}

// Genera los años del select
function llenarSelect() {
    
    for (let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // agrega las opciones de año al select
    }   
}

// Funcion Filtrar auto

function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca);

    console.log(resultado);
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if(marca){
        return auto.marca === marca;
    }
    return auto;
}