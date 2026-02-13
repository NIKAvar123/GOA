import { useState } from "react";

function AllForms() {
  // 1) Name (live preview)
  const [name, setName] = useState("");

  // 2) Email submit
  const [email, setEmail] = useState("");

  // 3) Login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  // 4) One state object
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  //  5) Checkbox
  const [agreed, setAgreed] = useState(false);
  const [agreeError, setAgreeError] = useState("");

  // handlers
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert(email);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setLoginMessage("All fields are required");
    } else {
      setLoginMessage("Login successful");
    }
  };

  const handleObjectChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAgreeSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      setAgreeError("You must agree before submitting");
      return;
    }
    setAgreeError("");
    alert("Form submitted");
  };

  return (
    <div>

      <h3>Live Name</h3>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <p>{name}</p>

      <hr />


      <h3>Email Form</h3>
      <form onSubmit={handleEmailSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>

      <hr />


      <h3>Login</h3>
      <form onSubmit={handleLoginSubmit}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
        {loginMessage && <p>{loginMessage}</p>}
      </form>

      <hr />


      <h3>One State Object</h3>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleObjectChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleObjectChange}
      />
      <input
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleObjectChange}
      />
      <p>{JSON.stringify(formData)}</p>

      <hr />


      <h3>Checkbox</h3>
      <form onSubmit={handleAgreeSubmit}>
        <label>
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          I agree
        </label>
        <br />
        <button>Submit</button>
        {agreeError && <p style={{ color: "red" }}>{agreeError}</p>}
      </form>
    </div>
  );
}

export default AllForms;
