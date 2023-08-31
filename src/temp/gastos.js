const { bancoDeDados } = require("../database/bancoDeDados")
const msg = require("../utils/message")

const listarGastos = (id) => {
    if (!id) {
        return msg('O id deve ser informado corretamente')
    }

    if (!Number.isInteger(Number(id))){
        return msg('O id deve ser um número')

    }
    
    const encontrarUsuario = bancoDeDados.usuarios.find(user => user.id === parseInt(id))

    if (!encontrarUsuario){
        return msg('Usuário não encontrado!')
    }

    const gastosUsuario = bancoDeDados.gastos.filter(gasto => gasto.id_usuario === id)

    return gastosUsuario
}

console.log(listarGastos('3'))
