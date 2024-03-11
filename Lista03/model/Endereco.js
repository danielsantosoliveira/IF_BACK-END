var axios = require("axios").default

const Pool = require("../repository/Pool")

class Endereco {
    constructor(logradouro, numero, cep, municipio, estado, idCliente) {
        let _logradouro = logradouro
        let _numero = numero
        let _cep = cep
        let _municipio = municipio
        let _estado = estado
        let _idCliente = idCliente

        this.getLogradouro = () => _logradouro
        this.getNumero = () => _numero
        this.getCep = () => _cep
        this.getMunicipio = () => _municipio
        this.getEstado = () => _estado
        this.getIdCliente = () => _idCliente

        this.setLogradouro = (novoLogradouro) => _logradouro = novoLogradouro
        this.setNumero = (novoNumero) => _numero = novoNumero
        this.setCep = (novoCep) => _cep = novoCep
        this.setMunicipio = (novoMunicipio) => _municipio = novoMunicipio
        this.setEstado = (novoEstado) => _estado = novoEstado
        this.setIdCliente = (novoIdCliente) => _idCliente = novoIdCliente
    }
    contruirArrayEndereco() {
        return new Array(
            this.getLogradouro(),
            this.getNumero(),
            this.getCep(),
            this.getMunicipio(),
            this.getEstado(),
            this.getIdCliente()
        )
    }
    contruirObjetoEndereco() {
        return {
            logradouro: this.getLogradouro(),
            numero: this.getNumero(),
            cep: this.getCep(),
            municipio: this.getMunicipio(),
            estado: this.getEstado(),
            idCliente: this.getIdCliente()
        }
    }

    async getCepData(cepId) {
        let response = undefined

        await axios.request({
            method: "GET",
            url: "http://viacep.com.br/ws/" + cepId + "/json/"
        }).then(function (res) {
            console.log(res.data)
            response = res.data
        }).catch(function (error) {
            console.error(error)
        })

        return response
    }

    async insert() {
        let addressValues = this.contruirObjetoEndereco()
        let query = "INSERT INTO tb_endereco " +
            "(end_logradouro, end_numero, end_cep, end_municipio, end_estado, end_cli_cd) " +
            "VALUES($1, $2, $3, $4, $5, $6) RETURNING end_cd"

        return (await Pool.query(query, [addressValues.logradouro, addressValues.numero, addressValues.cep, addressValues.municipio, addressValues.estado, addressValues.idCliente])).rows[0]
    }
    async update(addressId) {
        if (!addressId) throw new Error("Id do endereço não informado")

        let addressValues = this.contruirObjetoEndereco()
        let query = "UPDATE tb_endereco " +
            "SET end_logradouro=$1, end_numero=$2, end_cep=$3, end_municipio=$4, end_estado=$5, end_cli_cd=$6 " +
            "WHERE end_cd=" + addressId + ""

        return Pool.query(query, [addressValues.logradouro, addressValues.numero, addressValues.cep, addressValues.municipio, addressValues.estado, addressValues.idCliente])
    }
    async read(idCliente) {
        if (!idCliente) throw new Error("Id do cliente não informado")

        let query = "SELECT end_cd, end_logradouro, end_numero, end_cep, end_municipio, end_estado, end_cli_cd " +
            "FROM tb_endereco " +
            "WHERE end_cli_cd=" + idCliente + ""

        return (await Pool.query(query)).rows[0]
    }
    async delete(addressId) {
        if (!addressId) throw new Error("Id do endereço não informado")

        let query = "DELETE FROM tb_endereco " +
            "WHERE end_cd=" + addressId + ""

        return Pool.query(query)
    }
}

module.exports = Endereco