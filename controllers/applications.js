// require express
const express = require("express");
// set up router
const router = express.Router();

// internal modules 
const db = require("../models");


// All Application Show Page
router.get("/", function(req,res){

   
    db.Application
    .findById(req.params.id)
    .populate("company")
    .exec(function (err, foundApplications) {
      if (err) return res.send(err);
      
      const context = { applications: foundApplications };
      return res.render("applications/applicationShowPage", context);
      
    });
  });

//  Individual Application Show
router.get("/:id", function(req,res){


  db.Application
  .findById(req.params.id)
  .populate("company")
  .exec(function (err, foundApplication) {
    if (err) return res.send(err);
    
    const context = { application: foundApplication };
    return res.render("applications/applicationShowPage", context);
  });

});
 
 
  // Application Edit
router.get("/:id/edit", function (req, res) {
	db.Application.findById(req.params.id, function (err, foundApplication) {
		if (err) return res.send(err);

		const context = { application: foundApplication };
		res.render("applications/applicationEditPage", context);
	});
});




// Update
router.put("/:id", function(req,res){
    const id = request.params.id;
    db.Application.findByIdAndUpdate(id, 
        id,
        {
            $set:{
                ...req.body,
            }
        },
        { new: true },
        function (err, updateApplication){
            if(err) return res.send(err);

            return res.redirect(`/applications/${updateApplication._id}`)
        }
        
        );

});

// Delete
router.delete("/:id", function(req,res){
  // echo for testing
  res.send({id: req.params.id, msg: "Delete"});
});

//...



// export router
module.exports = router;