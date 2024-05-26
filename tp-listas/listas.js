var listaNumerosEjemplo = [2,4,6,-1,5,-4,0];


/**
 * 01 - invertirLista
 * 
 * Recibe
 * - `listaDeNumeros`: una lista (array) de números.
 * 
 * Retorna: 
 * - una lista de números con los mismos elementos pero en orden inverso al que fueron recibidos.
 * 
 * Ejemplos:
 * - invertirLista([2,3,4]) retorna [4,3,2]
 */
function invertirLista(listaDeNumeros) {
    listaDeNumeros.sort(function(a, b){
        return b - a;
    });
    return listaDeNumeros;
}
console.log("invertirLista([2,3,4]): ", invertirLista([2,3,4]))


/**
 * 02 - calcularPromedio
 * 
 * Recibe
 * - `listaDeNumeros`: una lista (array) de números.
 * 
 * Retorna: 
 * - un numero, con el valor calculado de promedio para los números en la lista recibida.
 * 
 * Ejemplos:
 * - calcularPromedio([2,3,4]) retorna 3
 */
function calcularPromedio(listaDeNumeros) {
    var suma = 0;
    for (var i = 0; i < listaDeNumeros.length; i++) {
        suma += listaDeNumeros[i];
    }
    return suma / listaDeNumeros.length;
}
console.log("calcularPromedio([2,3,4]): ", calcularPromedio([2,3,4]))
console.log("calcularPromedio(listaNumerosEjemplo): ", calcularPromedio(listaNumerosEjemplo))


/**
 * 03 - crearListaDeNumeros
 * 
 * Recibe
 * - `inicio`: un número, con el valor inicial de la lista
 * - `fin`: un número, con el valor final de la lista
 * 
 * Retorna: 
 * - una lista (array) con valores numéricos en secuencia, desde `inicio` hasta `fin`.
 * 
 * Ejemplos:
 * - crearListaDeNumeros(1,5) retorna [1,2,3,4,5]
 * - crearListaDeNumeros(3,6) retorna [3,4,5,6]
 * - crearListaDeNumeros(2,2) retorna [2]
 */
function crearListaDeNumeros(inicio, fin) {
    let array = [];
    while (inicio <= fin){
        array[inicio] = inicio
        inicio++;
    }
    return array;
}

console.log("crearListaDeNumeros(2,5): ", crearListaDeNumeros(2,5))


/**
 * 04 - ordenarDeMayorAMenor
 * 
 * Recibe
 * - `listaDeNumeros`: una lista (array) de números.
 * 
 * Retorna: 
 * - una lista de números con los mismos elementos pero en orden decreciente (de mayor a menor).
 * 
 * Ejemplos:
 * - ordenarDeMayorAMenor([2,-1,4]) retorna [4,2,-1]
 */
function ordenarDeMayorAMenor(listaDeNumeros) {
    listaDeNumeros.sort((a,b) =>{
        return b - a;
    })
    return listaDeNumeros;
}
console.log("ordenarDeMayorAMenor([2,3,4]): ", ordenarDeMayorAMenor([2,3,4]))
console.log("ordenarDeMayorAMenor(listaNumerosEjemplo): ", ordenarDeMayorAMenor(listaNumerosEjemplo))


/**
 * 05 - encontrarNumeroMayor
 * 
 * Recibe
 * - `listaDeNumeros`: una lista (array) de números.
 * 
 * Retorna: 
 * - un numero, con el valor del numero más grande contenido en la lista recibida.
 * 
 * Ejemplos:
 * - encontrarNumeroMayor([2,3,4]) retorna 4
 */
function encontrarNumeroMayor(listaDeNumeros) {
    listaDeNumeros.sort((a, b) => {return b - a;});
    return listaDeNumeros[0];
}
console.log("encontrarNumeroMayor([2,3,4]): ", encontrarNumeroMayor([2,3,4]))
console.log("encontrarNumeroMayor(listaNumerosEjemplo): ", encontrarNumeroMayor(listaNumerosEjemplo))


/**
 * 06 - ordenarPalabrasPorLongitud
 * 
 * Recibe
 * - `listaDePalabras`: una lista (array) de palabras (string).
 * 
 * Retorna: 
 * - una lista (array) de palabras (string), con los mismos valores que la lista recibida pero ordenados de manera creciente de acuerdo a su cantidad de caracteres.
 * 
 * Ejemplos:
 * - ordenarPalabrasPorLongitud(['abc', 'a', 'ab']) retorna ['a', 'ab', 'abc']
 */
