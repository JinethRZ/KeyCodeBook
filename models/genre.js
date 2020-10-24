const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name: {type: String, required: true},
    status: {type: Boolean, required: true}
    /**
    *Tipo booleano:
    *1→falso
    *0→verdadero
    */
})

module.exports = mongoose.model('Genre', genreSchema)