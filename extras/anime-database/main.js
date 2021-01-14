const API_URL = 'https://api.jikan.moe/v3/top/anime/1/bypopularity'
const SEARCH_URL = 'https://api.jikan.moe/v3/search/anime?page=1&q='
const topListEl = document.getElementById('top-list')
const animesEl = document.getElementById('animes')
const formEl = document.querySelector('form')
const searchEl = document.getElementById('search')

formEl.addEventListener('submit', (e) => {
   e.preventDefault()
   searchAnimes()
})

const searchAnimes = async () => {
   const response = await fetch(`${SEARCH_URL}${searchEl.value}`)
   const data = await response.json()
   showAnimes(data.results)
}

const getAnimes  = async () => {
   const response = await fetch(API_URL)
   const data = await response.json()
   return data.top
}

const fillTopAnimes = async () => {
   const animes = await getAnimes()
   topListEl.innerHTML = ''
   animes.slice(0,5).forEach(anime => {
      const animeItem = document.createElement('li')
      animeItem.innerHTML = `<a href="${anime.url}" target="_blank">${anime.title}</a>`
      topListEl.appendChild(animeItem)
   })
}

const showAnimes = (animes) => {
   animesEl.innerHTML = ''
   animes.forEach(anime => {
      const animeEl = document.createElement('div')
      animeEl.className = 'anime'
      animeEl.innerHTML = `
         <a href="${anime.url}" target="_blank">
            <img src="${anime.image_url}" alt="${anime.title}">
         </a>
         <h4><a href="${anime.url}" target="_blank">${anime.title}</a></h4>
      `
      animesEl.appendChild(animeEl)
   })
}

(async () => {
   showAnimes(await getAnimes())
 })()

fillTopAnimes()