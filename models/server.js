const express = require('express');
const cors = require('cors');
const {dbConection} = require('../database/config');

class Server{
    constructor(){
        this.app = express();
        //CODIGO DE CAPAINTERMEDIA ----MIDDLEWARES ------
        this.middlewares();

        this.port = process.env.port;

        // Ruta de user.js
        this.usuariosPath = '/api/usuarios';
        this.routes();

        // Conexiion a la BD Mongo.
        this.conexionBD();
    }

    middlewares(){
        // Politica de accesos CORS
        this.app.use(cors());
        
        // permitir formato json en req entrada 
        this.app.use(express.json());
        // Accesos publicos
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen()
    {
        this.app.listen(this.port,() => {
            console.log('Puerto',this.port);
        })
    }

    // Conexion a BD Mongo
    async conexionBD(){
        await dbConection();
    }
}

module.exports = Server;