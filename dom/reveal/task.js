const blocks = document.querySelectorAll('.reveal');

const isVisible = function (elem) {
    const { innerHeight } = window;
    const { top } = elem.getBoundingClientRect();
    if (top < innerHeight && top > 0) {
        return true;  
    } else {
        return false;
    }
    
}

const showVisible = function () {
    for (let block of blocks) {
        if (isVisible(block)) {
            block.classList.add('reveal_active');
        }
    }
};

showVisible();
window.onscroll = showVisible;