require('dotenv').config()

const mongoose = require('mongoose')
const Character = require('../models/Character')

const characters = [
  {
    name: 'Beavis',
    gender: 'Male',
    race: 'White',
    hair: 'Blonde',
    dateOfBirth: 'October 28th, 1979',
    age: 14,
    jobs: ['Student at Highland High School', 'Fry cook at Burger World'],
    photoURL:
      'https://vignette.wikia.nocookie.net/beavisandbutthead/images/9/93/Beavis-1.png/revision/latest/scale-to-width-down/267?cb=20120108001944'
  },
  {
    name: 'The Great Cornholio',
    gender: 'Male',
    race: 'White',
    hair: 'Blonde',
    dateOfBirth: 'October 28th, 1979',
    age: 17,
    jobs: [],
    photoURL:
      'https://vignette.wikia.nocookie.net/beavisandbutthead/images/8/8d/CORNHOLIO_NEED_HIS_TP.jpg/revision/latest/scale-to-width-down/310?cb=20111118231614'
  },
  {
    name: 'Butt-head',
    gender: 'Male',
    race: 'White',
    hair: 'Worn Dark Red',
    dateOfBirth: 'November 28, 1978',
    age: 15,
    jobs: ['Student at Highland High School', 'Fry cook at Burger World'],
    photoURL:
      'https://vignette.wikia.nocookie.net/beavisandbutthead/images/b/b1/Butt-head.png/revision/latest/scale-to-width-down/286?cb=20120108001808'
  }
]

mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => {
    Character.create(characters)
      .then(characters => {
        console.log(`${characters.length} characters created successfully`)
        mongoose.connection.close()
      })
      .catch(err => {
        console.log(err)
        mongoose.connection.close()
      })
  })
  .catch(err => console.log(err))
