//Paginação
let temporada = 0;



//HTML
function converteToHtml(nome) {
  return `
    <li class="conteudo ${nome.cor}">
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
temporada ++;
const url = `https://rickandmortyapi.com/api/character/?page=${temporada}`

fetch(url)
.then((response) => response.json()) //converte json
.then((jsonBoby) => jsonBoby.results) // list de results
.then((lists) => {

for (let i = 1; i < lists.length; i++) {
  const list = lists[i]
  const ep = document.querySelector("#personList");
  ep.innerHTML += converteToHtml(list)
}
})
.catch((error) => { console.log(error) })




  const button = document.querySelector('#loadPagina')

  button.addEventListener('click', () => {
    temporada ++;
    const url = `https://rickandmortyapi.com/api/character/?page=${temporada}`

    fetch(url)
  .then((response) => response.json()) //converte json
  .then((jsonBoby) => jsonBoby.results) // list de results
  .then((lists) => {

    for (let i = 0; i < lists.length; i++) {
      const list = lists[i]
      const ep = document.querySelector("#personList");
      ep.innerHTML += converteToHtml(list)
    }
  })
  .catch((error) => { console.log(error) })
  })