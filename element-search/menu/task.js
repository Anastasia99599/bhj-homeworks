const links = [...document.querySelectorAll('.menu__link')];
const subMenu = [...document.querySelectorAll('.menu_sub')];

function closeSub (current = null) {
    subMenu.forEach(item => {
        if (item != current) item.classList.remove('menu_active');
    });
}

links.forEach(link => {
    link.addEventListener('click', (event) => {
        console.log(event);
        if (link.nextElementSibling) {
            event.preventDefault();
            closeSub(event.target.nextElementSibling);
            event.target.nextElementSibling.classList.toggle('menu_active');
            
        }
    });
})