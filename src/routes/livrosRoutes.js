import express from "express";
import livroController from "../controllers/livrosController.js";

const router = express.Router();

router
    // rotas utilizadas para o padrão do CRUD
    .get("/livros", livroController.listarLivros)
    .get("/livros/:id", livroController.listarLivrosPorID)
    .post("/livros", livroController.cadastrarLivro)
    .put("/livros/:id", livroController.atualizaLivro)
    .delete("/livros/:id", livroController.excluirLivro)

export default router;