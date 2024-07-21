import React, { useState } from "react";

import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const todosData = [
    { no: 1, description: "Feed puppy", assigned: "Iceu" },
    { no: 2, description: "Get Haircut", assigned: "Aswin" },
    { no: 3, description: "Water plants", assigned: "Ashok" },
    { no: 4, description: "Make dinner", assigned: "Iceu" },
    { no: 5, description: "Charge phone", assigned: "Ashok" },
  ];
  const [todos, setTodos] = useState(todosData);
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const addTodo = (ass, des) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].no + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      no: rowNumber,
      description: des,
      assigned: ass,
    };
    setTodos((todos) => [...todos, newTodo]);
  };

  const deleteTodo = (deleteRowNo) => {
    let filtered = todos.filter((todo) => todo.no !== deleteRowNo);
    setTodos([...filtered]);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable props={todos} deleteTodo={deleteTodo} />
          <button
            className="btn btn-primary"
            onClick={() => setShowAddTodoForm(!showAddTodoForm)}
          >
            {showAddTodoForm ? "Close New Todo" : "New Todo"}
          </button>
          {showAddTodoForm && <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
