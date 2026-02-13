import { useId } from "react";

function MyForm() {
  const inputId = useId();

  return (
    <form>
      <div>
        <label htmlFor={inputId}>სახელი:</label>
        <input
          id={inputId}
          type="text"
          placeholder="შეიყვანე სახელი"
        />
      </div>
    </form>
  );
}

export default MyForm;