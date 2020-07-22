import { atom, selector } from "recoil";

export const TODO_STATE = "TODO_STATE"
export const TODO_FILTER_LIST = "TODO_FILTER_LIST"
export const TODO_FILTER_STATE = "TODO_FILTER"

export const TodoState = atom({
  key : TODO_STATE,
  default : [
    {
      id : 0,
      todo : "Hello Recoil",
      done : false
    }
  ]
})

export const TodoFilterState = atom({
  key : TODO_FILTER_STATE,
  default : "ALL"
})

export const TodoFilterList = selector({
  key: TODO_FILTER_LIST,
  get: ({ get }) => {
    const list = get(TodoState);
    const filter = get(TodoFilterState);
    switch(filter){
      case "ALL":
        return list;
      case "DONE":
        return list.filter(item => item.done === true);
      case "TODO":
        return list.filter(item => item.done !== true);
      default :
        return list;
    }
  },
});