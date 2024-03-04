/**
 * 
 * 6 – Crie um programa que receba um número n (inteiro e maior do que 1) como entrada e
    retorne se é um número é primo ou não.
 * 
 */

const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})
    
let response = {
    [true]: "É primo.",
    [false]: "Não é primo."
}

// Algorítmo lento rs
let isPrime = function(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false
    }
    return true
}

let scanNumber = function() {
    console.log("********* Número Primo ou Não? *********")
    console.log("Digite um número maior que 1 para validação -->")
    readline.question(`Número: `, number => {
        if(number == "" || isNaN(number)) return error("Não é um número.")
        if(!(number > 1)) return error("Aceito somente número maior que 1(um).")
        if(number.includes(",") || number.includes(".") || !Number.isInteger(parseInt(number))) return error("Somente número inteiro.")

        let prime = isPrime(number)
        print({number: number, value: response[prime]})
    })
}

let print = function(result) {
    console.log(`O número(${result.number}) ${result.value}`)
    readline.close()
}

let error = function(error) {
    console.log("Processo finalizado. Erro: ", error)
    readline.close()
}

scanNumber()