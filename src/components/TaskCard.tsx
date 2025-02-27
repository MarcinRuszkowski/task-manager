import React, { useState } from "react";
import { FaExclamation } from "react-icons/fa6";
import { MdEdit, MdDelete } from "react-icons/md";
import { GoCheckCircle, GoCheckCircleFill } from "react-icons/go";
import { Task } from "../store/tasksSlice";
import { EditTask } from "./EditTask";

interface TaskCardProps {
  id: string;
  title: string;
  desc: string;
  isCompleted: boolean;
  isImportant: boolean;
  date: string;
  onToggleImportance: (id: string) => void;
  onToggleCompletion: (id: string) => void;
  removeTask: (id: string) => void;
  editTask: (task: Task) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  desc,
  isCompleted,
  isImportant,
  date,
  onToggleImportance,
  onToggleCompletion,
  removeTask,
  editTask,
}) => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleEdit = () => {
    setIsEditOpen(true);
  };

  const closeEditModal = () => {
    setIsEditOpen(false);
  };

  return (
    <div className="flex flex-col justify-between bg-secondary p-5 rounded-3xl max-w-[450px] min-h-[250px] relative">
      <FaExclamation
        onClick={() => onToggleImportance(id)}
        className={`${
          isImportant
            ? "text-red-500 hover:text-red-600"
            : "text-gray-400 hover:text-gray-500"
        }  text-xl absolute top-3 right-3 cursor-pointer`}
      />
      <h1 className="text-3xl font-bold mr-5">{title}</h1>
      <p className="text-gray-700 text-sm min-h-[80px]">{desc}</p>
      <div className="inline-flex justify-between items-center">
        <p className="text-gray-500 text-sm">{date}</p>
        <div className="flex flex-row justify-end gap-8">
          <MdDelete
            onClick={() => removeTask(id)}
            title="usuń"
            className=" rounded-3xl text-2xl text-red-500 hover:text-red-600 cursor-pointer"
          />
          <MdEdit
            onClick={handleEdit}
            title="edytuj"
            className=" rounded-3xl text-2xl text-blue-500 hover:text-blue-600 cursor-pointer"
          />
          {isCompleted ? (
            <GoCheckCircleFill
              onClick={() => onToggleCompletion(id)}
              title="zatwierdź"
              className=" rounded-3xl text-2xl text-green-400 hover:text-green-500 cursor-pointer"
            />
          ) : (
            <GoCheckCircle
              onClick={() => onToggleCompletion(id)}
              title="zatwierdź"
              className=" rounded-3xl text-2xl text-gray-400 hover:text-green-500 cursor-pointer"
            />
          )}
        </div>
      </div>
      {isEditOpen && (
        <EditTask
          isOpen={isEditOpen}
          onClose={closeEditModal}
          task={{ id, title, desc, date, isCompleted, isImportant }}
          editTask={editTask}
        />
      )}
    </div>
  );
};
