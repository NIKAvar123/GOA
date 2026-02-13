import { useId, useState } from "react";


function FormField({ id, label, type }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </div>
  );
}

export default function App() {
  const formAId = useId();
  const formBId = useId();


  const colorsId = useId();
  const colors = ["Red", "Green", "Blue"];
  const [selectedColors, setSelectedColors] = useState([]);

  function toggleColor(color) {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  }


  const fruitsId = useId();
  const [fruits, setFruits] = useState(["Apple", "Banana"]);
  const [checkedFruits, setCheckedFruits] = useState([]);

  function addFruit() {
    setFruits(prev => [...prev, `Fruit ${prev.length + 1}`]);
  }

  function toggleFruit(fruit) {
    setCheckedFruits(prev =>
      prev.includes(fruit)
        ? prev.filter(f => f !== fruit)
        : [...prev, fruit]
    );
  }


  const fullFormId = useId();

  return (
    <div style={{ padding: 20 }}>
      <h2> Two Independent Forms</h2>

      <form>
        <h4>Form A</h4>
        <label htmlFor={`${formAId}-name`}>Name</label>
        <input id={`${formAId}-name`} />

        <label htmlFor={`${formAId}-age`}>Age</label>
        <input id={`${formAId}-age`} type="number" />
      </form>

      <form>
        <h4>Form B</h4>
        <label htmlFor={`${formBId}-email`}>Email</label>
        <input id={`${formBId}-email`} type="email" />

        <label htmlFor={`${formBId}-password`}>Password</label>
        <input id={`${formBId}-password`} type="password" />
      </form>

      <hr />

      <h2>FormField Component</h2>
      <form>
        <FormField
          id={`${formAId}-username`}
          label="Username"
          type="text"
        />
        <FormField
          id={`${formAId}-useremail`}
          label="Email"
          type="email"
        />
      </form>

      <hr />

      <h2>Favorite Colors</h2>
      {colors.map((color, index) => {
        const id = `${colorsId}-${index}`;
        return (
          <div key={color}>
            <input
              type="checkbox"
              id={id}
              checked={selectedColors.includes(color)}
              onChange={() => toggleColor(color)}
            />
            <label htmlFor={id}>{color}</label>
          </div>
        );
      })}
      <p>Selected: {selectedColors.join(", ")}</p>

      <hr />

      <h2>Dynamic Fruit List</h2>
      <button onClick={addFruit}>Add Fruit</button>

      {fruits.map((fruit, index) => {
        const id = `${fruitsId}-${index}`;
        return (
          <div key={fruit}>
            <input
              type="checkbox"
              id={id}
              checked={checkedFruits.includes(fruit)}
              onChange={() => toggleFruit(fruit)}
            />
            <label htmlFor={id}>{fruit}</label>
          </div>
        );
      })}

      <hr />

      <h2>Full Form</h2>
      <form>
        <label htmlFor={`${fullFormId}-text`}>Text</label>
        <input id={`${fullFormId}-text`} type="text" />

        <label htmlFor={`${fullFormId}-email`}>Email</label>
        <input id={`${fullFormId}-email`} type="email" />

        <label htmlFor={`${fullFormId}-password`}>Password</label>
        <input id={`${fullFormId}-password`} type="password" />

        <label htmlFor={`${fullFormId}-number`}>Number</label>
        <input id={`${fullFormId}-number`} type="number" />
      </form>
    </div>
  );
}
