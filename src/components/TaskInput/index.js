import { TaskContext } from "../TaskApp/index.js";
import { useContext, } from "react";
import { v4 } from "uuid";
import "./index.css";
import { GrUpdate } from "react-icons/gr";
import { MdOutlineAddTask } from "react-icons/md";

export default function TaskInput()  {
  const { setInputData, setTaskList, editId, taskList, setEditId, inputData } =
    useContext(TaskContext);

/**
 * Functional component that represents a single task item.
 * @param {Object} eachTask - An object containing the task details.
 * @returns JSX element representing the task item.
 */
  // Function to update input data
  const onChangerenderInputDataChanged = (e) => {
    setInputData(e.target.value);
  };

  // Function to submit data
  const dataSubmitted =  (e) => {
    e.preventDefault();
    if (!editId) {
      // If no editId is present, add the new task to the task list
      if (inputData.trim()) {
        const val = { id: v4(), task: inputData };
        setTaskList([...taskList, val]);
        setInputData("");
      } else {
        // If input data is empty, show an alert
        alert("Enter Data");
      }
    }

    if (editId) {
      // If an editId is present, update the task in the task list
      const filtering = taskList.map((each) => {
        return each.id === editId ? { ...each, task: inputData } : each;
      });
      setInputData('')
       setTaskList(filtering);
      setEditId(0);
    }
  };

  // Return the form and its controls
  return (
    <form className="form" onSubmit={dataSubmitted}>
      <div className="input_block">
        <input
          value={inputData}
          placeholder="Enter Task ToDo "
          onChange={onChangerenderInputDataChanged}
          className="form-control input_text"
        />
        <button className="btn btn-warning">

          { editId?  <GrUpdate className="add" /> :  <MdOutlineAddTask  className="add" />}
        </button>
      </div>
    </form>
  );
}


