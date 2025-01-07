import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import {
  addTask,
  editTask,
  removeTask,
  setToggleCompletion,
  setToggleImportance,
  Task,
} from "./store/tasksSlice";
import { TaskList } from "./components/TaskList";
import { Filter } from "./components/Filter";
import { useState } from "react";
import { FaExclamation, FaList } from "react-icons/fa6";
import { GoCheckCircle, GoCheckCircleFill } from "react-icons/go";

const App = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  const tabs = [
    { name: "Wszystkie", icon: <FaList /> },
    { name: "Ukończone", icon: <GoCheckCircleFill /> },
    { name: "Ważne", icon: <FaExclamation /> },
    { name: "Do zrobienia", icon: <GoCheckCircle /> },
  ];

  const [activeFilter, setActiveFilter] = useState(tabs[0].name);

  const handleToggleImportance = (id: string) => {
    dispatch(setToggleImportance(id));
  };

  const handleToggleCompletion = (id: string) => {
    dispatch(setToggleCompletion(id));
  };

  const handleAddTask = (task: Task) => {
    dispatch(addTask(task));
  };

  const handleRemoveTask = (id: string) => {
    dispatch(removeTask(id));
  };

  const handleEditTask = (updatedTask: Task) => {
    dispatch(editTask(updatedTask));
  };

  const filteredTask = tasks.filter((task) => {
    switch (activeFilter) {
      case "Ważne":
        return task.isImportant;
      case "Ukończone":
        return task.isCompleted;
      case "Do zrobienia":
        return !task.isCompleted;
      default:
        return true;
    }
  });

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow justify-center p-5 overflow-y-auto">
        <TaskList
          tasks={filteredTask}
          onToggleImportance={handleToggleImportance}
          onToggleCompletion={handleToggleCompletion}
          addTask={handleAddTask}
          removeTask={handleRemoveTask}
          editTask={handleEditTask}
        />
      </div>
      <div className="sticky bottom-0">
        <Filter
          tabs={tabs}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>
    </div>
  );
};

export default App;
