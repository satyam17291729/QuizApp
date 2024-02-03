class UserController{
    aboutView(req,res){
        res.render("about",{title:"AboutUs"});
    }
}
export default UserController;