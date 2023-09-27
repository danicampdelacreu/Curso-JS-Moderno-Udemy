//----------PROYECTO BUSCADOR COCHES------------//

// Variable
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const max = new Date().getFullYear(); // maximo año actual
const min = max - 15; // minimo año 10 menos del acutal


// eventos
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(); // muestra lo autos al cargar

    //Llena las opaciones de años
    llenarSelect();
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