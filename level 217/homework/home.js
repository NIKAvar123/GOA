const express = require("express");

const app = express();
const PORT = 3000;

// დავალება 1 — Welcome API
const welcomeRouter = express.Router();

welcomeRouter.get("/", (req, res) => {
  res.json({
    message: "Welcome to my API"
  });
});

app.use("/welcome", welcomeRouter);


// დავალება 2 — Profile
const profileRouter = express.Router();

profileRouter.get("/", (req, res) => {
  res.json({
    name: "Nika",
    age: 20
  });
});

app.use("/profile", profileRouter);


// დავალება 3 — Route Params
app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  res.json({
    id: id
  });
});


// დავალება 4 — ორი Parameter
app.get("/users/:id/posts/:postId", (req, res) => {
  const userId = Number(req.params.id);
  const postId = Number(req.params.postId);

  res.json({
    userId: userId,
    postId: postId
  });
});


// დავალება 5 — Query Parameters
app.get("/products", (req, res) => {
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);

  res.json({
    page: page,
    limit: limit
  });
});


// Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
