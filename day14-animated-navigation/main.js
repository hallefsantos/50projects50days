const toggle = document.getElementById('toggle')
const nav = document.querySelector('nav')

toggle.addEventListener('click', () => {
   nav.classList.toggle('active')
})