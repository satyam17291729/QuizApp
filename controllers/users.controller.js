import User from "../models/users.js"

import bcrypt from "bcryptjs";
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
            const isExist = await User.findOne({ email: email });
            if (isExist) {

                return res.redirect("/users/signin");
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const data = new User({
                name: name,
                email: email,
                password: hashedPassword
            })
            await data.save();
        } catch (err) {
            console.log("something went wrong in db")
        }

        res.redirect("/users/signin");
    }

    //login
    async login(req, res) {
        // const { email, password } = req.body;
        // try {
        //     const isExist = await User.findOne({email: email, password: password});
            
        //     if (isExist) {
        //         console.log("successfully login");
        //         req.session.email=email;
        //         res.redirect("/");
        //     }else{
        //         res.redirect("/users/signin")
        //     }
           
        // } catch (err) {
        //     console.log("something went wrong in finding data in database");
        // }

        const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                console.log("successfully login");
                req.session.email = email;
                res.redirect("/");
            } else {
                res.redirect("/users/signin");
            }
        } else {
            res.redirect("/users/signin");
        }
    } catch (err) {
        console.log("something went wrong in finding data in database", err);
        res.status(500).send("Internal Server Error");
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