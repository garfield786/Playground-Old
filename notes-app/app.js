const chalk = require('chalk')
const yargs = require('yargs')
//Customize yargs
yargs.version('12')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'String'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'String'            
        }
    },
    handler: function(argv) {
        console.log('Title: ' + argv.title + '\nBody: ' + argv.body)
    }
})
console.log(yargs.argv)