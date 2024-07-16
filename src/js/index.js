// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// number, string, boolean, undefined -> TIPOS DE DATOS PRIMITIVOS
// PRIMITIVOS -> INMUTABLES

// INMUTABILIDAD DE DATOS PRIMITIVOS

let numberA = 7;

const numberB = numberA;

numberA = 5;

console.log('NUMBER A', numberA); // NUMBER A 5
console.log('NUMBER B', numberB); // NUMBER B 7

// Siempre hay que guardar la variable en una constante porque si no, no se van a realizar los cambios

let word = 'oscar';
word.toUpperCase();
console.log(word); // oscar

const wordUpper = word.toUpperCase();
console.log(wordUpper); // OSCAR

// arrays, objetos -> TIPOS DE DATOS REFERENCIA

const numbersA = [1, 2, 3];
const numbersB = numbersA;
// const numbersB = [...numbersA]; // SPREAD OPERATOR (OPERADOR DE EXPANSIÓN)

numbersA.push(4);

console.log('NUMBERS A', numbersA); // NUMBERS A = [1, 2, 3, 4]
console.log('NUMBERS B', numbersB); // NUMBERS B = [1, 2, 3, 4]
