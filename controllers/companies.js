// require express
const express = require("express");
// set up router
const router = express.Router();



// base route /authors

// Rest Routes
/* 
  * Index - GET - /authors  - Presentational - respond with all authors
  * New - GET - /authors/new  - Presentational Form - a page with a form to create a new author
  * Show - GET - /authors/:id  - Presentational - respond with specific author by id
  * Create - Post - /authors  - Functional - recieve data from new route to create a author
  * Edit - GET - /authors/:id/edit  - Presentational Form - respond with a form prefilled with author data
  * Update - PUT - /authors/:id  - Functional - recieve data from edit to update a specific author
  * Delete - DELETE - /authors/:id  - Functional - Deletes author by id from request
*/


// Index
router.get("/", function(req,res){
  // echo for testing
  res.send("Home");
});

// New
router.get("/new", function(req,res){
  // echo for testing
  res.send("New");
});

// Show
router.get("/:id", function(req,res){
  // echo for testing
  res.send({id: req.params.id});
});

// Create
router.post("/", function(req,res){
  // echo for testing
  res.send({body: req.body, msg:"Create"});
});

// Edit
router.get("/:id/edit", function(req,res){
  // echo for testing
  res.send("Edit Form");
});

// Update
router.put("/:id", function(req,res){
  // echo for testing
  res.send({id: req.params.id, body: req.body});
});

// Delete
router.delete("/:id", function(req,res){
  // echo for testing
  res.send({id: req.params.id, msg: "Delete"});
});

//...



// export router
module.exports = router;
