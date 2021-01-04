const faqs = document.querySelectorAll('.faq')
faqs.forEach(faq => {
   faq.addEventListener('click', (e) => {
      if (e.target.closest('button')) faq.classList.toggle('active')
   })
})