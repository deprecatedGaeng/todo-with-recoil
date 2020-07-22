import React from "react";
import Todo from "./Todo";
import {RecoilRoot, useRecoilValue } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Todo />
    </RecoilRoot>
  );
}

export default App;