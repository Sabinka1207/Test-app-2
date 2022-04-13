import { NavLink } from "react-router-dom";

function Task({ task, index, completeTask, removeTask }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
      <button style={{ background: "red" }} onClick={() => removeTask(index)}>
        x
      </button>
      <button onClick={() => completeTask(index)}>Complete</button>
      <NavLink to={`/todo/${index}`}>
        <button style={{ background: "rgb(165, 255, 158)", color: "black" }}>
          Edit
        </button>
      </NavLink>
    </div>
  );
}
export default Task;
