const express = require("express")
const app = express()
const port = 8000
const cors = require('cors');

const rotaLivros = require("./rotas/rotaLivros")

app.use(cors({origin: "*"}));
app.use(express.json())
app.use('/livros', rotaLivros)

app.listen(port, () => {
    console.log(`Aplicação escutando na porta ${port}`)
})