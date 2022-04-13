import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateTasks } from "../redux/todoSlice";
import Task from "../components/Task";
import CreateTask from "../components/CreateTask";

function sortTasks(list) {
  let newList = JSON.parse(JSON.stringify(list));
  newList.sort(function (a, b) {
    var keyA = a.completed,
      keyB = b.completed;
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });
  return newList;
}

function Todo() {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.todo.todos);
  const tasks = sortTasks(storeData);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setTasksRemaining(tasks.filter((task) => !task.completed).length);
  });

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    const newSortedTasks = sortTasks(newTasks);
    dispatch(updateTasks(newSortedTasks));
  };

  const completeTask = (index) => {
    let newTasks = JSON.parse(JSON.stringify(tasks));
    newTasks[index].completed = !tasks[index].completed;
    const newSortedTasks = sortTasks(newTasks);
    dispatch(updateTasks(newSortedTasks));
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    const newSortedTasks = sortTasks(newTasks);
    dispatch(updateTasks(newSortedTasks));
  };

  return (
    <>
      <NavLink to="/">Home</NavLink>
      <div className="todo-container">
        <div className="header">Pending tasks ({tasksRemaining})</div>
        <div className="tasks">
          {tasks.map((task, index) => (
            <Task
              task={task}
              index={index}
              completeTask={completeTask}
              removeTask={removeTask}
              key={index}
            />
          ))}
        </div>
        <div className="create-task">
          <CreateTask addTask={addTask} />
        </div>
      </div>
    </>
  );
}

export default Todo;
