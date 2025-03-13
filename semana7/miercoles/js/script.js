import { UNSPLASH_ACCESS_KEY, UNSPLASH_API } from '../api/unsplash.js'

const verificarLogin = () => {
    const usuario = localStorage.getItem('usuario')

    if (!usuario) {
        window.location.href = './pages/login.html'
    }
}

verificarLogin()

// llenando los datos de perfil
const session = JSON.parse(localStorage.getItem('usuario'))

const divUsuario = document.getElementById('user')

const img = document.createElement('img')
img.src = session.image

const username = document.createElement('b')
username.textContent = `${session.firstName} ${session.lastName}`

divUsuario.appendChild(img)
divUsuario.appendChild(username)

// trayendo todas las fotos desde la api
const grillaPhotos = document.getElementById('photos')

async function traerFotos() {
    const response = await fetch(`${UNSPLASH_API.PHOTOS}`, {
        headers: {
            'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
        }
    })
    const data = await response.json()

    data.forEach(photo => {
        const photoLink = document.createElement('a')
        photoLink.href = `./pages/photo.html?id=${photo.id}`

        const img = document.createElement('img')  
        img.src = photo.urls.small
        img.alt = img.alt_description

        photoLink.appendChild(img)

        grillaPhotos.appendChild(photoLink)
    })
}

traerFotos()

const hola = () => {
    localStorage.clear('usuario')
    location.reload()
}