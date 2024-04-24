const fs = require("fs")

function getTodosFavoritos(){
    return JSON.parse(fs.readFileSync("favoritos.json"))
}

function getFavoritosPorId(id){
    const livrosFavoritos = JSON.parse(fs.readFileSync("favoritos.json"))
    const livroFiltrado = livrosFavoritos.filter(livro => livro.id === id)

    return livroFiltrado
}

function deleteFavoritoPorId(id){
    const livrosFavoritos = JSON.parse(fs.readFileSync("favoritos.json"))
    const novaListaFavoritos = livrosFavoritos.filter(livroFavorito => livroFavorito.id !== id)

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaFavoritos))
}

function InsereFavorito(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livrosFavoritos = JSON.parse(fs.readFileSync("favoritos.json"))

    const novoLivroFavorito = livros.find( livro => livro.id === id )
    const novaListaLivrosFavoritos = [...livrosFavoritos, novoLivroFavorito]

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaLivrosFavoritos))
}

module.exports ={
    getTodosFavoritos,
    InsereFavorito,
    deleteFavoritoPorId, 
    getFavoritosPorId
}