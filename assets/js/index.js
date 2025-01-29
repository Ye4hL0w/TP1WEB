document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const liens = document.querySelector('.liens');
    const lienLi = document.querySelectorAll('.liens li');

    burgerMenu?.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        liens.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    lienLi.forEach(item => {
        item.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            liens.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    window.addEventListener('scroll', () => {
        if (liens.classList.contains('active')) {
            burgerMenu.classList.remove('active');
            liens.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});