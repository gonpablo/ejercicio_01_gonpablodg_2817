// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
const numeroParImpar = (numero) => {
    if (numero % 2 === 0) {
        return console.log('El numero es par');
    } else {
        return console.log('El numero es impar');
    }
}

num1 = prompt("Ingrese un numero");
numeroParImpar(num1);



// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
const numeroMayor = (numero1, numero2) => {
    if (numero1 > numero2) {
        return console.log(`El primer numero ${numero1} es mayor al segundo numero ${numero2}`);
    } else if (numero2 > numero1) {
        return console.log(`El segundo numero ${numero2} es mayor al primer numero ${numero1}`);
    } else {
        return console.log(`Los numeros (${numero1} - ${numero2}) son iguales`);
    }
}

num21 = prompt("Ingrese el primer numero");
num22 = prompt("Ingrese el segundo numero");
numeroMayor(num21, num22); 



// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
const numeroMultiplo5 = (numero3) => {
    if (numero3 > 0 && numero3 % 5 === 0) {
        return console.log(`El numero ${numero3} es multiplo de 5`);
    } else {
        return console.log(`El numero ${numero3} NO es multiplo de 5`);
    }
}

num3 = prompt("Ingrese un numero para saber si es multiplo de 5");
numeroMultiplo5(num3);



// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
const imprimirNumeros = (numero4) => {

    for (i=0; i <= numero4; i++) {
        console.log(`Numero: ${i}`);
    }         
} 

num4 = prompt("Ingrese un numero");
imprimirNumeros(num4);



// 5- Crear una función que reciba una palabra y un número por parámetro e imprima por consola esa palabra la cantidad correspondiente al número indicado.
const imprimirCantidadPalabras = (palabra5, numero5) => {
    for (i=1; i <= numero5; i++) {
        console.log(`${i}. ${palabra5}`);
    }         
} 

pal5 = prompt("Ingrese una palabra");
num5 = prompt("Ingrese cantidad de veces para repetir esa palabra");
imprimirCantidadPalabras(pal5, num5);



// 6- Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
const imprimirArray = (array) => {
    for (i=0; i < array.length; i++) {
        console.log(array[i]);
    }         
} 

array6 = ["Pablo", 35, "Argentina", "Independiente", "Front end Developed"];
imprimirArray(array6);



// 7- Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
const imprimirArrayMenosUno = (array) => {
    for (i=0; i < array.length; i++) {

        if(i != 4) {
            console.log(`Posicion ${i+1}: ${array[i]}`);
        }
    }         
} 

array7 = [10, 35, 5, 50, 14, 23, 8, 2, 9, 80];
imprimirArrayMenosUno(array7);



// 8- Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
const imprimirNumArrayMultiplicados = (array, num) => {
    for (i=0; i < array.length; i++) {

        console.log(`Numero ${i+1}: ${array[i]*num}`);
    }         
} 

array8 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 100];
num8 = prompt("Ingrese un numero para multiplicar");
imprimirNumArrayMultiplicados(array8, num8);