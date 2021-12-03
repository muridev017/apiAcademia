const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname, 'database.db')

const db = new sqlite3.Database(caminhoArq);

//==== Usuários
const UNIDADE_SCHEMA = `
CREATE TABLE IF NOT EXISTS UNIDADE (
    'unidadeNum' INTEGER PRIMARY KEY AUTOINCREMENT,
    'qtdFuncionarios' varchar(80),
    'qtdAlunos' varchar(80),
    'bairro' varchar(40),
    'cidade' varchar(40),
    'uf' varchar(40),
    'cep' varchar(40),
    'telefone' varchar(40),
    'renda' varchar(80),
    'salarios' varchar(100),
    'contas' varchar(100),
    'qtdEquipamentos' varchar(80),
    'equipManutencao' varchar (80)
    );`

const ADD_UNIDADES = `INSERT INTO UNIDADE (qtdFuncionarios, qtdAlunos, bairro, cidade, uf, cep, telefone, renda, salarios, contas, qtdEquipamentos, equipManutencao) VALUES("100", "300", "rocinha", "caxxxias", "errejota", "21212121", "66666666", "10000", "2", "9998.99", "45", "45")`

function CreateTableUnidade() {
    db.run(UNIDADE_SCHEMA, (error) => {
        if (error) console.log("Error in process of creation table 'UNIDADE'");

    });
}
function populaTudo() {
    db.run(ADD_UNIDADES, (error) => {
        if (error) console.log(error.message)
    })
}

db.serialize(() => {
    CreateTableUnidade();
    populaTudo();
});
