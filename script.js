const galeria = document.querySelector("#galeria")

function createPost(){

for (let index = 1; index < 827; index++) {
    fetch(`https://rickandmortyapi.com/api/character/${index}`)
    .then((response) => response.json())
    .then(rickymorty => {
      const div = document.createElement("div")
      div.classList.add("rickymorty")

      const elemento = document.createElement("img");
      elemento.setAttribute("src", rickymorty.image)
      div.append(elemento)

      const digito = document.createElement("h3")
      digito.innerText = "Character " + index 
      div.append(digito)

      const descripcion = document.createElement("p")
      descripcion.innerText = "Esta es mi publicacion numero " + index + ". Esto es una prueba de generacion de relleno por medio de funciones y ciclos"
      div.append(descripcion)
     

      galeria.append(div)
    });
}}

createPost()

