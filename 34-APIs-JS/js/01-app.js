// APi's Notificacion //

const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then( res  => {
            console.log('el resultado es', res);
        })
})

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted'){
        new Notification('Esta es la notificacion')
        console.log('Se notifico correcto');
    }
});