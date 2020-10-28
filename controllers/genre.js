const GenreModel = require('../models/genre')

exports.create = (req, res) => {
    if(Object.entries(req.body).length == 0){
        return res.status(400).send({ //Error 400 a 499: se genera como un error del usuario.
            message: 'Todos los campos son obligatorios.'
        })
    }

    const genre = new GenreModel({
        name: req.body.name,
        status: req.body.status,
    })

    genre.save()
    .then(
        (dataGenre) => {
            res.send(dataGenre)
        }
    ).catch(
        (error) => {
            return res.status(500).send({
                message: error.message
            })
        }
    )
}
exports.update = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Todos los campos son obligatorios.'
        })
    }

    const genre = {
        name: req.body.name,
        status: req.body.status
    }
    
    GenreModel.findByIdAndUpdate(req.params.id, genre, {new:true})//params va a traer el parámetro de la URL. {new:true}→devuelve los nuevos datos del elemento(del libro).
    .then(
        (genreUpdated) => {
            res.send(genreUpdated)
        }
    ).catch(
        (error) => {
            return res.status(500).send({
                message: error.message
            })
        }
    )
}
exports.getAll = (req, res) => {
    GenreModel.find()        
        .then((genres) => {res.send(genres) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )

}

exports.getOne = (req, res) => {
    GenreModel.findById(req.params.id)        
        .then((genre) => { res.send(genre) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )

}

exports.deleteOne = (req, res) => {
    GenreModel.findByIdAndRemove(req.params.id)
        .then((genre) => { res.send(genre) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
}
