const mongoose = require('mongoose') //Moongose: paquete que permite la comunicación con nuestra base de datos. 
const config = require ('./config') //

const conectDB = () => {
    mongoose.connect(config.mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}, (error) => { //useNewUrlParser: analiza la información que se le quiere enviar a Mongo. useUnifiedTopology: escucha los llamados que se le hacen a mongoDB y monitorea qué es lo que pasa. 
        if(error){
            console.log('Error: ', error)
        }else{
            console.log('Nos conectamos a la DB.')
        }
      })  
    }

module.exports = {conectDB} //module.exports: Cuando se quiere exportar una función para que pueda ser utilizada en otra parte de nuestro proyecto.
