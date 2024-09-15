const jwt = require('jsonwebtoken');


const login = async(req,res)=>
    {
        const {email} = req.body;
        console.log(req.body);
    }
module.exports={login}