/**
 * 2 – Criar um programa com Classes e Objetos que tenha um método chamado “contaPrimos( )”.
    Este método recebe como parâmetro dois números inteiros positivos, sendo o primeiro menor do
    que o segundo. O retorno do método será a quantidade de números primos encontrados do
    primeiro ao segundo valor informado.
    Ex: (‘obj’ é um objeto qualquer a escolha do aluno)
    x = obj.contaPrimos(5, 20) → x terá o valor 6, já que de 5 até 20 existem seis números primos.
 */

const Primo = require("./Primo")

function processamento() {
    let construirPrimo = new Primo(), reposta = undefined
    try {
        reposta = construirPrimo.contaPrimos(5, 100)
    } catch (error) {
        console.log(error)
    }
    console.log(reposta)
}

(function() {
    processamento()
})()