const View = require('../views/view')
const Model = require('../models/model')

class Controller {
  static help(){
    View.help()
  }

  static readJSON(path) {
    View.readJSON(Model.readJSON(path))
  }

  static readPlain(path) {
    View.readPlain(Model.readPlain(path))
  }

  static moveJSON(pathSource, pathToGo) {
    View.moveJSON(Model.moveJSON(pathSource, pathToGo))
  }

  static movePlain(pathSource, pathToGo) {
    View.movePlain(Model.movePlain(pathSource, pathToGo))
  }
}

module.exports = Controller