// IndexedDB //

/* 
- Api en JS para almacenar grandes datos
- Almacenar String, booleanos, inlcuso archivos
- No tiene limites, + de 50mb pide permiso pero puede
- Soporta las ultimas versiones de navegadores
- BBDD base datos completa, van a estar visbles en una pestaña en el navegador, Cuidado con passwords...
- 
*/

document.addEventListener('DOMContentLoaded', () => {
    crmDB();
})

function crmDB() {
    // crear bbdd version 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    // si hay error
    crmDB.onerror = function() {
        console.log('Hubo un error al crear BBDD');
    }

    // si se creo bien
    crmDB.onsuccess = function () {
        console.log('Base de datos Creada correctamente');
    }
    // configuracion de la BBDD
    crmDB.onupgradeneeded = function (){
        console.log('Este metodo solo se ejecuta una vez');
    }
}

// Abrimos consola, escribimos window.indexDB y nos da todos los metodos que hay en indesDB