const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTM3YTE2N2YxZTA5ZGYwNDM4ZDI1NmZiNThjZTQ0YyIsInN1YiI6IjY1OTk4NGI3MWQxYmY0MDFhOGU1NWZiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TAtSAqF7Eikmbg_lzzouG1BSYyyVwe8MO9Hkr-0XTwg",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => {
    let movieList = response["results"];

    movieList.forEach((element) => {
      let title = element["title"];
      let overview = element["overview"];
      let poster_path =
        "https://image.tmdb.org/t/p/w500" + element["poster_path"];
      let vote_average = element["vote_average"];
      let movieId = element["id"];

      let temp_html = `<div class="movie-card" id="movie-card" onclick = "alert('movie id [ ${movieId} ]')">
                <img src="${poster_path}" alt="">
                <h3>[${title}]</h3>
                <p>${overview}</p><br>
                <h5>평점 : ${vote_average}</h5>
              </div>`;

      document.getElementById("card-list").innerHTML += temp_html;
      //$('#card-list').append(temp_html);

      // ---------------------------------------------------------------------

      function filterMovies(movieTitle) {
        let filterArr = movieList.filter((item) =>
          item.title.toLowerCase().includes(movieTitle)
        );

        document.getElementById("card-list").innerHTML = "";

        filterArr.forEach((data) => {
          let title = data.title;
          let vote_average = data.vote_average;
          let overview = data.overview;
          let poster_path =
            "https://image.tmdb.org/t/p/w500" + data["poster_path"];
          let id = data.id;

          let temp_html = `<div class="movie-card" id="movie-card" data-id="${id}" onclick = "alert('movie id [ ${movieId} ]')">
                <img src="${poster_path}" alt="">
                <h3>[${title}]</h3>
                <p>${overview}</p><br>
                <h5>평점 : ${vote_average}</h5>
              </div>`;

          document.getElementById("card-list").innerHTML += temp_html;
        });
      }

      const searchInput = document.getElementById("search-input");
      const searchButton = document.getElementById("search-btn");

      function btnClickDisplay() {
        let movieTitle = searchInput.value.toLowerCase().trim();
        if (movieTitle === "") {
          window.location.reload();
          //alert("제목을 입력하세요!");
          //return false;
        } else {
          filterMovies(movieTitle);
        }
      }
      searchButton.addEventListener("click", btnClickDisplay);

      // ---------------------------------------------------------------------
    });
  })
  .catch((err) => console.error(err));
