const Pool = require("../repository/Pool")

class Departamento {
    constructor(nome, descricao, sigla, data, idCliente) {
        let _nome = nome
        let _descricao = descricao
        let _sigla = sigla
        let _data = data
        let _idCliente = idCliente

        this.getNome = () => _nome
        this.getDescricao = () => _descricao
        this.getSigla = () => _sigla
        this.getData = () => _data
        this.getIdCliente = () => _idCliente

        this.setNome = (novoNome) => _nome = novoNome
        this.setDescricao = (novoDescricao) => _descricao = novoDescricao
        this.setSigla = (novoSigla) => _sigla = novoSigla
        this.setData = (novoData) => _data = novoData
        this.setIdCliente = (novoIdCliente) => _idCliente = novoIdCliente
    }
    contruirArrayDepartamento() {
        return new Array(
            this.getNome(),
            this.getDescricao(),
            this.getSigla(),
            this.getData(),
            this.getIdCliente()
        )
    }
    contruirObjetoDepartamento() {
        return {
            nome: this.getNome(),
            descricao: this.getDescricao(),
            sigla: tis.getSigla(),
            data: this.getData(),
            idCliente: this.getIdCliente()
        }
    }

    
    async insert(){
        let departmentValues = this.contruirObjetoDepartamento()
        let query = "INSERT INTO tb_departamento " +
                        "(dep_nome, dep_descricao, dep_sigla, dep_cli_cd) " +
                    "VALUES($1, $2, $3, $4) RETURNING dep_cd"

        return (await Pool.query(query, [departmentValues.nome, departmentValues.descricao, departmentValues.sigla, departmentValues.idCliente])).rows[0]
    }
    async update(departmentId) {
        if(!departmentId) throw new Error("Id do departamento não informado")

        let departmentValues = this.contruirObjetoDepartamento()
        let query = "UPDATE tb_departamento " +
                    "SET dep_nome=$1, dep_descricao=$2, dep_sigla=$3 " +
                    "WHERE end_cd=" + departmentId + ""
        
        return Pool.query(query, [departmentValues.nome, departmentValues.descricao, departmentValues.sigla])
    }
    async read(clientId) {
        if(!clientId) throw new Error("Id do cliente não informado")

        let query = "SELECT dep_cd, dep_nome, dep_descricao, dep_sigla, dep_data, dep_cli_cd " +
                    "FROM tb_departamento " +
                    "WHERE dep_cli_cd=" + clientId + ""

        return (await Pool.query(query)).rows[0]
    }
    async delete(departmentId) {
        let query = "DELETE FROM tb_departamento " +
                    "WHERE dep_cd=" + departmentId + ""
        
        return Pool.query(query)
    }
}

module.exports = Departamento