const hamburguesa = document.querySelector('.menu-hamburguesa');
const navegacion = document.querySelector('.navegacion')

document.addEventListener('DOMContentLoaded', ()=> {
    mostrarMenu()
});

function mostrarMenu(){
    hamburguesa.addEventListener('click', ()=> {
        navegacion.classList.toggle('ocultar');
    });
}