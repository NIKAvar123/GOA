import { useState, useEffect, useRef } from "react";

export default function SearchComponent() {
  const [query, setQuery] = useState("");
  const [localResults, setLocalResults] = useState([]);
  const [apiResults, setApiResults] = useState([]);
  const [error, setError] = useState(null);

  const controllerRef = useRef(null);

  const localUsers = [
    "Giorgi",
    "Nino",
    "Lasha",
    "Ana",
    "David",
    "Mariam",
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("Debounced query:", query);


      const filteredLocal = localUsers.filter((user) =>
        user.toLowerCase().includes(query.toLowerCase())
      );

      console.log("Local filtered:", filteredLocal);
      setLocalResults(filteredLocal);


      if (!query) {
        setApiResults([]);
        return;
      }


      if (controllerRef.current) {
        controllerRef.current.abort();
      }

      const controller = new AbortController();
      controllerRef.current = controller;

      fetch("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
        .then((res) => res.json())
        .then((data) => {
          const filteredApi = data.filter((user) =>
            user.name.toLowerCase().includes(query.toLowerCase())
          );

          console.log("API filtered:", filteredApi);
          setApiResults(filteredApi);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Previous request cancelled");
          } else {
            console.error(err);
            setError("API Error");
          }
        });
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Debounced Search</h2>

      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <h3>Local Results</h3>
      <ul>
        {localResults.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>

      <h3>API Results</h3>
      <ul>
        {apiResults.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}