import { getCountries } from './getCountries.js'

const obtenerPais = async () => {
    const paises = await getCountries()

    try {
        const params = new URLSearchParams(window.location.search)

        const countryName = params.get('name')

        const pais = paises.find(pais => pais.name == countryName)

        document.getElementById('flag').src = pais.flags.png
    } catch {
        alert("Error")
    }
}

obtenerPais()