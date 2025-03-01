let frutas = ["Manzana", "Pera", "Piña"]

// Agregar una fruta AL FINAL
frutas.push("Naranja") // ["Manzana", "Pera", "Piña", "Naranja"]

// Agregar una fruta AL INICIO
frutas.unshift("Lima") // ["Lima", "Manzana", "Pera", "Piña", "Naranja"]

// Eliminar EL ULTIMO un elemento
frutas.pop() // ["Lima", "Manzana", "Pera", "Piña"]

// Eliminar EL PRIMER elemento
frutas.shift() // ["Manzana", "Pera", "Piña"]
frutas.shift() // ["Pera", "Piña"]

// Permite Agregar, Eliminar y Reemplazar
frutas.splice(1, 1, "Fruto de Dragón") // ["Pera", "Fruto de Dragón", "Piña"]

let numeros = [10, 20, 30, 40]

// ---------------------------------------------
numeros.forEach(numero => {
    console.log(numero)
})

// Recorre los números y te devuelve un nuevo arreglo con la modificación que tu hayas pedido
let dobles = numeros.map(numero => numero * 2)
console.log(dobles)

// Recorre los números y te devuelve un nuevo arreglo en base a la condición
let mayores = numeros.filter(numero => numero >= 30)
console.log(mayores)

// Recorre los números y te devuelve LA PRIMERA COINCIDENCIA en base a la condición

const personas = [
    {
        "id": 1,
        "name": "Pepe",
        "age": 30
    },

    {
        "id": 2,
        "name": "Luis",
        "age": 21
    },

    {
        "id": 3,
        "name": "Luis2",
        "age": 21
    },

    {
        "id": 3,
        "name": "Ana",
        "age": 27
    }
]


let encontrarPersona = personas.find(persona => persona.age == 21)
console.log(encontrarPersona)

// Verifica si dentro de un arreglo existe el dato que coloques
console.log(numeros.includes(20))

// Convertir un arreglo a un string
// Dentro de los paréntesis colocas como te gustaría separar cada palabra
let frase = ["El" ,"mundo" ,"brilla"]
console.log(frase.join(" "))

// sort
// toSort
// slice
// join array - string
// reduce

// Métodos String
let saludo = "Anita,lava,la,tina"

// Este sirve para convertir la palabra TODO a mayúsculas
console.log(saludo.toUpperCase())

// TODO a minúsculas
console.log(saludo.toLowerCase())

// Eliminar espacios de delante y detrás
saludo.trim()

// Eliminar espacios de delante
saludo.trimStart()

// Eliminar espacios de delante
saludo.trimEnd()

// Convierte un STRING a ARRAY
let saludoArreglo = saludo.split(",")
console.log("Arreglo a string", saludoArreglo.join(" "))

// Podemos verificar si una palabra o letra existe dentro del string
let oracion = "Lorem ipsum dolor si amet"
console.log(oracion.includes("z"))

// Verificar si el texto empieza con "algo"
console.log(oracion.startsWith("asdasd"))

// Verificar si el texto termina con "algo"
console.log(oracion.endsWith(oracion))

// Repite una palabra la cantidad de veces que uno guste
const risa = "Los quiero chicos\n"
// console.log(risa.repeat(100))

// Reemplazar TODAS las palabras que coincidan con lo que busco
let fraseInsiradora = "El sol brilla, el sol calienta"
console.log(fraseInsiradora.replaceAll("sol", "cielo")) // El cielo brilla, el cielo calienta

// Reemplaza solo la 1era coincidencia
console.log(fraseInsiradora.replace("sol", "corazón"))

// Quiero obtener el INDICE de una palabra
let texto = "Hola nuevo mundo"
console.log(texto.indexOf("mundo"))

console.log("hola mundo".replaceAll(" ", "").split("").join("-"))