function ordenarPalabrasPorLongitud(listaDePalabras) {
    listaDePalabras.sort((a, b) => {return a.length - b.length;});
    return listaDePalabras;
}
console.log("ordenarPalabrasPorLongitud(['abc', 'a', 'ab']): ", ordenarPalabrasPorLongitud(['abc', 'a', 'ab']))


/**
 * 07 - encontrarPalabraMasCorta
 * 
 * Recibe
 * - `listaDePalabras`: una lista (array) de palabras (string).
 * 
 * Retorna: 
 * - una palabras (string) que dentro del listado tenga la menor cantidad de caracteres de longitud. En caso de que haya varias palabras con la misma longitud, se puede devolver la primera encontrada.
 * 
 * Ejemplos:
 * - encontrarPalabraMasCorta(['abc', 'a', 'ab', 'c']) retorna 'a'
 */
function encontrarPalabraMasCorta(listaDePalabras) {
    listaDePalabras.sort((a, b) => {return a.length - b.length;});
    return listaDePalabras[0];
}
console.log("encontrarPalabraMasCorta(['abc', 'a', 'ab']): ", encontrarPalabraMasCorta(['abc', 'a', 'ab']))


/**
 * 08 - filtrarSoloPositivos
 * 
 * Recibe
 * - `listaDeNumeros`: una lista (array) de números.
 * 
 * Retorna: 
 * - una lista (array) de números, conteniendo sólo los valores positivos de la lista de números recibida.
 * 
 * Ejemplos:
 * - filtrarSoloPositivos([1,-1,2]) retorna [1,2]
 */
function filtrarSoloPositivos(listaDeNumeros) {
    listaDeNumeros = listaDeNumeros.filter((item) => {
        return item >= 0;
    })
    return listaDeNumeros;
}
console.log("filtrarSoloPositivos([1,-1,0]): ", filtrarSoloPositivos([1,-1,0]))
console.log("filtrarSoloPositivos(listaNumerosEjemplo): ", filtrarSoloPositivos(listaNumerosEjemplo))


/**
 * 09 - contarAprobados
 * 
 * Recibe
 * - `listaDeNotas`: una lista (array) de números con valores entre 1 y 10.
 * 
 * Retorna: 
 * - un numero, con la cantidad de notas que superan el criterio de aprobación.
 * 
 * Ejemplos:
 * - contarAprobados([10,2,9]) retorna 2
 */
function contarAprobados(listaDeNotas) {
    let contador = listaDeNotas.filter((item) => {
        return item >= 7;
    });
    return contador.length;
}
console.log("contarAprobados([10, 4, 6, 7, 1, 9]): ", contarAprobados([10, 4, 6, 7, 1, 9]))


/**
 * 10 - filtrarSoloTruthy
 * 
 * Recibe
 * - `listaDeValores`: una lista (array) de valores de distintos tipos.
 * 
 * Retorna: 
 * - una lista (array) conteniendo sólo los valores que son considerados 'truthy' por el lenguaje JavaScript
 * 
 * Ejemplos:
 * - filtrarSoloTruthy(["Hola", "", 0, 1]) retorna ["Hola", 1]
 */
function filtrarSoloTruthy(listaDeValores) {
    listaDeValores = listaDeValores.filter(Boolean);
    return listaDeValores;
}
console.log("filtrarSoloTruthy(): ", filtrarSoloTruthy(["Hola", "", null, 1, 0, -1, undefined, [], {}]))

/**
 * 11 - enumerarLista
 * Recibe
 * - `listaDePalabras`: una lista (array) de palabras (strings).
 * 
 * Retorna: 
 * - Una oración (string), donde se enumeran cada una de las palabras recibidas en la lista.
 * - Bonus: una oración correctamente formada debería empezar en mayúscula, terminar con punto, y además el ultimo elemento de enumeración deberia estar separado con "y".
 * 
 * Ejemplos:
 * - enumerarLista(["Han", "Leia", "Luke", "Yoda"]) "Han, Leia, Luke y Yoda."
 */
function enumerarLista(listaDePalabras) {
    if (listaDePalabras.length === 0) {
      return "";
    }
  
    if (listaDePalabras.length === 1) {
      return listaDePalabras[0] + ".";
    }
  
    // Copiamos el array para no modificar el original
    let listaModificada = listaDePalabras.slice();
    let ultimaPalabra = listaModificada.pop();
    let oracion = listaModificada.join(", ") + " y " + ultimaPalabra + ".";
    
    // Capitalizamos la primera letra de la oración
    oracion = oracion.charAt(0).toUpperCase() + oracion.slice(1);
    
    return oracion;
  }  
console.log("enumerarLista(): ", enumerarLista(["Han", "Leia", "Luke", "Yoda"]))