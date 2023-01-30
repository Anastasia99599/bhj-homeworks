const tabs = [...document.querySelectorAll('.tab')];
const contents = [...document.querySelectorAll('.tab__content')];


function tabActivate (index) {
    const tabIndex = tabs.findIndex(tab => tab.classList.contains('tab_active'));
    tabs[tabIndex].classList.toggle('tab_active');
    contents[tabIndex].classList.toggle('tab__content_active');

    tabs[index].classList.toggle('tab_active');
    contents[index].classList.toggle('tab__content_active');
}

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => {
        tabActivate(i);
    })
}