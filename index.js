//jshint eversion:6

const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {

  res.sendFile(__dirname + "/Thaeka.html");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on Port 3000");

});
