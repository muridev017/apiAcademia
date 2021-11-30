const bd = require("../infra/sqlite-db")

class unidadeDAO{
    constructor(){
        this.bd = bd
    }

    pegaTodasUnidades(){
        return new Promise((resolve, reject)=>{
            this.bd.all('SELECT * FROM UNIDADES', (error, rows)=>{
                if(error){
                    reject({
                        "mensagem" : error.message,
                        "error" : true
                    }) 
                } else{
                    resolve({
                        "unidade" : rows,
                        "count": rows.length,
                        "error" : false
                    })
                }
            })
        })  
    }

    insereUnidade(novaUnidade){
        return new Promise((resolve, reject)=>{
            this.bd.run(`INSERT INTO UNIDADES ( qtdAlunos, qtdFuncionarios, unidadeNum, bairro, cidade, uf, cep, telefone,renda, salarios,contas,qtdEquipamentos, equipManutencao) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [...Object.values(novaUnidade)], 
            (error)=>{
                if(error){
                    reject({
                        "mensagem" : error.message,
                        "erro" : true 
                    })
                } else {
                    resolve({
                        "requisicao" : novaUnidade,
                        "erro" : false 
                    })
                }
            })
        })
    }

    pegaUsuarioPorEmail(email){
        const SELECT_BY_EMAIL = `
        SELECT * FROM UNIDADES
        WHERE EMAIL = ?`
        return new Promise((resolve, reject)=>{
            this.bd.all(SELECT_BY_EMAIL, email, (error, rows)=>{
                if(error){
                    reject({
                        "mensagem" : error.message,
                        "erro" : true 
                    })
                } else {
                    resolve({
                        "requisicao" : rows,
                        "erro" : false 
                    })
                }
            })
        })
    }
    
    pegaUsuarioPorId(id){
        const SELECT_BY_ID = `
        SELECT * FROM UNIDADES
        WHERE ID = ?`
        return new Promise((resolve, reject)=>{
            this.bd.all(SELECT_BY_ID, id, (error, rows)=>{
                if(error) {
                    reject({
                        "mensagem" : error.message,
                        "erro" : true 
                    })
                } else {
                    resolve({
                        "requisicao" : rows,
                        "erro" : false 
                    })
                }
            })
        })
    }

    async deletaUnidade(id){
        try {
            const usuario = await this.pegaUnidadePorId(id)
            if(usuario.requisicao.length){
                const DELETE = `
                DELETE FROM UNIDADE
                WHERE ID = ?`
                return new Promise((resolve, reject)=>{
                    this.bd.run(DELETE, id, (error)=>{
                        if(error){
                            reject(error.message)
                        } else {
                            resolve({
                                "mensagem" : `Unidade de id ${id} deletado`,
                                "erro" : false 
                            })
                        }
                    })
                })
            } else {
                throw new Error(`Unidade de id ${id} não existe`)
            }
        } catch (error) {
            throw new Error(error.message)
        }   
    }

    async atualizaUsuario(id, novaUnidade){
        try {
            const UPDATE = `
            UPDATE UNIDADE
            SET NOME = ?, EMAIL = ?, SENHA = ?
            WHERE ID = ?`
            return new Promise((resolve, reject)=>{
                this.bd.run(UPDATE,
                    [novaUnidade.nome, novaUnidade.email, novaUnidade.senha, id], 
                    (error)=>{
                    if(error){
                        reject(error)
                    } else {
                        resolve({
                            "mensagem" : `Unidade de id ${id} atualizado`,
                            "usuario": novaUnidade,
                            "erro" : false 
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