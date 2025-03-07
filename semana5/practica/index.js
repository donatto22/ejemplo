console.log("Elegir qué ejercicio realizar");
function elegirEjercicio() {
    let continuar = true;
    while (continuar) {
    
    // Preguntar al usuario qué ejercicio desea ejecutar
    let opcion = parseInt(prompt(`
        1. Ejercicio 1: Calcular la suma de 2 argumentos
        2. Ejercicio 2: Calcular el promedio de 4 exámenes
        3. Ejercicio 3: Calcular el área de un rectángulo
        4. Ejercicio 4: Calcular el área de un triángulo
        5. Ejercicio 5: Calcular el área de una circunferencia
        6. Ejercicio 6: Calcular el sueldo semanal de un trabajador
        7. Ejercicio 7: Convertir metros a pulgadas
        8. Ejercicio 8: Convertir soles peruanos a dólares
        9. Ejercicio 9: Calcular la edad con el año de nacimiento
        10. Ejercicio 10: Encontrar la persona de menor edad
        11. Ejercicio 11: Determinar el bono por antigüedad
        12. Ejercicio 12: Calcular el salario de un profesor con incremento anual
        13. Ejercicio 13: Determinar el número de aprobados y reprobados
        14. Ejercicio 14: Contabilizar los focos por color
        15. Ejercicio 15: Determinar si una persona puede votar
    `));
    // Ejecutar el ejercicio correspondiente según la elección
    if (opcion === 1) {
        sumarYMostrar(); // Llamar a la función para el ejercicio 13
    } else if (opcion === 2) {
        calcularPromedio(); // Llamar a la función para el ejercicio 15
    } else if (opcion === 3) {
        calcularAreaRectangulo();
    } else if (opcion === 4) {
        calcularAreaTriangulo(); // Llamar a la función para el ejercicio 15
    } else if (opcion === 5) {
        calcularAreaCircunferencia();
    } else if (opcion === 6) {
        calcularSueldoSemanal(); // Llamar a la función para el ejercicio 15
    } else if (opcion === 7) {
        convertirAMetrosAPulgadas();
    } else if (opcion === 8) {
        convertirSolesADolares(); // Llamar a la función para el ejercicio 15
    } else if (opcion === 9) {
        calcularEdad();
    } else if (opcion === 10) {
        encontrarMenorEdad(); // Llamar a la función para el ejercicio 15
    } else if (opcion === 11) {
        calcularBono(); // Llamar a la función para el ejercicio 15
    } else if (opcion === 12) {
        calcularSalario(); // Llamar a la función para el ejercicio 15
    } else if (opcion === 13) {
        calcularAprobadosYReprobados();
    } else if (opcion === 14) {
        contarFocos(); // Llamar a la función para el ejercicio 15
    } else if (opcion === 15) {
        puedeVotar();
    } else {
        alert("Opción no válida. Por favor elige entre 1 y 15.");
    }
    // Preguntar al usuario si desea elegir otro ejercicio
    let continuarRespuesta = prompt("¿Deseas elegir otro ejercicio? (si/no)").toLowerCase();
    if (continuarRespuesta !== "si") {
        continuar = false; // Terminar el ciclo si la respuesta no es "si"
        alert("Gracias por usar el programa.");
    }
}
}

function sumarYMostrar() {
    // Pedir al usuario que ingrese los dos números mediante prompt
    let a = parseFloat(prompt("Introduce el primer número:"));
    let b = parseFloat(prompt("Introduce el segundo número:"));

    // Sumar los dos números
    let resultado = a + b;

    // Imprimir el resultado en la consola
    console.log("El resultado de la suma es: " + resultado);

    // Mostrar el resultado en una ventana emergente (alert)
    alert("El resultado de la suma es: " + resultado);
}

function calcularPromedio() {
    // Pedir las notas de los 4 exámenes mediante prompt
    let nota1 = parseFloat(prompt("Introduce la nota del primer examen:"));
    let nota2 = parseFloat(prompt("Introduce la nota del segundo examen:"));
    let nota3 = parseFloat(prompt("Introduce la nota del tercer examen:"));
    let nota4 = parseFloat(prompt("Introduce la nota del cuarto examen:"));

    // Calcular el promedio
    let promedio = (nota1 + nota2 + nota3 + nota4) / 4;

    // Imprimir el promedio en la consola
    console.log("El promedio de los exámenes es: " + promedio);

    // Mostrar el promedio en una ventana emergente
    alert("El promedio de los exámenes es: " + promedio);
}


function calcularAreaRectangulo() {
    // Pedir la base y la altura del rectángulo
    let base = parseFloat(prompt("Introduce la base del rectángulo:"));
    let altura = parseFloat(prompt("Introduce la altura del rectángulo:"));

    // Calcular el área (base * altura)
    let area = base * altura;

    // Imprimir el área en la consola
    console.log("El área del rectángulo es: " + area);

    // Mostrar el área en una ventana emergente
    alert("El área del rectángulo es: " + area);
}


