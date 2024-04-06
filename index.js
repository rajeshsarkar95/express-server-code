const express =require("express");
const app = express();
app.get('',(req,res)=>{
    res.send("hello this is home pase")
}) 
app.get('/about',(req,res)=>{
    res.send("hello this is about page")
});
app.get('/help',(req,res)=>{
    res.send("hello this is hepl page")
});
app.get('/sevises',(req,res)=>{
    res.send("hello this is sevises page")
});

app.listen(5000);