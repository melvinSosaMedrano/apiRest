const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre : {
        type : String,
        required : [true, 'Nombre es requerido.']
    },
    correo : {
        type : String,
        required : [true, 'Nombre es requerido.']
    },
    password : {
        type : String,
        required : [true, 'password es requerido.']
    },
    img : {
        type : String
    },
    rol : {
        type : String,
        required : true,
        enum : ['ADMIN','USER']
    },
    estado : {
        type : Boolean,
        default:true
    },
    google : {
        type : Boolean,
        default:true
    }
});


module.exports= model('Ususario',UsuarioSchema);
