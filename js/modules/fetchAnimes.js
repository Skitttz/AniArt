import AniNumber from "./animation-number.js";

export default function fetchAnimes(url, target) {
  const numberGrid = document.querySelector(target);

  /* Cria a Div contendo os numeros de animes/musicas/etc.. */
  function createAnime(anime) {
    const div = document.createElement("div");
    div.classList.add("number-anime");
    div.innerHTML = `<h3>${anime.title}</h3> <span data-number>${anime.total}</span>`;
    return div;
  }

  /* Preenche a div de animes */
  function putAnime(anime) {
    const divAnime = createAnime(anime);
    numberGrid.appendChild(divAnime);
  }

  /* Anima os numeros */
  function animaNumber() {
    const animationNumber = new AniNumber("[data-number]", ".number", "ativo");
    animationNumber.init();
  }

  /* Puxa os animes atraves do arquivo JSON 
  e cria cada anime usando o createAnimal */
  async function createAnimeInfo() {
    try {
      /* Fetch espera resposta e transforma em JSON */
      const animesResponse = await fetch(url);
      const animesJson = await animesResponse.json();
      /* Ativa as funcoes de preencher e animar numeros */
      animesJson.forEach((anime) => putAnime(anime));
      animaNumber();
    } catch (error) {
      console.log(error);
    }
  }
  return createAnimeInfo();
}
