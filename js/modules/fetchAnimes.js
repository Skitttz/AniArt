import initAniNumber from "./animation-number.js";

export default function initFetchAnimes() {
  function createAnime(anime) {
    const div = document.createElement("div");
    div.classList.add("number-anime");
    div.innerHTML = `<h3>${anime.title}</h3> <span data-number>${anime.total}</span>`;
    return div;
  }

  async function fetchAnimes(url) {
    try {
      const animesResponse = await fetch(url);
      const animesJson = await animesResponse.json();
      const numberGrid = document.querySelector(".number-grid");
      animesJson.forEach((anime) => {
        const divAnime = createAnime(anime);
        numberGrid.appendChild(divAnime);
      });
      initAniNumber();
    } catch (error) {
      console.log(error);
    }
  }
  fetchAnimes("./animesApi.json");
}
