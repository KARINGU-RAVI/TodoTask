import { useContext } from "react";
import { TaskContext } from "../TaskApp/index.js";
import TaskItem from "../TaskItem/index.js";

import "./index.css";
/**
 * Functional component that displays a list of tasks from the TaskContext.
 * @returns JSX element displaying the list of tasks
 */
export default function TaskList() {
  const { taskList } = useContext(TaskContext);

  return (
    <div className="list_container">
        <ul>
      {taskList.map((each) => {
        return (
          <li className="task_items">
            <TaskItem  eachTask={each} />
          </li>
        );
      })}
      </ul>
    </div>
  );
};

