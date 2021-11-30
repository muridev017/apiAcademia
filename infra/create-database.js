const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'database.db')

const db = new sqlite3.Database(caminhoArq);

//==== Usuários
const UNIDADE_SCHEMA = `
CREATE TABLE IF NOT EXISTS UNIDADE (
    'unidadeNum' INTEGER PRIMARY KEY AUTOINCREMENT,
    'Quantidade_de_funcionarios' varchar(80),
    'Quantidade_de_alunos' varchar(80),
    'bairro' varchar(40),
    'cidade' varchar(40),
    'estado' varchar(40),
    'cep' varchar(40),
    'telefone' varchar(40),
    'Renda_mensal' varchar(80),
    'Gastos_com_salarios' varchar(100),
    'Gastos_contas' varchar(100),
    'Equipamentos_quantidade' varchar(80),
    'Equipamentos_precisando_de_manutencao' varchar (80)
    );`

const ADD_UNIDADES = `INSERT INTO UNIDADE (Quantidade_de_funcionarios, Quantidade_de_alunos, bairro, cidade, estado, cep, telefone, Renda_mensal, Gastos_com_salarios, Gastos_contas, Equipamentos_quantidade, Equipamentos_precisando_de_manutencao) VALUES("100", "300", "rocinha", "caxxxias", "errejota", "21212121", "66666666", "10000", "2", "9998.99", "45", "45")`

function CreateTableUnidade() {
    db.run(UNIDADE_SCHEMA, (error)=> {
        if(error) console.log("Error in process of creation table 'UNIDADE'");

    });
}
function populaTudo(){
    db.run(ADD_UNIDADES, (error) => {
        if(error) console.log("deu ruim")
    })
}

db.serialize( ()=> {
    CreateTableUnidade();
    populaTudo();
});
