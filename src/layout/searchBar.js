import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { set } from "./searchBar.reducer";

const SearchBox = () => {
  const [localValue, setLocalValue] = useState("");
  // const sValue = useSelector((state) => state.search.value);
  const sValue = useSelector((state) => state.search.value);
  const dispatch = useDispatch();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      dispatch(set(localValue));
    }
  };
  const handleChange = (event) => {
    setLocalValue(event.target.value);
  };

  const value = localValue !== " " ? localValue : sValue;

  return (
    <>
      <Form.Control
        size="lg"
        type="text"
        placeholder="Recherche un Pokemon"
        value={value}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBox;
