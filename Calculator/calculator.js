
const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);

  var result = n1 + n2;
  res.send("The result is: " + result);
});

// res.send("");
app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res) {
  var w = parseFloat(req.body.weight);
  var h = parseFloat(req.body.height);

  var bmi = w / (h * h);

  res.send("Your BMI is " + Math.round(bmi, 2));
});

app.listen(3000, function() {
  console.log("server started on Port 3000!");
});
