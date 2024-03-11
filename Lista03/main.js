require('dotenv').config()

const Cliente = require('./model/Cliente')
const Departamento = require('./model/Departamento')
const Endereco = require('./model/Endereco')
const InitDB = require('./model/InitDB')

/**
 * Atividade03 - CRUD
 * 3 Tabelas com 5 campos cada
 */

function main() {
    // InitDB.initDDL()

    processCliente()
}

async function processCliente() {
    // CREATE
    let responseInsert, responseRead, responseDelete
    let cliente = new Cliente("Daniel", "Oliveira", 0, 3333333333, 444444444)
    try {
        responseInsert = await cliente.insert()
    } catch (error) {
        console.error(error)
    }
    console.table(responseInsert)

    // READ
    let clienteId = responseInsert.cli_cd
    try {
        responseRead = await cliente.read(clienteId)
    } catch (error) {
        console.error(error)
    }
    console.table(responseRead)

    // UPDATE
    let clienteToUpdate = new Cliente(responseRead.cli_nome, responseRead.cli_sobrenome, responseRead.cli_idade, responseRead.cli_cpf, responseRead.cli_rg)
    clienteToUpdate.setIdade(36)
    let clienteIdToUpdate = responseInsert.cli_cd
    try {
        responseUpdate = await clienteToUpdate.update(clienteIdToUpdate)
    } catch (error) {
        console.error(error)
    }
    console.table(responseUpdate)

    // DELETE
    // let clientIdToDelete = responseInsert.cli_cd
    // try {
    //     responseDelete = await cliente.delete(clientIdToDelete)
    // } catch (error) {
    //     console.error(error)
    // }
    // console.table(responseDelete)

    processEndereco(responseInsert.cli_cd)
}

async function processEndereco(clientId) {
    let enderecoDataApi, responseInsert
    let endereco = new Endereco("", 111, 22222222, "", "", clientId)
    try {
        enderecoDataApi = await endereco.getCepData(endereco.getCep())
    } catch (error) {
        console.error(error)
    }

    endereco.setLogradouro(enderecoDataApi.logradouro)
    endereco.setMunicipio(enderecoDataApi.localidade)
    endereco.setEstado(enderecoDataApi.uf)

    try {
        responseInsert = await endereco.insert()
    } catch (error) {
        console.error(error)
    }
    console.table(responseInsert)

    // READ
    try {
        responseRead = await endereco.read(clientId)
    } catch (error) {
        console.error(error)
    }
    console.table(responseRead)

    // UPDATE
    let enderecoToUpdate = new Endereco(responseRead.end_logradouro, responseRead.end_numero, responseRead.end_cep, responseRead.end_municipio, responseRead.end_estado, responseRead.end_cli_cd)
    enderecoToUpdate.setNumero(272)
    let enderecoIdToUpdate = responseInsert.end_cd
    try {
        responseUpdate = await enderecoToUpdate.update(enderecoIdToUpdate)
    } catch (error) {
        console.error(error)
    }
    console.table(responseUpdate)

    // DELETE
    // let enderecoIdToDelete = responseInsert.end_cd
    // try {
    //     responseDelete = await endereco.delete(enderecoIdToDelete)
    // } catch (error) {
    //     console.error(error)
    // }
    // console.table(responseDelete)

    processDepartamento(clientId)
}

async function processDepartamento(clientId) {
    let responseInsert, responseRead, responseUpdate, responseDelete
    
    // INSERT
    let departamento = new Departamento("Recursos Homanos", "Departamento para auxilio dos funcionários", "RH", "", clientId)

    try {
        responseInsert = await departamento.insert()
    } catch (error) {
        console.error(error)
    }
    console.table(responseInsert)

    // (dep_nome, dep_descricao, dep_sigla, dep_cli_cd)
    // READ
    try {
        responseRead = await departamento.read(clientId)
    } catch (error) {
        console.error(error)
    }
    console.table(responseRead)

    // UPDATE
    let departamentoToUpdate = new Departamento(responseRead.dep_nome, responseRead.dep_descricao, responseRead.dep_sigla)
    departamentoToUpdate.setDescricao("Auxiliar funcionários em todas as questões relacionadas aos Recursos Humanos")
    let departamentoIdToUpdate = responseInsert.dep_cd
    try {
        responseUpdate = await departamentoToUpdate.update(departamentoIdToUpdate)
    } catch (error) {
        console.error(error)
    }
    console.table(responseUpdate)

    // DELETE
    // let departamentoIdToDelete = responseInsert.end_cd
    // try {
    //     responseDelete = await departamento.delete(departamentoIdToDelete)
    // } catch (error) {
    //     console.error(error)
    // }
    // console.table(responseDelete)

}

(function() {
    main()
})()