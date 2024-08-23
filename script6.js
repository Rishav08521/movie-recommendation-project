document.getElementById('search-button').addEventListener('click', function() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = ''; // Clear previous results

    const movies = [
        {
            title: 'The Shawshank Redemption',
            genre: 'Drama',
            year: 1994,
            thumbnail: 'https://via.placeholder.com/150x220?text=Shawshank+Redemption'
        },
        {
            title: 'The Godfather',
            genre: 'Crime, Drama',
            year: 1972,
            thumbnail: 'https://via.placeholder.com/150x220?text=The+Godfather'
        },
        {
            title: 'The Dark Knight',
            genre: 'Action, Crime, Drama',
            year: 2008,
            thumbnail: 'https://via.placeholder.com/150x220?text=The+Dark+Knight'
        },
        {
            title: 'Pulp Fiction',
            genre: 'Crime, Drama',
            year: 1994,
            thumbnail: 'https://via.placeholder.com/150x220?text=Pulp+Fiction'
        },
        {
            title: 'Inception',
            genre: 'Action, Sci-Fi, Thriller',
            year: 2010,
            thumbnail: 'https://via.placeholder.com/150x220?text=Inception'
        },
        {
            title: 'Fight Club',
            genre: 'Drama',
            year: 1999,
            thumbnail: 'https://via.placeholder.com/150x220?text=Fight+Club'
        },
        {
            title: 'Forrest Gump',
            genre: 'Drama, Romance',
            year: 1994,
            thumbnail: 'https://via.placeholder.com/150x220?text=Forrest+Gump'
        },
        {
            title: 'Interstellar',
            genre: 'Adventure, Drama, Sci-Fi',
            year: 2014,
            thumbnail: 'https://via.placeholder.com/150x220?text=Interstellar'
        },
        {
            title: 'Parasite',
            genre: 'Comedy, Drama, Thriller',
            year: 2019,
            thumbnail: 'https://wallpapercave.com/wp/wp5264426.jpg'
        },
        {
            title: 'Gladiator',
            genre: 'Action, Adventure, Drama',
            year: 2000,
            thumbnail: 'https://via.placeholder.com/150x220?text=Gladiator'
        },
        {
            title:'kalki 2898 ',
            genre:'action,adventure,drama ',
            year:2024 ,
            thumbnail:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ragalahari.com%2Fmovies%2F89836%2Fkalki-2898-ad-movie-gallery-hd-stills.aspx&psig=AOvVaw005FwNdMY0xIjJqGlktRjt&ust=1724478523412000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOC-0qC1iogDFQAAAAAdAAAAABAJ '
        },
        {
            title:' crow',
            genre:'action,crime,fantasy ',
            year: 2024,
            thumbnail:'https://preview.redd.it/the-crow-official-movie-poster-in-theaters-august-23-v0-p8eoqyfnrwad1.jpeg?width=1080&crop=smart&auto=webp&s=8ee8b4316442aca820cea6ea9c2086ff0ddef4f7 '
        }

    ];

    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchQuery)
    );

    if (filteredMovies.length > 0) {
        filteredMovies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');
            movieItem.innerHTML = `
                <img src="${movie.thumbnail}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>Genre: ${movie.genre}</p>
                <p>Year: ${movie.year}</p>
            `;
            movieList.appendChild(movieItem);
        });
    } else {
        movieList.innerHTML = '<p>No movies found.</p>';
    }
});
