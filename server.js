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


app.post('/itemslist', ( req, res) => {
    // 1) Прочитать существующий файл page3.json
    // 2) Узнать, какой ID был последним
    // 3) Создать объект с новым ID и с данными, пришедшими от клиента
    // 4) Записать обновленный JSON в файл
    // 5) Отдать результат обратно клиенту
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


  