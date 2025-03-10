
// // Obtener algo por su ID
// const titulo = document.getElementById("titulo")

// titulo.innerText = "Hola"
// titulo.classList.add('rojo')

// // Obtener por clases
// // const tarjeta = document.getElementsByClassName("tarjeta")
// // console.log(tarjeta[0].innerText)

// // Obtener por etiqueta
// const parrafo = document.querySelectorAll('p')

// console.log(parrafo[4])

// // Obtener una sola etiqueta
// const primerParrafo = document.querySelector('p')
// console.log(primerParrafo)

// // Tengo un botón - quiero darle una función
// // que he creado en mi JS

// function mostrarAlerta() {
//     alert("Hola mundo desde DOM")
// } 

// // Creando un elemento usando JS
// const div = document.createElement('div')

// // obtengo el lugar en donde lo quiero colocar
// const tarjeta = document.getElementsByClassName("tarjeta")

// // Colocar el Div dentro de la tarjetita
// // console.log(tarjeta)
// // tarjeta[0].appendChild(div)

// // Colocar el div pero 1ero

// console.log(tarjeta[0].firstElementChild.appendChild(div))

function crearCardCafe(cafe) {
    console.log(cafe)
    const tarjetaCafe = document.createElement('div')
    tarjetaCafe.classList.add('tarjetaCafe')

    // header
    const cardHeader = document.createElement('div')
    cardHeader.classList.add('cardHeader')

    if(cafe.popular == true) {
        const tagPopular = document.createElement('div')
        tagPopular.innerText =  "Popular"
        tagPopular.classList.add('tagPopular')

        cardHeader.appendChild(tagPopular)
    }

    const cafePhoto = document.createElement('img')
    cafePhoto.src = cafe.image

    cardHeader.appendChild(cafePhoto)

    // footer
    const cardFooter = document.createElement('div')
    cardFooter.classList.add('cardFooter')

    const cardDescription = document.createElement('div')
    cardDescription.classList.add('cardDescription')

    const productName = document.createElement('h3')
    productName.innerText = cafe.name

    const productRating = document.createElement('div')

    const starImage = document.createElement('img')

    if(cafe.votes == 0) {
        starImage.src = './images/Star.svg'
    } else {
        starImage.src = './images/Star_fill.svg'
    }

    const productStars = document.createElement('div')
    productStars.classList.add('productStars')
    productStars.innerText = cafe.rating

    const productVotes = document.createElement('div')
    productVotes.classList.add('productVotes')

    if(cafe.votes == 0) {
        productVotes.innerText = 'No rating'
    } else {
        productVotes.innerText = `(${cafe.votes} votes)`
    }    

    productRating.appendChild(starImage)
    productRating.appendChild(productStars)
    productRating.appendChild(productVotes)

    cardDescription.appendChild(productName)
    cardDescription.appendChild(productRating)

    const cardPrice = document.createElement('div')
    cardPrice.classList.add('cardPrice')

    const totalPrice = document.createElement('div')
    totalPrice.innerText = cafe.price
    totalPrice.classList.add('totalPrice')

    cardPrice.appendChild(totalPrice)

    if(cafe.available == false) {
        const soldOut = document.createElement('div')
        soldOut.innerText = "Sold out"
        cardPrice.appendChild(soldOut)
    }

    cardFooter.appendChild(cardDescription)
    cardFooter.appendChild(cardPrice)

    tarjetaCafe.appendChild(cardHeader)
    tarjetaCafe.appendChild(cardFooter)

    const cafes = document.getElementById('cafes')
    cafes.appendChild(tarjetaCafe)
}

const traerCafes = async () => {
    const response = await fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json")
    const arregloCafes = await response.json()

    arregloCafes.forEach(cafe => {
        crearCardCafe(cafe)
    })
}

traerCafes()