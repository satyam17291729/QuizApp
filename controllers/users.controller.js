class UserController{
    aboutView(req,res){
        res.render("about",{title:"AboutUs"});
    }
    signupView(req,res){
        res.render("signup",{title:"Sign|Up"});
    }
    signinView(req,res){
        res.render("signin",{title:"Sign|In"});
    }
}
export default UserController;