const modal = document.getElementById('subscribe-modal');
const closeItem = document.querySelector('.modal__close');

closeItem.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = 'modalClose=true';
});


if (!document.cookie.includes('modalClose=true')) {
    modal.classList.add('modal_active');
}