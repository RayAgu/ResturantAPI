
const express = require("express")
const mongoose = require("mongoose")
const port = 8830
const app = express()
app.use(express.json())

const router = require("./foodRouter/foodRouter")
app.use(router)

mongoose.connect("mongodb+srv://aguyeraymond:iVq82GDZ93b36v5j@cluster0.lqwrrha.mongodb.net/").then( ()=>{
    console.log("connection to database is success")
}) .catch((error)=>{
    console.log(error.message)
})


app.listen( port, ()=> {
    console.log(`app is listenning to port: ${port}`)
});

