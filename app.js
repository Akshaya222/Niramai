const express=require("express");
require('dotenv').config()
require("./database/database")

const app=express();
let PORT=3000;

app.use("/api",require("./routes/tumors"));

app.listen(PORT,()=>{
    console.log("port started")
})

