const editor = document.getElementById('editor');

editor.addEventListener('input', () => {
    localStorage.setItem('text', editor.value);
});

editor.value = localStorage.getItem('text');

let resetButton = document.createElement('button');
resetButton.textContent = "Очистить содержимое";
document.querySelector('.card').append(resetButton);
resetButton.addEventListener('click', evt => {
    evt.preventDefault();
    editor.value = '';
    delete localStorage.text;
})