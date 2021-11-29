module.exports = app => {
    app.get('/unidades', (req, res) => res.send('servidor rodando meesmo'))

    app.post('/unidades', (req,res) => { console.log(req.body) 
        res.send('Você está na rota de atendimentos pelo post agora')})
}
