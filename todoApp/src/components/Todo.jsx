import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState(""); //initial value of todo is an empty string
  // create a state to saved multiple todos
  const [todos, setTodos] = useState([]); //store the todos as a list of array
  function handleSubmit(e) {
    e.preventDefault();
    // spread operator ...todos
    setTodos([...todos, todo]);
    setTodo(""); // to reset the input field
    // setTodos(todos.push);
  }
  return (
    <div>
      {/* Create a form element */}
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button type="submit">Add</button>
      </form>
      {console.log(todos)}
    </div>
  );
}
