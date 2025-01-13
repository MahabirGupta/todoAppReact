import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState(""); //initial value of todo is an empty string
  return (
    <div>
      {/* Create a form element */}
      <form action="">
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
