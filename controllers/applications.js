// require express
const express = require("express");
// set up router
const router = express.Router();

// internal modules 
const db = require("../models");


// NOTE INDEX All Application Show Page
router.get("/", function (req, res) {
	db.Application.find({}, function (error, foundApplications) {
		if (error) return res.send(error);

		const context = {
			applications: foundApplications,
		};

		res.render("applications/allApplicationShowPage", context);
	});
});

  // NOTE NEW Add Application Page
router.get("/new", function(req,res){
  res.render("applications/addApplicationPage")
  });



// SHOW Individual Application Show
router.get("/:id", function(req,res){


  db.Application
  .findById(req.params.id)
  .populate("application")
  .exec(function (err, foundApplication) {
    if (err) return res.send(err);
    
    const context = { application: foundApplication };
    return res.render("applications/applicationShowPage", context);
  });
});
 
//NOTE CREATE
router.post("/", function (req, res) {
	//mongoose
	db.Application.create(req.body, function (err, createdArticle) {
		if (err) return res.send(err);

		// allow us to add an article to the author
		
			return res.redirect("/");
		});

		
	}); 


  //EDIT Application Edit
router.get("/:id/edit", function (req, res) {
	db.Application.findById(req.params.id, function (err, foundApplication) {
		if (err) return res.send(err);

		const context = { application: foundApplication };
		res.render("applications/applicationEditPage", context);
	});
});




// UPDATE
router.put("/:id", function (req, res) {
	db.Application.findByIdAndUpdate(
		req.params.id,
		{
			$set: {
				...req.body,
			},
		},
		{ new: true },
		function (err, updatedApplication) {
			if (err) return res.send(err);

			return res.redirect(`/applications/${updatedApplication._id}`);
		}
	);
});

// DELETE
router.delete("/:id", function(req,res){

  db.Application.findByIdAndDelete(req.params.id, function (err, deletedApplication) {
		if (err) return res.send(err);

			return res.redirect("/applications");
	});
});



// export router
module.exports = router;