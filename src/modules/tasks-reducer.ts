import {TasksPropsType} from "../App";
import {v1} from "uuid";
import {AddTodoListType, removeTodoListAction} from "./todolists-reducer";

type ChangeTitleTaskType = {
	type: "CHANGE-TITLE-TASK"
	payload: {
		todolId: string,
		taskId: string,
		newTitle: string
	}
}

export type TaskActionsType = RemoveTaskType
	| AddTaskType
	| ChangeTaskStatusType
	| ChangeTitleTaskType
	| AddTodoListType
	| removeTodoListAction

const initialState: TasksPropsType = {}

export const tasksReducer = (state  = initialState, action: TaskActionsType): TasksPropsType => {

	switch (action.type) {
		case"REMOVE-TASK": {
			return {
				...state, [action.todolId]:
					state[action.todolId].filter(s => s.id !== action.taskId)
			}
		}
		case"ADD-TASK": {
			const newTask = {id: v1(), title: action.title, isDone: false}
			return {...state, [action.todolId]: [newTask, ...state[action.todolId]]}
		}
		case "CHANGE-STATUS-TASK": {
			return {
				...state, [action.todolId]:
					state[action.todolId].map(s => s.id === action.id
						? {...s, isDone: action.isDone} : s)
			}
		}
		case "CHANGE-TITLE-TASK": {
			return {
				...state,
				[action.payload.todolId]: state[action.payload.todolId].map(s => s.id === action.payload.taskId
					? {...s, title: action.payload.newTitle} : s)
			}
		}
		case "ADD-TODOLIST": {

			return {...state, [action.id]: []}

		}
		case "REMOVE-TODOLIST":{
			const copy = {...state}
			 delete copy[action.payload.todolistId]
			return  {...copy}
		}
		default: {
			return state
		}
	}
}
type RemoveTaskType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (todolId: string, taskId: string) => {
	return {
		type: "REMOVE-TASK",
		todolId,
		taskId
	} as const
}


type AddTaskType = ReturnType<typeof addTaskAC>
export const addTaskAC = (todolId: string, title: string) => {
	return {
		type: "ADD-TASK",
		todolId,
		title
	} as const
}
type ChangeTaskStatusType = ReturnType<typeof changeTaskStatusAC>
export const changeTaskStatusAC = (todolId: string, id: string, isDone: boolean) => {
	return {
		type: "CHANGE-STATUS-TASK",
		todolId,
		id,
		isDone
	} as const
}

export const changeTitleTaskAC = (todolId: string, taskId: string, newTitle: string) => {
	return {
		type: "CHANGE-TITLE-TASK",
		payload: {
			todolId,
			taskId,
			newTitle
		}
	} as const
}