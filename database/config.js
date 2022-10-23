const mongoose = require('mongoose');



const dbConection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_CONECTION,{useNewUrlParser : true});


        console.log('Se realizo la conexion de manera exitosa.');
    } 
    catch(error)
    {
        console.log(error);
        throw new Error('No se pudo conectar a la Base de Datos. Verifique.');
    }
}



module.exports = {
    dbConection
}