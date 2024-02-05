import User from "../models/users.js";
class HomeController{
   async homeViews(req,res){
        const user=await User.findOne({email:req.session.email});
        res.render("home",{title:"Home",email:req.session.email,name:user.name})
    }
}
export default HomeController;