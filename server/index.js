const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const app = express();
const userRoute = require('./routes/user')
const cors = require('cors')
const bodyParser = require('body-parser')
dotenv.config()
app.get('/',(req,res)=>
{
    res.send("hello")
})
app.use(bodyParser.json())
app.use(cors({
    origin:'http://localhost:3000'
}))
app.use('/user',userRoute)
const PORT = 5000
 app.listen(PORT,()=>
{
    console.log(`server is running on the ${PORT}`);
})


mongoose.connect(process.env.MONGODB).then(()=>
{
    console.log('Mongo DB is connected');
}).catch(err =>{
    console.log(err);
})