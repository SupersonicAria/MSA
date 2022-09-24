const books = require('express').Router()
const db = require('../models')
const { Book } = db
const book = require('../models/book')

books.get('/', async (req,res)=>{
    try {
        const foundBooks = await Book.findAll()
        res.status(200).json(foundBooks)
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = books