const { Router } = require("express")
const router = Router()
const { getLivros, GetLivro, postLivro } = require("../controllers/livroController")

router.get("/", getLivros)

router.get("/:id", GetLivro)

router.post("/", postLivro)

router.patch("/", (req, res) => {
    res.send("Você fez uma requisição do tipo PATCH")
})

router.delete("/", (req, res) => {
    res.send("Você fex uma requisição do tipo DELETE")
})

module.exports = router