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

const searchform = document.getElementById('searchform')
const mobileSearchBtn = document.querySelector('.header__searchform__icon.mobile')
const mobileSearchBtn__X = document.querySelector('.header__searchform__icon__X')

mobileSearchBtn.addEventListener('click', e => {
    if (!searchform.classList.contains('toggled')) {
        e.preventDefault()
        searchform.classList.add('toggled')
        searchform.querySelector('input').focus()
        mobileSearchBtn.classList.add('toggled')
    }
})

mobileSearchBtn__X.addEventListener('click', () => {
    searchform.classList.remove('toggled')
    mobileSearchBtn.classList.remove('toggled')
})