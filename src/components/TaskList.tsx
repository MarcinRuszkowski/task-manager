import React, { useState } from "react";
import { TaskCard } from "./TaskCard";
import { Task } from "../store/tasksSlice";
import { AddTask } from "./AddTask";
import { FaPlus } from "react-icons/fa6";

interface TaskListProps {
  tasks: Task[];
  onToggleImportance: (id: string) => void;
  onToggleCompletion: (id: string) => void;
  addTask: (task: Task) => void;
  removeTask: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleImportance,
  onToggleCompletion,
  addTask,
  removeTask,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            desc={task.desc || ""}
            isCompleted={task.isCompleted}
            isImportant={task.isImportant}
            date={task.date}
            onToggleImportance={onToggleImportance}
            onToggleCompletion={onToggleCompletion}
            removeTask={removeTask}
          />
        ))}
        <div
          onClick={openModal}
          className="grid place-items-center bg-[#b9ca8c] p-5 rounded-3xl max-w-[450px] min-h-[250px] border-4 border-[#809949] border-dashed hover:scale-105"
        >
          <FaPlus className="text-[#809949] text-5xl animate-pulse" />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm  z-50">
          <AddTask
            addTask={addTask}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        </div>
      )}
    </div>
  );
};
