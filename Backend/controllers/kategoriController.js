const {Satuan} = require('../models/index')

class KategoriController {

  static async getKategori(req, res, next) {
    try {
      const kategori = await Satuan.findAll()

      res.status(200).json(kategori)
    } catch (error) {
      next(error)
    }
  }

}

module.exports = KategoriController