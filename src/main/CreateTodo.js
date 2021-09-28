import { React } from "react";

/**
 * Need a dateCreated.
 * Need a boolean to indicate if it's completed.
 * Need a dateCompleted.
 */
export default function CreateTodo() {
  return (
    <form onSubmit={ e => e.preventDefault()}>
      <h3>Create new todo</h3>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input type="text" name="create-title" id="create-title"/>
      </div>

      <div>
        <label htmlFor="create-description">Description:</label>
        <input type="text" name="create-description" id="create-description"/>
      </div>

      <input type="submit" value="Create new todo"/>
    </form>
  )
}