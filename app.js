let express=require("express")
let app=express()
let path = require("path")
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname,"/public")))
app.get ( "/", (req,res)=> {
    res.sendFile(path.join(__dirname,"/views/home.html"))
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/register.html"))
})
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/login.html"))
}) 

app.post("/login", (req,res) => {
    console.log (req.body);
    res.redirect("/");
});

app.post("/register", (req,res) => {
    console.log (req.body);
    res.redirect("/");
});




app.listen(3000,()=>console.log("servidor levantado"))