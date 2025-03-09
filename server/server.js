const express = require('express')
const cors = require('cors')
const app = express()
const ShipmentModel = require('./Shipments');  
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

//Create Rest API
app.post('/addShipments', async (req, res) => {
    try {
        const newShipment = await ShipmentModel.create(req.body);
        res.json({ message: 'Shipment Saved Successfully', data: newShipment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


//Read All - Rest API
app.get('/viewShipments', async (req,res)=>{
    try{
        const Shipments = await ShipmentModel.find()
        res.json(Shipments)
    }
    catch(error){
        res.json(error)
    }
})

//Read Single product by id
app.get('/findShipments/:id', async (req,res)=>{
    try{
        const Shipment = await ShipmentModel.findById(req.params.id)
        res.json(Shipment)
    }
    catch(error){
        res.json(error)
    }
})

//Update - REST API
app.put('/editShipments/:id', async (req,res)=> {
    try {
        const Shipment = await ShipmentModel.findByIdAndUpdate(
            req.params.id, req.body, {new:true}
        );
        if (!Shipment) {
            return res.send('Item not found');
        }
        res.json({message:'Shipment  Updated Successfully'});
    } catch (err) {
        res.json(err);
    }
})

//Delete - REST API
app.delete('/deleteShipments/:id', async (req,res)=>{
    try{
        const deletedItem = await ShipmentModel.findByIdAndDelete({ _id:req.params.id});
        res.json({message:'Item Deleted Successfully!'})
    }
    catch(error){
        res.json(error)
    }
})

//config PORT and Start Server
const PORT = 8000
app.listen(PORT, ()=>{
console.log(`Server running on port ${PORT}`)
})

const UserModel = require('./user')


mongoose.connect('mongodb://127.0.0.1:27017/Company')
.then(() => console.log('DB connected'))
.catch(err => console.log(err))

//Register API Route
app.post('/register',(req,res)=>{
    UserModel.create(req.body)
    .then(res.json('Data Saved Successfully'))
    .catch(err=>res.json(err))
    })