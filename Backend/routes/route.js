const express = require('express')
const produkController = require('../controllers/produkController')
const { errorHandler } = require('../helpers/errorhandler')
const KategoriController = require('../controllers/kategoriController')
const StatusController = require('../controllers/statusController')
const router = express.Router()

router.get('/produks', produkController.getProduk)
router.get('/produks/:id', produkController.getProdukById)
router.post('/produks', produkController.addNewProduk)
router.put('/produks/:id', produkController.putProduk)
router.delete('/produks/:id', produkController.deleteProduk)

router.get('/categories', KategoriController.getKategori)
router.get('/statuses', StatusController.getStatus)

router.use(errorHandler)

module.exports = router