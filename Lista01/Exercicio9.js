/**
 * 9 – Implemente um programa para o cálculo de Fatorial, utilizando o conceito de recursividade.
 */

let factorial = function(number) {
    if (number < 0) return 1
    return number === 0 ? 1 : number * factorial(--number);
}

console.log(factorial(0))