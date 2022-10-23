const {Router} = require('express');
const {usuariosGet,usuariosPost,usuariosPut, usuariosDelete} = require('../controllers/usuarios');
const {check} = require('express-validator');

const router = Router();

        ///////////METODO PARA DEVOLVER VALORES USANDO VERBO GET DE HTTP
        router.get('/', usuariosGet);
        ///// CODIGO PARA INSERTAR   ----- POST
        router.post('/',[check('correo','El correo no es valido')], usuariosPost);
        ////// CODIGO PARA ACTUALIZAR  ----- PUT
        router.put('/:id', usuariosPut);
        //// CODIGO PARA BORRAR ------ DELETE
        router.delete('/:id', usuariosDelete);

module.exports = router;