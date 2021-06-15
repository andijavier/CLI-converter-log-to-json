#!/usr/bin/env node

const Controller = require('./controllers/controller')
const command = process.argv.slice(2)

if (command[0] === "-h") {
  Controller.help()
} else {
  if (command.length === 1) {
    Controller.readPlain(command[0])
  } else if(command.length === 3) {
    if (command[1] === "-t") {
      if (command[2] === "json") {
        Controller.readJSON(command[0])
      } else {
        Controller.readPlain(command[0])
      }
    } else {
      Controller.movePlain(command[0], command[2])
    }
  } else if(command.length === 5) {
    if (command[2] === "json") {
      Controller.moveJSON(command[0], command[4])
    } else {
      Controller.movePlain(command[0], command[4])
    }
  } else {
    Controller.help()
  }
}

// converter D:\\Hacktiv8\\tens\\test.log -t json
// converter D:\\Hacktiv8\\tens\\test.log -t json -o "D:\\Hacktiv8\\Phase 1\\log.json"
// converter D:\\Hacktiv8\\tens\\test.log -t text -o "D:\\Hacktiv8\\Phase 1\\log.txt"
// converter D:\\Hacktiv8\\tens\\test.log -o "D:\\Hacktiv8\\Phase 1\\log.txt"