const { getTodosLivros, GetLivrosPorId, inserirNovoLivro } = require("../servicos/livrosServicos");

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

function postLivro(req, res){
    try{
        const novoLivro = req.body
        inserirNovoLivro(novoLivro)
        res.status(201)
        res.send("Livro cadastrado com sucesso!")
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    GetLivro,
    postLivro
}