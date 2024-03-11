const Pool = require("../repository/Pool")

class Cliente {
    constructor(nome, sobrenome, idade, cpf, rg){
        let _nome = nome
        let _sobrenome = sobrenome
        let _idade = idade
        let _cpf = cpf
        let _rg = rg

        this.getNome = () => _nome
        this.getSobrenome = () => _sobrenome
        this.getIdade = () => _idade
        this.getCpf = () => _cpf
        this.getRg = () => _rg

        this.setNome = (novoNome) => _nome = novoNome
        this.setSobrenome = (novoSobrenome) => _sobrenome = novoSobrenome
        this.setIdade = (novoIdade) => _idade = novoIdade
        this.setCpf = (novoCpf) => _cpf = novoCpf
        this.setRg = (novoRg) => _rg = novoRg
    }
    contruirArrayCliente() {
        return new Array(
            this.getNome(),
            this.getSobrenome(),
            this.getIdade(),
            this.getCpf(),
            this.getRg()
        )
    }
    contruirObjetoCliente() {
        return {
            nome: this.getNome(),
            sobrenome: this.getSobrenome(),
            idade: this.getIdade(),
            cpf: this.getCpf(),
            rg: this.getRg()
        }
    }
    async insert(){
        let clientValues = this.contruirObjetoCliente()
        let query = "INSERT INTO tb_cliente " +
                        "(cli_nome, cli_sobrenome, cli_idade, cli_cpf, cli_rg) " +
                    "VALUES($1, $2, $3, $4, $5) RETURNING cli_cd"
        return (await Pool.query(query, [clientValues.nome, clientValues.sobrenome, clientValues.idade, clientValues.cpf, clientValues.rg])).rows[0]
    }
    async update(clientId) {
        if(!clientId) throw new Error("Id do cliente não informado")

        let clientValues = this.contruirObjetoCliente()
        let query = "UPDATE tb_cliente " +
                    "SET cli_nome=$1, cli_sobrenome=$2, cli_idade=$3, cli_cpf=$4, cli_rg=$5 " +
                    "WHERE cli_cd=" + clientId + ""

        return Pool.query(query, [clientValues.nome, clientValues.sobrenome, clientValues.idade, clientValues.cpf, clientValues.rg])
    }
    async read(clientId) {
        if(!clientId) throw new Error("Id do cliente não informado")

        let query = "SELECT * FROM tb_cliente tc "
                    "INNER JOIN tb_endereco te ON tc.cli_cd = te.end_cli_cd " +
                    "INNER JOIN tb_departamento td ON tc.cli_cd = td.dep_cli_cd " + 
                    "WHERE tc.cli_cd  = " + clientId + ""

        return (await Pool.query(query)).rows[0]
    }
    async delete(clientId) {
        if(!clientId) throw new Error("Id do cliente não informado")

        let query = "DELETE FROM tb_cliente " +
                    "WHERE cli_cd=" + clientId + ""

        return Pool.query(query)
    }
}

module.exports = Cliente