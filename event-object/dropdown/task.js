const dropValue = document.querySelector('.dropdown__value');
const dropList = document.querySelector('.dropdown__list');
const dropLinks = [...document.querySelectorAll('.dropdown__link')];

dropValue.addEventListener('click', () => {
    dropList.classList.toggle('dropdown__list_active');
});

dropLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        dropList.classList.remove('dropdown__list_active');
        dropValue.textContent = event.target.textContent;
    });
});