import React from "react";


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error:", error);
    console.error("Component Stack:", errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: "20px",
            background: "#ffe6e6",
            borderRadius: "8px",
            textAlign: "center",
            margin: "10px",
          }}
        >
          <h2>რაღაც შეცდა</h2>
          <p>გვერდის ეს ნაწილი ვერ ჩაიტვირთა. სცადე თავიდან.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

const Navbar = () => <h1>Navigation</h1>;

const Posts = () => {
  return <div>📄 Posts list</div>;
};

const Profile = () => {
  return <div>👤 User profile</div>;
};
  




const BuggyComponent = ({ triggerError }) => {
  if (triggerError) {
    throw new Error("Crash!");
  }

  return <div>✅ ყველაფერი მუშაობს</div>;
};






function App() {
  return (
    <div>

      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>

      <ErrorBoundary>
        <Posts />
      </ErrorBoundary>

      <ErrorBoundary>
        <Profile />
      </ErrorBoundary>


      <ErrorBoundary>
        <BuggyComponent triggerError={true} />
      </ErrorBoundary>
    </div>
  );
}

export default App;