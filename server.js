const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url
    console.log(url)

    if(url == '/'){
        body = fs.readFileSync(`./public/index.html`)
    }else{
        body = fs.readFileSync(`./public/${url}`)
    }

    res.end(body)
})

const port = process.env.PORT || 3000

server.listen(port, () => {
    
    console.log(`Server running`);
  })