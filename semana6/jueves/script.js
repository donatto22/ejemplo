// 1era forma

// fetch("https://pokeapi.co/api/v2/pokemon?limit=10").then((asd) => {
//     return asd.json()
// }).then((data) => {
//     console.log(data)
// })

// 2da forma de consultar datos
const traerPokemones = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=40")
    const data = await response.json()

    console.log(data)
}

traerPokemones()

// 2da forma de consultar datos
const traerPokemon = async () => {
    const pokemon = prompt("Coloca el nombre del pokemon")

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await response.json()

    const nuevoObjeto = {
        nombre: data.name,
        experiencia: data.base_experience,
        image: data.sprites.front_female
    }

    console.log(nuevoObjeto)
}

// traerPokemon()

// guardar datos

// nombre con el que guardarás el valor - el valor
localStorage.setItem("nombre", "Donatto")

// requieres el nombre con el que has guardado algún dato
localStorage.getItem("nombre")

// debes colocar el nombre con el que estas guardando
// algún valor
localStorage.removeItem("nombre")

// eliminar absolutamente todas las variables
// que estés guardando en tu navegador
localStorage.clear()

sessionStorage.setItem("nombre", {})

// convertir un objeto a string
const usuario = {
    username: "donatto22",
    name: "Donatto",
    location: "Lima Perú",
    repos: [{}, {}, {}, {}],
    followers: [{}, {}, {}, {}]
}

sessionStorage.setItem("usuario", JSON.stringify(usuario))

// de string a json
console.log(JSON.parse(sessionStorage.getItem("usuario")))