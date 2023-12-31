const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NlHzOFFezkNWFHRch2JMNVq5qJjUST9mXKJgoXslONOk1M35OrCafWrdFkhkooSgH4Rtk4ryKRmTEERyCZi65YT00IhzdCcM3"
);

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
api.get("/", (request, response) => response.status(200).send("hello world"));

//Listen command
exports.api = functions.https.onRequest(app);
