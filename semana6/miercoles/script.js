import { Mensajes } from './mensajes.js'

const nuevaAlerta = (type, title, description) => {
    Swal.fire({
        icon: type,
        title: title,
        text: description,
    })
}

// Crea una función que reciba 2 números
// Y además el operador matemático
// La calculadora debería solo sumar, restar, multiplicar y dividir
// Si el usuario coloca algún otro operador
// Debería darme un error

/**
 * @param { number } num1 El 1er numero
 * @param { number } num2 
 * @param { string } operador Solo se aceptan "+ - * /"
 */
const calculadora = (num1, num2, operador) => {
    try {
        if(typeof num1 != 'number' || typeof num2 != 'number') {
            throw new Error(Mensajes.NoNumeros)
        }

        if(operador == '/' && num2 == 0) {
            throw new Error(Mensajes.NoDivisibleEntreCero)
        }

        if(operador == '+') {
            return num1 + num2
        }

        else if(operador == '-') {
            return num1 - num2
        }

        else if(operador == '*') {
            return num1 * num2
        }

        else if(operador == '/') {
            return num1 / num2
        }

        else {
            throw new Error(Mensajes.OperacionNoValida)
        }
    } catch (error) {
        console.error(error)
        nuevaAlerta("error", "Error al calcular", error.message)
    } finally {
        console.log("Operación realizada")
    }
}

// console.log(calculadora(10, "hola", "?"))

const arreglo = [1, 2, 3, 3, 4, 5, 5, 5, 6, 7, 8, 9, 0, 0]

const arregloSinRepetir = new Set(arreglo)

arregloSinRepetir.forEach(numero => {
    console.log(numero)
})

const nuevoArreglo = Array.from(arregloSinRepetir)

console.log(nuevoArreglo[0])

// Template string
const hola = {
    nombre: "pepe"
}

const mundo = "mundo"

const palabra = `${JSON.stringify(hola)} ${mundo}`

console.log(palabra)

// Array.from vs map
const arregloNumeros = [1, 2, 3]
console.log(Array.from(arregloNumeros, numero => numero * 2))

// array.from puede convertir un Set a un Array cosa que
// el map no

const arregloGenerado = Array.from({ length: 10 }).map((_, i) => {
    console.log(_)
    return (i + 1) * 2
})

console.log(arregloGenerado)

// array.from puede crearte un nuevo arreglo

// -------------------
const sumarNumeros = (...numeros) => {
    let suma = 0

    numeros.forEach(num => {
        suma /= num
    })

    return suma
}

console.log(sumarNumeros(100, 9))