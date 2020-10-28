const BookModel = require('../models/book')

exports.create = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Todos los datos deben estar llenos.'
        })
    }

    const book = new BookModel({
        name: req.body.name,
        author: req.body.author,
        pageNumber: req.body.pageNumber,
        publisher: req.body.publisher,
        publicationDate: req.body.publicationDate,
        genre: req.body.genre,
    })

    book.save() //callback
        .then( //Se captura cuando la promesa se cumple. Es decir, el libro sí se guardó.
            (dataBook) => {
                res.send(dataBook)
            }
        ).catch( //Se captura cuando el libro no se guarda. Es decir, el libro NO se guardó.
            (error) => {
                return res.status(500).send({ //Rs.status se usa para decirle a la aplicación que se va a responder algo.
                    message: error.message
                })
            })
}

/**Línea exports.update en adelante
 * 
 * Método para modificar la información de un libro.
 * @param {*} req => Todo lo que se recibe.
 * @param {*} res => Respuesta que se devuelve.
 */

exports.update = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Todos los datos deben estar llenos.'
        })
    }

    const book = {
        name: req.body.name,
        author: req.body.author,
        pageNumber: req.body.pageNumber,
        publisher: req.body.publisher,
        publicationDate: req.body.publicationDate,
        genre: req.body.genre,
    }
    BookModel.findByIdAndUpdate(req.params.id, book, {new:true})//params va a traer el parámetro de la URL. {new:true}→devuelve los nuevos datos del elemento(del libro).
    .then(
        (bookUpdated) => {
            res.send(bookUpdated)
        }
    ).catch(
        (error) => {
            return res.status(500).send({
                message: error.message
            })
        }
    )
}