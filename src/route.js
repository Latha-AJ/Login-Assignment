const express = require("express")
const route = express.Router()

const profileModel = require("./models/profileModel")

route.post("/signUP", async(req,res)=>{
const data = req.body;
const saveUser = await profileModel.create(data)
res.send({data: saveUser})

})

route.post("/Login", async(req,res)=>{
    const data = req.body;
    const {email, password} = data;
const findUser = await profileModel.findOne({email:email,password:password})
res.send({data:findUser})
})

module.exports = route