function calcularAreaTriangulo() {
    // Pedir la base y la altura del triángulo
    let base = parseFloat(prompt("Introduce la base del triángulo:"));
    let altura = parseFloat(prompt("Introduce la altura del triángulo:"));
    // Calcular el área (base * altura / 2)
    let area = (base * altura) / 2;
    // Imprimir el área en la consola
    console.log("El área del triángulo es: " + area);
    // Mostrar el área en una ventana emergente
    alert("El área del triángulo es: " + area);
}


function calcularAreaCircunferencia() {
    // Pedir el radio de la circunferencia
    let radio = parseFloat(prompt("Introduce el radio de la circunferencia:"));
    // Calcular el área (pi * radio^2)
    let area = Math.PI * Math.pow(radio, 2);
    // Imprimir el área en la consola
    console.log("El área de la circunferencia es: " + area);
    // Mostrar el área en una ventana emergente
    alert("El área de la circunferencia es: " + area);
}


function calcularSueldoSemanal() {
    // Pedir las horas trabajadas y el salario por hora
    let horasTrabajadas = parseFloat(prompt("Introduce las horas trabajadas en la semana:"));
    let salarioPorHora = parseFloat(prompt("Introduce el salario por hora del trabajador:"));
    // Calcular el sueldo semanal
    let sueldoSemanal = horasTrabajadas * salarioPorHora;
    // Imprimir el sueldo semanal en la consola
    console.log(`El sueldo semanal del trabajador es ${sueldoSemanal} soles`);
    // Mostrar el sueldo semanal en una ventana emergente
    alert("El sueldo semanal del trabajador es: " + sueldoSemanal);
}


function convertirAMetrosAPulgadas() {
    // Pedir al usuario que ingrese la cantidad de metros
    let metros = parseFloat(prompt("Introduce la cantidad de tela en metros:"));
    // Convertir los metros a pulgadas (1 pulgada = 0.0254 metros)
    let pulgadas = metros / 0.0254;
    // Imprimir el resultado en la consola
    console.log(`La cantidad de tela en pulgadas es: ${pulgadas} pulgadas`);
    // Mostrar el resultado en una ventana emergente
    alert(`La cantidad de tela en pulgadas es: ${pulgadas} pulgadas`);
}


function convertirSolesADolares() {
    // Pedir al usuario la cantidad de dinero en soles peruanos
    let soles = parseFloat(prompt("Introduce la cantidad de dinero en soles peruanos:"));
    // Tasa de cambio (por ejemplo, 1 dólar = 3.5 soles)
    let tasaDeCambio = 3.5;  // Esta tasa puede cambiar según el valor real del mercado
    // Convertir soles a dólares
    let dolares = soles / tasaDeCambio;
    // Imprimir el resultado en la consola
    console.log(`Con ${soles} soles peruanos, puedes adquirir ${dolares} dólares.`);
    // Mostrar el resultado en una ventana emergente
    alert(`Con ${soles} soles peruanos, puedes adquirir ${dolares} dólares.`);
}


function calcularEdad() {
    // Pedir al usuario el año de nacimiento
    let añoNacimiento = parseInt(prompt("Introduce tu año de nacimiento:"));
    // Obtener el año actual
    let añoActual = new Date().getFullYear();  // Obtiene el año actual
    // Calcular la edad
    let edad = añoActual - añoNacimiento;
    // Si la persona no ha cumplido años este año, restamos 1
    let mesNacimiento = parseInt(prompt("Introduce el mes en que naciste (1-12):"));
    let mesActual = new Date().getMonth() + 1;  // El método getMonth() devuelve 0 para enero, por eso sumamos 1
    // Verificamos si ya cumplió años este año
    if (mesNacimiento > mesActual) {
        edad--; // Si el mes de nacimiento es mayor que el mes actual, aún no ha cumplido años
    }
    // Imprimir la edad en la consola
    console.log(`La edad de la persona es: ${edad} años`);
    // Mostrar la edad en una ventana emergente
    alert(`La edad de la persona es: ${edad} años`);
}


function encontrarMenorEdad() {
    // Pedir los datos de las tres personas
    let nombre1 = prompt("Introduce el nombre de la primera persona:");
    let edad1 = parseInt(prompt(`Introduce la edad de ${nombre1}:`));

    let nombre2 = prompt("Introduce el nombre de la segunda persona:");
    let edad2 = parseInt(prompt(`Introduce la edad de ${nombre2}:`));

    let nombre3 = prompt("Introduce el nombre de la tercera persona:");
    let edad3 = parseInt(prompt(`Introduce la edad de ${nombre3}:`));

    // Determinar quién tiene la menor edad
    let menorEdad = edad1;
    let nombreMenor = nombre1;

    if (edad2 < menorEdad) {
        menorEdad = edad2;
        nombreMenor = nombre2;
    }

    if (edad3 < menorEdad) {
        menorEdad = edad3;
        nombreMenor = nombre3;
    }

    // Imprimir el nombre y la edad de la persona con la menor edad
    console.log(`La persona de menor edad es: ${nombreMenor}, con ${menorEdad} años.`);
    // Mostrar el resultado en una ventana emergente
    alert(`La persona de menor edad es: ${nombreMenor}, con ${menorEdad} años.`);
}


