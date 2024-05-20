const mongoose = require('mongoose')

const productosSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  existencias: {
    type: Number,
    required: true,
  },
  imagen: {
    type: String,
    requiered: true,
  },
})

module.exports = mongoose.model('Productos', productosSchema)
