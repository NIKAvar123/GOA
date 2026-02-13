//  const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const controller = new AbortController();

//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('https://fakestoreapi.com/products', {
//           signal: controller.signal
//         });
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         setData(data);
//       } catch (error) {
//         if (error.name !== 'AbortError') {
//           console.error('Error fetching data:', error);
//           setError(error);
//         }
//       } finally {
//         if (!controller.signal.aborted) {
//           setLoading(false);
//         }
//       }
//     }

//     fetchData();
//     return () => controller.abort();
//   }, [])





// import { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         const response = await fetch("https://fakestoreapi.com/products");
//         if (!response.ok) {
//           throw new Error("მონაცემების მიღება ვერ მოხერხდა");
//         }

//         const result = await response.json();
//         setData(result);

//       } catch (err) {
//         setError(err.message);

//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p>იტვირთება...</p>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;

//   return (
//     <ul>
//       {data.map(item => (
//         <li key={item.id}>{item.title}</li>
//       ))}
//     </ul>
//   );
// }

// export default App;





