
function showMovies(movie){
  
// Available tickets for sale for each movie
let capacity = movie.capacity
let tickets_sold = movie.tickets_sold
let availableTickets = capacity - tickets_sold

//
document.getElementById('available-tickets').innerHTML = availableTickets

// Showtime for each movie
document.getElementById('showtime').innerHTML = movie.showtime

// Runtime for each movie
document.getElementById('runTime').innerHTML = movie.runtime

// MovieTitle for each movie
document.getElementById('movieTitle').innerHTML = movie.title

// MoviePoster for each movie
let Poster = document.getElementById('movieposter')
Poster.src = movie.poster


// The list of movies on Display
let films = [movie.title]

films.forEach((filminArray) => {
  const li = document.createElement('li')
  li.className = "filmItem"
  li.innerHTML = filminArray
  document.getElementById('films').appendChild(li)

  // when movie selected,show movie content-----------------------
li.addEventListener("click",showContent)

function showContent(){
  // Available tickets for sale for each movie
let capacity = movie.capacity
let tickets_sold = movie.tickets_sold
let availableTickets = capacity - tickets_sold

//
document.getElementById('available-tickets').innerHTML = availableTickets

// Showtime for each movie
document.getElementById('showtime').innerHTML = movie.showtime

// Runtime for each movie
document.getElementById('runTime').innerHTML = movie.runtime

// MovieTitle for each movie
document.getElementById('movieTitle').innerHTML = movie.title

// MoviePoster for each movie
let Poster = document.getElementById('movieposter')
Poster.src = movie.poster


}



})

// Button
let btn = document.getElementById("buyTicket")
btn.addEventListener("click",buyTicket)

function buyTicket(){
if (availableTickets > 1) {
        // Decrement the number of available tickets 
        availableTickets--
        document.getElementById('available-tickets').innerHTML = availableTickets
    }
    else {
      // Tickets are sold out
      document.getElementById('available-tickets').innerHTML = "Sold out";
    }

  }

    
}
    

// Once web is loaded
document.addEventListener("DOMContentLoaded", function(){
    fetch("http://localhost:3000/movie")
  .then(res => res.json())
  .then(data => {
    data.forEach(movie => {showMovies(movie)});
    })
  }
)


