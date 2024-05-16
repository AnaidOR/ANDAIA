const mongoose = require("mongoose");

const ordenesSchema = mongoose.Schema({
    orden: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    direccion: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Ordenes', ordenesSchema);