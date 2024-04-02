const { getTodosLivros } = require("../servicos/livrosServicos");

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

module.exports = {
    getLivros
}