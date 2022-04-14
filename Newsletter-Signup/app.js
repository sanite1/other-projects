
const express = require("express");
const app = express();
const request = require("request");
// to enable collecting of data from form elements through req.body.name
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
// to enables access to local files like css and images
app.use(express.static("public"));
const https = require("https");

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});



app.post("/", function(req, res) {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: fname,
          LNAME: lname
        }
      }
    ]
  };
  const jsonData = JSON.stringify(data);

  const url = "https://us6.api.mailchimp.com/3.0/lists/8a04dea30f";

  const options = {
    method: "POST",
    auth: "collins:fe85709c31a56f4817ea6ff4c7587f1c-us6"
  };

  const request = https.request(url, options, function(response) {

    if (response.statusCode === 200 ) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", function(data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
});

app.post("/failure", function(req, res) {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is up and running on port 3000!");
})








// API
// 33b523c740ab8ed76bb9c14621a2cefd-us6

// list id
// 8a04dea30f
