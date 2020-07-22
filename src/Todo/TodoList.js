import React from "react";

//STORE
import { useRecoilState , useRecoilValue} from "recoil";
import { TodoState,TodoFilterList } from "../atoms";

export default () => {

  const [todos,setTodos] = useRecoilState(TodoState);
  const list = useRecoilValue(TodoFilterList);
  const handleToggleDone = (id,done) => {
    const reset = todos.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          done 
        }
      }else{
        return todo;
      }
    })
    setTodos(reset)
  }
  return (
    <ul>
      {
        list.map(({todo,done,id},idx) => <li key={idx} style={{display:"flex",alignItems:"center"}}>
          {
            done ?
            <p style={{textDecoration:"line-through"}}>{todo}</p>
            :
            <p>{todo}</p>
          }
          <input type="checkbox" checked={done} onChange={(e) => handleToggleDone(id,e.target.checked)}/>
        </li>)
      }
    </ul>
  );
}