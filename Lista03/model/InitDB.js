const Pool = require("../repository/Pool")

const InitDB = {
    async initDDL() {
        let queryTableCliente = "CREATE TABLE public.tb_cliente ( " +
                                "cli_cd serial4 NOT NULL, " +
                                "cli_nome varchar(100) NOT NULL, " +
                                "cli_sobrenome varchar(100) NULL, " +
                                "cli_idade int4 NULL, " +
                                "cli_cpf int4 NOT NULL, " +
                                "cli_rg varchar(20) NULL, " +
                                "CONSTRAINT tb_cliente_pkey PRIMARY KEY (cli_cd) " +
                            "); "

        let queryTableEndereco = "CREATE TABLE public.tb_endereco ( " +
                                "end_cd serial, " +
                                "end_logradouro VARCHAR(150), " +
                                "end_numero INT, " +
                                "end_cep VARCHAR(11) NOT NULL," +
                                "end_municipio VARCHAR(100), " +
                                "end_estado VARCHAR(100), " +
                                "end_cli_cd serial ON DELETE CASCADE, " +
                                "CONSTRAINT tb_endereco_pkey PRIMARY KEY (end_cd), " +
                                "CONSTRAINT tb_endereco_fk_cli_cd FOREIGN KEY(end_cli_cd) REFERENCES tb_cliente(cli_cd) ON DELETE CASCADE " +
                            ")"

        let queryTableDepartamento = "CREATE TABLE public.tb_departamento ( " +
                                    "dep_cd serial, " +
                                    "dep_nome VARCHAR(50) NOT NULL, " +
                                    "dep_descricao VARCHAR(100), " +
                                    "dep_sigla VARCHAR(20), " +
                                    "dep_data DATE NOT NULL DEFAULT now(), " +
                                    "dep_cli_cd serial ON DELETE CASCADE, " +
                                    "CONSTRAINT tb_departamento_pkey PRIMARY KEY (dep_cd), " +
                                    "CONSTRAINT tb_departamento_fk_cli_cd FOREIGN KEY(dep_cli_cd) REFERENCES tb_cliente(cli_cd) ON DELETE CASCADE " +
                                ")"

        try {
            await Pool.query(queryTableCliente)
            await Pool.query(queryTableEndereco)
            await Pool.query(queryTableDepartamento)
        } catch (error) {
            console.error(error)
            return
        }

        console.log("InitDB.initDDL - Instruções realizadas com sucesso.")
        return
    }

}

module.exports = InitDB