const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)

try {
    sequelize.authenticate() 
    console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}

const booksController = require('./src/controllers/books_controller')
app.use('/books', booksController)

app.listen(process.env.SERVER_PORT, () => {
    console.log(`listening on port ${process.env.SERVER_PORT}`)
})