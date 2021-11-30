const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'database.db')

const db = new sqlite3.Database(caminhoArq);

//==== Usuários
const USERS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "USERS" (
    "Quantidade de alunos" INTEGER PRIMARY KEY AUTOINCREMENT,
    "Quantidade de funcionários" varchar(80),
    "Renda mensal" varchar(80) UNIQUE,
    "Gastos ao mês(salário e contas)" varchar(100)
    "Equipamentos" text,
    "Equipamentos precisando de manutenção" varchar (80)
    );`;


function CreateTableUser() {
    db.run(USERS_SCHEMA, (error)=> {
        if(error) console.log("Error in process of creation table 'USERS'");

    });
}


//====  Message
const MESSAGE_SCHEMA = `
CREATE TABLE IF NOT EXISTS "MESSAGE" (
    ID INTEGER PRIMARY KEY AUTOINCREMENT, 
    CONTENT TEXT,
    DATACREATE VARCHAR(32),
    ID_USERS INTEGER REFERENCES USERS(ID)
);`;


function CreateTableMessage() {
    db.run(MESSAGE_SCHEMA, (error)=> {
        if(error) console.log("Error in process of creation table 'MESSAGE'");
    });
}

db.serialize( ()=> {
    CreateTableUser();
    CreateTableMessage();
});