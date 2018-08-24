window.onload = function () {
    const homePage = {
        init() {
            axios.defaults.baseURL = "http://localhost:3000/movies";
            homePage.fun.render();
            document.addEventListener("click", homePage.fun.delMovies, false);
        },
        fun: {
            render() {
                axios.get('http://localhost:3000/movies')
                    .then(function (response) {
                        let movies = response.data,
                            str = '';
                        movies.forEach(movie => {
                            let star = '*******';
                            let rate = Math.round(movie.score / 2);
                            str += '<li class="mBox"><i class="delMovie" data-movieId="' + movie.id + '">x</i><div class="mPost"><img src="' + movie.post + '"><div class="mTitle">' + movie.title + '</div><div class="mScore">***** 8.7</div></div></li>'
                        });
                        let moviesRow = document.getElementById('moviesRow');
                        moviesRow.innerHTML += str;
                    })
                    .catch(function () {
                        console.log(error)
                    })
            },
            deleteMvieById(movieId) {
                let address = 'http://localhost:3000/movies'
                address += "/" + movieId
                axios.delete(address)
                    .then(response => {
                        if (response.status === 200)
                            alert('删除成功！！！');
                    })
            },
            delMovies(e) {
                let movieId = e.target.getAttribute('data-movieId');
                if (movieId) {
                    let confirmDel = confirm("确认删除？");
                    if (confirmDel) {
                        homePage.fun.deleteMvieById(movieId);
                        homePage.fun.render();
                    }
                }
            }
        }
    }
    homePage.init();
}