const { Router } = require("express")
const router = Router()
const { getLivros, GetLivro, postLivro, patchLivro, deleteLivro } = require("../controllers/livroController")

router.get("/", getLivros)

router.get("/:id", GetLivro)

router.post("/", postLivro)

router.patch("/:id", patchLivro)

router.delete("/:id", deleteLivro)

module.exports = router