const body = document.body
const slides = document.querySelectorAll('.slide')
const arrowButtons = document.querySelectorAll('.arrow')

let activeSlide = 0

setBgToBody()
setActiveSlide()

arrowButtons.forEach(button => {
   button.addEventListener('click', () => changeSlide(button))
})

function setBgToBody () {
   body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide () {
   slides.forEach(slide => slide.classList.remove('active'))
   slides[activeSlide].classList.add('active')
}

function changeSlide (button) {
   if (button.id === 'left') {
      activeSlide--
      if(activeSlide < 0) activeSlide = slides.length - 1
   } else {
      activeSlide++
      if(activeSlide > slides.length - 1) activeSlide = 0
   }
   setBgToBody()
   setActiveSlide()
}