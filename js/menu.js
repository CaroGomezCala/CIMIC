const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu-navegation');

/*Permitiendo que aparezca el menu de la barra lateral
  al momento de click en el icono menu
*/
hamburger.addEventListener('click', () => {
    menu.classList.toggle('spread');
})

// Ocultar nuevamente el menu

window.addEventListener('click', e=> {
    if (menu.classList.contains('spread') && e.target != menu && e.target != hamburger) {
        menu.classList.toggle('spread');
    }
})

