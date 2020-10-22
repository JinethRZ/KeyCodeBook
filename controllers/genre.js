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
