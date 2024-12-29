import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface Task {
  id: string;
  title: string;
  desc?: string;
  isCompleted: boolean;
  date: string;
  isImportant: boolean;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [
    {
      id: uuidv4(),
      title: "Załatwić sprawę w urzędzie",
      desc: "Zabrać dowód osobisty i akt notarialny",
      isCompleted: true,
      date: "2024-12-12",
      isImportant: true,
    },
    {
      id: uuidv4(),
      title: "Dentysta",
      desc: "Przygotować prześwietlenie zębów",
      isCompleted: false,
      date: "2024-01-12",
      isImportant: false,
    },
    {
      id: uuidv4(),
      title: "Posprzątać auto",
      isCompleted: true,
      date: "2024-12-13",
      isImportant: false,
    },
    {
      id: uuidv4(),
      title: "Weterynarz",
      desc: "Książeczka zdrowia, ostatnie wyniki, nie zapomnieć psa",
      isCompleted: false,
      date: "2022-12-10",
      isImportant: true,
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...action.payload };
      }
    },
    setToggleCompletion: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) task.isCompleted = !task.isCompleted;
    },
    setToggleImportance: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) task.isImportant = !task.isImportant;
    },
  },
});

export const {
  addTask,
  removeTask,
  editTask,
  setToggleCompletion,
  setToggleImportance,
} = tasksSlice.actions;

export default tasksSlice.reducer;
