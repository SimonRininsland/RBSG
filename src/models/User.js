// External Dependancies
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userId: Number,
  userName: String,
  userPass: String,
  services: {
    type: Map,
    of: String
  }
})

module.exports = mongoose.model('User', userSchema)