const express = require("express");
const app = express();

// 1. Logger Middleware
function loggerM(req, res, next) {
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  next();
}

// 2. Time Middleware
function timeM(req, res, next) {
  console.log("Time:", new Date());
  next();
}

// 3. Auth Middleware
function authM(req, res, next) {
  if (req.query.password === "1234") {
    next();
  } else {
    res.status(403).json({
      message: "Access Denied",
    });
  }
}

// Middleware-ების დამატება
app.use(loggerM);
app.use(timeM);
app.use(authM);

// Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome!",
  });
});

// Server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});