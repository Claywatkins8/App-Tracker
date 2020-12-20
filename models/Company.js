// require mongoose
const mongoose = require("mongoose");

// set up schema for validation
//example articles: ["sjkl7293984s"]
const companySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "You must provide a name value"],
		},
		applications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Application" }],
		companyHq: String,
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
const Company = mongoose.model("Company", companySchema);

// export model
module.exports = Company;
