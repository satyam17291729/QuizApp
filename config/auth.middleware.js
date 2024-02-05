function authMiddleware(req,res,next){
    if(req.session.email){
        next();
    }else{
        res.redirect("/users/signin");
    }
}
export default authMiddleware;