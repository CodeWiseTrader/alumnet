const express = require("express");
const app = express();
const port = 3000;

// Serve static files
app.use(express.static("public"));

// Define a route for the root URL
app.get("/", (req, res) => {
  // res.send("Hello, World!");
  res.sendFile(__dirname + "/index.html");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/Home/home.html");
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
