const { getTodosLivros, GetLivrosPorId } = require("../servicos/livrosServicos");

function getLivros (req, res) {
    try{
        const livros = getTodosLivros()
        res.send(livros)
        //Resposta padrão para quando da tudo certo é 200
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function GetLivro(req, res){
    try{
        const IdLivro = req.params.id
        const livroFiltrado = GetLivrosPorId(IdLivro)
        res.send(livroFiltrado)
    } catch(error){
        res.status(500)
        res.send(error)
    }
}

module.exports = {
    getLivros,
    GetLivro
}