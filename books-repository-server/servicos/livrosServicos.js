const fs = require("fs");

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function GetLivrosPorId(id){
    const numberId = parseInt(id)
    const todosLivros = JSON.parse(fs.readFileSync("livros.json"))
    const filterLivro = todosLivros.filter(livro => livro.id === numberId)
    return filterLivro
}

module.exports = {
    getTodosLivros,
    GetLivrosPorId
}