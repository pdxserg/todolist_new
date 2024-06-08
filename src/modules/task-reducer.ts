import {TasksPropsType} from "../App";
import {v1} from "uuid";

// type RemoveTaskType ={
// 	type:"REMOVE-TASK"
// 	payload:{
// 		todolId: string,
// 		taskId: string
// 	}
// }
type AddTaskType ={
	type:"ADD-TASK"
	payload:{
		todolId: string,
		title: string
	}
}
type AddEmptyArrayType ={
	type:"ADD-EMPTY-ARRAY"
	payload:{
		newId: string,

	}
}
type ChangeTaskStatusType ={
	type:"CHANGE-STATUS-TASK"
	payload:{
		todolId: string,
		id: string,
		isDone: boolean
	}
}
type ChangeTitleTaskType ={
	type:"CHANGE-TITLE-TASK"
	payload:{
		todolId: string,
		taskId: string,
		newTitle: string
	}
}


type ActionsType =RemoveTaskType |AddTaskType |AddEmptyArrayType |ChangeTaskStatusType |ChangeTitleTaskType
export const tasksReducer= (state:TasksPropsType, action:ActionsType ):TasksPropsType=>{
	switch (action.type){
		case"REMOVE-TASK":{
			return {...state,[action.payload.todolId]:
					state[action.payload.todolId].filter(s=> s.id !== action.payload.taskId) }
		}
		case"ADD-TASK":{
			const newTask = {id: v1(), title: action.payload.title, isDone: false}
			return {...state,[action.payload.todolId]:[...state[action.payload.todolId], newTask]}
		}
		case "ADD-EMPTY-ARRAY":{
			return {...state, [action.payload.newId]: []}
		}
		case "CHANGE-STATUS-TASK":{
			return {...state, [action.payload.todolId]:
					state[action.payload.todolId].map(s=>s.id === action.payload.id
						?{...s, isDone: action.payload.isDone} :s) }
		}
		case "CHANGE-TITLE-TASK":{
			return {...state,
			[action.payload.todolId]:state[action.payload.todolId].map(s=>s.id === action.payload.taskId
			?{...s, title:action.payload.newTitle } :s)}
		}
		default: {
			return state
		}
	}
}
type RemoveTaskType= ReturnType<typeof removeTaskAC>
export const removeTaskAC = (todolId: string, taskId: string)=>{
	return{
		type:"REMOVE-TASK",
		payload:{
			todolId,
			taskId
		}
	}as const
}

export const addTaskAC = (todolId: string, title: string):AddTaskType=>{
	return{
		type:"ADD-TASK",
		payload:{
			todolId,
			title
		}
	}as const
}
export const addEmptyArray= (newId: string):AddEmptyArrayType=>{
	return {
		type: "ADD-EMPTY-ARRAY",
		payload:{
			newId
	}
	}as const
}
export const changeTaskStatusAC= (todolId: string, id: string, isDone: boolean):ChangeTaskStatusType=>{
	return {
		type: "CHANGE-STATUS-TASK",
		payload:{
			todolId,
			id,
			isDone
	}
	}as const
}

export const changeTitleTaskAC=(todolId: string, taskId: string, newTitle: string)=>{
	return {
		type: "CHANGE-TITLE-TASK",
		payload:{
			todolId,
			taskId,
			newTitle
		}
	}as const
}