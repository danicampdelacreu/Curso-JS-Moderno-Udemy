// PROYECTO GASTOS SEMANALES  //

// Variable y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastolistado = document.querySelector('#gastos ul');

// Eventos

eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
}

// Classes
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto= Number( presupuesto );
        this.restante = Number( presupuesto );
        this.gastos = [];
    }
}

class UI {
    insertarPresupuesto ( cantidad ){
        // extremos valor
        const { presupuesto , restante } = cantidad;

        // agregamos al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante
    }
}


// Instanciar
const ui = new UI();
let presupuesto;
// Funciones

function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');
 
   // console.log(Number( presupuestoUsuario ) );

    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN( presupuestoUsuario ) || presupuestoUsuario <= 0 ){
        window.location.reload();
    }

    // presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
}