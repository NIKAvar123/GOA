import { useState } from "react";

function App() {

  const [password, setPassword] = useState("");

  const passwordLength = password.length;
  const isLongerThan8 = passwordLength > 8;
  const hasNumber = /\d/.test(password);

  const [search, setSearch] = useState("");

  const products = [
    { name: "Laptop", price: 2000, category: "Electronics" },
    { name: "Phone", price: 1200, category: "Electronics" },
    { name: "Shoes", price: 150, category: "Fashion" },
    { name: "T-shirt", price: 50, category: "Fashion" },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );


  const cart = [
    { name: "Laptop", price: 2000, quantity: 1 },
    { name: "Phone", price: 1200, quantity: 2 },
    { name: "Shoes", price: 150, quantity: 3 },
  ];

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalQuantity = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const students = [
    { name: "Ana", score: 80 },
    { name: "Gio", score: 45 },
    { name: "Nino", score: 67 },
    { name: "Luka", score: 30 },
  ];

  const passedStudents = students.filter((s) => s.score > 51);
  const passedCount = passedStudents.length;


  const todos = [
    { text: "Learn React", priority: "high" },
    { text: "Clean room", priority: "low" },
    { text: "Build project", priority: "high" },
    { text: "Read book", priority: "medium" },
  ];

  const highPriorityTodos = todos.filter(
    (todo) => todo.priority === "high"
  );

  const highCount = highPriorityTodos.length;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      

      <h2>Password Checker</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>Length: {passwordLength}</p>
      <p>More than 8 characters: {isLongerThan8 ? "Yes" : "No"}</p>
      <p>Contains number: {hasNumber ? "Yes" : "No"}</p>

      <hr />

     
      <h2>Product Search</h2>
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredProducts.map((product, index) => (
        <p key={index}>
          {product.name} - ${product.price}
        </p>
      ))}

      <hr />

  
      <h2>Cart</h2>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Price: ${totalPrice}</p>

      <hr />


      <h2>Passed Students</h2>
      {passedStudents.map((student, index) => (
        <p key={index}>
          {student.name} - {student.score}
        </p>
      ))}
      <p>Total Passed: {passedCount}</p>

      <hr />


      <h2>High Priority Tasks ({highCount})</h2>
      {highPriorityTodos.map((todo, index) => (
        <p key={index}>{todo.text}</p>
      ))}

    </div>
  );
}

export default App;