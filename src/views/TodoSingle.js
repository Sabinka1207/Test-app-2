import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateTasks } from "../redux/todoSlice";
import { useState } from "react";

function TodoSingle() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const locationPartials = pathname.split("/");
  const locationLastElement = locationPartials.length - 1;
  const todoId = locationPartials[locationLastElement];
  // const storeData = useSelector((state) => state.todo.todos);
  const getState = useSelector((state) => state.todo.todos);
  let storeData = JSON.parse(JSON.stringify(getState));

  const [currentTodoTitle, setCurrentTodoTitle] = useState(
    storeData[todoId].title
  );
  const [value, setValue] = useState(storeData[todoId].title);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTitle = e.target.editTask.value;
    storeData[todoId].title = newTitle;
    console.log(storeData);
    setCurrentTodoTitle(newTitle);
    dispatch(updateTasks(storeData));
  };

  return (
    <div>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>

      <div className="todo-container">
        <div className="header">{currentTodoTitle}</div>

        <form onSubmit={handleSubmit} className="editTaskForm">
          <input
            type="text"
            className="editingFormInput"
            name="editTask"
            value={value}
            minLength="1"
            placeholder="Please edit task"
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" className="submitEditing">
            Save
          </button>
        </form>

        <div className="todo-goback">
          <NavLink to="/todo" className="goback-link">
            ← Go back
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default TodoSingle;
