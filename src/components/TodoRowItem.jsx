import React from "react";

function TodoRowItem({ todo, deleteTodo }) {
  return (
    <>
      <tr>
        <th scope="row">{todo.no}</th>
        <td>{todo.description}</td>
        <td>{todo.assigned}</td>
        <td>
          <button
            onClick={() => deleteTodo(todo.no)}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default TodoRowItem;
