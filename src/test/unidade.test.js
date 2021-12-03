const request = require('supertest')
const app = require("../app")

test("Teste lista de unidades.", async() => {
    const res = await request(app)
        .get("/unidades")
    expect(res.statusCode).toBe(200)
})

test("Teste busca para unidade específica.", async() => {
    const res = await request(app)
        .get("/unidades/:id")
    expect(res.statusCode).toBe(200)

})

test("Teste inserção de unidades.", async() => {
    const res = await request(app)
        .post("/unidades")
        .send({
            "qtdFuncionarios": "xxxxxxxx",
            "qtdAlunos": "xxxxyyyyy",
            "bairro": "xxxxxxx",
            "cidade": "xxxxxxx",
            "uf": "xx",
            "cep": "12345678",
            "telefone": "2121121221",
            "renda": "3232323232",
            "salarios": "23232323232",
            "contas": "232323232",
            "qtdEquipamentos": "31231231313",
            "equipManutencao": "323"

        })
    expect(res.statusCode).toBe(200)
})

test("Teste atualização de unidades.", async() => {
    const res = await request(app)
        .patch("/unidades/:id")
    expect(res.statusCode).toBe(200)
})

test("Teste deleção de unidades.", async() => {
    const res = await request(app)
        .delete("/unidades/:id")
    expect(res.statusCode).toBe(200)
})