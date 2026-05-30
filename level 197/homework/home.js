const express = require('express');
const app = express();

app.use(express.json());

// 1. GET - ყველა მომხმარებლის მიღება
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Nika' },
    { id: 2, name: 'Ana' }
  ];

  res.json(users);
});

// 2. POST - ახალი პროდუქტის დამატება
app.post('/products', (req, res) => {
  const newProduct = req.body;

  res.status(201).json({
    message: 'პროდუქტი წარმატებით დაემატა',
    product: newProduct
  });
});

// 3. PUT - მომხმარებლის განახლება
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;

  res.json({
    message: `მომხმარებელი ${userId} განახლდა`,
    updatedUser: updatedData
  });
});

// 4. DELETE - პოსტის წაშლა
app.delete('/posts/:id', (req, res) => {
  const postId = req.params.id;

  res.json({
    message: `პოსტი ${postId} წაიშალა`
  });
});

// 7. POST - Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  res.json({
    message: 'Login request received',
    email,
    password
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});