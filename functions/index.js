// const functions = require('firebase-functions');
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPR_SECRETE);
// - App config
const app = express();

// - Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;
	try {
		console.log("Payment Request Recieved for this amount >>> ", total);

		const paymentIntent = await stripe.paymentIntents.create({
			amount: parseInt(total), // subunits of the currency
			currency: "usd",
		});

		// OK - Created
		response.status(201).send({
			clientSecret: paymentIntent.client_secret,
		});
	} catch (error) {
		console.log(error.message);
		response.status(500).send(error.message);
	}
});

app.listen(10000, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("app listning");
	}
});

// - Listen command
// exports.api = functions.https.onRequest(app);

//http://localhost:5001/aug-bc35b/us-central1/api
