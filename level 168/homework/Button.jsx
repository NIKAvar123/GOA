const Button = ({ color, on, changeOn, id }) => {
  return (
    <button
      onClick={() => changeOn(id)}
      style={{
        backgroundColor: on ? color : "gray",
        padding: "20px",
        border: "none",
        cursor: "pointer",
        color: "white",
      }}
    >
      {on ? "ON" : "OFF"}
    </button>
  );
};

export default Button;
