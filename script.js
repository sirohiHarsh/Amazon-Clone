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

    const backToTop = document.getElementById('back-to-top');
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const searchInput = document.getElementById('search-input');
    const productCards = document.querySelectorAll('.product-card');

    searchInput.addEventListener('keyup', () => {
       
        const searchTerm = searchInput.value.toLowerCase();

        productCards.forEach(card => {

            const cardContent = card.textContent.toLowerCase();

            if (cardContent.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});