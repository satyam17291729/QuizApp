class HomeController{
    homeViews(req,res){
        res.render("home",{title:"Home"})
    }
}
export default HomeController;