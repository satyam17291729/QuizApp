class Test{
    test(req,res){
       console.log(req.params.name)
        res.send("i am question");
    }
}
export default Test;