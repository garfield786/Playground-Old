console.log('Clinet Side JS loaded')

fetch('http://localhost:3000').then( response => {
    response.json().then( data => {
        console.log(data)
    })
})

