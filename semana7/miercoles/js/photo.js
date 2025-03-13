import { UNSPLASH_ACCESS_KEY, UNSPLASH_API } from '../api/unsplash.js'

const verificarLogin = () => {
    const usuario = localStorage.getItem('usuario')

    if (!usuario) {
        window.location.href = './login.html'
    }
}

verificarLogin()

const params = new URLSearchParams(window.location.search)

const id = params.get('id')

if(!id) {
    alert("No has seleccionado ninguna foto")
    window.location.href = '../index.html'
}

const llenarDiv = async () => {
    const response = await fetch(`${UNSPLASH_API.PHOTOS}/${id}`, {
        headers: {
            'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
        }
    })

    const data = await response.json()

    // llenando la página
    const photoDiv = document.getElementById('photoDiv')

    const img = document.createElement('img')
    img.src = data.urls.small
    img.alt = data.alt_description

    photoDiv.appendChild(img)

}

llenarDiv()