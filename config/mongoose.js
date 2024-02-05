import mongoose from "mongoose";

async function connectionWithLocalDataBase(){

    const isConnected=await mongoose.connect("mongodb://localhost:27017/QuizDataBase");
    if(isConnected){
        console.log("successfully connected to database");
    }else{
        console.log("something went wrong to connected to database");
    }

}
connectionWithLocalDataBase();
