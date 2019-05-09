const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema(
  {
    name: String,
    gender: String,
    race: String,
    hair: String,
    dateOfBirth: String,
    age: Number,
    jobs: [String],
    photoURL: String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = mongoose.model('Character', characterSchema)
