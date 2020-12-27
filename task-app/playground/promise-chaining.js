require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5fd6d4f3336b6228cf8e8456', { age: 1 })
    .then( user => {
        console.log(user)
        return User.countDocuments({ age: 1})
    })
    .then( result => console.log(result))
    .catch( error => console.log(error))

const 