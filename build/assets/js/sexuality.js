const descriptionTogglerBtn = document.querySelector('.sexualitymain__description__toggler')
const descriptionParagraph = document.querySelector('.sexualitymain__description p')

descriptionTogglerBtn.addEventListener('click', () => {
    descriptionTogglerBtn.classList.toggle('toggled')
    descriptionParagraph.classList.toggle('toggled')
})
window.addEventListener('load', () => {
    let height5 = 30 * 5 + 40
    let height6 = 28 * 6
    let heightfull = descriptionParagraph.scrollHeight
    descriptionParagraph.style.setProperty('--height5', height5 + 'px')
    descriptionParagraph.style.setProperty('--height6', height6 + 'px')
    descriptionParagraph.style.setProperty('--heightfull', heightfull + 'px')
})

let newsslider = new Swiper('.homemain__newestarticles__swiper.real', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
        nextEl: '.homemain__newestarticles__navigation__right.real',
        prevEl: '.homemain__newestarticles__navigation__left.real',
        disabledClass: 'disabled'
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 20,
        },
        1025: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerColumn: 2,
        }
    }
})
let newssliderWomen = new Swiper('.homemain__newestarticles__swiper.women', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
        nextEl: '.homemain__newestarticles__navigation__right.women',
        prevEl: '.homemain__newestarticles__navigation__left.women',
        disabledClass: 'disabled'
    },
    breakpoints: {
        // 700: {
        //     slidesPerView: 2,
        //     slidesPerColumn: 2,
        //     spaceBetween: 20,
        // },
        1025: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
})
let newssliderLGBT = new Swiper('.homemain__newestarticles__swiper.lgbt', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
        nextEl: '.homemain__newestarticles__navigation__right.lgbt',
        prevEl: '.homemain__newestarticles__navigation__left.lgbt',
        disabledClass: 'disabled'
    },
    breakpoints: {
        // 700: {
        //     slidesPerView: 2,
        //     slidesPerColumn: 2,
        //     spaceBetween: 20,
        // },
        1025: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
})


const popularMobileTogglerBtns = document.querySelectorAll('.homemain__populararticles__articles__toggler')


popularMobileTogglerBtns.forEach(popularMobileTogglerBtn => {
    popularMobileTogglerBtn.addEventListener('click', () => {
        const popularsUl = popularMobileTogglerBtn.parentElement.querySelector('.homemain__populararticles__ul')
        popularMobileTogglerBtn.classList.toggle('toggled')
        popularsUl.classList.toggle('toggled')
    })
})