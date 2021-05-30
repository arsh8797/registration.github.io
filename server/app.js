const express=require("express")

// const { link } = require("fs")
const path=require("path")
require("../databases/db")
// const static_path=path.join(__dirname,"../views")
const templets_path=path.join(__dirname,"../vie")
const partials_path=path.join(__dirname,"../pp")
const app=express()
const hbs=require("hbs")
const { static } = require("express")
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// importing the schema file using collection called Register
const Register = require("../databases/models/schema")
const { link } = require("fs")

app.set("view engine","hbs")
// app.use(express.static(static_path))
app.set("views",templets_path)
hbs.registerPartials(partials_path)
const port=80
// console.log(static_path)

// registration link,

app.get("/",(req,res)=>{
    res.render("index")
    // render is basically connect the file with this http link,here file name is "index"
})
app.get("/registration",(req,res)=>{
    res.render("registration")
    // render is basically connect the file with this http link,here file name is "index"
})
// login link,
app.get("/login",(req,res)=>{
    res.render("login")
    // render is basically connect the file with this http link,here file name is "login"
})

// login form submission
app.post("/login", async (req,res)=>{
    try{
        const mail=req.body.mail;
        const password=req.body.password;
        const doc= await Register.findOne({username:mail})
        if(doc.password===password){
            res.status(201).render("index")
            console.log(password)
        }
        else{
            res.send("invalid user id")
        }

    }catch(e){
        res.status(400).send("invalid mail")
    }
})
    
    // render is basically connect the file with this http link,here file name is "index"

// registration form 
app.post("/register", async (req,res)=>{
    try{
        const password=req.body.password;
        const cpassword=req.body.cpassword;
        if(password===cpassword){
            const employeeRegister=new Register({
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                username:req.body.username,
                city:req.body.city,
                state:req.body.state,
                zipcode:req.body.zip,
                password:req.body.password,
                cpassword:req.body.cpassword,
            })
            const eRegister=await employeeRegister.save()
            res.status(201).render("index")
        }else{
            res.send("your password didn't matched")
        }

    }catch(e){
        res.status(400).send(e)
    }
})
app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})