const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
//Create API End Points (HTTP Request,Response)
app.get('/',(req,res)=>{
res.send('Welcome to Node JS Server')
})
//config PORT and Start Server
const PORT = 8000
app.listen(PORT, ()=>{
console.log(`Server running on port ${PORT}`)
})

const UserModel = require('./user')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Company')
.then(() => console.log('DB connected'))
.catch(err => console.log(err))

//Register API Route
app.post('/register',(req,res)=>{
    UserModel.create(req.body)
    .then(res.json('Data Saved Successfully'))
    .catch(err=>res.json(err))
    })