const fontSizeToggle = [...document.querySelectorAll('.font-size')];
const book = document.getElementById('book');

function closeActive (current = null) {
    fontSizeToggle.forEach(item => {
        if (item != current) {
            item.classList.remove('font-size_active');
        }
    });
}

function changeSize () {
    if (book.classList.contains('book_fs-big') || book.classList.contains('book_fs-small')) {
        book.classList.remove('book_fs-big') || book.classList.remove('book_fs-small');
    }
}

fontSizeToggle.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        closeActive(event.target);
        changeSize();
        event.target.classList.add('font-size_active')
        if (item.classList.contains('font-size_small')) {
            book.classList.add('book_fs-small');
        } else if (item.classList.contains('font-size_big')) {
            book.classList.toggle('book_fs-big');
        }
    });
})