import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch("https://fakestoreapi.com/products", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);

      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch ");
          return;
        }

        console.error("Error fetching data:", error);
        setError("error");

      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  if (loading) return <p>loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;


}

export default App;
