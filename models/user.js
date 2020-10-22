const mongoose = require('mongoose')//Se requiere o utiliza mongoose en ese archivo de users.js

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true}, //firstName: nombre del campo en la base de datos. Required: campo obligatorio en base de datos.
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    birthDate: {type: Date},
    age: {type: Number},
})

module.exports = mongoose.model('User', userSchema) //Module.exports: para que de la línea 1 a la 11 se pueda usar en otro lado. User: nombre de la tabla.
