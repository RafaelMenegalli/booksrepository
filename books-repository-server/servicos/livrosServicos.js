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

function inserirNovoLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaLIstaLivros = [ ...livros, livroNovo ]

    fs.writeFileSync("livros.json", JSON.stringify(novaLIstaLivros))
}

function atualizaLivro(idLivro, modificacao){

    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceLivroModificado = livrosAtuais.findIndex(livro => livro.id === idLivro)
    const conteudoMudado = { ...livrosAtuais[indiceLivroModificado], ...modificacao }
    livrosAtuais[indiceLivroModificado] = conteudoMudado 

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

// function modificaLivro(modificacoes, id) {
//     let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
//     const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)
//     const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }
//     livrosAtuais[indiceModificado] = conteudoMudado
//     fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
//   }

function deleteLivrosPorId(id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    let indiceLivroDeletado = livrosAtuais.findIndex(livro => livro.id === id)
    livrosAtuais.splice(indiceLivroDeletado, 1)

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))

}

module.exports = {
    getTodosLivros,
    GetLivrosPorId,
    inserirNovoLivro,
    atualizaLivro,
    deleteLivrosPorId
    // modificaLivro
}