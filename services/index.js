const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')
const SECRET = config.keyToken

exports.createToken = (dataUser) => {
    const payload = {
        sub: dataUser._id,
        iat: moment().unix(), //Fecha en la que se creó el token, con unix() se convierte en número.
        exp: moment().add('1', 'hour').unix(), //Fecha en la que expira el token.
        firstName: dataUser.firstName,
        lastName: dataUser.lastName,
        email: dataUser.email,
        role: dataUser.role,
        birthDate: dataUser.birthDate,
        age: dataUser.age,
    }
    return jwt.encode(payload, SECRET)
}

//Para decodificar el token:

exports.decodeToken = (token) => {
    const decode = new Promise((resolve, reject) => {
        try{
            const payload = jwt.decode(token, SECRET)//decodificar el token, traducir el token.
            //Validamos fechas.
            if(payload.exp <= moment().unix()){
                reject({
                    status: 401,
                    message: 'El token ha expirado.'
                })
            }
            resolve(payload.sub)
        }catch{
            reject({
                status: 500,
                message: 'El token es inválido.'
            })
        }    
    })
    return decode
}