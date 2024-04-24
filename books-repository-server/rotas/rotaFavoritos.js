const { Router } = require("express")
const router = Router()
const { getFavorito, deleteFavorito, postFavorito, getFavoritoId } = require("../controllers/favoritoController")

router.get("/", getFavorito)

router.get("/:id",getFavoritoId)

router.post("/:id", postFavorito)

router.delete("/:id", deleteFavorito)

module.exports = router


// router.get("/", getLivros)

// router.get("/:id", GetLivro)

// router.post("/", postLivro)

// router.patch("/:id", patchLivro)

// router.delete("/:id", deleteLivro)

// module.exports = router