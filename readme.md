# API ACADEMIA

## Desenvolvimento de API em Node.JS com bibliotecas da framework express. 

### Sobre a API:

A API foi construídas para fins didáticos, como fechamento do Módulo 4 da Resilia Educação, demonstraremos em 4 setores diferentes como aplicá-la de maneira escálavel e vendável. Para que esse projeto Back End fosse construído utilizamos os conceitos de organização MVC, bem como o banco de dados SQL. Buscando além dos conhecimentos adquiridos em aula, fortalecer nossa base através do curso de Node.Js da Alura.

## Ferramentas presentes no trabalho:

<!--ts-->
   * SQLite
   * Node.Js
   * Express
   * Heroku
   
   
## Rotas da API:

| Método | Rota | Funcionalidade |
| ------ | ----- | ----------- |
| **GET** | `/unidades/all` | Gets em todos|
| **GET** | `/unidades/{id}` | Gets em unidades por {id} |
| **POST** | `/unidades` | Entrada de nova unidade |
| **PATCH** | `/unidades/{id}` | Alterações por {id} |
| **DELETE** | `/unidades/{id}` | Deleção de unidades {id} |

## Dependências Gerais:
```js
 "dependencies": {
    "body-parser": "^1.19.0",
    "consign": "^0.1.6",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "jest": "^27.4.3",
    "mysql2": "^2.3.3",
    "node-fetch": "^2.6.6",
    "nodemon": "^2.0.15",
    "save-dev": "^0.0.1-security",
    "sqlite3": "^5.0.2"
    }
```

## Dependências Dev:

```
"devDependencies": {
    "supertest": "^6.1.6"
  }
  ```
  
  ## Home Page:
  
  https://github.com/MuriloMininel/apiAcademia
  
  ## Instalação Necessária
  
  ```bash
npm install
```

  ## Inicialização do Terminal
  
   ```bash
npm start
```

## Link Heroku
```
https://apiacademiamurilo.herokuapp.com/unidades
````

## Group 09

- [Larissa Silva](https://github.com/LariCostaSilva)
- [Murilo Mininel](https://github.com/MuriloMininel) 
- [Nathalie Moreira](https://github.com/NathalieMS) 
- [yasmin Reis](https://github.com/yasminreisk)

## Author

- [Murilo Mininel](https://github.com/MuriloMininel)
