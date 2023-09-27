//----------PROYECTO BUSCADOR COCHES------------//

// Variable
const resultado = document.querySelector('#resultado');

// eventos
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos();
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