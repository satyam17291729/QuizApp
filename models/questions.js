import mongoose from "mongoose";

const questionSchema=mongoose.Schema({
    question:{
        type:String
    },
    answer:{
        type:String
    },
    options:{
        type:Array
    }
})

const QuestionsOfHtml=mongoose.model("QuestionOfHtml",questionSchema);
const QuestionsOfCss=mongoose.model("QuestionOfCss",questionSchema);
export {QuestionsOfHtml,QuestionsOfCss};
