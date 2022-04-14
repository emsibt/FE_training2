import React, { useRef } from "react";
import Card from "../UI/Card";
import "./AddItem.css";
const AddItem = (props) => {
  const titleInputRef = useRef();
  const addItemHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    props.onAddItem(enteredTitle);
    titleInputRef.current.value = "";
  };
  return (
    <Card className="container">
      <p>Title</p>
      <input
        type="text"
        id="newItem"
        placeholder="  Add title here"
        ref={titleInputRef}
      />
      <button className="create-btn" onClick={addItemHandler}>
        Add
      </button>
    </Card>
  );
};

export default AddItem;
