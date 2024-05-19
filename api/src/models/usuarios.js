const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  usuario: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contrasenia: {
    type: String,
    required: true,
  },
  pais: {
    type: String,
    required: true,
  },
  telefono: {
    type: Number,
    requiered: true,
  },
})

module.exports = mongoose.model('Usuario', usuarioSchema)
