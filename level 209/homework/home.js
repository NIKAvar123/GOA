// 1) Express არის Node.js-ის framework,
// რომელიც გამოიყენება სერვერისა და API-ების მარტივად შესაქმნელად.
// Express გვაძლევს შესაძლებლობას შევქმნათ routes (ენდფოინთები),
// მივიღოთ request-ები და დავაბრუნოთ response-ები.

// 2) განსხვავება ბიბლიოთეკასა (Library) და Framework-ს შორის:
//
// Library:
// - პროგრამისტი თავად იძახებს ბიბლიოთეკის ფუნქციებს როცა სჭირდება.
// - კონტროლი პროგრამისტის ხელშია.
//
// Framework:
// - Framework თავად აკონტროლებს პროგრამის მუშაობას.
// - პროგრამისტი წერს მხოლოდ საჭირო ნაწილებს,
//   ხოლო Framework იძახებს მათ საჭირო დროს.
// - ამას ეწოდება Inversion of Control.




const express = require("express");

const app = express();
const PORT = 3000;

// JSON-ის წაკითხვა
app.use(express.json());

// პოსტების მასივი
const posts = [
  {
    id: 1,
    title: "First Post",
  },
];

// POST /posts
app.post("/posts", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  posts.push(newPost);

  res.status(201).json({
    message: "Post added successfully",
    post: newPost,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});