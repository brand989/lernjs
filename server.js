const express = require('express')
const fs = require('fs')
const app = express()
let port = process.env.PORT || 3000
const bodyParser = require('body-parser')


app.use(express.static('./public'))
app.use(bodyParser.json())

app.listen(port, () => {
    console.log("Server started")
})




app.get('/itemslist/:page', (req, res) => {
    const number = req.params.page
    fs.readFile(`./public/database/database${number}.json`, 'utf8', (err, data) => {
        console.log(err)
        res.send(data)
    })
})