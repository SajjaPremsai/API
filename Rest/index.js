require("dotenv").config()
const bodyParser = require("body-parser")
const cors = require("cors")
const express = require("express")
const routes = require("./Routes/Login")



const app = express()
app.use(cors())
app.use(bodyParser.json())


app.use("/login",routes)


app.listen(process.env.PORT,()=>{
    console.log("Server Listening in " + process.env.PORT)
})