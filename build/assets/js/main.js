// HAMBURGER
const hamburger = document.querySelector('.hamburger')
const header__nav = document.querySelector('.header__nav')

hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('open') && !!document.querySelector('.header__nav__ul li.toggled')) {
        document.querySelector('.header__nav__ul li.toggled').classList.remove('toggled')

        setTimeout(() => {
            hamburger.classList.toggle('open')
            header__nav.classList.toggle('open')
            document.querySelector('body').classList.toggle('noscroll')
        }, 400);
    } else {
        hamburger.classList.toggle('open')
        header__nav.classList.toggle('open')
        document.querySelector('body').classList.toggle('noscroll')
    }
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
const scrollToBottom = (el) => {
    window.scrollTo(0, el.scrollHeight + el.offsetTop) 
}

h4s.forEach(h4 => {
    let isHeightChecked = false
    h4.addEventListener('click', () => {
        let scrollNeeded = !h4.parentElement.classList.contains('toggled')
        if (!isHeightChecked) {
            autoGrow(h4.nextElementSibling)
            isHeightChecked = true
        }
        h4.parentElement.classList.toggle('toggled')
        if (scrollNeeded) {
            setTimeout(() => {
                scrollToBottom(h4.nextElementSibling.querySelector('li:last-child'))
                // console.log()
            }, 401);
        }
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

const inneruls = [...document.querySelectorAll('.innerul')]

inneruls.forEach(each => {
    each.style.setProperty('--height', each.scrollHeight + 'px')
    let parentLi = each.parentElement
    let x = false
    parentLi.querySelector('a').addEventListener('mouseenter', () => {
        if (window.innerWidth > 1024) {
            [...document.querySelectorAll('li.hovered')].forEach(ach => ach.classList.remove('hovered'))
    
            parentLi.classList.add('hovered')
            // setTimeout(() => {
            // }, 1);
        }
    }, true)
    each.addEventListener('mouseenter', () => {
        if (window.innerWidth > 1024) {
            x = true
        }
    })
    document.querySelector('.header').addEventListener('mouseleave', (e) => {
        setTimeout(() => {
            if (!x) {
                if (window.innerWidth > 1024) {
                    parentLi.classList.remove('hovered')
                }
            }
        }, 300);
    })
    each.addEventListener('mouseleave', () => {
        x = false
        if (window.innerWidth > 1024) {
            parentLi.classList.remove('hovered')
        }
    })
})

const respoarrows = [...document.querySelectorAll('.respoarrow')]

respoarrows.forEach(arrow => {
    let parent = arrow.parentElement
    arrow.addEventListener('click', () => {
        parent.classList.add('toggled')
    })
})

const innerul__gobacks = [...document.querySelectorAll('.innerul__goback')]


innerul__gobacks.forEach(gb => {
    gb.addEventListener('click', () => {
        gb.parentElement.parentElement.classList.remove('toggled')
    })
})

// question modal
const questionmodal = document.querySelector('.questionmodal')
const questionmodal__X = document.querySelector('.questionmodal__X')
const questionmodal__bg = document.querySelector('.questionmodal__bg')

if (!!questionmodal) {
    questionmodal__bg.addEventListener('click', () => {
        questionmodal.classList.remove('toggled')
        questionmodal__bg.classList.remove('toggled')
    })
    questionmodal__X.addEventListener('click', () => {
        questionmodal.classList.remove('toggled')
        questionmodal__bg.classList.remove('toggled')
    })
}

;[...document.querySelectorAll('li.questionsformodal')].forEach(li => {
    
    li.addEventListener('click', () => {
        document.querySelector('.questionmodal__question').innerText = li.innerText
        document.querySelector('.questionmodal__answer').innerHTML = `<p>${li.dataset.answer}</p>`
        let links = JSON.parse(li.dataset.links)
        let links_container = document.querySelector('.questionmodal__moreinfo__links')
        links_container.innerHTML = ''
    
        // append links
        if (links) {
            links.forEach(link => {
                let newLink = document.createElement('a')
                newLink.href = link
                newLink.setAttribute('target', '_blank')
                newLink.innerHTML = `<span>${link}</span>`
                links_container.appendChild(newLink)
            })
        }
        questionmodal.classList.add('toggled')
        questionmodal__bg.classList.add('toggled')
    })

})

searchform.addEventListener('submit', (e) => {
    if (document.getElementById('search').value === 'puchu puchu') {
        e.preventDefault()
        location.href = `${window.location.origin}/femea/category3.html`
    }
})