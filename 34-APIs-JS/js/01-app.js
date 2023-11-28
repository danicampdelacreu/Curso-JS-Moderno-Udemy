// APi's Notificacion //

const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then( res  => {
            console.log('el resultado es', res);
        })
})