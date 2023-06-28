import { useState } from "react";

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      alert("Preench o campo para acrescentar um novo item");
      return;
    }
    setNewItemName(addItem)
    setNewItemName('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Lista de items</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn">
          Adicionar Item
        </button>
      </div>
    </form>
  );
};

export default Form;
