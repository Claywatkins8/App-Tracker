// require mongoose
const mongoose = require("mongoose");

// set up schema for validation
//example articles: ["sjkl7293984s"]
const companySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "You must provide a name property"],
		},
		applications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Application" }],
		companyHq: String,
	},
	{
		timestamps: true,
	}
);

// create model with schema
const Company = mongoose.model("Company", companySchema);

// export model
module.exports = Company;
