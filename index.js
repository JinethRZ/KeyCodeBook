const express = require('express') //Estamos utilizando express en nuestro proyecto. Con la palabra reservada requiere se le dice que se quiere usar express en el proyecto.
const cors = require('cors')
const bodyParser = require('body-parser')

const {conectDB} = require('./db')
const app = express() //Se convierte a la constante express en un objeto, por el cual vamos a poder trabajar. 


app.use(cors())
app.use(bodyParser.json())

conectDB()//Estamos ejecutando el módulo de nuestra conexión a la base de datos. 

require('./routes/user')(app)//app: la constante del objeto express
require('./routes/genre')(app)

app.listen(3000, () => {
    console.log('El servidor se levantó correctamente.')
})
