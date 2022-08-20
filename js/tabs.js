// Tabs
const tabsItems = document.querySelectorAll('.tabs__item');
const tabsBlock = document.querySelectorAll('.tabs__block');

if (tabsItems && tabsBlock) {
    tabsItems.forEach((item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            const id = e.target.getAttribute('href').replace('#', '');

            tabsItems.forEach((child) => child.classList.remove('_active'));
            tabsBlock.forEach((child) => child.classList.remove('_active'));

            item.classList.add('_active');
            document.getElementById(id).classList.add('_active');
        });
    });
}