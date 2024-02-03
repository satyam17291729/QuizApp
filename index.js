import express from "express"
import expressEjsLayouts from "express-ejs-layouts";
//setting the port of the app
const port =7000;

//creating the express app
const app=express();

//setting the app level middleware for static file
app.use(express.static("./assets"));

//setting up view engine
app.set("view engine" ,"ejs");
app.set("views","./views");

//setting up app level middleware to set layout

app.use(expressEjsLayouts);


//setting up extracting the css and js file dyamically from partials

app.set("layout extractStyles",true);
app.set("layout extractScripts",true);

//importing the home router and set it as app level middleware
import route from "./routers/home.js";
app.use("/",route);



app.listen(port,(err)=>{
    if(err){
        console.log(`Something went wrong ${err}`);
        return;
    }
    console.log(`app is running at port ${port}`);
})