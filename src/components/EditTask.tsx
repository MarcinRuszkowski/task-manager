import React, { useState } from "react";
import { Task } from "../store/tasksSlice";

interface EditTaskProps {
  task: Task;
  isOpen: boolean;
  onClose: () => void;
  editTask: (task: Task) => void;
}

export const EditTask: React.FC<EditTaskProps> = ({
  isOpen,
  onClose,
  task,
  editTask,
}) => {
  const [title, setTitle] = useState<string>(task.title);
  const [desc, setDesc] = useState<string>(task.desc || "");
  const [date, setDate] = useState<string>(task.date);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !date.trim()) {
      setError("Wypełnij wszystkie wymagane pola !!!");
      return;
    }

    const updatedTask: Task = {
      ...task,
      title,
      desc,
      date,
    };

    editTask(updatedTask);
    onClose();
  };

  return (
    <div
      className={`${
        isOpen ? "fixed inset-0 flex items-center justify-center" : "hidden"
      } bg-black bg-opacity-50 z-50`}
    >
      <form
        className="flex flex-col items-center justify-center gap-8 p-5 rounded-3xl bg-secondary min-w-[350px]"
        onSubmit={handleSubmit}
      >
        <div className="space-y-5 w-full">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-medium text-lg text-primary">
              Tytuł*:
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="px-3 py-1 rounded-3xl cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-medium text-lg text-primary">
              Opis:
            </label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="px-3 py-1 rounded-3xl cursor-pointer"
            ></textarea>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-medium text-lg text-primary">
              Data*:
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="px-3 py-1 rounded-3xl cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 md:flex-row justify-between w-full">
          <button
            type="submit"
            className="bg-primary hover:bg-primary-hover active:bg-primary-active text-white text-xl font-medium px-5 py-1 rounded-3xl"
          >
            Zapisz
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-400 hover:bg-gray-500 active:bg-gray-600 text-white text-xl font-medium px-5 py-1 rounded-3xl"
          >
            Anuluj
          </button>
        </div>
      </form>
    </div>
  );
};
