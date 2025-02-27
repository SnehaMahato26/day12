document.getElementById('movieForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const movie = {
        name: document.getElementById('movieName').value,
        description: document.getElementById('movieDescription').value,
        year: document.getElementById('releaseYear').value,
        rating: document.getElementById('imdbRating').value,
        genre: document.getElementById('genre').value,
        poster: document.getElementById('moviePoster').value
    };
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.push(movie);
    localStorage.setItem('movies', JSON.stringify(movies));
    alert('Movie added successfully!');
    this.reset();
});

document.addEventListener('DOMContentLoaded', function() {
    const movieList = document.getElementById('movieList');
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    if (movies.length === 0) {
        movieList.innerHTML = '<tr><td colspan="7">No movies added yet!</td></tr>';
    } else {
        movies.forEach((movie, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${movie.name}</td>
                <td>${movie.description.substring(0, 100)}...</td>
                <td>${movie.year}</td>
                <td>${movie.rating}</td>
                <td>${movie.genre}</td>
                <td><img src="${movie.poster}" width="50"></td>
                <td><button onclick="deleteMovie(${index})">Delete</button></td>
            `;
            movieList.appendChild(row);
        });
    }
});