const express = require("express");
const ordenesSchema = require("../models/ordenes");


const router = express.Router();

//crear orden
router.post("/ordenes",(req, res) => {
    const orden = ordenesSchema(req.body);
    orden.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}));
});


//obtener todos los ordenes
router.get("/ordenes",(req, res) => {
    ordenesSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}));
});

//obtener un orden en especifico
router.get("/ordenes/:id",(req, res) => {
    const { id } =  req.params;
    ordenesSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}));
});

//actualizar un orden en especifico
router.put("/ordenes/:id",(req, res) => {
    const { id } =  req.params;
    const {orden, nombre, descripcion, total, direccion} = req.body;
    ordenesSchema
        .updateOne({ _id: id}, {$set: {orden, nombre, descripcion, total, direccion}})
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}));
});

//borrar un orden en especifico
router.delete("/ordenes/:id",(req, res) => {
    const { id } = req.params;
    ordenesSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({message:error}));
});


module.exports = router;
