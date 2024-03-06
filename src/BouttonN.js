import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import store from "./store";
import { useDispatch, useStore, useSelector } from "react-redux";
import { setP } from "./layout/searchBar.reducer";

export const BNext = () => {
  let page = useSelector((state) => state.search.page);
  const dispatch = useDispatch();
  useEffect(() => console.log(page));
  let payload = {
    pageTest: page + 1,
    pageMax: 100,
  };
  return (
    <Button
      className="gap-3"
      page={page}
      onClick={() => dispatch(setP(payload))}
    >
      NEXT
    </Button>
  );
};

//
export const BPrev = () => {
  let page = useSelector((state) => state.search.page);
  const dispatch = useDispatch();
  let pagination = {
    pageTest: page - 1,
    pageMax: 100,
  };
  return (
    <Button
      className="gap-3"
      page={page}
      onClick={() => dispatch(setP(pagination))}
    >
      PREV
    </Button>
  );
};
