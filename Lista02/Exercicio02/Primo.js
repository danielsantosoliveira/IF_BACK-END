class Primo {
    constructor(inicial, final, resultado){
        let _inicial = inicial
        let _final = final
        let _resultado = resultado

        this.getInicial = () => _inicial
        this.setInicial = (novoInicial) => {
            _inicial = novoInicial
        }
        this.getFinal = () => _final
        this.setFinal = (novoFinal) => _final = novoFinal
        this.getResultado = () => _resultado
        this.setResultado = (novoResultado) => _resultado = novoResultado 
    }
    contaPrimos(numeroInicial, numeroFinal){
        let count = 0
        let validarPrimo = (n) => {
            for (let i = 2; i < n; i++) if (n % i === 0) return false
            return true
        }

        if(!numeroInicial || !numeroFinal) throw new Error("Data inicial ou final não informada")
        if(!(numeroInicial < numeroFinal)) throw new Error("Valor inicial deve ser maior que o final")

        for (let index = numeroInicial; index < numeroFinal; index++) if(validarPrimo(index)) count++

        return count
    }
}

module.exports = Primo