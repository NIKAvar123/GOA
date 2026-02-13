import { useId } from "react";

function NameForm() {
  const firstNameId = useId();
  const lastNameId = useId();

  return (
    <form>
      <div>
        <label htmlFor={firstNameId}>სახელი:</label>
        <input
          id={firstNameId}
          type="text"
          name="firstName"
          placeholder="შეიყვანე სახელი"
        />
      </div>

      <div>
        <label htmlFor={lastNameId}>გვარი:</label>
        <input
          id={lastNameId}
          type="text"
          name="lastName"
          placeholder="შეიყვანე გვარი"
        />
      </div>
    </form>
  );
}

export default NameForm;