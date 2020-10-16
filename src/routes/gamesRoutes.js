const express = require('express')
const router = express.Router()
const controller = require('../controller/gamesController')
const cors = require('cors')

router.put('/jogos/:id', cors(), controller.atualizar)
router.patch('/jogos/:id', cors(), controller.update)

module.exports = router