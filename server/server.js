const express = require("express");
const app = express();

// to log incoming request path & method
app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"]});
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
