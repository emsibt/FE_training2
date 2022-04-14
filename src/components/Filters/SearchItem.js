import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../UI/Card";
import "./SearchItem.css";
const SearchItem = (props) => {
  const navigate = useNavigate();
  const searchInputRef = useRef();
  const searchItemHandler = () => {
    navigate({
      pathname: "/",
      search: `?title=${searchInputRef.current.value}`,
    });
  };
  return (
    <Card className="search-box">
      <input
        type="text"
        placeholder="    Type something to search..."
        ref={searchInputRef}
        onKeyUp={searchItemHandler}
      />
    </Card>
  );
};

export default SearchItem;
