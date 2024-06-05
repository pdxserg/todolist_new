import {TasksPropsType} from "../App";
import {v1} from "uuid";

type RemoveTaskType ={
	type:"REMOVE-TASK"
	payload:{
		todolId: string,
		taskId: string
	}
}
type AddTaskType ={
	type:"ADD-TASK"
	payload:{
		todolId: string,
		title: string
	}
}


type ActionsType =RemoveTaskType |AddTaskType
export const tasksReducer= (state:TasksPropsType, action:ActionsType )=>{
	switch (action.type){
		case"REMOVE-TASK":{
			return {...state,[action.payload.todolId]:
					state[action.payload.todolId].filter(s=> s.id !== action.payload.taskId) }
		}
		case"ADD-TASK":{
			const newTask = {id: v1(), title: action.payload.title, isDone: false}
			return {...state,[action.payload.todolId]:[...state[action.payload.todolId], newTask]}
		}
		default: {
			return state
		}
	}
}

export const removeTaskAC = (todolId: string, taskId: string):RemoveTaskType=>{
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