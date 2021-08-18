let herocontent_articles_swiper = new Swiper('.homemain__herocontent__articles', {
    slidesPerView: 1,
    direction: 'horizontal',
    spaceBetween: 10,
    centeredSlides: false,
    speed: 1800,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        1025: {
            spaceBetween: 0,
            speed: 300,
            slidesPerView: 'auto',
            loop: false,
            direction: 'vertical',
            centeredSlides: false,
            autoplay: false
        }
    }
})

herocontent_articles_swiper.on('init', () => {
    herocontent_articles_swiper.autoplay.start()
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
let newssliderStory = new Swiper('.homemain__newestarticles__swiper.story', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
        nextEl: '.homemain__newestarticles__navigation__right.story',
        prevEl: '.homemain__newestarticles__navigation__left.story',
        disabledClass: 'disabled'
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 20,
        },
        1025: {
            slidesPerColumn: 2,
            spaceBetween: 20,
            slidesPerView: 3,
        }
    }
})

;[...document.querySelectorAll('.homemain__populararticles__articles__toggler')].forEach(popularMobileTogglerBtn => {
    popularMobileTogglerBtn.addEventListener('click', () => {
        const popularsUl = popularMobileTogglerBtn.parentElement.querySelector('.homemain__populararticles__ul')
        popularMobileTogglerBtn.classList.toggle('toggled')
        popularsUl.classList.toggle('toggled')
    })
})