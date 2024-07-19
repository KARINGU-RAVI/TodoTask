import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import "./index.css";
import { TaskContext } from "../TaskApp/index.js";
import { useContext, useState } from "react";

/**
 * Functional component that represents a single task item.
 * @param {Object} eachTask - An object containing the task details.
 * @returns JSX element representing the task item.
 */
export default function TaskItem({ eachTask }) {
  const { delelteTask, editTask } = useContext(TaskContext);
  const [status, setStatus] = useState(false);
  const { id, task } = eachTask;
 

  const delelteTaskItem = () => {
    delelteTask(id);
  };

  const statusChange = () => {
    setStatus(!status);
  };

  const editTaskItem = () => {
    editTask(id);
  };
  const val = status ? "taskUnderline" : "";

  return (
    <div className="task_item_cont">
      <div className="checkbox-items">
        <input className="form-check-input checkboxx" onChange={statusChange} type="checkbox" />
        <h1 className={`${val}`}> {task}</h1>
      </div>
      <div>
        <button onClick={delelteTaskItem} className="delete_btn">
          <AiFillDelete className="icon" />
        </button>
        <button onClick={editTaskItem} className="delete_btn">
          <FaEdit className="icon" />
        </button>
      </div>
    </div>
  );
};


