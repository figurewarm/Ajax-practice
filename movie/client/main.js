window.onload = function() {
    axios.get('http://localhost:3000/movies')
        .then(function(response) {
            let movies = response.data,
                str = '';
            movies.forEach(movie => {
                let star = '*******';
                let rate = Math.round(movie.score / 2);
                str += '<li class="mBox"><div class="mPost"><img src="${movie.post}" alt="${movie.title}"><div class="mTitle">${movie.title}</div><div class="mScore">***** 8.7</div></div></li>'
            });
            let moviesRow = document.getElementById('moviesRow');
            moviesRow.innerHTML += str;
        })
        .catch(function() {
            console.log(error)
        })
}