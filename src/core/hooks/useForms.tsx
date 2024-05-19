import { useState } from "react";
import { IMyForm } from "../interfaces/form-type";

export const useForms = () => {
  const [tasks, setTasks] = useState<IMyForm[]>([]);
  return { tasks, setTasks };
};
