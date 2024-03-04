/**
 * 1 – Criar um programa de cadastro de Clientes com nome, endereço, Cep e CPF. Utilizar os
    recursos de Classes e objetos. Encapsular todos os atributos para que possam ser alterados e
    lidos apenas utilizando métodos de acesso. Para cada cliente informado, exibir os dados na tela
    ao final da inserção de dados. Realizar a validação dos dados usando RegEX.
*/

const readline = require("node:readline")
const { stdin: input, stdout: output } = require("node:process");

const Cliente = require("./Cliente")

const rl = readline.createInterface({ input, output })

async function processLineByLine() {
    let count = 0, attributes = ["nome", "endereco", "cep", "cpf"], response = {}
    console.log(attributes[count].charAt(0).toUpperCase() + attributes[count].slice(1) + ": ")
    for await (let line of rl) {
        response[attributes[count]] = line
        count++
        if (count > attributes.length - 1) return finalizeProgram(response)
        console.log(attributes[count].charAt(0).toUpperCase() + attributes[count].slice(1) + ": ")
    }
}

function finalizeProgram(response) {
    let cliente = new Cliente()

    try {
        cliente.setNome(response.nome)
        cliente.setEndereco(response.endereco)
        cliente.setCep(response.cep)
        cliente.setCpf(response.cpf)
    } catch (error) {
        return finalizeError(error)
    }

    finalizeSuccess(cliente)
}

function finalizeError(error) {
    console.log("Erro na execução do programa: " + error);
    rl.close()
}

function finalizeSuccess(cliente) {
    console.clear()
    console.log("Registro realizado com sucesso **************")
    console.log(`Nome: ${cliente.getNome()}`)
    console.log(`Endereço: ${cliente.getEndereco()}`)
    console.log(`CEP: ${cliente.formatCep()}`)
    console.log(`CPF: ${cliente.formatCpf()}`)
    rl.close()
}

(function () {
    processLineByLine()
})()