'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Satuan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Satuan.hasMany(models.Produk, {foreignKey: 'kategori_id'})
    }
  }
  Satuan.init({
    nama_satuan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Satuan',
  });
  return Satuan;
};