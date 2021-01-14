document.addEventListener('DOMContentLoaded', () => {
   const progressbarInner = document.querySelector('.progress-bar-inner')

   document.addEventListener('scroll', () => {
      const h = document.documentElement

      let st = h.scrollTop || document.body.scrollTop
      let sh = h.scrollHeight || document.body.scrollHeight

      let percentage = st / (sh - h.clientHeight) * 100

      progressbarInner.style.width = `${percentage}%`
      progressbarInner.innerText = `${Math.round(percentage)}%`
   })



})