const userSign = document.getElementById('signin');
const signForm = document.getElementById('signin__form');
const userWelcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

if (localStorage.getItem('id')) {
    userSign.classList.remove('signin_active');
    userWelcome.classList.add('welcome_active');
    userId.textContent = localStorage.getItem('id');
}

signForm.addEventListener('submit', evt => {
    evt.preventDefault();

    const data = new FormData(signForm);
    const xhr = new XMLHttpRequest();
    const url = 'https://students.netoservices.ru/nestjs-backend/auth';

    xhr.open('POST', url, true);
    xhr.responseType = 'json';
    xhr.onload = () => {
        if (xhr.response.success == true) {
            localStorage.setItem('id', xhr.response.user_id);
            signForm.reset();
            userSign.classList.remove('signin_active');
            userWelcome.classList.add('welcome_active');
            userId.textContent = xhr.response.user_id;
        } else {
            alert('Неверный логин/пароль');
            signForm.reset();
        }
    }
    xhr.send(data);
});

userWelcome.querySelector('.btn').addEventListener('click', evt => {
    evt.preventDefault();

    localStorage.clear();
    userSign.classList.add('signin_active');
    userWelcome.classList.remove('welcome_active');
})