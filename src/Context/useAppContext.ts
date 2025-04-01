/** @format */

import { createContext, useContext } from "react";
import { BoardType } from "../types/BoardType";
import { General } from "../types/General";
// type AppContextType = {
//   boards: BoardType[];
//   activeBoard: string;
//   tasks: General[];
//   addNewTask: (title: string, type: string) => void;
//   columns: General[];
//   filteredTasks: General[];
//   filteredColumns: General[];
//   addNewColumn: (column: string) => void;
//   deleteColumn: (column: General) => void;
//   deleteTask: (id: string) => void;
//   updateColumn: (column: General, newTitle: string) => void;
//   updateTask: (taskId: string, columnType: string) => void;
//   addNewBoard: (boardTitle: string) => void;
//   changeBoard: (boardId: string) => void;
// };
// export const appContext = createContext<AppContextType>({
//   boards: [],
//   activeBoard: "",
//   tasks: [],
//   columns: [],
//   filteredTasks: [],
//   filteredColumns: [],
//   addNewTask: (task) => console.log(task),
//   addNewColumn: (column) => console.log(column),
//   deleteColumn: (id) => console.log(id),
//   deleteTask: (id) => console.log(id),
//   updateColumn: (column, newTitle) => console.log(column, newTitle),
//   updateTask: (taskId, columnType) => console.log(taskId, columnType),
//   addNewBoard: (boardTitle: string) => console.log(boardTitle),
//   changeBoard: (boardId: string) => console.log(boardId),
// });

type AppContextType = {
  boards: BoardType[];
  activeBoard: BoardType;
  addNewBoard: (title: string) => void;
  changeBoard: (board: BoardType) => void;
  updateBoardTitle: (title: string) => void;
  deleteBoard: (boardId: string) => void;
  addNewTask: (title: string, type: string) => void;
  addNewColumn: (type: string) => void;
  updateTask: (taskId: string, newType: string) => void;
  deleteTask: (taskId: string) => void;
  deleteColumn: (column: General) => void;
  updateColumn: (column: General, newType: string) => void;
};
export const appContext = createContext<AppContextType>({
  boards: [],
  activeBoard: { id: "", tasks: [], columns: [], title: "" },
  addNewBoard: (title) => console.log(title),
  changeBoard: (boardId) => console.log(boardId),
  updateBoardTitle: (title) => console.log(title),
  deleteBoard: (boardId) => console.log(boardId),
  addNewTask: (title, type) => console.log(title, type),
  addNewColumn: (type) => console.log(type),
  updateTask: (taskId, newType) => console.log(taskId, newType),
  deleteTask: (taskId) => console.log(taskId),
  deleteColumn: (column) => console.log(column),
  updateColumn: (column, newType) => console.log(column, newType),
});
export const useAppContext = () => {
  const context = useContext(appContext);
  if (context) return context;
  else throw new Error();
};
