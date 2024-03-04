/**
 * 1 – Elaborar um programa que receba o nome de um cliente, seu endereço, valor de uma
    compras e data de entrega. O programa deve exibir o seguinte texto (apresentar na tela a
    mesma formatação):
                                    AVISO
    Caro cliente Sr(a) ______________________, os produtos da sua compra no
    valor de R$ _____ serão entregues no endereço abaixo:
    Rua _____________________________.
    Data da Entrega: ________________.
    ******************** Obrigado pela Preferência! **********************
 * 
 */

const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

let cliente = {}

let scanNome = function() {
    readline.question(`Nome do Cliente: `, nome => {
        cliente["nome"] = nome
        scanEndereço()
    })
}

let scanEndereço = function() {
    readline.question(`Endereço do Cliente: `, endereco => {
        cliente["endereco"] = endereco
        scanValorCompra()
    })
}

let scanValorCompra = function() {
    readline.question(`Valor da Compra: `, valorCompra => {
        cliente["valorCompra"] = valorCompra
        scanDataEntrega()
    })
}

let scanDataEntrega = function() {
    readline.question(`Data de Entrega da Compra: `, dataEntrega => {
        cliente["dataEntrega"] = dataEntrega
        print()
    })
}

let print = function() {
    console.log(`                          AVISO                           
    \nCaro cliente Sr(a) ${cliente.nome}, os produtos da sua compra no
    \nvalor de R$ ${cliente.valorCompra} serão entregues no endereço abaixo:
    \nRua ${cliente.endereco}.
    \nData da Entrega: ${cliente.dataEntrega}.
    \n******************** Obrigado pela Preferência! **********************
    `)
    readline.close()
}

scanNome()