import User from "../models/users.js";
import Marks from "../models/marks.js"
import Test from "./test.controller.js";
class HomeController{
   async homeViews(req,res){
        const user=await User.findOne({email:req.session.email});
        const marks=await Marks.find({email:req.session.email});
        res.render("home",{title:"Home",email:req.session.email,name:user.name,marks:marks})
    }
}
export default HomeController;