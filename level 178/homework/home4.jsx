class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // mock API call
    console.log("Error message:", error.message);
    console.log("Stack trace:", info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Error occurred. Logged!</h2>;
    }

    return this.props.children;
  }
}