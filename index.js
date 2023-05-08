const express = require("express");
const { createClient } = require("@propelauth/javascript");

const app = express();
const port = 3000;

// Configure Handlebars as the view engine

const propelAuthClient = createClient({
  clientId: "your-client-id",
  clientSecret: "your-client-secret",
  redirectUri: "http://localhost:3000/auth/callback",
});

// Static files
app.use(express.static("public"));

// Define routes
app.get("/", (req, res) => {
  res.render("index");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
