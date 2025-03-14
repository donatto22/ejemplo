export async function getCountries() {
    const response = await fetch('./data.json', {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return await response.json()
}