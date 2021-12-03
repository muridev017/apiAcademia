const bd = require("../infra/sqlite-db")

class unidadeDAO {
    constructor() {
        this.bd = bd
    }

    pegaTodasUnidades() {
        return new Promise((resolve, reject) => {
            this.bd.all('SELECT * FROM UNIDADE', (error, rows) => {
                if (error) {
                    reject({
                        "mensagem": error.message,
                        "error": true
                    })
                } else {
                    resolve({
                        "unidade": rows,
                        "count": rows.length,
                        "error": false
                    })
                }
            })
        })
    }

    insereUnidade(novaUnidade) {
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO UNIDADE ( qtdAlunos, qtdFuncionarios, unidadeNum, bairro, cidade, uf, cep, telefone,renda, salarios,contas,qtdEquipamentos, equipManutencao) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
                [...Object.values(novaUnidade)],
                (error) => {
                    if (error) {
                        reject({
                            "mensagem": error.message,
                            "erro": true
                        })
                    } else {
                        resolve({
                            "requisicao": novaUnidade,
                            "erro": false
                        })
                    }
                })
        })
    }

    buscaUnidade(id) {
        try {
            const SELECT_BY_ID = `
        SELECT * FROM UNIDADE
        WHERE unidadeNum = ?`

            return new Promise((resolve, reject) => {
                this.bd.get(SELECT_BY_ID, id, (error, rows) => {
                    if (error) {
                        console.log(error)
                        reject({
                            "mensagem": error
                        })
                    } else {
                        resolve({
                            "requisicao": rows,
                            "erro": false
                        })
                    }
                })
            })
        } catch (error) {
            throw new Error(error.message)
        }

    }

    unidadeFechada(unidadeNum) {
        try {
            const DELETE = `
                DELETE FROM UNIDADE
                WHERE unidadeNum = ?`


            return new Promise((resolve, reject) => {
                this.bd.run(DELETE, unidadeNum, (error) => {
                    if (error) {
                        reject(error.message)
                    } else {
                        resolve({
                            "mensagem": `Unidade de id ${unidadeNum} deletado`,
                            "erro": false
                        })
                    }
                })
            })

        } catch (error) {
            throw new Error(error.message)
        }
    }

    atualizaUnidade(unidadeNum, atualizaUnidade) {
        try {
            const UPDATE_UNI =

                `UPDATE UNIDADE
                SET qtdFuncionarios = COALESCE(?, qtdFuncionarios) , qtdAlunos = COALESCE(?, qtdAlunos), bairro = COALESCE(?, bairro), cidade = COALESCE(?, cidade), uf = COALESCE(?, uf),
                cep = COALESCE(?, cep), telefone = COALESCE(?, telefone), renda = COALESCE(?, renda), salarios = COALESCE (?,salarios), contas = COALESCE(?, contas),  qtdEquipamentos = COALESCE(?, qtdEquipamentos), equipManutencao = COALESCE(?, equipManutencao)
                WHERE unidadeNum = ?`


            return new Promise((resolve, reject) => {

                this.bd.run(UPDATE_UNI, [atualizaUnidade.qtdFuncionarios, atualizaUnidade.qtdAlunos,
                atualizaUnidade.bairro, atualizaUnidade.cidade, atualizaUnidade.uf,
                atualizaUnidade.cep, atualizaUnidade.telefone, atualizaUnidade.renda,
                atualizaUnidade.salarios, atualizaUnidade.contas, atualizaUnidade.qtdEquipamentos, atualizaUnidade.equipManutencao, unidadeNum
                ],
                    (error) => {
                        if (error) {
                            console.log(error)
                            reject({
                                "msg": error
                            })
                        } else {
                            resolve({
                                "msg": "Dados atualizados com sucesso",
                                "erro": false
                            })
                        }
                    })
            })
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

module.exports = unidadeDAO