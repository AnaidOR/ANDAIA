const express = require("express");
const usuarioSchema = require("../models/usuarios");


const router = express.Router();

//crear usuario
router.post("/usuarios",(req, res) => {
    const usuario = usuarioSchema(req.body);
    usuario.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}));
});


//obtener todos los usuarios
router.get("/usuarios",(req, res) => {
    usuarioSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}));
});

//obtener un usuario en especifico
router.get("/usuarios/:id",(req, res) => {
    const { id } =  req.params;
    usuarioSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}));
});

//actualizar un usuario en especifico
router.put("/usuarios/:id",(req, res) => {
    const { id } =  req.params;
    const {nombre, edad, email,contrasenia} = req.body;
    usuarioSchema
        .updateOne({ _id: id}, {$set: {nombre, edad, email,contrasenia}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}));
});

//borrar un usuario en especifico
router.delete("/usuarios/:id",(req, res) => {
    const { id } = req.params;
    usuarioSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}));
});


module.exports = router;
