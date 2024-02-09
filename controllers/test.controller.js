import { QuestionsOfHtml,QuestionsOfCss } from "../models/questions.js";
class Test{
    async createQuestion(question,answer,options){
        const newquestion=new QuestionsOfHtml({
            question:question,
            answer:answer,
            options:options
        })
        try{
            const data=await newquestion.save();
            console.log(data);
            
        }catch(err){
            console.log("something went wrong in saving the question");
        }
    }
     static quizQuestion;
     static nameOfSub;
    test=async(req,res)=>{
        // await this.createQuestion("what is html","hypertext markup language",[]);
        // console.log(req.params.name);
        Test.nameOfSub=req.params.name
         const str=`QuestionsOf${req.params.name}`;
        // console.log(str==="QuestionsOfHtml")
        if(str==="QuestionsOfHtml"){
             Test.quizQuestion= await QuestionsOfHtml.find({});
           
            // console.log(data)
            res.render("question",{title:"Questions",data:Test.quizQuestion,email:req.session.email});
        }else if(str==="QuestionsOfCss"){
             Test.quizQuestion= await QuestionsOfCss.find({});
            res.render("question",{title:"Questions",data:Test.quizQuestion,email:req.session.email});
        }
       
    } 
       
}



export default Test;
