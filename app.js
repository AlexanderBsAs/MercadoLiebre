let express=require("express")
let app=express()
let path = require("path")


app.use(express.static(path.join(__dirname,"/public")))
app.get ( "/", (req,res)=> {
    res.sendFile(path.join(__dirname,"/views/home.html"))
})

app.listen(3000,()=>console.log("servidor levantado"))