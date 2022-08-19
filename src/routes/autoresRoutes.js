import express from "express";
import autorController from "../controllers/autoresController.js";

const router = express.Router();

router
    // rotas utilizadas para o padrão do CRUD
    .get("/autores", autorController.listarAutores)
    .get("/autores/:id", autorController.listarAutoresPorID)
    .post("/autores", autorController.cadastrarAutor)
    .put("/autores/:id", autorController.atualizaAutor)
    .delete("/autores/:id", autorController.excluirAutor)

export default router;