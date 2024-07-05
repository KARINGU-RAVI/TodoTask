import { useContext } from "react";
import { TaskContext } from "../TaskApp";
import TaskItem from "../TaskItem";

import "./index.css";
/**
 * Functional component that displays a list of tasks from the TaskContext.
 * @returns JSX element displaying the list of tasks
 */
const TaskList = () => {
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

export default TaskList;