import React, {useState} from "react";

/**
 * Need a dateCreated.
 * Need a boolean to indicate if it's completed.
 * Need a dateCompleted.
 */
export default function CreateTodo({user, dispatch}) {
  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');

  function handleTitle(evt) { setTitle(evt.target.value); }
  function handleDescription(evt) { setDescription(evt.target.value); }

  return (
    <form onSubmit={ e => {e.preventDefault(); dispatch({type: "CREATE_TODO", title, description});}}>
      <h3>Create new todo</h3>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input type="text" name="create-title" id="create-title" value={title} onChange={handleTitle}/>
      </div>

      <div>
        <label htmlFor="create-description">Description:</label>
        <input type="text" name="create-description" id="create-description" value={description} onChange={handleDescription}/>
      </div>

      <input type="submit" value="Create new todo"/>
    </form>
  )

}
