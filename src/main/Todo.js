import React from "react";

export default function Todo({newTodo}) {
  if (newTodo.isCompleted) {
    return (
      <div>
        <h3>{newTodo.title}</h3>
        <p>{newTodo.description}</p>
        <p>Date created: {newTodo.dateCreated}</p>
        <p>Completed:
        <input type="checkbox" checked/>
        </p>
        <p>Date completed: {newTodo.dateCompleted}</p>
      </div>
    )    
  } else {
    return (
      <div>
        <h3>{newTodo.title}</h3>
        <p>{newTodo.description}</p>
        <p>Date created: {newTodo.dateCreated}</p>
        <p>Completed:
        <input type="checkbox" value="unchecked"/>
        </p>
      </div>
    )
  }
}