class Cliente {
    constructor(nome, endereco, cep, cpf){
        let _nome = nome
        let _endereco = endereco
        let _cep = cep
        let _cpf = cpf

        this.getNome = () => _nome
        this.setNome = (novoNome) => _nome = novoNome
        this.getEndereco = () => _endereco
        this.setEndereco = (novoEndereco) => _endereco = novoEndereco
        this.getCep = () => _cep
        this.setCep = (novoCep) => {
            let cepIsValid = this.validateCep(novoCep)
            if (!cepIsValid) throw new Error("CEP Inválido")
            _cep = novoCep
        }
        this.getCpf = () => _cpf
        this.setCpf = (novoCpf) => {
            let cpfIsValid = this.validateCpf(novoCpf)
            if(!cpfIsValid) throw new Error("CPF Inválido")
            _cpf = novoCpf
        }
    }
    validateCpf(cpf) {

        let cpfValidator = function (cpf) {	
        
            if (cpf == "00000000000" || 
                cpf == "11111111111" || 
                cpf == "22222222222" || 
                cpf == "33333333333" || 
                cpf == "44444444444" || 
                cpf == "55555555555" || 
                cpf == "66666666666" || 
                cpf == "77777777777" || 
                cpf == "88888888888" || 
                cpf == "99999999999")
                    return false;		
        
            let add = 0	
            for (let i=0; i < 9; i++)		
                add += parseInt(cpf.charAt(i)) * (10 - i)	
                let rev = 11 - (add % 11)
                if (rev == 10 || rev == 11)		
                    rev = 0
                if (rev != parseInt(cpf.charAt(9)))		
                    return false	
            
            add = 0;	
            for (let i = 0; i < 10; i ++)		
                add += parseInt(cpf.charAt(i)) * (11 - i)
            rev = 11 - (add % 11)
            if (rev == 10 || rev == 11)	
                rev = 0
            if (rev != parseInt(cpf.charAt(10)))
                return false
            return true
        }

        let testNumAndLength = /^[\d]{11}$/.test(cpf)
        if(!testNumAndLength) return testNumAndLength

        let resValidator = cpfValidator(cpf)
        
        return resValidator
    }
    validateCep(cep) {
        return /^[\d]{8}$/.test(cep)
    }
    formatCpf(){
        let cpf = this.getCpf()
        if(typeof cpf != "string") throw new Error("Invalid type")
        return cpf.substring(0, 3) + "." + cpf.substring(3, 6) + "." + cpf.substring(6, 9) + "-" + cpf.substring(9)
    }
    formatCep(){
        let cep = this.getCep()
        if(typeof cep != "string") throw new Error("Invalid type")
        return cep.substring(0, 5) + "-" + cep.substring(5)
    }
}

module.exports = Cliente