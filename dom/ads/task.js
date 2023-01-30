const rotator = document.querySelector('.rotator');
const rotators = Array.from(document.querySelectorAll('.rotator__case'));
let item = rotators[rotators.findIndex(item => item.classList.contains('rotator__case_active'))];
item.style.color = item.dataset.color;
let timeoutDelay = item.dataset.speed;

let timeoutId = setTimeout(function rotate(item) {
    item = rotators[rotators.findIndex(item => item.classList.contains('rotator__case_active'))];
    if (item.nextElementSibling !== null) {
        item.classList.remove('rotator__case_active');
        item.nextElementSibling.classList.add('rotator__case_active');
        item.nextElementSibling.style.color = item.nextElementSibling.dataset.color;
        timeoutDelay = item.nextElementSibling.dataset.speed;
    } else {
        item.classList.remove('rotator__case_active');
        item = rotator.firstElementChild.classList.add('rotator__case_active');
        timeoutDelay = rotator.firstElementChild.dataset.speed;
    }
    timeoutId = setTimeout(rotate, timeoutDelay);
}, timeoutDelay);