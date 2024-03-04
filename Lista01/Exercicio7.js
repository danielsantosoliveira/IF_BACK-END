/**
 * 7 – Desenvolver um algoritmo que simule um jogo de adivinhação: O jogador insere números na
    tentativa de acertar o número sorteado entre 0 e 9 pelo algoritmo. Quando acertar, o programa
    deve informar que ele acertou o número x (sorteado) em x tentativas (quantidade de tentativas
    do jogador). Verificar como é realizada a geração de números aleatórios na linguagem
    escolhida.
*/

const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

let drawnNumber = Math.floor(Math.random() * 9)

let attempts = 0

let scanNumber = function () {
    readline.question(`Número: `, number => {
        if (number == "" || isNaN(number)) return error("Não é um número.")
        if (parseInt(number) < 0 || 9 < parseInt(number)) return error("Aceito somente número entre 0 e 9.")
        if (number.includes(",") || number.includes(".") || !Number.isInteger(parseInt(number))) return error("Somente número inteiro.")
        attempts++
        if (drawnNumber != number) {
            console.log("Você errou, tente outra vez.")
            scanNumber()
        } else {
            print()
        }
    })
}

let print = function () {
    console.log("\n---------------------")
    console.log(`Você acertou!\nNúmero sorteado: ${drawnNumber} \nTentativas: ${attempts}`)
    readline.close()
}

let error = function (error) {
    console.log("Processo finalizado. Erro: ", error)
    readline.close()
}

console.log("Jogo da adivinhação, o sistema sorteará um número de 0 a 9, em quantas tentativas conseguirá acertar?")
scanNumber()