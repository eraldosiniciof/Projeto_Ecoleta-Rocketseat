// importar a dependencia do sqlite3
// verbose - diz que queremos ver mais informações do que está acontecendo
const sqlite3 = require("sqlite3").verbose()

// criar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utilizar o objeto de banco de dados para as operações
// serialize informa que vai ser rodado uma squencia de codigos

// Todo codigo dentro do serialize é SQL
// db.serialize(() => {
//     // Criar uma tabela
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         image TEXT,
//     //         name TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items TEXT
//     //     );
//     // `)
//     // // Inserir dados a tabela
//     // const query = `
//     //     INSERT INTO places (
//     //         image,
//     //         name,
//     //         address,
//     //         address2,
//     //         state,
//     //         city,
//     //         items
//     //     ) VALUES (?, ?, ?, ?, ?, ?, ?);
//     // `

//     // const values = [
//     //     "https://images.unsplash.com/photo-1507560461415-997cd00bfd45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//     //     "Papersider",
//     //     "José Americo de Almeida",
//     //     "Nº 90",
//     //     "Pernambuco",
//     //     "Recife",
//     //     "Papeis e Papelão"
//     // ]

//     // function afterInsertData(err) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Cadastrado com sucesso")
//     //     console.log(this)
//     // }
    
//     // db.run(query, values, afterInsertData)

//     // Consultar dados na tabela
//     // db.all(`SELECT * FROM places`, function(err, rows) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Aqui estão seus registros.")
//     //     console.log(rows)
//     // })

//     // Deletar dado da tabela
//     // db.run(`DELETE FROM places WHERE id = ?`, [7], function(err) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }
        
//     //     console.log("Registro deletado com sucesso!")
//     // })

// })