import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../UI/Card";
import "./EditItem.css";
const EditItem = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const newTitleInputRef = useRef();
    const redirectHomePageHandler = () =>{
        navigate('/');
    };
    const updateItemHandler = (event) =>{
        event.preventDefault();
        const enteredNewTitle = newTitleInputRef.current.value;
        const id = location.pathname.slice(6);
        props.onUpdateItem(enteredNewTitle, id);
        redirectHomePageHandler();
    }   
  return (
    <Card className="container">
      <p>Title</p>
      <input type="text" id="newItem" placeholder="  Add title here" ref={newTitleInputRef}/>
      <div className="behavior">
        <button className="update-btn" onClick={updateItemHandler}>Update</button>
        <button className="cancel-btn" onClick={redirectHomePageHandler}>Cancel</button>
      </div>
    </Card>
  );
};
export default EditItem;
