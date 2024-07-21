import React from "react";

function TodoRowItem({ todo }) {
  return (
    <>
      <tr>
        <th scope="row">{todo.no}</th>
        <td>{todo.description}</td>
        <td>{todo.assigned}</td>
      </tr>
    </>
  );
}

export default TodoRowItem;
