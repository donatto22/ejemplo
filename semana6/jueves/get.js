export const get = async (endpoint) => {
    const response = await fetch(endpoint)

    console.log(endpoint)
    return await response.json()
}