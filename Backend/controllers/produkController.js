const {Produk} = require('../models/index')

class produkController {

  static async getProduk(req, res, next) {
    try {
      const Produks = await Produk.findAll({ include: { all: true }})

      res.status(200).json(Produks)
    } catch (error) {
      next(error)
    }
  }

  static async getProdukById(req, res, next) {
    try {
      const {id} = req.params
      const Produks = await Produk.findByPk(id)

      res.status(200).json(Produks)
    } catch (error) {
      next(error)
    }
  }

  static async addNewProduk(req, res, next) {
    try {
      const { nama_produk, harga, kategori_id, status_id} = req.body
      const newProduct = await Produk.create({ nama_produk, harga, kategori_id, status_id})

      res.status(201).json({ message: `${newProduct.nama_produk} success to update` })
    } catch (error) {
      next(error)
    }
  }

  static async putProduk(req, res, next) {
    try {
      const { id } = req.params;
      const { nama_produk, harga, kategori_id, status_id} = req.body
      const produk = await Produk.findByPk(id)
      if (!produk) {
        throw { name: 'NOTFOUND' }
      }

      await Produk.update({ nama_produk, harga, kategori_id, status_id}, {
        where: {
          id
        }
      })

      res.status(200).json({ message: `success to update` })
    } catch (error) {
      next(error)
    }
  }

  static async deleteProduk(req, res, next) {
    try {
      const { id } = req.params;
      const produk = await Produk.findByPk(id)
      if (!produk) {
        throw { name: 'NOTFOUND' }
      }

      await Produk.destroy({ where: { id } })

      res.status(200).json({ message: `${produk.nama_produk} success to delete` })
    } catch (error) {
      next(error)
    }
  }

}

module.exports = produkController