const express = require("express")
const app = express()
const port = 8000

const rotaLivros = require("./rotas/rotaLivros")

app.use('/livros', rotaLivros)

app.listen(port, () => {
    console.log(`Aplicação escutando na porta ${port}`)
})