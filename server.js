/* ==== External Modules  ==== */
const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

/* ==== Internal Modules  ==== */
const controllers = require("./controllers");

/* ==== Instanced Modules  ==== */
const app = express();

/* ==== Configuration  ==== */
const PORT = 4000;

app.set("view engine", "ejs"); // allows for leaving off the extension and makes the server more effecient

/* ==== Middleware ==== */
// server public as static files
// express.static(directory location absolute)
app.use(express.static(__dirname + '/public'));


// body data middleware
app.use(express.urlencoded({ extended: true }));

// method override middleware
app.use(methodOverride("_method"));

// Session
app.use(
  session(
    {
      // set the store to the MongoStore we required
      store: new MongoStore({
        url: "mongodb://localhost:27017/application-tracker"
      }),
      // our secret is a signature in our sessions to verify that it is valid
      secret: "Super Secret Waffles",
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 * 2 // two weeks
      }
    }
  )
);


// logger 
app.use(function(req,res,next){
 
  req.session.test = "Test Property"
  console.log(req.session);
  next();
});

// user authentication middleware
app.use(function(req,res,next){
  app.locals.user =  req.session.currentUser;
  next();
})


const authRequired = require("./middleware/authRequired");


/* ==== Routes/Controllers  ==== */
app.get("/", function(req, res){
    // .render(file,context)
    res.render("home");
  });

  // Auth controller
app.use("/", controllers.auth);

  // companies controller
app.use("/companies", authRequired, controllers.companies);
app.use("/applications", authRequired, controllers.applications);

/* ==== Server Listener  ==== */
app.listen(PORT, function(){
  console.log(`Application Tracker is live at http://localhost:${PORT}/`)
});

