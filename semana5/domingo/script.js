// Escribe una función que reciba un string
// tiene que devolver el número de vocales que tiene

// para abrir la consola son 3 opciones
// F12
// click derecho + inspeccionar
// ctrl + shift + i

function contarVocales() {
    // hola mundo = 4

    let palabra = prompt("Escribe la palabra")

    let contador = 0
    const vocales = ['a', 'e', 'i', 'o', 'u']

    if(palabra != null) {
        for(let char of palabra) {
            if(vocales.includes(char)) {
                contador += 1
            }
        }
    } else {
        alert("No has escrito nada")
    }

    return contador
}

console.log("Vocales", contarVocales())

// De un arreglo quieren solo los pares e impares pero
// los pares deben estar a la iqz y los impares a la derecha

// documentación JSDoc

/**
 * 
 * @param { Array<number> } arreglo 
 */
const parImpar = (arreglo) => {
    //pares
    const pares = arreglo.filter(numero => numero % 2 == 0)
    //impares
    const impares = arreglo.filter(numero => numero % 2 != 0)

    return [...pares, ...impares]
}

console.log(parImpar([1, 2, 3, 5, 8, 9]))


// Se necesita una función que reciba un arreglo
// y devuelva un nuevo arreglo pero con cada palabra
// en mayúsculas. NO UTILIZAR MAP

/**
 * 
 * @param { Array<string> } arreglo 
 */
function convertirAMayusculas(arreglo) {
    // const arregloNuevo = []

    // arreglo.forEach(element => {
    //     arregloNuevo.push(element.toUpperCase())    
    // })

    // return arregloNuevo

    // ----------------- segunda forma
    return arreglo.map(palabra => palabra.toUpperCase())
}

console.log(convertirAMayusculas(["hola", "desde", "mi", "casa"]))

// Obtener el mayor valor en un arreglo

/**
 * @param { Array<number> } arreglo
 */
const mayorNumero = (arreglo) => {
    return Math.min(...arreglo)
}

console.log(mayorNumero([1, 2, 3, 4, 5, 6, 7, 30, 100, 39]))