import { getCountries } from './js/getCountries.js'

const grid = document.getElementById('grid')

function crearTarjetaPais(pais) {

    const tarjetaPais = document.createElement('div')

    const bandera = document.createElement('img')
    bandera.src = pais.flags.png

    bandera.addEventListener('click', () => {
        window.location.href = `./country.html?name=${pais.name}`
    })

    tarjetaPais.appendChild(bandera)

    grid.appendChild(tarjetaPais)
}

const select = document.getElementById('regiones')

select.addEventListener('change', async () => {
    grid.innerHTML = ''

    const countries = await getCountries()

    countries.forEach(country => {
        if (country.region == select.value) {
            crearTarjetaPais(country)
        }
    })
})

const countries = await getCountries()
const primerosPaises = countries.filter(pais => pais.region == select.value)

primerosPaises.forEach(pais => {
    crearTarjetaPais(pais)
})
