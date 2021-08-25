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


// contactform
const contactform = document.getElementById('contactform')
const contactname = document.getElementById('contactname')
const contactemail = document.getElementById('contactemail')
const contactsubject = document.getElementById('contactsubject')
const contacttext = document.getElementById('contacttext')


// VALIDATION FUNCTIONS

const nameChecker = (el, onInput = false, atleast = 5) => {
	let val = el.value

	if (onInput) {
		if (val === '') {
			el.classList.add('invalid')

			el.classList.remove('invalid-shown')
		} else if (val.length < atleast) {
			el.classList.add('invalid')

			el.classList.add('invalid-shown')
		} else {
			el.classList.remove('invalid')

			el.classList.remove('invalid-shown')
		}
	} else {
		if (val === '') {
			el.parentElement.classList.add('invalid')

			el.parentElement.classList.remove('invalid-shown')
		} else if (val.length < atleast) {
			el.parentElement.classList.add('invalid')

			el.parentElement.classList.add('invalid-shown')
		} else {
			el.parentElement.classList.remove('invalid')

			el.parentElement.classList.remove('invalid-shown')
		}
	}
}

const emailChecker = (el, onInput = false) => {
	let val = el.value

	let ifEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val)

	if (onInput) {
		if (val === '') {
			el.classList.add('invalid')

			el.classList.remove('invalid-shown')
		} else if (!ifEmail) {
			el.classList.add('invalid')

			el.classList.add('invalid-shown')
		} else {
			el.classList.remove('invalid')

			el.classList.remove('invalid-shown')
		}
	} else {
		if (val === '') {
			el.parentElement.classList.add('invalid')

			el.parentElement.classList.remove('invalid-shown')
		} else if (!ifEmail) {
			el.parentElement.classList.add('invalid')

			el.parentElement.classList.add('invalid-shown')
		} else {
			el.parentElement.classList.remove('invalid')

			el.parentElement.classList.remove('invalid-shown')
		}
	}
}

contactname.addEventListener('change', () => {
	nameChecker(contactname, false, 2)
})
contactemail.addEventListener('change', () => {
    emailChecker(contactemail)
})

contactsubject.addEventListener('change', () => {
    nameChecker(contactsubject, false, 2)
})
contacttext.addEventListener('change', () => {
    nameChecker(contacttext, false, 2)
})


contactform.addEventListener('submit', (e) => {
	nameChecker(contactname, false, 2)
	emailChecker(contactemail)
    nameChecker(contactsubject, false, 2)
    nameChecker(contacttext, false, 2)

	if (contactform.querySelectorAll('.invalid')[0]) {
		e.preventDefault()

		contactform.querySelectorAll('.invalid').forEach((each) => {
			each.classList.add('invalid-shown')
		})
	}
})