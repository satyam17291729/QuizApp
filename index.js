import express from "express"

const port =7000;

const app=express();

app.listen(port,(err)=>{
    if(err){
        console.log(`Something went wrong ${err}`);
        return;
    }
    console.log(`app is running at port ${port}`);
})