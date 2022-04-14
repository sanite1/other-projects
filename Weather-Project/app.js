const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

var https = require("https");

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  const query = req.body.cityName;
  const unit = "metric";
  const appID = "af4030499dd6e031c42ee88500b062b0";
  const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit + "&appid=" + appID;
  https.get(weatherUrl, function(response) {
    console.log("Status code: " + response.statusCode);
    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const icon = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png";
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;

      res.write("<p>The weather is currently " + desc + "</p>");

      res.write("<h1>The Temperature in " + query + " is " + temp + " degree Celsius</h1>");

      res.write("<img src ="+ icon + ">");
      res.send();

      // code to print out info in json format using jason.parse(parameter)
      // Then convert it back to string format using json.stringify(parameter)
      // console.log(weatherData);
      // console.log(JSON.stringify(weatherData));
    });
  });
})



app.listen(3000, function() {
  console.log("Server on port 3000 is now active!");
});
