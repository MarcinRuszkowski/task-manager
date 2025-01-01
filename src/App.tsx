import { useDispatch, useSelector } from "react-redux";
import { TaskList } from "./components/TaskList";
import { RootState } from "./store/store";
import {
  addTask,
  removeTask,
  setToggleCompletion,
  setToggleImportance,
  Task,
} from "./store/tasksSlice";

const App = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleToggleImportance = (id: string) => {
    dispatch(setToggleImportance(id));
  };

  const handleToggleCompletion = (id: string) => {
    dispatch(setToggleCompletion(id));
  };
  const handleRemoveTask = (id: string) => {
    dispatch(removeTask(id));
  };

  const handleAddTask = (task: Task) => {
    dispatch(addTask(task));
  };

  return (
    <div className="flex justify-center m-5 ">
      <TaskList
        tasks={tasks}
        onToggleImportance={handleToggleImportance}
        onToggleCompletion={handleToggleCompletion}
        addTask={handleAddTask}
        removeTask={handleRemoveTask}
      />
    </div>
  );
};

export default App;
