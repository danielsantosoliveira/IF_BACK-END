/**
 * 10 – Criar um programa que solicite um "login" e uma "senha".
    Se o login for igual a "IFSP" e a senha for igual a "PosWEB", exibir a mensagem "Login efetuado
    com sucesso". Se o usuário errar a senha 3 vezes seguidas, informar "Acesso negado".
 *
 */


const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

let usersData = [
    { login: "IFSP", senha: "PosWEB" }
]
let userAccessData = {}

let scanLogin = function () {
    readline.question(`Login: `, login => {
        let userData = usersData.filter(user => user.login === login)
        if (!userData.length) {
            console.log("Usuário inexistente, tente novamente.")
            scanLogin()
        } else {
            scanSenha(login)
        }
    })
}

let scanSenha = function (login) {
    readline.question(`Senha: `, senha => {
        let userData = usersData.filter(user => user.login === login)

        if (userData[0].senha != senha) {
            console.log("Senha incorreta, tente novamente.")
            if (!userAccessData[login]) userAccessData[login] = { attempts: 0 }
            userAccessData[login].attempts++

            if (userAccessData[login] && userAccessData[login].attempts >= 3) return error("Acesso negado")

            scanSenha(login)
        } else {
            print()
        }
    })
}

let error = function (error) {
    console.log("Processo finalizado. Erro: ", error)
    readline.close()
}

let print = function () {
    console.log("Login efetuado com sucesso")
    readline.close()
}

scanLogin()