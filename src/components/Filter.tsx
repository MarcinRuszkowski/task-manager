import React, { ReactNode } from "react";

interface FilterProps {
  tabs: { name: string; icon: ReactNode }[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export const Filter: React.FC<FilterProps> = ({
  tabs,
  activeFilter,
  setActiveFilter,
}) => {
  return (
    <>
      <nav className="hidden md:flex flex-row justify-around items-center p-3 gap-8 shadow-xl shadow-primary">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveFilter(tab.name)}
            className={`text-xl w-[320px]  py-1 rounded-xl text-white font-medium  hover:bg-primary-hover hover:grow  transition-all duration-300 
            ${activeFilter === tab.name ? "bg-primary-active" : "bg-primary"}
            `}
          >
            {tab.name}
          </button>
        ))}
      </nav>
      <nav className="flex md:hidden flex-row justify-around items-center p-3 gap-3 md:gap-8 shadow-xl shadow-primary">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveFilter(tab.name)}
            className={`text-xl p-2 rounded-xl text-white  transition-all duration-300 
            ${activeFilter === tab.name ? "bg-primary-active" : "bg-primary"}
            `}
          >
            {tab.icon}
          </button>
        ))}
      </nav>
    </>
  );
};
