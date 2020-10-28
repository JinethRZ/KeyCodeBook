const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {type: String, required: true}, //Nombre libro
    author: {type: String, required: true}, //Nombre autor del libro
    pageNumber: {type: Number}, //Número de páginas
    publisher: {type: String, required: true}, //Editorial
    publicationDate: {type: Date}, //Fecha de publicación
    //genre: {type: mongoose.Schema.Types.ObjectId, ref: 'Genre'}→genre: Si quisiéramos crear una relación, donde un libro tuviera sólo un género (acción o terror, no de ambos, sólo de uno). Mongoose, a través de un Schema, diga el tipo de dato que se obtendrá de un ObjectId(identificador del registro) y que a su vez referencie(ref) el modelo de Genre (debe estar escrito de forma identica al genre.js de la carpeta models, del module.exports).
    genre: [{type: mongoose.Schema.Types.ObjectId, ref: 'Genre'}]//genre: Si quisiéramos crear una relación, donde un libro tuviera muchos géneros, se encierra en un arreglo (acción, terror, comedia, varios).
})

/**Relaciones en Mongo
 * 
 * {type: mongoose.Schema.Types.ObjectId, ref: 'Genre'}→Sólo un género: 'idGenero'
 * [{type: mongoose.Schema.Types.ObjectId, ref: 'Genre'}]→Muchos géneros ['idUno', 'idDos']
 */

module.exports = mongoose.model('Book', bookSchema)//Se exporta para que los campos se puedan utilizar de forma fácil.