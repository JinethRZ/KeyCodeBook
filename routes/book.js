module.exports = (app) => {
    const book = require('../controllers/book')

    app.post('/book/create', book.create)
    app.put('/book/update/:id', book.update)
    app.get('/book/getAll/', book.getAll)//app.get('/book/getAll/', book.getAll)→no se coloca :id porque se van a obtener todos los registros no un registro único.
    app.get('/book/getOne/:id', book.getOne)
    app.delete('/book/delete/:id', book.deleteOne)
}