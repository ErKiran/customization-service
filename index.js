const express = require('express');
const cors = require('cors');
require('dotenv').config();

const {uploadFile} = require('./upload');

const app = express();

app.use(cors())

app.use(express.json({}))
app.use(express.urlencoded({extended: true}))

app.post('/upload',uploadFile)

const PORT = process.env.PORT || 4555;


app.listen(PORT,()=>{
    console.log(`App is running in PORT ${PORT}`)
})