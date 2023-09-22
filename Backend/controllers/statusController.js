const {Status} = require('../models/index')

class StatusController {

  static async getStatus(req, res, next) {
    try {
      const status = await Status.findAll()

      res.status(200).json(status)
    } catch (error) {
      next(error)
    }
  }

}

module.exports = StatusController