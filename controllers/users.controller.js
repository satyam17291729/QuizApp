import User from "../models/users.js"
class UserController {
    //rendering the about section
    aboutView(req, res) {
        res.render("about", { title: "AboutUs",email:req.session.email });
    }
    //rendering the sign-up section
    signupView(req, res) {
        res.render("signup", { title: "Sign|Up",email:req.session.email });
    }
    //rendering the sign-in section
    signinView(req, res) {
        res.render("signin", { title: "Sign|In",email:req.session.email });
    }
    //create the user in database if not created
    async createUser(req, res) {
        const { name, email, password } = req.body;
        try {
            const isExist = await User.find({ email: email });
            if (isExist) {

                return res.redirect("/users/signin");
            }
            const data = new User({
                name: name,
                email: email,
                password: password
            })
            await data.save();
        } catch (err) {
            console.log("something went wrong in db")
        }

        res.redirect("/users/signin");
    }

    //login
    async login(req, res) {
        const { email, password } = req.body;
        try {
            const isExist = await User.find({email: email, password: password});
            // console.log(isExist);
            if (isExist.length>0) {
                console.log("successfully login");
                req.session.email=email;
                // console.log(req.session);
                res.redirect("/");
            }else{
                res.redirect("/users/signin")
            }
           
        } catch (err) {
            console.log("something went wrong in finding data in database");
        }

    }

    //logout
    logOut(req,res){
        req.session.destroy((err)=>{
            if(err){
                console.log(`something went wrong to destroy the session ${err}`);
            }else{
                console.log("logout successfully");
                res.redirect("/users/signin");
            }
        })
    }

    //test
    test(req,res){
        res.render("test",{title:"Test",email:req.session.email});
    }
}
export default UserController;