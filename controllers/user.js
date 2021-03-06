const UserModel = require('../models/user')
const service = require('../services/index')

/**
 * Método para almacenar un nuevo usuario
 * @param {*} req => Todo lo que enviamos desde el body (formulario).
 * @param {*} res => La respuesta que se devolverá.
 */

exports.create = (req, res) => { //exports.create: para exportar cada uno de los métodos.
   
    //El signo de ! antes de la condición, significa que se está negando la condición.
   
    if(Object.entries(req.body).length == 0){
       return res.status(400).send({
           message: 'Los datos son obligatorios.'
       })

    }
   
    const user = new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        birthDate: req.body.birthDate,
        age: req.body.age,
    })

    user.save()//Guarda la base de datos
    .then((dataUser) => {res.send(dataUser)})
    .catch((error) => {
        res.status(500).send({
            message: error.message
        })
    })
}

/**
 * Método para actualizar un usuario.
 * @param {*} req => Todo lo que enviamos desde el body (formulario)
 * @param {*} res => La respuesta que se devolverá
 */
exports.update = (req, res) => {

    //Validamos que todos los campos del formulario estén llenos.
   
    if(Object.entries(req.body).length == 0){
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
 
    }
 
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        birthDate: req.body.birthDate,
        age: req.body.age,
    }

    /**
    * findByIdAndUpdate → Método de mongoose que permite buscar por id y actualizar un usuario. Tiene los parámetros:
    * - El id del usuario→ req.params.id es el id que se envía por la URL.
    * -Los datos nuevos.
     */

    UserModel.findByIdAndUpdate(req.params.id, user)
    .then(
        (userUpdate) => {
            res.send(userUpdate)
        }
    ).catch(
        (error) => {
            res.status(500).send({
                message: error.message
            })
        }
    )
}

exports.getAll = (req, res) => {
    UserModel.find()        
        .then((users) => {res.send(users) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )

}

exports.getOne = (req, res) => {
    UserModel.findById(req.params.id)        
        .then((user) => { res.send(user) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )

}

exports.deleteOne = (req, res) => {
    UserModel.findByIdAndRemove(req.params.id)
        .then((user) => { res.send(user) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
}

exports.login = (req, res) => {
    UserModel.findOne({email: req.body.email}, (error, dataUser) => { //Se valida el correo.    
        if(dataUser != null){
            if(dataUser.password == req.body.password){
                res.send({token: service.createToken(dataUser)})
            }else{
                res.status(400).send({
                    message: 'Los datos no coinciden.'
                })
            }    
        }else{
            res.status(400).send({
                message: 'Los datos no coinciden.'
            })
        }
    })
}