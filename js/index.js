import { request, requestID } from './requesApi.service.js';
import { UI, UIDetails } from './IU.js';

const form = document.querySelector('#formulario');
const nameMovie = document.querySelector('#movie');
const listadoPeliculas = document.querySelector('#listadoPeliculas');
const error = document.querySelector('#alerta');

const movieDetails = document.querySelector('#movieDetails');

let regresion;



addEventListener('DOMContentLoaded', async (e) => {

    const response = await request()
    UI(response,listadoPeliculas,error)

})

form.addEventListener('submit', async (e) => { 
    e.preventDefault()
    let movie = nameMovie.value

    const response = await request(movie);
    UI(response,listadoPeliculas,error);
    form.reset();
    
});

addEventListener('keyup', async (e) => {
    // e.preventDefault()
    if(e.keyCode === 13)
    {
        let movie = nameMovie.value
    
        const response = await request(movie);
        UI(response,listadoPeliculas,error);
        form.reset();
    }
})

listadoPeliculas.addEventListener('click', async (e) => {
    e.preventDefault();
    if(e.target.classList.contains('img'))
    {
        const response = await requestID(e.target.id);
        UIDetails(response,movieDetails,listadoPeliculas,error);
    }
    regresion = document.querySelector('#regression');

    regresion.addEventListener('click', async (e) => {
        e.preventDefault();
        movieDetails.innerHTML = '';
        const response = await request()
        UI(response,listadoPeliculas,error);
    })

})

