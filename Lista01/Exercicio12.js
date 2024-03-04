/**
 * Criar um programa que preencha um Vetor de 1000 posições com números aleatórios.
    Exibir a porcentagem de números maiores ou iguais a 700 existentes no vetor.
 */

let response = {values: [], biggerThen700: 0}


let processing = function() {
    for (let index = 0; index < 1000; index++) {
        let drawnNumber = Math.floor(Math.random() * 1000)
        if(drawnNumber >= 700) response.biggerThen700 += 1
        response.values.push(drawnNumber)
    }
    print()
}

let print = function() {
    console.log(`A porcentagem de número maiores ou iguais a 700 é: `, ((response.biggerThen700 * 100) / 1000))
}

processing()