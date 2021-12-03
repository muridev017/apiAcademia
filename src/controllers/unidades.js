const Unidades = require('../models/unidade')
const UnidadesDAO = require('../DAO/unidadeDAO')


const unidade = (app, db) => {
    const filialDAO = new UnidadesDAO(db)

    //Rota read all//

    app.get('/unidades', async (req, res) => {
        try {
            const uniDAO = await filialDAO.pegaTodasUnidades()
            res.json(uniDAO)

        } catch (error) {
            res.status(400).json({
                "error": error.message
            })
        }
    })

    //Rota read by id//

    app.get('/unidades/:id', async (req, res) => {
        const id = req.params.id
        try {
            const uniDAO = await filialDAO.buscaUnidade(id)
            res.json(uniDAO)
        } catch (error) {
            res.status(400).json({
                "message": error.message,
                "error": true
            })
        }
    })

    //Rota update by id//

    app.patch('/unidades/:id', async (req, res) => {
        const id = req.params.id
        const valores = req.body
        try {
            const upUni = await filialDAO.atualizaUnidade(id, valores)
            res.json(upUni)
        } catch (error) {
            res.status(400).json({
                "message": error.message,
                "error": true
            })
        }
    })

    //Rota create//

    app.post('/unidades', async (req, res) => {
        try {
            const cadastro = new Unidades(req.body.qtdAlunos, req.body.qtdFuncionarios, req.body.unidadeNum, req.body.bairro, req.body.cidade, req.body.uf, req.body.cep, req.body.telefone, req.body.renda, req.body.salarios, req.body.contas, req.body.qtdEquipamentos, req.body.equipManutencao)

            const insereUni = await filialDAO.insereUnidade(cadastro)
            res.json(insereUni)

        } catch (error) {
            console.log(error)
            res.status(400).json({
                "message": error.message,
                "error": true
            })
        }
    })


    app.delete('/unidades/:id', async (req, res) => {
        const id = req.params.id
        try {
            const fechado = await filialDAO.unidadeFechada(id)
            res.json(fechado)
        } catch (error) {
            res.status(400).json({
                "message": error.message,
                "error": true
            })
        }
    })


}
module.exports = unidade

//get id, patch, delete. 