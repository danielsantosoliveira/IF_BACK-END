/**
 * 11 – Criar um programa que leia um vetor de números inteiros com 10 posições.
    Exibir quantos números pares e quantos números ímpares foram informados. Exibir também a
    soma dos números pares e a média dos números ímpares.
 * 
 */


const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

let responseData = {pares: {values: [], soma: 0}, impares: {values: [], soma: 0, media: 0}}
let index = 0

let scanNumber = function () {
    readline.question(`Número(${++index}): `, number => {
        if (number == "" || isNaN(number)) return error("Não é um número.")
        if (number.includes(",") || number.includes(".") || !Number.isInteger(parseInt(number))) return error("Somente número inteiro.")
        number = parseInt(number)
        if (number % 2 == 0) {
            responseData.pares.values.push(number)
            responseData.pares.soma += number
        } else {
            responseData.impares.values.push(number)
            responseData.impares.soma += number
        }
        if(index >= 10) print()
        else scanNumber()
    })
}

let error = function (error) {
    console.log("Processo finalizado. Erro: ", error)
    readline.close()
}

let print = function () {
    console.log("\nResultado*******************")
    console.log(`\nPares: \nQuantidade: ${responseData.pares.values.length}\nSoma: ${responseData.pares.soma}`)
    console.log(`\nPares: \nQuantidade: ${responseData.impares.values.length}\nMédia: ${responseData.impares.soma/responseData.impares.values.length}`)
    readline.close()
}

console.log("O programa solicitará 10 números para processamento")
scanNumber()