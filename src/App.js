import React, { useState, Fragment, useEffect } from "react";
import Navbar from "./components/UI/Navbar";
import ItemList from "./components/Item/ItemList";
import SearchItem from "./components/Filters/SearchItem";
import { Route, Routes, useLocation } from "react-router-dom";
import AddItem from "./components/Item/AddItem";
import EditItem from "./components/Item/EditItem";
import queryString from "query-string";
function App() {
  const initItemList = [
    {
      id: Math.random().toString(),
      image: "./image/gray.png",
      title: "title",
    },
    {
      id: Math.random().toString(),
      image: "./image/gray.png",
      title: "title",
    },
    {
      id: Math.random().toString(),
      image: "./image/gray.png",
      title: "title",
    },
    {
      id: Math.random().toString(),
      image: "./image/gray.png",
      title: "title",
    },
    {
      id: Math.random().toString(),
      image: "./image/gray.png",
      title: "title",
    },
    {
      id: Math.random().toString(),
      image: "./image/gray.png",
      title: "aa",
    },
    {
      id: Math.random().toString(),
      image: "./image/gray.png",
      title: "bb",
    },
    {
      id: Math.random().toString(),
      image: "./image/gray.png",
      title: "cc",
    },
  ];
  const [itemList, setItemList] = useState(initItemList);
  const [renderItemList, setRenderItemList] = useState(itemList);

  const location = useLocation();
  const onAddItem = (newTitle) => {
    const newItemList = [...itemList];
    newItemList.push({
      id: Math.random().toString(),
      image: "./image/gray.png",
      title: newTitle,
    });
    setItemList(newItemList);
  };

  const onRemoveItem = (item) => {
    //find index of Item
    const index = itemList.findIndex(
      (x) => x.id === item.id && x.title === item.title
    );
    //clone new list
    const newItemList = [...itemList];
    //delete item
    newItemList.splice(index, 1);
    setItemList(newItemList);
  };

  const onUpdateItem = (newTitle, id) => {
    //find index of Item
    const index = itemList.findIndex((x) => x.id === id);
    //clone new list
    const newItemList = [...itemList];
    //update item at index
    newItemList[index] = {
      ...newItemList[index],
      title: newTitle,
    };
    setItemList(newItemList);
  };
  //update List depend on location.search
  useEffect(() => {
    const params = queryString.parse(location.search);
    const newItemList = itemList.filter(
      (item) =>
        params.title === "" || JSON.stringify(item.title).includes(params.title)
    );
    setRenderItemList(newItemList);
  }, [location.search]);
  //update render list when itemList change
  useEffect(() => {
    setRenderItemList(itemList);
  }, [itemList]);
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchItem />
              <ItemList items={renderItemList} onRemoveItem={onRemoveItem} />
            </>
          }
        />
        <Route
          path="/create"
          element={<AddItem onAddItem={onAddItem} />}
        ></Route>
        <Route
          path="/edit/:itemId"
          element={<EditItem onUpdateItem={onUpdateItem} />}
        ></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
