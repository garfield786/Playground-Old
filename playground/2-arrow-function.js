// const event = {
//     name: 'Birtday Party',
//     guestList: ['Andrew','Jen','Mike'],
//     printGuestList() {
//         console.log('Guest list for ' + this.name)
//         this.guestList.forEach(guest => {
//             console.log(guest + ' is attending ' + this.name)
//         })
//     }
// }
// event.printGuestList()

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean Yard',
        completed: false
    }, {
        text: 'Film Course',
        completed: false
    }],
    getTasksToDo() {
        return this.tasks.filter( task => task.completed === false )
    }
}
console.log(tasks.getTasksToDo())
