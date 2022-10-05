import React, { useContext } from "react";
import Context from "../content";

export default function TodoItem({ todo: {title, compleated, id}, index }){
const {toggleList, deleteList} = useContext(Context);
const classList = ['list']
if(compleated) classList.push("done")

    return (
        <li className = {classList.join(" ")}>
            <div>
                <input type="checkbox" checked={compleated} onChange={toggleList.bind(null, id)} />
                <strong>{index+1}</strong>&nbsp;
                { title }
            </div>
            <button onClick={deleteList.bind(null, id)}>X</button>
        </li>
    )
}
