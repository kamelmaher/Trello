import { ReactNode, useEffect, useState } from "react"
import { General } from "../types/General"
import { v4 as uuidv4 } from "uuid";
import { appContext } from "./useAppContext";
import { BoardType } from "../types/BoardType";

type AppContextProps = {
    children: ReactNode
}
const AppContextProvider = ({ children }: AppContextProps) => {

    // useEffect(() => {
    //     const tasksData = localStorage.getItem("tasks")
    //     const columnsData = localStorage.getItem("columns")
    //     const boardsData = localStorage.getItem("boards")
    //     const filteredColumnsData = localStorage.getItem("filteredColumns")
    //     const filteredTasksData = localStorage.getItem("filteredTasks")
    //     const active = localStorage.getItem("activeBoard")
    //     if (tasksData) {
    //         const parsedData = JSON.parse(tasksData)
    //         setTasks(parsedData)
    //     }
    //     if (columnsData) {
    //         const parsedData = JSON.parse(columnsData)
    //         setColumns(parsedData)
    //     }
    //     if (boardsData) {
    //         const parsedData = JSON.parse(boardsData)
    //         setBoards(parsedData)
    //     }
    //     if (filteredColumnsData) {
    //         const parsedData = JSON.parse(filteredColumnsData)
    //         setFilteredColumns(parsedData)
    //     }
    //     if (filteredTasksData) {
    //         const parsedData = JSON.parse(filteredTasksData)
    //         setFilteredTasks(parsedData)
    //     }
    //     if (active) {
    //         const parsedActive = JSON.parse(active)
    //         setActiveBoard(parsedActive)
    //     }
    // }, [])

    // const [tasks, setTasks] = useState<General[]>([])
    // const [filteredTasks, setFilteredTasks] = useState<General[]>([])
    // const [filteredColumns, setFilteredColumns] = useState<General[]>([])
    // const [columns, setColumns] = useState<General[]>([])
    // const [boards, setBoards] = useState<BoardType[]>([])
    // const [activeBoard, setActiveBoard] = useState("")

    // const addNewBoard = (boardTitle: string) => {
    //     const newBoard = { id: uuidv4(), title: boardTitle, columns: [], tasks: [] }
    //     const newBoards = [...boards, newBoard]
    //     setBoards(newBoards)
    //     changeBoard(newBoard.id)
    //     localStorage.setItem("boards", JSON.stringify(newBoards))
    // }

    // const changeBoard = (boardId: string) => {
    //     setActiveBoard(boardId)
    //     updateFilteredColumns(columns, boardId)
    //     updateFilteredTasks(tasks, boardId)
    //     localStorage.setItem("activeBoard", JSON.stringify(boardId))
    // }

    // const updateColumns = (newColumns: General[]) => {
    //     setColumns(newColumns)
    //     localStorage.setItem("columns", JSON.stringify(newColumns))
    // }

    // const updateTasks = (newTasks: General[]) => {
    //     setTasks(newTasks)
    //     localStorage.setItem("tasks", JSON.stringify(newTasks))
    // }

    // const updateFilteredColumns = (newColumns: General[], boardId: string) => {
    //     const newFilteredColumns = newColumns.filter(column => column.boardId == boardId)
    //     setFilteredColumns(newFilteredColumns)
    //     localStorage.setItem("filteredColumns", JSON.stringify(newFilteredColumns))
    // }

    // const updateFilteredTasks = (newTasks: General[], boardId: string) => {
    //     const newFilteredTasks = newTasks.filter(task => task.boardId == boardId)
    //     setFilteredTasks(newFilteredTasks)
    //     localStorage.setItem("filteredTasks", JSON.stringify(newFilteredTasks))
    // }

    // const addNewTask = (title: string, type: string) => {
    //     const newTasks = [...tasks, { id: uuidv4(), title, type, boardId: activeBoard }]
    //     updateTasks(newTasks)
    //     updateFilteredTasks(newTasks, activeBoard)
    // }

    // const addNewColumn = (column: string) => {
    //     const newColumns = [...columns, { id: uuidv4(), title: column, type: column, boardId: activeBoard }]
    //     updateColumns(newColumns)
    //     updateFilteredColumns(newColumns, activeBoard)
    // }

    // const deleteTask = (id: string) => {
    //     const newTasks = tasks.filter(task => task.id != id)
    //     updateTasks(newTasks)
    //     updateFilteredTasks(newTasks, activeBoard)
    // }

    // const deleteColumn = (column: General) => {
    //     const newColumns = columns.filter(e => e.id != column.id)
    //     updateColumns(newColumns)
    //     const newTasks = tasks.filter(task => task.type != column.type)
    //     updateTasks(newTasks)
    //     updateFilteredColumns(newColumns, activeBoard)
    //     updateFilteredTasks(newTasks, activeBoard)
    // }

    // const updateColumn = (column: General, newTitle: string) => {
    //     const newColumns = columns.filter(e => e.id != column.id)
    //     updateColumns([...newColumns, { ...column, title: newTitle }])

    //     const newTasks = tasks
    //     newTasks.map(task => {
    //         if (task.type == column.title) task.type = newTitle
    //     })
    //     updateTasks(newTasks)
    //     updateFilteredColumns(newColumns, activeBoard)
    //     updateFilteredTasks(newTasks, activeBoard)
    // }

    // const updateTask = (taskId: string, columnType: string) => {
    //     const task = tasks.find(task => task.id == taskId)!
    //     const newTasks = tasks.filter(task => task.id != taskId)
    //     task.type = columnType
    //     const finalTasks = [...newTasks, task]
    //     updateTasks(finalTasks)
    //     updateFilteredTasks(finalTasks, activeBoard)
    // }

    const initialActiveBoard = { id: "", title: "", tasks: [], columns: [] }
    useEffect(() => {
        const boardsData = localStorage.getItem("boards")
        const activeBoardData = localStorage.getItem("activeBoard")

        if (boardsData) {
            const parsedData = JSON.parse(boardsData)
            setBoards(parsedData)
        }

        if (activeBoardData) {
            const parsedData = JSON.parse(activeBoardData)
            setActiveBoard(parsedData)
        }
    }, [])

    const [boards, setBoards] = useState<BoardType[]>([])
    const [activeBoard, setActiveBoard] = useState<BoardType>(initialActiveBoard)

    const updateBoards = (newBoards: BoardType[]) => {
        setBoards(newBoards)
        localStorage.setItem("boards", JSON.stringify(newBoards))
    }

    const addNewBoard = (boardTitle: string) => {
        const newBoard = { id: uuidv4(), title: boardTitle, columns: [], tasks: [] }
        updateBoards([...boards, newBoard])
        changeBoard(newBoard)
    }

    const changeBoard = (board: BoardType) => {
        setActiveBoard(board)
        localStorage.setItem("activeBoard", JSON.stringify(board))
    }

    const updateBoardTitle = (title: string) => {
        const updatedBoard = {
            ...activeBoard,
            title
        }
        const newBoards = boards.map(board => board.id == activeBoard.id ? updatedBoard : board)
        changeBoard(updatedBoard)
        updateBoards(newBoards)
    }

    const deleteBoard = (boardId: string) => {
        const newBoards = boards.filter(board => board.id != boardId)
        updateBoards(newBoards)
        changeBoard(newBoards.length > 0 ? newBoards[0] : initialActiveBoard)
    }

    const addNewTask = (title: string, type: string) => {
        const updatedBoard = {
            ...activeBoard,
            tasks: [...activeBoard.tasks, { id: uuidv4(), title, type, boardId: activeBoard.id }]
        }
        changeBoard(updatedBoard)
        const newBoards = boards.map(board => board.id == activeBoard.id ? updatedBoard : board)
        updateBoards(newBoards)
    }

    const deleteTask = (taskId: string) => {
        const updatedBoard = {
            ...activeBoard,
            tasks: activeBoard.tasks.filter(task => task.id != taskId)
        }
        const newBoards = boards.map(board => board.id == activeBoard.id ? updatedBoard : board)
        changeBoard(updatedBoard)
        updateBoards(newBoards)
    }

    const addNewColumn = (type: string) => {
        const updatedBoard = {
            ...activeBoard,
            columns: [...activeBoard.columns, { id: uuidv4(), title: type, type, boardId: activeBoard.id }]
        }
        changeBoard(updatedBoard)
        const newBoards = boards.map(e => e.id == activeBoard.id ? updatedBoard : e)
        updateBoards(newBoards)
    }

    const deleteColumn = (column: General) => {
        const updatedBoard = {
            ...activeBoard,
            columns: activeBoard.columns.filter(myColumn => myColumn.id != column.id),
            tasks: activeBoard.tasks.filter(task => task.type != column.type)
        }

        const newBoards = boards.map(board => board.id == activeBoard.id ? updatedBoard : board)
        updateBoards(newBoards)
        changeBoard(updatedBoard)
    }

    const updateTask = (taskId: string, newType: string) => {
        const updatedBoard = {
            ...activeBoard,
            tasks: activeBoard.tasks.map(task => task.id == taskId ? { ...task, type: newType } : task)
        }
        changeBoard(updatedBoard)
        const newBoards = boards.map(board => board.id == activeBoard.id ? updatedBoard : board)
        updateBoards(newBoards)
    }

    const updateColumn = (oldColumn: General, newType: string) => {
        const updatedBoard = {
            ...activeBoard,
            columns: activeBoard.columns.map(column => column.id == oldColumn.id ? { ...column, type: newType, title: newType } : column),
            tasks: activeBoard.tasks.map(task => task.type == oldColumn.title ? { ...task, type: newType } : task)
        }
        changeBoard(updatedBoard)
        const newBoards = boards.map(board => board.id == activeBoard.id ? updatedBoard : board)
        updateBoards(newBoards)
    }

    return (
        <appContext.Provider value={{ boards, activeBoard, addNewBoard, changeBoard, updateBoardTitle, deleteBoard, addNewTask, addNewColumn, updateTask, deleteColumn, deleteTask, updateColumn }}>
            {children}
        </appContext.Provider>
    )
}

export default AppContextProvider