function calcularBono() {
    // Pedir al usuario la antigüedad en años del trabajador
    let antiguedad = parseInt(prompt("Introduce la antigüedad del trabajador en años:"));
    // Determinar el bono según la antigüedad
    let bono;
    if (antiguedad == 1) {
        bono = 100;
    } else if (antiguedad == 2) {
        bono = 200;
    } else if (antiguedad == 3) {
        bono = 300;
    } else if (antiguedad == 4) {
        bono = 400;
    } else if (antiguedad == 5) {
        bono = 500;
    } else if (antiguedad > 5) {
        bono = 1000;
    } else {
        bono = 0; // Si la antigüedad es menor que 1, no hay bono
    }
    // Mostrar el bono en la consola
    console.log(`El bono que recibirá el trabajador es: $${bono}`);
    // Mostrar el bono en una ventana emergente
    alert(`El bono que recibirá el trabajador es: $${bono}`);
}


function calcularSalario() {
    let salarioInicial = 1500; // Salario inicial
    let incremento = 0.10;    // Incremento del 10% anual
    let años = 6;             // Número de años
    let salario = salarioInicial;
    // Mostrar el salario inicial
    console.log(`Salario inicial: $${salarioInicial}`);
    // Ciclo para calcular el salario durante los 6 años
    for (let i = 1; i <= años; i++) {
        // Calcular el salario para el año actual
        salario *= (1 + incremento); // Incrementar el salario en un 10%
        // Mostrar el salario de cada año
        console.log(`Salario al final del año ${i}: $${salario.toFixed(2)}`);
    }
    // Mostrar el salario después de 6 años
    console.log(`El salario después de 6 años es: $${salario.toFixed(2)}`);
}


function calcularAprobadosYReprobados() {
    // Leer el número de alumnos
    let N = parseInt(prompt("Introduce el número de alumnos:"));
    // Inicializar los contadores
    let aprobados = 0;
    let reprobados = 0;
    // Leer las calificaciones de los N alumnos
    for (let i = 1; i <= N; i++) {
        let calificacion = parseFloat(prompt(`Introduce la calificación del alumno ${i}:`));
        
        // Verificar si está aprobado o reprobado
        if (calificacion >= 11) {
            aprobados++;
        } else {
            reprobados++;
        }
    }
    // Mostrar los resultados
    console.log(`Número de alumnos aprobados: ${aprobados}`);
    console.log(`Número de alumnos reprobados: ${reprobados}`);
    // Mostrar en ventana emergente
    alert(`Número de alumnos aprobados: ${aprobados}\nNúmero de alumnos reprobados: ${reprobados}`);
}


function contarFocos() {
    // Leer el número de focos en el lote
    let N = parseInt(prompt("Introduce el número total de focos en el lote:"));
    // Inicializar los contadores de los colores
    let focosVerde = 0;
    let focosBlanco = 0;
    let focosRojo = 0;
    // Contabilizar los focos de cada color
    for (let i = 1; i <= N; i++) {
        let color = prompt(`Introduce el color del foco ${i} (verde, blanco o rojo):`).toLowerCase();
        // Contabilizar según el color ingresado
        if (color === "verde") {
            focosVerde++;
        } else if (color === "blanco") {
            focosBlanco++;
        } else if (color === "rojo") {
            focosRojo++;
        } else {
            console.log("Color no válido. Por favor ingrese 'verde', 'blanco' o 'rojo'.");
        }
    }
    // Mostrar los resultados en consola
    console.log(`Número de focos verdes: ${focosVerde}`);
    console.log(`Número de focos blancos: ${focosBlanco}`);
    console.log(`Número de focos rojos: ${focosRojo}`);
    // Mostrar los resultados en una ventana emergente
    alert(`Número de focos verdes: ${focosVerde}\nNúmero de focos blancos: ${focosBlanco}\nNúmero de focos rojos: ${focosRojo}`);
}


function puedeVotar() {
    // Leer la edad de la persona
    let edad = parseInt(prompt("Introduce tu edad:"));
    // Verificar si la persona puede votar
    if (edad >= 18) {
        console.log("Puedes votar en las próximas elecciones.");
        alert("¡Puedes votar en las próximas elecciones!");
    } else {
        console.log("No puedes votar en las próximas elecciones.");
        alert("No puedes votar en las próximas elecciones.");
    }
}

elegirEjercicio();
