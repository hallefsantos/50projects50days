const API_KEY = 'ab872c8346e93a873401a241a30f8c44'
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`
const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const genrePar = urlParams.get('genre')

// Get Initial Movies

async function getMovies(url) {
   const res = await fetch(url)
   const data = await res.json()

   showMovies(data.results);
}

form.addEventListener('submit', (e) => {
   e.preventDefault()

   const searchTerm = search.value

   if(searchTerm && searchTerm !== '') {
      getMovies(SEARCH_URL + searchTerm)
      
      search.value = ''
   } else {
      window.location.reload()
   }
})

function showMovies (movies){
   main.innerHTML = ''

   movies.forEach(movie => {
      const { title, poster_path, vote_average, overview } = movie

      const movieEl = document.createElement('div')
      movieEl.className = 'movie'

      movieEl.innerHTML = `
         <img loading="lazy" src="${IMG_PATH + poster_path}" alt="${title}">
         <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
         </div>
         <div class="overview">
            <h3>Overview</h3>
            ${overview}
         </div>`
         main.appendChild(movieEl)
   })
}

function getClassByRate(vote){
   if(vote >= 8) {
      return 'green'
   } else if (vote >= 5) {
      return 'orange'
   } else {
      return 'red'
   }
}

async function getGenreId(genre) {
   const res = await fetch(GENRE_URL)
   const data = await res.json()
   let id
   data.genres.forEach(genre => {
      if(capitalizeFirstLetter(genrePar) === genre.name) {
         id = genre.id
      }
   })

   return id
}

function capitalizeFirstLetter(string) {
   return string[0].toUpperCase() + string.slice(1);
}

if (genrePar) {
   (async () => {
      getMovies(`${API_URL}&with_genres=${await getGenreId(genrePar)}`)
    })()
   
} else {
   console.log('nao tem genero');
   getMovies(API_URL)
}