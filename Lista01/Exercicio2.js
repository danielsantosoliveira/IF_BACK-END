/**
 * 2 – Crie um programa para o cálculo do IMC de uma pessoa. Exibir mensagens de acordo com
    a faixa de valores encontrada:
        Menor que 16,5 = Desnutrição
        de 16,6 a 18,5 = Abaixo do peso
        de 18,6 a 24,9 = Peso normal
        de 25 a 29,9 = Sobrepeso
        maior ou igual a 30 = Obesidade.
 * 
 */

const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

let pessoa = {}
let tabela = function(value) {
    return {
        [value < 16.5]: "Desnutrição",
        [value > 16.5 && 18.6 > value]: "Abaixo do peso",
        [value > 18.5 && 25 > value]: "Peso normal",
        [value > 24.9 && 30 > value]: "Sobrepeso",
        [value > 29.9]: "Obesidade",
    }
}

let scanPeso = function() {
    console.log("****** Calculadora IMC(Índice de Massa Corporal) ******")
    readline.question(`Peso (kg) Ex.(XX.XX): `, peso => {
        if(peso.includes(",")) return error("Usar ponto para valor decimal.")
        pessoa["peso"] = peso
        scanAltura()
    })
}

let scanAltura = function() {
    readline.question(`Altura (m) Ex.(X.XX): `, altura => {
        if(altura.includes(",")) return error("Usar ponto para valor decimal.")
        pessoa["altura"] = altura
        processing()
    })
}

let processing = function() {
    let imc = parseFloat(pessoa.peso)/((parseFloat(pessoa.altura))**2)
    let resultado = tabela(imc)
    print(imc, resultado.true)
}

let print = function(imc, resultado) {
    console.log(`Resultado: IMC(${imc}) ${resultado}`)
    readline.close()
}

let error = function(error) {
    console.log("Processo finalizado. Erro: ", error)
    readline.close()
}

scanPeso()
