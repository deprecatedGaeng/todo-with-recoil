import React,{useState,useEffect} from "react";

//STORE
import { useRecoilState } from "recoil";
import { TodoState } from "../atoms";

export default () => {

  const [todos,setTodos] = useRecoilState(TodoState);
  const [todoTxt,setTodoTxt] = useState("");
  const handleAddTodo = () => {
    if(todoTxt.trim().length>= 1){
      setTodos([
        ...todos,
        {
          id : new Date().getTime(),
          todo : todoTxt,
          done : false
        }
      ])
      setTodoTxt("");
    }
  }

  return (
    <div>
      <input style={{marginRight : "10px"}}type="text" value={todoTxt} onChange={e => setTodoTxt(e.target.value)} onKeyDown={(e) => e.keyCode === 13 && handleAddTodo()}/>
      <button onClick={handleAddTodo}>ADD</button>
    </div>
  );
}