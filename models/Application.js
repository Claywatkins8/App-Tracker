// require mongoose
const mongoose = require("mongoose");

// set up schema for validation
//example articles: ["sjkl7293984s"]
const applicationSchema = mongoose.Schema(
	{
		jobTitle: {
			type: String,
			required: [true, "You must provide a name property"],
        },
        company: {
			type: String,
        },	
        location: {
			type: String,
        },	
        remote: Boolean,

        postingUrl: {
			type: String,
			
        },
        resume: {
			type: String,
			
        },
        coverLetter: {
			type: String,
			
        },
        dateApplied: {
			date: String,
			
        },
        notes: String,
        
        referenceName: {
			type: String,
			
        },
        referencePhone: {
			type: String,
			
        },
        referenceEmail: {
			type: String,
			
        },
        referenceLinkedIn: {
			type: String,
			
        },
    
        fullJobDescription: {
        type: String,
        
        },   
        	
    },
	{
		timestamps: true,
	}
);

// create model with schema
const Application = mongoose.model("Application", applicationSchema);

// export model
module.exports = Application;