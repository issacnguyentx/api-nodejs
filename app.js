require('dotenv').config()

const express = require('express')
const app = express()

const errorHandler =  require('./middleware/error_handler')
const notFound =  require('./middleware/not_found')

app.use(express.json())

app.get('/', (req, res)=>{
    res.send("Welcome node js app")
})

const port=3000

const start =  async() => {
    try {
        app.listen(port, console.log(`Server is listening on port ${port} ... `))
    } catch (error) {
        console.log(error)
    }
}

start()