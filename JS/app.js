var inicio = document.getElementById('inicio');
const loadingCircle = document.getElementById('loading-circle');

inicio.addEventListener('click', function(){
    loadingCircle.style.display = 'block';
    document.title = 'Cargando...';
        setTimeout(function() {
            location.href = 'index.html';
        }, 2000);
});

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.bx-menu');
    const CloseIcon = document.querySelector('.bx-x');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', function() {
        menu.style.display = 'block';
    });
    CloseIcon.addEventListener('click', function(){
        menu.style.display = "none";
    });
});