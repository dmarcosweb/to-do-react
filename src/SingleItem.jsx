import { useState } from "react";

const SingleItem = ({ item, removeItem }) => {
  const [isChecked, setIsChecked] = useState(item.completed);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p
        style={{
          textDecoration: isChecked && "line-through",
          color: isChecked && "darkred",
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
