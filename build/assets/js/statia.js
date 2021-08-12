let similarSlider = new Swiper('.homemain__newestarticles__swiper.real', {
	slidesPerView: 'auto',
	spaceBetween: 10,
	navigation: {
		nextEl: '.homemain__newestarticles__navigation__right.real',
		prevEl: '.homemain__newestarticles__navigation__left.real',
		disabledClass: 'disabled',
	},
	breakpoints: {
		700: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1025: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
})

const copyToClipboard = (str) => {
	const el = document.createElement('textarea')
	el.value = str
	document.body.appendChild(el)
	el.select()
	document.execCommand('copy')
	document.body.removeChild(el)
}



;[...document.querySelectorAll('.shares__container')].forEach(eachCopyBtn => {
    eachCopyBtn.addEventListener('click', () => {
        let inp = eachCopyBtn.querySelector('input')
        copyToClipboard(inp.value)
    })
})
const sharemodal = document.querySelector('.sharemodal')
const sharemodal__bg = document.querySelector('.sharemodal__bg')
const sharemodal__X = document.querySelector('.sharemodal__X')

const sharemodalToggler = (on = true) => {
    if (on) {
        sharemodal.classList.add('toggled')
        sharemodal__bg.classList.add('toggled')
    } else {
        sharemodal.classList.remove('toggled')
        sharemodal__bg.classList.remove('toggled')
    }
}

if (!!sharemodal) {
    sharemodal__X.addEventListener('click', () => {
        sharemodalToggler(false)
    })
    sharemodal__bg.addEventListener('click', () => {
        sharemodalToggler(false)
    })
}

;[...document.querySelectorAll('.shares__btn')].forEach(sharebtn => {
    sharebtn.addEventListener('click', () => {
        sharemodalToggler()
    })
})

;[...document.querySelectorAll('.homemain__populararticles__articles__toggler')].forEach(popularMobileTogglerBtn => {
    popularMobileTogglerBtn.addEventListener('click', () => {
        const popularsUl = popularMobileTogglerBtn.parentElement.querySelector('.homemain__populararticles__ul')
        popularMobileTogglerBtn.classList.toggle('toggled')
        popularsUl.classList.toggle('toggled')
    })
})