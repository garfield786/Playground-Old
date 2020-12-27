require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndRemove('5fd6b2fc81ea0c27405a3230')
    .then( () => { return Task.countDocuments({ completed: false }) } )
    .then( result => console.log(result))
    .catch( error => console.log(error))