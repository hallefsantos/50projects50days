const pickers = document.querySelectorAll('.picker input')
const gradient = {};

pickers.forEach((picker, index) => {
   picker.addEventListener('input', (e) => {
      setColor(e.target, index)
   })
   setColor(picker, index)
})

function setColor(picker, index) {
   const pickerColor = picker.previousSibling.previousSibling
   pickerColor.style.backgroundColor = picker.value
   const pickerLabel = picker.nextSibling.nextSibling
   pickerLabel.innerText = picker.value
   gradient[index] = picker.value
   document.documentElement.style.setProperty(`--gradient-${index}`, picker.value);
}