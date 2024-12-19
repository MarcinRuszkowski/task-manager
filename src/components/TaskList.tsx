import React from "react";
import { TaskCard } from "./TaskCard";
import { FaPlus } from "react-icons/fa6";

const tasks = [
  {
    title: "huj",
    desc: "akosdhuoasuhidoa akosdhuoasuhidoa akosdhuoasuhidoa akosdhuoasuhidoa akosdhuoasuhidoa",
    isComplete: true,
    isImportant: false,
    date: "2020-02-02",
  },
  {
    title: "assadasd",
    desc: "akosdhuoasuhidoa akosdhuoasuhidoa akosdhuoasuhidoa akosdhuoasuhidoa akosdhuoasuhidoa",
    isComplete: false,
    isImportant: false,
    date: "2020-02-02",
  },
  {
    title: "huassasssj",
    desc: "akosdhuoasuhidoa akosdhuoasuhidoa akosdhuoasuhidoa akosdhuoasuhidoa akosdhuoasuhidoa",
    isComplete: true,
    isImportant: true,
    date: "2020-02-02",
  },
  {
    title: "hussssssj",
    desc: "akosdhuoasuhidoa  akosdhuoasuhidoa",
    isComplete: true,
    isImportant: false,
    date: "2020-02-02",
  },
  {
    title: "hussssssj",
    desc: "akosdhuoasuhidoa  akosdhuoasuhidoa",
    isComplete: true,
    isImportant: true,
    date: "2020-02-02",
  },
];

export const TaskList = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {tasks.map((task) => (
        <TaskCard
          title={task.title}
          desc={task.desc}
          isCompleted={task.isComplete}
          isImportant={task.isImportant}
          date={task.date}
        />
      ))}
      <div className="grid place-items-center bg-[#b9ca8c] p-5 rounded-3xl max-w-[450px] min-h-[250px] border-4 border-[#809949] border-dashed hover:scale-105">
        <FaPlus className=" text-[#809949] text-5xl animate-pulse" />
      </div>
    </div>
  );
};
