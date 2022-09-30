const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const sequelize = new Sequelize(process.env.PG_URI)

const booksController = require('./src/controllers/books_controller')
app.use('/books', booksController)

app.listen(process.env.SERVER_PORT, () => {
    console.log(`listening on port ${process.env.SERVER_PORT}`)
})