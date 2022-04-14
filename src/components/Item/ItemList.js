import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";
import "./ItemList.css";
const ItemList = (props) => {
  const removeItemHandler = (item) => {
    props.onRemoveItem(item);
  };
  const navigate = useNavigate();
  const editItemHandler = (id) => {
    navigate(`/edit/${id}`);
  };
  return (
    <Card className="items-list">
      <Link to="/create" className="add-item">
        Add new item
      </Link>
      <ul className="items">
        {props.items.map((item) => (
          <li key={item.id} className="item">
            <img src={item.image} alt="item" className="item-image"></img>
            <div className="overlay"></div>
            <Button
              children={"Edit"}
              onClick={() => editItemHandler(item.id)}
            />
            <Button
              children={"Remove"}
              onClick={() => removeItemHandler(item)}
            />
            <div className="item-title">
              <p> {item.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ItemList;
