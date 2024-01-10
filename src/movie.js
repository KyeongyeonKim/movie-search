export const showMovieList = async () => {
  const movies = await fetchMovieData();

  const cardList = document.querySelector("#card-list");
  cardList.innerHTML = movies
    .map(
      (movie) =>
        `<li class="movie-card" id=${movie.id}>
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
      <h3 class="movie-title">[${movie.title}]</h3>
      <p>${movie.overview}</p><br>
      <h5>평점 : ${movie.vote_average}</h5>
      </li>`
    )
    .join("");

  cardList.addEventListener("click", clickCard);

  function clickCard(event) {
    // 카드 외 영역 클릭 시 무시
    if (event.target === cardList) return;

    if (event.target.matches(".movie-card")) {
      alert(`영화 id: ${event.target.id}`);
    } else {
      // 카드의 자식 태그 (img, h3, p) 클릭 시 부모의 id로 접근
      alert(`영화 id: ${event.target.parentNode.id}`);
    }
  }
};

async function fetchMovieData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTM3YTE2N2YxZTA5ZGYwNDM4ZDI1NmZiNThjZTQ0YyIsInN1YiI6IjY1OTk4NGI3MWQxYmY0MDFhOGU1NWZiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TAtSAqF7Eikmbg_lzzouG1BSYyyVwe8MO9Hkr-0XTwg",
    },
  };
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  );
  const data = await response.json();
  return data.results;
}
