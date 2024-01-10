// 1. 영화 데이터를 가져와서 화면에 출력
import { showMovieList } from "./movie.js";
showMovieList();

// 2. 영화 검색
import { filterArr } from "./search.js";

const searchInput = document.querySelector("#search-input");
searchInput.focus();

const form = document.querySelector("#search-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  filterArr(searchInput.value);
});
