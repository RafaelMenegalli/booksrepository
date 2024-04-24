const { getTodosFavoritos, deleteFavoritoPorId, InsereFavorito, getFavoritosPorId } = require("../servicos/favoritoServico")


function getFavorito(req, res){
    try{
        const livrosFavoritos = getTodosFavoritos()
        res.send(livrosFavoritos)
        res.status(200)
    } catch(error){
        res.status(500)
        res.send("Falha ao pegar livros favoritos")
    }
}

function getFavoritoId(req, res){
    try {
        const id = req.params.id
        const livroFiltrado = getFavoritosPorId(id)
        res.send(livroFiltrado)
        res.status(200)
    } catch (error) {
        res.send("Falha ao pegar o livro por ID")
        res.status(500)
    }
}

function deleteFavorito(req, res){
    try{
        const id = req.params.id
        deleteFavoritoPorId(id)
        res.status(200)
        res.send("Livro excluido com sucesso!")
    } catch(error){
        res.send("Erro ao excluir livro favorito")
        res.status(500)
    }
}

function postFavorito(req, res){
    try {
        const id = req.params.id
        InsereFavorito(id)
        res.send("Livro inserido com sucesso!")
        res.status(200)
    } catch (error) {
        res.send("Erro ao atualizar lista de favoritos")
        res.status(500)
    }
}


module.exports = {
    getFavorito,
    deleteFavorito,
    postFavorito,
    getFavoritoId
}