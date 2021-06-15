const fs = require("fs")
const convert = require("../helper/convert")

class Model {
  static readJSON(path) {
    return convert(path)
  }

  static readPlain(path) {
    return fs.readFileSync(path, "utf-8")
  }

  static moveJSON(pathSource, pathToGo) {
    const data =  convert(pathSource)
    fs.writeFileSync(pathToGo, JSON.stringify(data, null, 2))
    return `file .json successfully been created at ${pathToGo}`
  }

  static movePlain(pathSource, pathToGo) {
    const data =  fs.readFileSync(pathSource, "utf-8")
    fs.writeFileSync(pathToGo, data)
    return `file .txt successfully been created at ${pathToGo}`
  }
}

module.exports = Model