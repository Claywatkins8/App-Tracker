/* ==== External Modules  ==== */
const express = require("express");
const methodOverride = require("method-override");

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


/* ==== Routes/Controllers  ==== */
app.get("/", function(req, res){
    // .render(file,context)
    res.render("home");
  });

  // companies controller
app.use("/companies", controllers.companies);

/* ==== Server Listener  ==== */
app.listen(PORT, function(){
  console.log(`Blog Application is live at http://localhost:${PORT}/`)
});