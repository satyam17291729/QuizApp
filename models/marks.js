import mongoose from "mongoose";

const marksSchema=mongoose.Schema({
    email:{
        type:String
    },
    marks:{
        type:String
    },
    subject:{
        type:String
    }
});

const Marks=mongoose.model("Mark",marksSchema);
export default Marks;