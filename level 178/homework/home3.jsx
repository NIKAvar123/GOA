class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      let message = "Unknown error";

      if (this.state.error instanceof TypeError) {
        message = "Type error occurred!";
      } else if (this.state.error instanceof ReferenceError) {
        message = "Reference error occurred!";
      }

      return <h2>{message}</h2>;
    }

    return this.props.children;
  }
}