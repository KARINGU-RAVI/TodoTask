import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import TaskInput from "../TaskInput";
import TaskList from "../TaskList";
import React, { useState,  useEffect } from "react";

export const TaskContext = React.createContext();

/**
 * Functional component for a Task App that manages task list and input data.
 * @returns JSX element for the Task App.
 */
/**
 * Functional component for a Task App that manages task input, task list, and editing tasks.
 * @returns JSX element for the Task App component.
 */
const TaskApp = () => {
  const [inputData, setInputData] = useState("");
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("task_list"))
  );
  const [editId, setEditId] = useState(0);

  const delelteTask = (id) => {
    const filteredData = taskList.filter((each) => each.id !== id);
    setTaskList(filteredData);
  };

  useEffect(() => {
    const data = JSON.stringify(taskList);
    localStorage.setItem("task_list", data);
  }, [taskList]);

  const editTask = (id) => {
    const temp = taskList.find((each) => each.id === id);
    setInputData(temp.task);
    setEditId(id);
  };

  return (
    <TaskContext.Provider
      value={{
        inputData,
        taskList,
        delelteTask,
        editTask,
        setInputData,
        setTaskList,
        setEditId,
        editId,
      }}
    >
      <div className="main_bg_container">
        <h1>To-Do Task</h1>
        <TaskInput />
        <TaskList />
      </div>
    </TaskContext.Provider>
  );
};
export default TaskApp;
