import autores from "../models/Autor.js";

/**
 * A classe autores com todos os metodos do CRUD
 */
class autorController{
    static listarAutores = (req, res) => {
        autores.find( (err, autores) => {
            res.status(200).json(autores);
        } )
    }

    static listarAutoresPorID = (req, res) => {
        const id = req.params.id;
        autores.findById(id, (err, autores) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Autor não encontrado`})
            } else {
                res.status(200).send(autores)
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body)
        autor.save((err) => {
            if(err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar Autor`})
            } else {
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizaAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "Autor atualizado com sucesso!"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Autor excluido com sucesso!'})
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }
}

export default autorController;