/**
    3 – Crie um programa que leia dois números reais e apresente um menu com as opções:
        1 - Somar
        2 - Subtrair
        3 - Multiplicar
        4 - Dividir
        Caso a linguagem escolhida tenha suporte, exibir o resultado em uma tela gráfica.
 * 
 */

const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})
        

let values = {}
let calculate = function() {
    return {
        1: values.value1 + values.value2,
        2: values.value1 - values.value2,
        3: values.value1 * values.value2,
        4: values.value1 / values.value2
    }
}

let scanValue1 = function() {
    console.log("********* Calculadora *********")
    readline.question(`1° Valor: `, value1 => {
        if(isNaN(value1)) return error("Não é um número.")
        if(value1.includes(",")) return error("Usar ponto para valor decimal.")
        values["value1"] = value1
        scanValue2()
    })
}

let scanValue2 = function() {
    readline.question(`2° Valor: `, value2 => {
        if(isNaN(value2)) return error("Não é um número.")
        if(value2.includes(",")) return error("Usar ponto para valor decimal.")
        values["value2"] = value2
        scanOption()
    })
}

let scanOption = function() {
    console.log(`
        1 - Somar
        2 - Subtrair
        3 - Multiplicar
        4 - Dividir
    `)
    readline.question(`Operação: `, option => {
        if(option.includes(",")) return error("Usar ponto para valor decimal.")
        values["option"] = option
        processing()
    })
}

let processing = function() {
    if(values["option"] < 1 || 4 < values["option"]) return error("Opção inexistente.")
    if(values["option"] == 4 && 0 == values["value2"]) return error("Não divisível por 0(zero).")
    let resultado = calculate()
    print(resultado[values["option"]])
}

let error = function(error) {
    console.log("Processo finalizado. Erro: ", error)
    readline.close()
}

let print = function(resultado) {
    console.log(`Resultado: ${resultado}`)
    readline.close()
}

scanValue1()