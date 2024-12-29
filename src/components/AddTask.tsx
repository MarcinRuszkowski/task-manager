import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../store/tasksSlice";

interface AddTaskProps {
  addTask: (task: Task) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const AddTask: React.FC<AddTaskProps> = ({
  addTask,
  isOpen,
  onClose,
}) => {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !date.trim()) {
      setError("Wypełnij wszystkie wymagane pola !!!");
      return;
    }

    const newTask: Task = {
      id: uuidv4(),
      title: title,
      desc: desc,
      isCompleted: false,
      date: date,
      isImportant: false,
    };

    addTask(newTask);
    onClose();
  };

  return (
    <form
      className={
        isOpen
          ? "flex flex-col items-center justify-center gap-8 p-5 rounded-3xl bg-secondary min-w-[350px]"
          : "hidden"
      }
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
          onClick={handleSubmit}
          className="bg-primary hover:bg-primary-hover active:bg-primary-active text-white text-xl font-medium px-5 py-1 rounded-3xl"
        >
          Dodaj
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
  );
};
