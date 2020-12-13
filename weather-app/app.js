const express = require('express')
const app = express()

app.get('', (req, res) => {
    res.send(req.url)
    //console.log(req)

})

app.listen(3000)