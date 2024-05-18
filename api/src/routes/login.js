const express = require('express')
const usuariosSchema = require('../models/usuarios')

const router = express.Router()

router.post('/login', (req, res) => {
  let body = req.body

  usuariosSchema
    .findOne({ email: body.email })
    .then((data) => {
      if (data != null) {
        if (data.contrasenia == body.contrasenia) {
          res.json(data)
        } else {
          res.json({ message: 'Contraseña incorrecta' })
        }
      } else {
        res.json({ message: 'Correo no encontrado' })
      }
    })
    .catch((error) => res.json({ message: error }))
})

module.exports = router
