import React from "react";

import TodoRowItem from "./TodoRowItem";

function TodoTable({ props }) {
  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assigned</th>
        </tr>
      </thead>
      <tbody>
        {props.map((data) => (
          <TodoRowItem todo={data} />
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable;
