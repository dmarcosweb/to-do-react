import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.warning("Digite um item para adicionar a lista", {autoClose: 2000,draggable: false,});
      return;
    }
    setNewItemName(addItem);
    setNewItemName("");
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
