import React, { useContext } from "react";
import Context from "../content";

const AddTodos = () => {
    const {addList, addTodoItem} = useContext(Context);

    return (
        <div className = "add-button">
            <input type="text" id = "text" placeholder="Type Todos" onMouseLeave={addList}></input>
            <button onClick={addTodoItem}>Add</button>   
       </div>
    )
  }

  export default AddTodos