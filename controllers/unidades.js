const Unidades = require('../models/unidade')
const UnidadesDAO = require('../DAO/unidadeDAO')

const unidade = (app,db) => {
    const filialDAO = new UnidadesDAO(db)

app.get('/unidades', async(req, res) => {
    try {
        const uniDAO = await filialDAO.pegaTodasUnidades()
        res.json(uniDAO)

    } catch (error) {
        res.status(400).json({
            "error": error.message
        })
    }
})

app.post('/unidades', async(req, res) => {
    try {
        const cadastro = new Unidades(req.body.qtdAlunos, req.body.qtdFuncionarios, req.body.unidadeNum, req.body.bairro, req.body.cidade, req.body.uf, req.body.cep, req.body.telefone, req.body.renda, req.body.salarios, req.body.contas, req.body.qtdEquipamentos, req.body.equipManutencao)

        const insereUni = await filialDAO.insereUnidade(cadastro)
        res.json(insereUni)

    } catch (error) {
        res.status(400).json({
            "message": error.message,
            "error": true
        })
    }
})



}



// module.exports = app => {
//     app.get('/unidades', (req, res) => res.send('servidor rodando meesmo'))

//     app.get('/unidades',(req,res) => {Unidades.pegaTodasUnidades(res)})

//     app.post('/unidades', (req,res) => { console.log(req.body) 
//         res.send('Você está na rota de unidades pelo post agora')})
// }
