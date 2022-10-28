//URL The Rick and Morty API
const url = 'https://rickandmortyapi.com/api/character/?page=1'



//HTML
function converteToHtml(nome) {
  return `
    <li class="conteudo">
    <span class="number">#00${nome.id}</span>
    <span class="name">${nome.name}</span>
    <div class="detail">
      <ol class="types">
        <li class="type">${nome.species}</li>
        <li class="type">${nome.status}</li>
      </ol>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/${nome.id}.jpeg"
        alt="Rick"
      />
    </div>
  </li>
    `
}


fetch(url)
  .then((response) => response.json()) //converte json
  .then((jsonBoby) => jsonBoby.results) // list de results
  .then((lists) => {
    for (let i = 1; i < 12; i++) {
      const list = lists[i]
      const ep = document.querySelector("#personList");
      ep.innerHTML += converteToHtml(list)
    }
  })
  .catch((error) => { console.log(error) })