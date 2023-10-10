const express  = require("express")


routes = express.Router()

routes.get("/",(req,res)=>{
    res.send({
        "message" : "Working"
    })
})


module.exports = routes