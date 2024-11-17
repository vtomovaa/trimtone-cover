document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            menu.classList.remove('active');
        }
    });
});