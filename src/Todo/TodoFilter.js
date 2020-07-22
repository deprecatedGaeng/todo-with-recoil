import React from "react";

//STORE
import { useRecoilState } from "recoil";
import { TodoFilterState } from "../atoms";

export default () => {


  const [, setFilter] = useRecoilState(TodoFilterState);
  return (
    <div style={{marginBottom : "10px"}}>
      <button onClick={() => setFilter("ALL")}>ALL</button>
      <button onClick={() => setFilter("TODO")}>TODO</button>
      <button onClick={() => setFilter("DONE")}>DONE</button>
    </div>
  );
}