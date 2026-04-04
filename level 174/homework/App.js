import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useToggle } from "./useToggle";

function App() {
  const [username, setUsername] = useLocalStorage("username", "");


  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

 
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      console.error("All fields are required!");
      return;
    }

    console.log(form);
  };


  const [user, setUser] = useState({
    name: "Nika",
    age: 22,
    city: "Tbilisi"
  });

  const updateCity = () => {
    setUser({
      ...user,
      city: "Batumi"
    });
  };


  const [isOpen, toggle] = useToggle(false);

  return (
    <div className={theme} style={{ padding: "20px" }}>

      <h1>React Practice App</h1>


      <h2>Username</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <p>Hello {username}</p>


      <h2>Theme Switcher</h2>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>


      <h2>Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      <h2>Profile Card</h2>

      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>

      <button onClick={updateCity}>
        Update City
      </button>

      <h2>Custom Hook Toggle</h2>

      <button onClick={toggle}>
        Toggle Content
      </button>

      {isOpen && <p>This content is visible</p>}

    </div>
  );
}

export default App;