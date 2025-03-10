
import {get} from './get.js'

const usuario = {
    username: "",
    name: "",
    location: "",
    repos: [],
    followers: []
}

let apiUser = "https://api.github.com/users/donatto22"
let apiFollowers = ''
let apiRepos = ''

const dataBase = async () => {
    const data = await get(apiUser)

    usuario.username = data.login
    usuario.location = data.location
    usuario.name = data.name

    console.log(data)

    apiFollowers = data.followers_url
    apiRepos = data.repos_url
}

const getRepos = async() => {
    const data = await get(apiRepos)
    usuario.repos = [...data]
}

const getFollowers = async() => {
    const data = await get(apiFollowers)
    usuario.followers = [...data]
}

async function hola() {
    await dataBase()
    await getRepos()
    await getFollowers()
}

hola()

console.log(usuario)