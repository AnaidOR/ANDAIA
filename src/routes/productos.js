const express = require("express");
const productosSchema = require("../models/productos");


const router = express.Router();

//crear usuario
router.post("/productos",(req, res) => {
    const productos = productosSchema(req.body);
    productos.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}));
});


//obtener todos los usuarios
router.get("/productos",(req, res) => {
    productosSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}));
});

//obtener un usuario en especifico
router.get("/productos/:id",(req, res) => {
    const { id } =  req.params;
    productosSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}));
});

//actualizar un usuario en especifico
router.put("/productos/:id",(req, res) => {
    const { id } =  req.params;
    const {nombre, descripcion, precio, existencias} = req.body;
    productosSchema
        .updateOne({ _id: id}, {$set: {nombre,descripcion, precio, existencias}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}));
});

//borrar un usuario en especifico
router.delete("/productos/:id",(req, res) => {
    const { id } = req.params;
    productosSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}));
});


module.exports = router;
