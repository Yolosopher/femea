// HAMBURGER
const hamburger = document.querySelector('.hamburger')
const header__nav = document.querySelector('.header__nav')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open')
    header__nav.classList.toggle('open')
})


// FOOTER
const h4s = document.querySelectorAll('.footer__section h4')
const footerUls = document.querySelectorAll('.footer__section__ul')


const autoGrow = (ul) => {
    ul.style.setProperty('--height', ul.scrollHeight + 'px')
}

footerUls.forEach(ul => {
    autoGrow(ul)
})



h4s.forEach(h4 => {
    h4.addEventListener('click', () => {
        h4.parentElement.classList.toggle('toggled')
    }) 
})

