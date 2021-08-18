const navSwiper = new Swiper('.femeamain__navslider__swiper', {
    slidesPerView: 1.5,
    centeredSlides: true,
    breakpoints: {
        1025: {
            centeredSlides: false,
            slidesPerView: 'auto',
            direction: 'vertical'
        }
    },
    on: {
        slideChange: () => {
            navSwiper.activeIndex
        }
    }
})
const contentSwiper = new Swiper('.femeamain__contentslider__swiper', {
    slidesPerView: 1,
    thumbs: {
        swiper: navSwiper,
        slideThumbActiveClass: 'thumbactive'
    }
})

navSwiper.on('transitionEnd', () => {
    // contentSwiper.slideTo(navSwiper.activeIndex, 500)
})