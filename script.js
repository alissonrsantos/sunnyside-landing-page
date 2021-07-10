const sliderArea = document.querySelector('.testimonials-cards')
const sliderItems = document.querySelectorAll('.testimonial-card')
const bullets = document.querySelectorAll('.bullet')
const mobileMenu = document.querySelector('.menu-mobile')
const mobileMenuArea = document.querySelector('.icon-menu-mobile')

sliderArea.style.width = `calc(100vw * ${sliderItems.length})`

let currentSlider = 0 

bullets[0].classList.add('selected')

const updateSliders = () => {
    if(currentSlider === (sliderItems.length - sliderItems.length)) {
        sliderArea.style.marginRight = '0vw'
        bullets[0].classList.remove('selected')
        bullets[1].classList.add('selected')
        currentSlider++
    } else if (currentSlider === (sliderItems.length - 2)) {
        sliderArea.style.marginRight = '200vw'
        bullets[1].classList.remove('selected')
        bullets[2].classList.add('selected')
        currentSlider++
    } else if(currentSlider === (sliderItems.length - 1)) {
        sliderArea.style.marginRight = '-200vw'
        bullets[2].classList.remove('selected')
        bullets[0].classList.add('selected')
        currentSlider = 0
    }
}

const menuToggle = () => {
    if(mobileMenu.style.display === 'none') {
        setTimeout(() => {
            mobileMenu.style.display = 'block'
        }, 1000)
    } else {
        setTimeout(() => {
            mobileMenu.style.display = 'none'
        }, 1000)
    }
}

mobileMenuArea.addEventListener('click', menuToggle)
setInterval(updateSliders, 3000)