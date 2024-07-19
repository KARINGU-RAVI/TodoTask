import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import TaskInput from "../TaskInput/index.js";
import TaskList from "../TaskList/index.js";
import React, { useState } from "react";

export const TaskContext = React.createContext();

/**
 * Functional component for a Task App that manages task list and input data.
 * @returns JSX element for the Task App.
 */
/**
 * Functional component for a Task App that manages task input, task list, and editing tasks.
 * @returns JSX element for the Task App component.
 */
export default function TaskApp() {
  const [inputData, setInputData] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editId, setEditId] = useState(0);

  const delelteTask = (id) => {
    const filteredData = taskList.filter((each) => each.id !== id);
    setTaskList(filteredData);
  };
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
}
