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
			type: mongoose.Schema.Types.ObjectId, ref: "Company", 
        },	
        location: {
			type: String,
        },	
        remote: String,

        postingUrl: {
			type: String,
        },
        resume: {
			type: Object,
        },
        coverLetter: {
			type: Object,
        },
        dateApplied: {
			type: Date,
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
        createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		}  
    },
	{
		timestamps: true,
	}
);

// create model with schema
const Application = mongoose.model("Application", applicationSchema);

// export model
module.exports = Application;