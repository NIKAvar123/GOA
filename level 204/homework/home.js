const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const products = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "Phone", category: "Electronics" },
  { id: 3, name: "T-Shirt", category: "Clothes" },
  { id: 4, name: "Jeans", category: "Clothes" },
  { id: 5, name: "Book", category: "Books" }
];

app.get("/products", (req, res) => {
  let { name, category } = req.query;

  let filteredProducts = products;

  if (name) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (category) {
    filteredProducts = filteredProducts.filter(
      product => product.category === category
    );
  }

  res.json(filteredProducts);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});