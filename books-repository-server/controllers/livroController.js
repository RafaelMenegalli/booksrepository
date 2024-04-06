const { getTodosLivros, GetLivrosPorId, inserirNovoLivro, atualizaLivro, deleteLivrosPorId } = require("../servicos/livrosServicos");

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

        if(IdLivro && Number(IdLivro)){
            const livroFiltrado = GetLivrosPorId(IdLivro)
            res.send(livroFiltrado)

        } else {
            res.status(422)
            res.send("Id para GetLivroPorId Inválido!")
        }

    } catch(error){
        res.status(500)
        res.send(error)
    }
}

function postLivro(req, res){
    try{
        const novoLivro = req.body
        if(novoLivro.nome){
            inserirNovoLivro(novoLivro)
            res.status(201)
            res.send("Livro cadastrado com sucesso!")

        } else {
            res.status(422)
            res.send("O campo de nome é obrigatório")
        }
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res){
    try {
        const id = parseInt(req.params.id)

        if(id && Number(id)){
            const modificacaoLivro = req.body
    
            atualizaLivro(id, modificacaoLivro)
            // modificaLivro(modificacaoLivro, id)
            res.send("Registro Atualizado com sucesso")

        } else {
            res.status(422)
            res.send("Id inválido para patchLivro")
        }

    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res){
    try{
        const id = parseInt(req.params.id)

        if(id && Number(id)){
            deleteLivrosPorId(id)
    
            res.send("Livro excluido com sucesso!")

        } else {
            res.status(422)
            res.send("Id inválido para deleteLivro")
        }
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}
module.exports = {
    getLivros,
    GetLivro,
    postLivro,
    patchLivro,
    deleteLivro
}