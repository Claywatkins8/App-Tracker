// require express
const express = require("express");
// set up router
const router = express.Router();

// internal modules 
const db = require("../models");


//  INDEX All Application Show Page
router.get("/", function (req, res) {
	db.Company.find({createdBy: req.session.currentUser.id}).populate("applications").exec(function (error, foundCompany) {
		if (error) return res.send(error);

		const context = {
			companies: foundCompany,
		};

		res.render("applications/allApplicationShowPage", context);
	});
});

  //  NEW Add Application Page
router.get("/new", function(req,res){
  // db.Company.find({createdBy: req.session.currentUser.id}, function (err, foundCompanies) {
  //   if (err) return res.send(err);

  //   const context = {companies: foundCompanies};
  // });
  res.render("applications/addApplicationPage");
  });



// SHOW Individual Application Show
router.get("/:id", function(req,res){


  db.Application
  .findById(req.params.id)
  .populate("company")
  .exec(function (err, foundApplication) {
    if (err) return res.send(err);
    console.log(foundApplication.resume);
    const context = { application: foundApplication };
    return res.render("applications/applicationShowPage", context);
  });
});
 
// CREATE
router.post("/", function (req, res) {
  db.Company.findOne({name: req.body.company, createdBy: req.session.currentUser.id}, function (err, foundCompany){
    
    if(err) return res.send(err);

    if (req.body.resume) req.body.resume = JSON.parse(req.body.resume);
    if (req.body.coverLetter) req.body.coverLetter = JSON.parse(req.body.coverLetter);
    console.log(req.body);
    if (foundCompany) {
      req.body.company = foundCompany._id;
      req.body.createdBy = req.session.currentUser.id
      
      // mongoose
      db.Application.create(req.body, function (err, createdApplication) {
        if (err) return res.send(err);
    
      // update the company applications array
      foundCompany.applications.push(createdApplication._id);
      // adds the application to the company
			foundCompany.save(); // saves to db
     
    return res.redirect("/applications/");
		});
    } else {

      db.Company.create({name: req.body.company, createdBy: req.session.currentUser.id}, function (err, createdCompany){

        if(err) return res.send(err);
        req.body.company = createdCompany._id;
        req.body.createdBy = req.session.currentUser.id
        // mongoose
        db.Application.create(req.body, function (err, createdApplication) {
          if (err) return res.send(err);
        // allow us to add an application to the company
        db.Company.findById(createdCompany._id, function(err, foundCompany){
          if (err) return res.send(err);
          // update the company applications array
          foundCompany.applications.push(createdApplication._id);
          // adds the application to the company
          foundCompany.save(); // saves to db
         
        return res.redirect("/applications/");
        });
      });
      })
    }
  })
});





  //EDIT Application Edit
router.get("/:id/edit", function (req, res) {
  db.Application
  .findById(req.params.id)
  .populate("company")
  .exec(function (err, foundApplication) {
    if (err) return res.send(err);
    
    const context = { application: foundApplication };
    return res.render("applications/applicationEditPage", context);
  });
});


// UPDATE
router.put("/:id", function (req, res) {

	db.Application.findByIdAndUpdate(
    
		req.params.id,
		{
			$set: {
				...req.body,
			}
		},
		{ new: true },
		function (err, updatedApplication) {
      console.log(err);
      if (err) return res.send(err);
      
			return res.redirect(`/applications/${updatedApplication._id}`);
		}
  );
});




// DELETE
router.delete("/:id", function(req,res){

  db.Application.findByIdAndDelete(req.params.id, function (err, deletedApplication) {
    if (err) return res.send(err);
    
		db.Company.findById(deletedApplication.company, function(err, foundCompany){
      if (err) return res.send(err);

    

      foundCompany.applications.remove(deletedApplication);
      foundCompany.save(function (err, updatedCompany){
  
        if(updatedCompany.applications.length === 0){
          db.Company.findByIdAndDelete(foundCompany._id, function (err, deletedCompany){
            if (err) return res.send(err);
          });
         };
        console.log(foundCompany);
      });
      
      return res.redirect("/applications");
    });
	});
});



// export router
module.exports = router;