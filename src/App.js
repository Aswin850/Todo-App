import React, { useState } from "react";

import TodoTable from "./components/TodoTable";

function App() {
  const todosData = [
    { no: 1, description: "Feed puppy", assigned: "Iceu" },
    { no: 2, description: "Get Haircut", assigned: "Aswin" },
    { no: 3, description: "Water plants", assigned: "Ashok" },
    { no: 4, description: "Make dinner", assigned: "Iceu" },
    { no: 5, description: "Charge phone", assigned: "Ashok" },
  ];
  const [todos, setTodos] = useState(todosData);

  const addTodo = () => {
    if (todos.length > 0) {
      const newTodo = {
        no: todos.length + 1,
        description: "New Todo",
        assigned: "Nithin",
      };
      setTodos((todos) => [...todos, newTodo]);
    }
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable props={todos} />
          <button className="btn btn-primary" onClick={addTodo}>
            Add new todo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
