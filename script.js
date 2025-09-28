document.addEventListener('DOMContentLoaded', function () {

    const menuBtn = document.getElementById('menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        body.classList.add('overflow-hidden'); 
    });

    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        body.classList.remove('overflow-hidden');
    });
});