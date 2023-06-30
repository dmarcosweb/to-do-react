import { useState } from "react";

const SingleItem = ({ item, removeItem, editItem }) => {
  //const [isChecked, setIsChecked] = useState(item.completed);
  return (
    <div className="single-item">
      <input
        id="input"
        name="input"
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textDecoration: item.completed && "line-through",
          color: item.completed && "darkred",
        }}
      >
        {item.name.toUpperCase()}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(item.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default SingleItem;
