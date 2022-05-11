require('dotenv').config()
const {Server}=require('socket.io')
const express=require('express')
const server=express()
const fetchAllData=require('./utils/fetchAllData')
const getProfile=require('./routes/getProfile')
server.use(express.json())
server.use('/',getProfile)
const srv=server.listen(process.env.PORT,()=>{
    console.log("listening.. PORT:"+process.env.PORT)
})

const io=new Server(srv)



io.on("connection",()=>{
    console.log("connected!!")
    fetchAllData().then(response=>{
        io.emit("crypto",{data:response})
    })
    setInterval(()=>{
        fetchAllData().then(response=>{
            io.emit("crypto",{data:response})
        })
    },30000)
})


