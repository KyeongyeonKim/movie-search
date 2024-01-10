export const filterArr = (searchKeyword) => {
  const searchMovieCard = document.querySelectorAll(".movie-card");

  searchMovieCard.forEach((card) => {
    const title = card.querySelector(".movie-title").textContent.toLowerCase();
    const searchedValue = searchKeyword.toLowerCase();

    if (title.includes(searchedValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};
