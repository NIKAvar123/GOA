import { useEffect, useState } from "react";

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => {
        const notCompleted = data.filter(todo => todo.completed === false);
        setTodos(notCompleted);
      });
  }, []);

 
  const [posts, setPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(false);
  const [userFilter, setUserFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);


  const filteredPosts = posts
    .filter(post =>
      userFilter === "all" ? true : post.userId === Number(userFilter)
    )
    .filter(post =>
      post.title.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 5); 

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Incomplete Todos</h2>
      {todos.map(todo => (
        <p key={todo.id}>{todo.title}</p>
      ))}

      <hr />


      <button onClick={() => setShowPosts(!showPosts)}>
        Show / Hide Posts
      </button>

      {showPosts && (
        <>
          <hr />


          <select onChange={(e) => setUserFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="1">User 1</option>
            <option value="2">User 2</option>
            <option value="3">User 3</option>
          </select>


          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <h2>📝 Posts</h2>

          {filteredPosts.map(post => (
            <div key={post.id} style={{ marginBottom: "15px" }}>
              <h4>{post.title}</h4>
              <p>{post.body.slice(0, 50)}...</p>

              <button onClick={() => deletePost(post.id)}>
                Delete
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
