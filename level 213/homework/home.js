const express = require("express");

const app = express();
const PORT = 3000;

// 1)
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

// 2)
app.get("/about", (req, res) => {
  res.send("This is About Page");
});

// 3)
app.get("/contact", (req, res) => {
  res.json({
    email: "example@gmail.com",
    phone: "555123456"
  });
});

// 4)
app.get("/user", (req, res) => {
  res.json({
    name: "nika",
    age: 15            
  });
});

// 5)
app.get("/sum", (req, res) => {
  const num1 = 10;
  const num2 = 20;
  const sum = num1 + num2;

  res.json({
    result: sum
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});