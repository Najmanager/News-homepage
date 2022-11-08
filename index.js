const menuOpenBtn = document.querySelector('.menu-open-btn')
const menuCloseBtn = document.querySelector('.menu-close-btn')
const menu = document.querySelector('.main-nav')

menuOpenBtn.addEventListener('click', function () {
    menuCloseBtn.classList.add('is-open')
    menuOpenBtn.classList.add('is-close')
    menu.style.left = "40%"
    // menu.style.display = "block"
})

menuCloseBtn.addEventListener('click', function () {
    menuCloseBtn.classList.remove('is-open')
    menuOpenBtn.classList.remove('is-close')
    menu.style.left = "100%"
    // menu.style.display = "none"
})