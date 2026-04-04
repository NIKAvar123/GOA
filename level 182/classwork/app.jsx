import { useMedia } from "./hooks/useMedia";

function App() {
  const isMobile = useMedia("(max-width: 768px)");

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <Navbar isMobile={isMobile} />
      <Layout isMobile={isMobile} />
    </div>
  );
}


function Navbar({ isMobile }) {
  return (
    <nav
      style={{
        padding: "15px",
        background: "#333",
        color: "white",
      }}
    >
      {isMobile ? (
        <button style={{ fontSize: "20px" }}>click</button>
      ) : (
        <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
    </nav>
  );
}


function Layout({ isMobile }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        height: "calc(100vh - 60px)",
      }}
    >
      <Sidebar isMobile={isMobile} />
      <Main />
    </div>
  );
}


function Sidebar({ isMobile }) {
  return (
    <aside
      style={{
        width: isMobile ? "100%" : "200px",
        background: "#f4f4f4",
        padding: "20px",
      }}
    >
      <p>Dashboard</p>
      <p>Settings</p>
      <p>Profile</p>
    </aside>
  );
}


function Main() {
  return (
    <main style={{ flex: 1, padding: "20px" }}>
      <h1>Responsive App</h1>
      <p>Resize the window 👇</p>
    </main>
  );
}

export default App;