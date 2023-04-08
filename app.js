'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Nama : Rivaldo Louis Leonard Nim : 52020009 Jurusan Teknik Informatika \n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
