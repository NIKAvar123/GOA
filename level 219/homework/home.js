const express = require("express");

const app = express();

const PORT = 3000;

// 1) Hello Express
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

// 2) About Page
app.get("/about", (req, res) => {
  res.send("This is About Page");
});

// 3) რამდენიმე Route

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.get("/products", (req, res) => {
  res.send("Products Page");
});

// 4) URL Params
// მაგალითად: /users/25
app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  res.send(`User ID: ${id}`);
});

// 5) ორი Params
// მაგალითად: /users/10/posts/50
app.get("/users/:id/posts/:postId", (req, res) => {
  const id = req.params.id;
  const postId = req.params.postId;

  res.send(`User ID: ${id}, Post ID: ${postId}`);
});

// Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
