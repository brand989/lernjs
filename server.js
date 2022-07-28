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


app.get('/itemslist/', (req, res) => {
    fs.readFile(`./public/database/database.json`, 'utf8', (err, data) => {
        console.log(err)
        res.send(data)
    })
})


app.post('/itemslist', ( req, res) => {
    const filePath = './public/database/datatest.json'
  
    fs.readFile(filePath, 'utf8', (err, data) => {
      const list = JSON.parse(data || "{}")
      const amountOfData = Object.keys(list).length
      const newID =  amountOfData + 1
      const newItem = req.body
      console.log(newItem)
      newItem.id = newID
      list[newItem.id] = newItem
  
      fs.writeFile(filePath, JSON.stringify(list), (err) => {
        if(err) {
          console.log(err)
        }
        res.send(list)
      } )
    })
  })


  