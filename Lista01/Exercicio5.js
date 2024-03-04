/**
 * 5 – Crie um programa que receba dois números inteiros e diferentes, maiores do que 0. Exiba as
    tabuadas de todos os números do intervalo (Ex. Números digitados: 3 e 7 → exibirá as tabuadas
    do 3, 4, 5, 6 e 7). O resultado deve ser exibido no terminal.
 */

const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

let numbers = {}

let scanNumber1 = function() {
    console.log("********* Tabuada *********")
    console.log("Digite dois números inteiros alternados")
    readline.question(`1° Número: `, number1 => {
        if(number1 == "" || isNaN(number1)) return error("Não é um número.")
        if(!(number1 > 0)) return error("Aceito somente número maior que (0)zero.")
        if(number1.includes(",") || !Number.isInteger(parseInt(number1))) return error("Somente número inteiro.")
        numbers["number1"] = number1
        scanNumber2()
    })
}

let scanNumber2 = function() {
    readline.question(`2° Número: `, number2 => {
        if(number2 == "" || isNaN(number2)) return error("Não é um número.")
        if(!(number2 > 0)) return error("Aceito somente número maior que (0)zero.")
        if(number2 == numbers["number1"]) return error("Os números não podem ser iguais.")
        if(number2.includes(",") || !Number.isInteger(parseInt(number2))) return error("Somente número inteiro.")
        numbers["number2"] = number2
        processing()
    })
}

let processing = function() {
    let menor = numbers["number1"] < numbers["number2"] ? numbers["number1"] : numbers["number2"]
    let maior = numbers["number1"] > numbers["number2"] ? numbers["number1"] : numbers["number2"]
    for (let indexX = menor; indexX <= maior; indexX++) {
        console.log(`********* Tabuada do ${indexX} *********`)
        for (let indexY = 1; indexY <= 10; indexY++) {
            console.log(`${indexX} X ${indexY} = ${indexX * indexY}`)
        }       
    }
    readline.close()
}


let error = function(error) {
    console.log("Processo finalizado. Erro: ", error)
    readline.close()
}

scanNumber1()