
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const Goods = require('./src/models/good.js') 
const Orders = require( './src/models/orders.js')
require('dotenv').config()


let port = process.env.PORT || 3330

const URI = process.env.MONGODB_URI 

mongoose.connect(URI).then(() => {
  console.log(URI)
}).catch(error => console.log(error));


const app = express() 

app.use(express.static('./public'))
app.use(bodyParser.json())

app.listen(port, () => {
    console.log("Server started")
})


app.get('/itemslist/', async (req, res) => {
  const goodList = await Goods.find();
  console.log(goodList)
  res.json(goodList);
})


app.post('/itemslist/', async ( req, res) => {

  try {
    const order = await Orders.create(req.body);
    console.log(order)
    res.json(order);
  } catch (err) {
    res.status(900);
    res.send(err);
  }

})


// app.get('/itemslist/', (req, res) => {
//     fs.readFile(`./public/database/database.json`, 'utf8', (err, data) => {
//         console.log(err)
//         res.send(data)
//     })
// })


// app.post('/itemslist', ( req, res) => {
//     const filePath = './public/database/datatest.json'
  
//     fs.readFile(filePath, 'utf8', (err, data) => {
//       const list = JSON.parse(data || "{}")
//       const amountOfData = Object.keys(list).length
//       const newID =  amountOfData + 1
//       const newItem = req.body
//       console.log(newItem)
//       newItem.id = newID
//       list[newItem.id] = newItem
  
//       fs.writeFile(filePath, JSON.stringify(list), (err) => {
//         if(err) {
//           console.log(err)
//         }
//         res.send(list)
//       } )
//     })
//   })

  
  