import React, { useContext } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Context from "./content";
import AddTodos from "./components/AddTodos";

function App() {
    const [todos, setTodos] = React.useState([
        { id: 1, title: "By bread", compleated: false },
        { id: 2, title: "By milk", compleated: true },
        { id: 3, title: "By sweets", compleated: false },
    ]);

    function toggleList(id) {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) todo.compleated = !todo.compleated;
                return todo;
            })
        );
    }

    function addTodoItem() {
        setTodos(
            todos.map((todo) => {
                return todo;
            })
        );
    }

    function deleteList(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    function addList() {
        let input = document.querySelector("input");
        let newValue = input.value;
        setTodos((todo) => {
            todo = { id: Math.floor(Math.random() * 100) + 4, title: newValue, compleated: false };
            todos.push(todo);
            return todos;
        });
        TodoList(todos);
    }

    return (
        <Context.Provider value={{ toggleList, deleteList, addList, addTodoItem }}>
            <div className="wrapp">
                <h1 className="title">Todo list</h1>
                <AddTodos />
                {todos.length ? <TodoList todos={todos} /> : <p>List is empty!</p>}
            </div>
        </Context.Provider>
    );
}

export default App;
