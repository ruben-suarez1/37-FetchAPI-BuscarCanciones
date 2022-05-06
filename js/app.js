import API from './api.js';
import * as UI from './interfaz.js';

UI.formularioBuscar.addEventListener('submit', buscarCacion);

function buscarCacion(e) {
    e.preventDefault();

    //Obtener los datos del formulario 
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista === '' || cancion === '') {
        //El usuario deja un campo vacio
        UI.divMensajes.textContent = 'Error... Todos lo campos son obligatorios';
        UI.divMensajes.classList.add('error');

        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        }, 3000);

        return;
    }

    //Consultar API

    const busqueda = new API(cancion, artista);
    busqueda.consultarAPI();

}