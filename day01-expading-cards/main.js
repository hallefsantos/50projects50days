const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
   panel.addEventListener('click', () => {
      removeActiveClasses(panels)
      panel.classList.add('active')
   })
})

function removeActiveClasses(array){
   array.forEach((item) => {
      item.classList.remove('active')
   })
}