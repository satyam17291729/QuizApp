import Test from "./test.controller.js";
class ApiController{
     dataGiver(req,res){
        console.log(Test.quizQuestion)
        return res.send(Test.quizQuestion);
    }
     dataReciver(req,res){
       console.log(req.body);
    }
}
export default ApiController;