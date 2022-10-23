const { Router, response, request } = require("express");
const Usuario = require("../models/usuario");
const bcrypt = require("bcryptjs");
const validateEmail = require("express-validator");

// GET
const usuariosGet = async (req, res) => {
  const usuariosList = await Usuario.find({ estado: true }).exec();

  res.json({
    ok: true,
    usuariosList,
  });
};

// POST
const usuariosPost = async (req, res) => {
  const { nombre, correo, password, rol } = req.body;
  // acceder a cuerpo de la peticion
  const body = req.body;

  // Objeto usuario
  const usuario = new Usuario({ nombre, correo, password, rol });

  // Validar si correo ya existe
  const existeEmail = await Usuario.findOne({ correo });

  if (existeEmail) {
    return res.status(400).json({
      msg: "Correo ya registrado",
    });
  }
  // Encriptar password
  const salt = bcrypt.genSaltSync(10);

  usuario.password = bcrypt.hashSync(usuario.password, salt);

  // Almacenamos en la BD
  usuario.save();
  console.log(usuario);
  res.json({
    ok: true,
    msg: usuario,
  });
};
// PUT
const usuariosPut = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  if (body.password) {
    // Encriptar password
    const salt = bcrypt.genSaltSync(10);

    body.password = bcrypt.hashSync(body.password, salt);
  }
  console.log(id);
  const usuario = await Usuario.findByIdAndUpdate(id, body).exec();
  res.json({
    ok: true,
    msg: "llamando el PUT de Mi API",
    usuario,
  });
};
// DELETE
const usuariosDelete = async (req, res) => {
  const { id } = req.params;

  const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });
  res.json({
    ok: true,
    msg: "llamando el DELETE de Mi API",
  });
};

// Export de funciones para acceso desde otros archivos.
module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
};
